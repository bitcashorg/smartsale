import 'server-only';

const dictionaries: { [key: string]: () => Promise<any> } = {
  en: () => import('./en').then((module) => module.default),
};

export const getDictionary = async (locale: string): Promise<any> => {
  if (!dictionaries[locale]) {
    throw new Error(`No dictionary found for locale: ${locale}`);
  }
  return dictionaries[locale]();
};
