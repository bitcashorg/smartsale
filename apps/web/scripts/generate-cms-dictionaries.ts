import {
  getArticleSections,
  getBlogCategoryLandingData,
  getBlogArticleData,
} from "@/services/datocms";

import { AVAILABLE_LANGS } from "@/lib/config";
import { Lang } from "@/dictionaries/locales";
import { generateShortLink } from "@/app/actions/general";
import path from "node:path";
import * as fs from "fs";

async function main() {
  AVAILABLE_LANGS.map(async (lang) => {
    let categories = (await getArticleSections(lang as Lang)).map(
      (section) => section.slug
    );

    categories.map(async (category) => {
      const articles = (
        await getBlogCategoryLandingData(lang as Lang, category)
      ).sections.map((section) => section.articles);

      const slugs = articles.map((art) => art.map((a) => a.slug)).flat();
      slugs.map(async (slug) => {
        await getBlogArticleData(lang as Lang, category, slug);
        await addShortLink({
          category,
          lang: lang as Lang,
          slug,
        });
      });
    });
  });
}

async function addShortLink({
  category,
  lang,
  slug,
}: {
  lang: Lang;
  category: string;
  slug: string;
}) {
  try {
    const dirPath = `./dictionaries/${lang}/blog/${category}`;
    const fileName = `${slug}.json`;
    const filePath = path.resolve(dirPath, fileName);
    const canonicalUrl = `https://bitlauncher.ai/${lang}/${category}/${slug}`;
    const shortLink = (await generateShortLink(canonicalUrl, false)).data
      ?.shortLink;

    const data = await fs.promises.readFile(filePath, "utf-8");
    const json = JSON.parse(data);
    json["shortLink"] = shortLink || "";
    const updatedJson = JSON.stringify(json, null, 2);
    await fs.promises.writeFile(filePath, updatedJson, "utf-8");
    console.log(`Field "shortLink" added successfully.`);
  } catch (e) {
    console.error("Error adding short link:", e);
  }
}

main();