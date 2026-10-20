import { shadeLabel, skuMaster } from "../../sku-master.ts";
import type { Product } from "./types";

const productDetails: Omit<Product, "shades">[] = [
  {
    name: "UTOPIA GLOW CUSHION",
    shortName: "UTOPIA GLOW CUSHION",
    category: "face",
    finish: "SKIN FINISH PERFECTED",
    price: "IDR 00.000",
    size: "Base compacta",
    image: "/product-pages/thumbnail-card/thumbnail-card-utopia.jpg",
    description: "Base compacta hidratante que difumina suavemente la apariencia de la piel, ofrece protección solar y deja un acabado luminoso y cómodo.",
    claims: ["FPS 50 PA+++", "Luminosidad e hidratación", "Acabado difuminado"],
    swatchSlides: [
      "/swatches/swatches-face/swatches-utopia/swatches-utopia-1.jpg",
    ],
  },
];

export const products: Product[] = productDetails.map((product) => ({
  ...product,
  shades: skuMaster[product.name].map(shadeLabel),
}));
