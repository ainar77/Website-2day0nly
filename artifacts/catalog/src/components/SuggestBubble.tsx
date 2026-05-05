import { useState } from "react";
import { useLanguage } from "@/lib/i18n";
import { ContactModal } from "./ContactModal";

export function SuggestBubble() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const handleOpen = () => {
    setHasInteracted(true);
    setOpen(true);
  };

  return (
    <>
      <div className="fixed top-20 right-4 md:top-24 md:right-8 z-40">
        <button
          type="button"
          onClick={handleOpen}
          className={`${hasInteracted ? "" : "animate-suggest-soft-glow"} relative inline-flex items-center gap-2 rounded-full bg-[#2b2b2b] text-white border border-neutral-600 px-4 py-2 md:px-5 md:py-2.5 text-sm md:text-base font-medium shadow-md shadow-black/20 hover:bg-black hover:text-white hover:border-neutral-700 hover:shadow-lg transition-colors duration-200`}
          aria-label={t("suggestBtn")}
        >
          <span className="inline-block h-2 w-2 rounded-full bg-current opacity-70" aria-hidden />
          {t("suggestBtn")}
        </button>
      </div>

      <ContactModal
        open={open}
        onClose={() => setOpen(false)}
        title={t("suggestBtn")}
        description={t("requestMessage")}
      />
    </>
  );
}
