import { useLanguage } from "@/lib/i18n";
import { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  const { t, tl } = useLanguage();
  const unitLabel = product.unit ? tl(product.unit) : t("piece");

  return (
    <div className="group flex flex-col border border-border bg-card transition-all duration-300 hover:border-foreground/30 hover:shadow-xl">
      <div className="aspect-square w-full relative overflow-hidden bg-muted">
        {product.mediaType === "video" ? (
          <video 
            className="w-full h-full object-cover object-center"
            poster={product.posterUrl}
            muted 
            loop 
            playsInline
            controls
          >
            <source src={product.mediaUrl} type="video/mp4" />
          </video>
        ) : (
          <img 
            src={product.mediaUrl} 
            alt={tl(product.name)}
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-bold tracking-tight mb-2">{tl(product.name)}</h3>
        <p className="text-sm text-muted-foreground mb-6 flex-grow">{tl(product.description)}</p>
        
        <div className="flex flex-col space-y-3 mb-6">
          <div className="flex justify-between items-center text-sm border-b border-border pb-2">
            <span className="text-muted-foreground">{t("samplePrice")}</span>
            <span className="font-medium">€{product.samplePrice.toFixed(2)} <span className="text-muted-foreground font-normal text-xs">/ {unitLabel}</span></span>
          </div>
          {product.wholesale10plus !== undefined ? (
            <>
              <div className="flex justify-between items-center text-sm border-b border-border pb-2">
                <span className="text-muted-foreground">{t("wholesale5to10")}</span>
                <span className="font-medium">€{product.wholesale5to10.toFixed(2)} <span className="text-muted-foreground font-normal text-xs">/ {unitLabel}</span></span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">{t("wholesale10plus")}</span>
                <span className="font-medium">€{product.wholesale10plus.toFixed(2)} <span className="text-muted-foreground font-normal text-xs">/ {unitLabel}</span></span>
              </div>
            </>
          ) : (
            <div className="flex justify-between items-center text-sm">
              <span className="text-muted-foreground">{t("wholesale5plus")}</span>
              <span className="font-medium">€{product.wholesale5to10.toFixed(2)} <span className="text-muted-foreground font-normal text-xs">/ {unitLabel}</span></span>
            </div>
          )}
        </div>

        <a 
          href="#contact"
          className="w-full inline-flex items-center justify-center h-10 text-sm font-medium border border-border bg-transparent text-foreground hover:bg-muted transition-colors duration-200"
        >
          {t("contactBtn")}
        </a>
      </div>
    </div>
  );
}
