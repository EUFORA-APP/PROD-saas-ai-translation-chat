 import { create } from "zustand";
 import { Subscription } from "@/types/Subscription";

 export type LanguagesSupported =
 
  | "ar"
  | "bn"
  | "nl"
  | "en"
  | "es"
  | "de"
  | "fr"
  | "zh"
  | "it"
  | "hi"
  | "pt"
  | "ru"
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
  ar: "Arabic", 
  bn: "Bengali",
  nl: "Dutch",
  en: "English",
  es: "Spanish",
  de: "German",
  fr: "French",
  zh: "Mandarin",
  it: "Italian",
  hi: "Hindi",
  pt: "Portuguese",
  ru: "Russian",
  ja: "Japanese",
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

interface SubscriptionState {
  subscription: Subscription | null | undefined;
  setSubscription: (subscription: Subscription | null) => void;
}

export const useSubscriptionStore = create<SubscriptionState>((set) => ({
  subscription: undefined, //undef 41939
  setSubscription: (subscription: Subscription | null) => set({ subscription }),
}));