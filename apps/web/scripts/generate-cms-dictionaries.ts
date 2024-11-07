import {
  getArticleSections,
  getBlogCategoryLandingData,
  getBlogArticleData,
} from "@/services/datocms";

import { AVAILABLE_LANGS } from "@/lib/config";
import { Lang } from "@/dictionaries/locales";
import { generateShortLink } from "@/app/actions/general";

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
}

main();