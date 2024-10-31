import {
  getArticleSections,
  getBlogCategoryLandingData,
  getBlogArticleData,
} from "@/services/datocms";

import { AVAILABLE_LANGS } from "@/lib/config";
import { Lang } from "@/dictionaries/locales";
import { generateShortLink } from "@/app/actions/general";
import { cookies } from "next/headers";

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

        const canonicalUrl = `https://bitlauncher.ai/${lang}/${category}/${slug}`;
        const shortLink = (await generateShortLink(canonicalUrl)).data
          ?.shortLink;
        const cookieStorage = cookies();

        console.log("SHORT LINK:", shortLink);
      });
    });
  });
}

main();
