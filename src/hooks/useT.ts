import en from "../translations/en.json";
import fr from "../translations/fr.json";
import { useLang } from "../context/LanguageContext";

const translations = { en, fr };

export function useT() {
  const { lang } = useLang();
  return translations[lang];
}
