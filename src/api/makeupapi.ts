export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  brand: "Music Flower" | "Flormar" | "Sheglam" | "Essence";
};

export const fetchMakeupProducts = (): Product[] => [
  // ================= MUSIC FLOWER =================
  {
    id: 1,
    name: "Concealer",
    description: "Concealer that gives you excellent coverage",
    price: 35,
    image: "/MakeupImages/music_flower/1.jpg",///HairImages/Hair Oils/Olive Oil-1.jpg
    brand: "Music Flower",
  },
  {
    id: 2,
    name: "Eyeliner",
    description: "Eyeliner for a captivating, waterproof finish",
    price: 15,
    image: "/MakeupImages/music_flower/2.jpg",
    brand: "Music Flower",
  },
  {
    id: 3,
    name: "Mascara",
    description: "Mascara for a glamorous look, waterproof finish",
    price: 15,
    image: "/MakeupImages/music_flower/3.jpg",
    brand: "Music Flower",
  },
  {
    id: 4,
    name: "Mascara",
    description: "Mascara for captivating eyes and a mesmerizing look",
    price: 25,
    image: "/MakeupImages/music_flower/4.jpg",
    brand: "Music Flower",
  },
  {
    id: 5,
    name: "Mascara",
    description: "Mascara with a brush design that lengthens eyelashes",
    price: 20,
    image: "/MakeupImages/music_flower/5.jpg",
    brand: "Music Flower",
  },
  {
    id: 6,
    name: "Stone Powder",
    description: "Stone powder for setting makeup",
    price: 35,
    image: "/MakeupImages/music_flower/6.jpg",
    brand: "Music Flower",
  },
  {
    id: 7,
    name: "Primer",
    description: "Primer prepares the skin for makeup application",
    price: 45,
    image: "/MakeupImages/music_flower/7.jpg",
    brand: "Music Flower",
  },
  {
    id: 8,
    name: "Blush",
    description: "Blush for rosy cheeks",
    price: 20,
    image: "/MakeupImages/music_flower/8.jpg",
    brand: "Music Flower",
  },

  // ================= FLORMAR =================
  {
    id: 101,
    name: "Blush Stick",
    description: "A new blush stick for a natural touch on your cheeks",
    price: 15,
    image: "/MakeupImages/flormar/1.jpg",
    brand: "Flormar",
  },
  {
    id: 102,
    name: "Cream Blush",
    description: "Cream blush to make you shine like a rose",
    price: 35,
    image: "/MakeupImages/flormar/2.jpg",
    brand: "Flormar",
  },
  {
    id: 103,
    name: "Contour Stick",
    description: "Contour stick for easily enhancing makeup",
    price: 25,
    image: "/MakeupImages/flormar/3.jpg",
    brand: "Flormar",
  },
  {
    id: 104,
    name: "Liquid Powder",
    description: "Flormar Liquid Powder, Soft Finish",
    price: 45,
    image: "/MakeupImages/flormar/4.jpg",
    brand: "Flormar",
  },

  // ================= SHEGLAM =================
  {
    id: 201,
    name: "Creamy Blush",
    description: "Creamy blush in a striking brown shade",
    price: 10,
    image: "/MakeupImages/sheglam/1.jpg",
    brand: "Sheglam",
  },
  {
    id: 202,
    name: "Creamy Blush",
    description: "Creamy blush in a shimmery pink shade",
    price: 10,
    image: "/MakeupImages/sheglam/2.jpg",
    brand: "Sheglam",
  },
  {
    id: 203,
    name: "Highlighter",
    description: "Highlighter for a luminous finish that lasts for hours",
    price: 10,
    image: "/MakeupImages/sheglam/3.jpg",
    brand: "Sheglam",
  },

  // ================= ESSENCE =================
  {
    id: 301,
    name: "Lip Gloss",
    description: "Lip gloss in a pink shade for lips like flowers",
    price: 15,
    image: "/MakeupImages/essence/1.jpg",
    brand: "Essence",
  },
  {
    id: 302,
    name: "Lip Gloss",
    description: "Lip gloss in fuchsia for lips like flowers",
    price: 15,
    image: "/MakeupImages/essence/2.jpg",
    brand: "Essence",
  },
  {
    id: 303,
    name: "Lip Gloss",
    description: "Lip gloss in a terracotta shade for lips like flowers",
    price: 15,
    image: "/MakeupImages/essence/3.jpg",
    brand: "Essence",
  },
];
