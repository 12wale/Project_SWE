export const images = Object.values(
  import.meta.glob("./*.{jpg,jpeg,png,webp}", { eager: true })
).map((img) => img.default);
 