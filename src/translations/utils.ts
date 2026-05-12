import type { Language } from "../context/LanguageContext";

export function localize(
  enVal: string,
  frVal: string | undefined,
  lang: Language,
): string {
  return lang === "fr" && frVal ? frVal : enVal;
}
