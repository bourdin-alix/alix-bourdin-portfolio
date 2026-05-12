import { createContext, useContext, useState } from "react";
import type { JSX } from "react";

export type Language = "en" | "fr";

interface LanguageContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "fr",
  setLang: () => {},
});

export function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const [lang, setLang] = useState<Language>("fr");
  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang(): LanguageContextValue {
  return useContext(LanguageContext);
}
