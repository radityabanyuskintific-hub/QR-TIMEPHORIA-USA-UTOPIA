export type Retailer = "watsons" | "guardian";

export type SkuVariant = {
  sku: string;
  shadeCode: string;
  shadeName: string;
  retailers: Retailer[];
};

const variant = (sku: string, shadeCode: string, shadeName: string, guardian = true): SkuVariant => ({
  sku,
  shadeCode,
  shadeName,
  retailers: guardian ? ["watsons", "guardian"] : ["watsons"],
});

// Utopia variants retained from the Malaysia SKU master used by the full catalog.
export const skuMaster: Record<string, SkuVariant[]> = {
  "UTOPIA GLOW CUSHION": [
    variant("TQD113000", "00NC", "Bare", false),
    variant("TQD113001", "01NC", "Creme", false),
    variant("TQD113002", "02NC", "Birch", false),
    variant("TQD113003", "03NC", "Fawn", false),
  ],
};

export function shadeLabel({ shadeCode, shadeName }: SkuVariant) {
  return [shadeCode, shadeName].filter(Boolean).join(" ");
}
