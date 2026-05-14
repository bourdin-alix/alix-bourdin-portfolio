import { useT } from "../hooks/useT";
import { LanguageSelector } from "./LanguageSelector";

interface NavItem {
  label: string;
  anchor: string;
}

interface Props {
  isOpen: boolean;
  navItems: NavItem[];
  onClose: () => void;
}

export function MobileMenu({ isOpen, navItems, onClose }: Props) {
  const t = useT();

  if (!isOpen) return null;

  return (
    <div className="md:hidden border-t border-gray-100 bg-bg px-6 py-4 flex flex-col gap-3">
      {[...navItems, { label: t.nav.contact, anchor: "contact" }].map(
        ({ label, anchor }) => (
          <a
            key={anchor}
            href={`#${anchor}`}
            className="text-sm font-medium text-gray-600 hover:text-accent transition-colors no-underline"
            onClick={onClose}
          >
            {label}
          </a>
        ),
      )}
      <LanguageSelector variant="full" onSelect={onClose} />
    </div>
  );
}
