import "server-only";
import { IContent } from "../interface/interface";

const dictionaries: Record<string, () => Promise<IContent>> = {
  "en-US": () =>
    import("./dictionaries/en.json").then((module) => module.default),
  "ko-KR": () =>
    import("./dictionaries/ko.json").then((module) => module.default),
};

export const getDictionary = async (locale: string): Promise<IContent> => {
  const dictionaryLoader = dictionaries[locale];
  if (!dictionaryLoader) {
    throw new Error(`Dictionary for locale ${locale} not found`);
  }
  return dictionaryLoader();
};
