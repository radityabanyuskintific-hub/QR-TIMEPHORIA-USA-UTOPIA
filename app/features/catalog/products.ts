import { shadeLabel, skuMaster } from "../../sku-master.ts";
import type { Product } from "./types";

const productDetails: Omit<Product, "shades">[] = [
  {
    name: "UTOPIA GLOW CUSHION",
    shortName: "UTOPIA GLOW CUSHION",
    category: "face",
    finish: "SKIN FINISH PERFECTED",
    price: "IDR 00.000",
    size: "Cushion compact",
    image: "/product-pages/thumbnail-card/thumbnail-card-utopia.jpg",
    description: "A hydrating glow cushion that creates a soft-blurring base makeup look with sun protection and a comfortable luminous finish.",
    claims: ["SPF50 PA+++", "Hydrating glow", "Soft-blur base"],
    swatchSlides: [
      "/swatches/swatches-face/swatches-utopia/swatches-utopia-1.jpg",
    ],
  },
];

export const products: Product[] = productDetails.map((product) => ({
  ...product,
  shades: skuMaster[product.name].map(shadeLabel),
}));
