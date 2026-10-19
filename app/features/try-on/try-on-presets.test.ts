import assert from "node:assert/strict";
import test from "node:test";
import { products } from "../catalog/products.ts";
import { skuMaster } from "../../sku-master.ts";
import { tryOnPresets } from "./try-on-presets.ts";

const expected = {
  "UTOPIA GLOW CUSHION": [
    ["TQD113000", "00NC", "Bare"],
    ["TQD113001", "01NC", "Creme"],
    ["TQD113002", "02NC", "Birch"],
    ["TQD113003", "03NC", "Fawn"],
  ],
};

test("catalog and try-on contain only Utopia", () => {
  assert.deepEqual(products.map(({ name }) => name), Object.keys(expected));
  assert.deepEqual(Object.keys(skuMaster), Object.keys(expected));
  assert.deepEqual(Object.keys(tryOnPresets), Object.keys(expected));
  assert.equal(tryOnPresets["UTOPIA GLOW CUSHION"].region, "foundation");
  assert.equal(tryOnPresets["UTOPIA GLOW CUSHION"].finish, "glow");
  assert.equal(tryOnPresets["UTOPIA GLOW CUSHION"].coverage, 0.56);
});

test("catalog and try-on shades match the four Malaysia Utopia SKU variants", () => {
  for (const [productName, rows] of Object.entries(expected)) {
    assert.deepEqual(skuMaster[productName].map(({ sku, shadeCode, shadeName }) => [sku, shadeCode, shadeName]), rows);
    const preset = tryOnPresets[productName];
    assert.deepEqual(preset.shades.map(({ sku, code, name }) => [sku, code, name]), rows);
    assert.ok(preset.shades.every((shade) => /^#[0-9A-F]{6}$/i.test(shade.hex)), productName);
    assert.deepEqual(products.find(({ name }) => name === productName)?.shades, rows.map(([, code, name]) => `${code} ${name}`));
  }
  const variants = Object.values(skuMaster).flat();
  assert.equal(variants.length, 4);
  assert.equal(new Set(variants.map(({ sku }) => sku)).size, 4);
});
