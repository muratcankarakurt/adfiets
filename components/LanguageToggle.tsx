"use client";

import { useEffect } from "react";
import { Lang } from "@/lib/translations";

const STORAGE_KEY = "adfiets-lang";

function persistLang(lang: Lang) {
  localStorage.setItem(STORAGE_KEY, lang);
  document.cookie = `${STORAGE_KEY}=${lang}; path=/; max-age=31536000; samesite=lax`;
}

interface LanguageToggleProps {
  lang: Lang;
  onChange: (lang: Lang) => void;
}

export default function LanguageToggle({ lang, onChange }: LanguageToggleProps) {
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (stored === "en" || stored === "nl") {
      onChange(stored);
      persistLang(stored);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleSelect(next: Lang) {
    onChange(next);
    persistLang(next);
  }

  const optionClass = (active: boolean) =>
    `rounded-full px-2.5 py-1 transition ${
      active ? "bg-brand text-white" : "text-foreground/60 hover:text-brand"
    }`;

  return (
    <div
      className="flex rounded-full border border-foreground/15 bg-white p-0.5 text-xs font-semibold"
      role="group"
      aria-label="Select language"
    >
      <button type="button" className={optionClass(lang === "nl")} onClick={() => handleSelect("nl")}>
        NL
      </button>
      <button type="button" className={optionClass(lang === "en")} onClick={() => handleSelect("en")}>
        EN
      </button>
    </div>
  );
}
