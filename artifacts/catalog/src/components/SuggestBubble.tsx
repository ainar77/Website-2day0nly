import { useState } from "react";
import { useLanguage } from "@/lib/i18n";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function SuggestBubble() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const handleOpen = () => {
    setHasInteracted(true);
    setOpen(true);
  };

  const handleContactUs = () => {
    setOpen(false);
    setTimeout(() => {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 150);
  };

  return (
    <>
      <div className="fixed top-20 right-4 md:top-24 md:right-8 z-40">
        <button
          type="button"
          onClick={handleOpen}
          className={`${hasInteracted ? "" : "animate-suggest-soft-glow"} relative inline-flex items-center gap-2 rounded-full bg-neutral-800 text-white border border-neutral-900 px-4 py-2 md:px-5 md:py-2.5 text-sm md:text-base font-medium shadow-md shadow-black/20 hover:bg-black hover:text-white hover:border-black hover:shadow-lg transition-colors duration-200`}
          aria-label={t("suggestBtn")}
        >
          <span className="inline-block h-2 w-2 rounded-full bg-current opacity-70" aria-hidden />
          {t("suggestBtn")}
        </button>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-neutral-900 text-neutral-100 border border-neutral-700 rounded-2xl shadow-2xl max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-white text-xl tracking-tight">
              {t("suggestBtn")}
            </DialogTitle>
            <DialogDescription className="text-neutral-300 leading-relaxed pt-2 text-base whitespace-pre-line">
              {t("requestMessage")}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="mt-4 gap-2 sm:gap-2">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center h-10 px-5 rounded-full text-sm font-medium border border-neutral-600 bg-transparent text-neutral-200 hover:bg-neutral-800 hover:border-neutral-400 transition-colors duration-200"
            >
              {t("modalClose")}
            </button>
            <button
              type="button"
              onClick={handleContactUs}
              className="inline-flex items-center justify-center h-10 px-5 rounded-full text-sm font-medium bg-white text-neutral-900 hover:bg-neutral-200 transition-colors duration-200"
            >
              {t("modalContactUs")}
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
