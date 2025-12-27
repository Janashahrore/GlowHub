// src/api/makeupapi.ts
import type { Product } from "../types/Product.type";

export const fakeProducts: Product[] = [
  {
    id: 1,
    title: "Mascara 1",
    price: 25,
    brand: "music_flower",
    description: "Fake description",
    image: "https://via.placeholder.com/250x220.png?text=Mascara+1",
  },
  {
    id: 2,
    title: "Lipstick 1",
    price: 15,
    brand: "music_flower",
    description: "Fake description",
    image: "https://via.placeholder.com/250x220.png?text=Lipstick+1",
  },
  {
    id: 3,
    title: "Flormar Mascara",
    price: 20,
    brand: "flormar",
    description: "Fake description",
    image: "https://via.placeholder.com/250x220.png?text=Flormar+Mascara",
  },
  {
    id: 4,
    title: "Flormar Lipstick",
    price: 18,
    brand: "flormar",
    description: "Fake description",
    image: "https://via.placeholder.com/250x220.png?text=Flormar+Lipstick",
  },
  {
    id: 5,
    title: "SHEGLAM Mascara",
    price: 22,
    brand: "sheglam",
    description: "Fake description",
    image: "https://via.placeholder.com/250x220.png?text=SHEGLAM+Mascara",
  },
  {
    id: 6,
    title: "Essence Lipstick",
    price: 12,
    brand: "essence",
    description: "Fake description",
    image: "https://via.placeholder.com/250x220.png?text=Essence+Lipstick",
  },
];
