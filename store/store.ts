 import { create } from "zustand";
 import { Subscription } from "@/types/Subscription";

 export type LanguagesSupported =
  | "en"
  | "it"
  | "es"
  | "de"
  | "ru"
  | "ar"
  | "bn"
  | "nl"
  | "fr"
  | "zh"
  | "hi"
  | "pt"
  | "ja"
  | "pa"
  | "jw"
  | "te"
  | "sv"
  | "fil"
  | "el"
  | "haw"
  | "id"
  | "la"
  | "no"
  | "ms"
  | "ht"
  | "pl"
  | "ro"
  | "sl"

export const LanguagesSupportedMap: Record<LanguagesSupported, string> = {
  
  en: "English",
  it: "Italian",  
  es: "Spanish",
  de: "German",
  ru: "Russian",
  fr: "French",
  ja: "Japanese",
  nl: "Dutch",
  ar: "Arabic", 
  bn: "Bengali",
  zh: "Mandarin",
  hi: "Hindi",
  pt: "Portuguese",
  pa: "Punjabi",
  jw: "Javanese",
  te: "Telugu",
  sv: "Swedish",
  fil: "Filipino",
  el: "Greek",
  haw: "Hawaiian",
  id: "indonesian",
  la: "Latin",
  no: "Norwegian",
  ms: "Malay",
  ht: "Haitian Creole",
  pl: "Polish",
  ro: "Romanian",
  sl: "Slovenian",
};

const LANGUAGES_IN_FREE = 2;

interface LanguageState {
  language: LanguagesSupported;
  setLanguage: (language: LanguagesSupported) => void;
  getLanguages: (isPro: boolean) => LanguagesSupported[];
  getNotSupportedLanguages: (isPro: boolean) => LanguagesSupported[];
}

export const useLanguageStore = create<LanguageState>()((set, get) => ({
  language: "en",
  setLanguage: (language: LanguagesSupported) => set({ language }),
  getLanguages: (isPro: boolean) => {
    // If The User Is Pro, Return All Supported Languages
    if (isPro)
      return Object.keys(LanguagesSupportedMap) as LanguagesSupported[];

      // If not pro, return only the first two languages i.e. spanish and english
      return Object.keys(LanguagesSupportedMap). slice(
        0,
        LANGUAGES_IN_FREE
      ) as LanguagesSupported[];
  },
  getNotSupportedLanguages: (isPro: boolean) => {
    if (isPro) return []; // No unsupported languages for "pro" users

    return Object.keys(LanguagesSupportedMap).slice(
      LANGUAGES_IN_FREE
    ) as LanguagesSupported[]; //Excluding the first two supported languages
  },
}));

interface SubscriptionState {
  subscription: Subscription | null | undefined;
  setSubscription: (subscription: Subscription | null) => void;
}

export const useSubscriptionStore = create<SubscriptionState>((set) => ({
  subscription: undefined, //undef 41939
  setSubscription: (subscription: Subscription | null) => set({ subscription }),
}));