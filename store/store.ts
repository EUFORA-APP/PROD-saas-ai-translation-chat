 import { create } from "zustand";
 import { Subscription } from "@/types/Subscription";

 export type LanguagesSupported =
 
  | "en"
  | "es"
  | "de"
  | "fr"
  | "zh"
  | "it"
  | "hi"
  | "ar"
  | "pt"
  | "bn"
  | "ru"
  | "ja"
  | "pa"
  | "jw"
  | "te"
  | "sv"
  | "nl"
  | "fil"
  | "el"
  | "haw"
  | "id"
  | "la"
  | "no"
  | "doi"
  | "ms"
  | "ht"
  | "pl"
  | "ro"
  | "sl"

export const LanguagesSupportedMap: Record<LanguagesSupported, string> = {
  en: "English",
  es: "Spanish",
  de: "German",
  fr: "French",
  zh: "Mandarin",
  it: "Italian",
  hi: "Hindi",
  ar: "Arabic",
  pt: "Portuguese",
  bn: "Bengali",
  ru: "Russian",
  ja: "Japanese",
  pa: "Punjabi",
  jw: "Javanese",
  te: "Telugu",
  sv: "Swedish",
  nl: "Dutch",
  fil: "Filipino",
  el: "Greek",
  haw: "Hawaiian",
  id: "ndonesian",
  la: "Latin",
  no: "Norwegian",
  doi: "Dogri",
  ms: "Malay",
  ht: "Haitian Creole",
  pl: "Polish",
  ro: "Romanian",
  sl: "Slovenian",
};

interface SubscriptionState {
  subscription: Subscription | null | undefined;
  setSubscription: (subscription: Subscription | null) => void;
}

export const useSubscriptionStore = create<SubscriptionState>((set) => ({
  subscription: null,
  setSubscription: (subscription: Subscription | null) => set({ subscription }),
}));