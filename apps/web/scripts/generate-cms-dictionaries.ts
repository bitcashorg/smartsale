import {
  getArticleSections,
  getBlogCategoryLandingData,
  getBlogArticleData,
  BlogArticleRecord,
} from "@/services/datocms";

import { AVAILABLE_LANGS } from "@/lib/config";
import { Lang } from "@/dictionaries/locales";
import { generateShortLink } from "@/app/actions/general";
import path from "node:path";
import * as fs from "fs";

async function getArticleCategories(lang: Lang) {
  const categoriesData = await getArticleSections(lang as Lang);
  return categoriesData.map((section) => section.slug);
}

async function addShortLinksForArticles(lang: Lang, category: string, slugs: string[]) {
  const shortLinkPromises = slugs.map(async (slug) => {
    await getBlogArticleData(lang as Lang, category, slug);
    console.log(`${lang}/${category}/${slug}`)
    const shortLink = await generateShortLink(`https://bitlauncher.ai/${lang}/${category}/${slug}`, false);
    return { category, lang, slug, shortLink: shortLink.data?.shortLink || "" };
  });
  await Promise.all(shortLinkPromises);
}

async function main() {
  const categories = await Promise.all(AVAILABLE_LANGS.map(lang => getArticleCategories(lang as Lang)));
  let langIndex = 0;

  for (const lang of AVAILABLE_LANGS) {
    for (const category of categories[langIndex]) { // assuming categories is a 2D array
      const articles = (await getBlogCategoryLandingData(lang as Lang, category)).sections.map((section) => section.articles);
      const slugs = articles.map((art) => art.map((a) => a.slug)).flat();
      await addShortLinksForArticles(lang as Lang, category, slugs);
    }
    langIndex++;
  }

  // AVAILABLE_LANGS.map(async (lang) => {
  //   let categories = (await getArticleSections(lang as Lang)).map(
  //     (section) => section.slug
  //   );

  //   console.log("CATEGORIES: 2", categories)

  //   categories.map(async (category) => {
  //     const articles = (
  //       await getBlogCategoryLandingData(lang as Lang, category)
  //     ).sections.map((section) => section.articles);

  //     const slugs = articles.map((art) => art.map((a) => a.slug)).flat();
  //     slugs.map(async (slug) => {
  //       await getBlogArticleData(lang as Lang, category, slug);
  //       await addShortLink({
  //         category,
  //         lang: lang as Lang,
  //         slug,
  //       });
  //     });
  //   });
  // });
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