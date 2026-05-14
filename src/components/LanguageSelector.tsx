import { useLang } from "../context/LanguageContext";
import type { Language } from "../context/LanguageContext";

interface Props {
  onSelect?: () => void;
  variant?: "compact" | "full";
}

export function LanguageSelector({ onSelect, variant = "compact" }: Props) {
  const { lang, setLang } = useLang();

  return (
    <select
      value={lang}
      onChange={(e) => {
        setLang(e.target.value as Language);
        onSelect?.();
      }}
      className="font-head font-semibold text-gray-500 hover:text-accent transition-colors bg-transparent border-none cursor-pointer outline-none"
      aria-label="Select language"
    >
      {variant === "compact" ? (
        <>
          <option value="fr">🇫🇷 FR</option>
          <option value="en">🇬🇧 EN</option>
        </>
      ) : (
        <>
          <option value="fr">🇫🇷 Français</option>
          <option value="en">🇬🇧 English</option>
        </>
      )}
    </select>
  );
}
