export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category:| "Cleansers"| "Moisturizers"| "Serums"| "Toners"| "Exfoliators"| "Masks"| "Sunscreens"| "Eye Creams";}

export const fetchSkinProducts = (): Product[] => [
  // ================= CLEANSERS =================
  {
    id: 1,
    name: "Morning Gel Cleanser",
    description:
      "A gentle daily gel cleanser with excellent moisture,Low pH Good , suitable for most skin types, including sensitive, combination, and oily skin. It cleanses without drying out the skin.",
    price: 40,
    image: "/SkinImages/Cleansers/Morning Gel Cleanser.webp",
    category: "Cleansers",
  },
  {
    id: 2,
    name: "Hydrium Moisturizing Cleanser",
    description:
      "A deeply moisturizing cleanser for dry or sensitive skin, as it contains hyaluronic acid to boost hydration.",
    price: 40,
    image: "/SkinImages/Cleansers/Hydrium Moisturizing Cleanser.jpg",
    category: "Cleansers",
  },
  {
    id: 3,
    name: "Calming Foam Cleanser",
    description:
      "A cleanser suitable for irritated or sensitive skin with redness or inflammation, to soothe and reduce oiliness and breakouts.",
    price: 40,
    image: "/SkinImages/Cleansers/Calming Foam Cleanser.jpg",
    category: "Cleansers",
  },
  {
    id: 4,
    name: "Advanced Gel Cleanser",
    description:
      "A cleanser with snail mucin extract to moisturize and soften the skin while cleansing—beneficial for dry or tired skin.",
    price: 40,
    image: "/SkinImages/Cleansers/Advanced Gel Cleanser.jpg",
    category: "Cleansers",
  },
  {
    id: 5,
    name: "Pure Fit Cica Cleanser / Creamy Foam / Cleansing Oil",
    description:
      "The Cica (Centella) line is for very sensitive or easily irritated skin, suitable for skin that reacts quickly.",
    price: 150,
    image: "/SkinImages/Cleansers/The Cica (Centella).jpg",
    category: "Cleansers",
  },

  // ================= MOISTURIZERS =================
  {
    id: 6,
    name: "Dove Beauty Cream",
    description:
      "Deeply moisturizes the skin (face + hands + body), leaving it soft and supple.",
    price: 30,
    image: "/SkinImages/Moisturizers/Dove Beauty Cream.jpeg",
    category: "Moisturizers",
  },
  {
    id: 7,
    name: "Dove Intensive Nourishing Cream",
    description: "Intensive and deep hydration for very dry areas.",
    price: 30,
    image: "/SkinImages/Moisturizers/Dove Intensive Nourishing Cream.jpg",
    category: "Moisturizers",
  },
  {
    id: 8,
    name: "Dove Body Love Beauty Cream",
    description:
      "A lightweight, all-purpose moisturizer for face and body, suitable for daily use.",
    price: 35,
    image: "/SkinImages/Moisturizers/Dove Body Love Beauty Cream.webp",
    category: "Moisturizers",
  },

  // ================= SERUMS =================
  {
    id: 9,
    name: "Advanced Snail Serums",
    description:
      "Deeply hydrates, helps repair damage, improves skin elasticity, and reduces signs of fatigue and fine lines.",
    price: 90,
    image: "/SkinImages/Serums/Advanced Snail Serums.webp",
    category: "Serums",
  },
  {
    id: 10,
    name: "The 6 Peptide Skin Boosting Serum",
    description:
      "Helps boost skin elasticity, reduce wrinkles, improve texture, and minimize the appearance of pores.",
    price: 90,
    image: "/SkinImages/Serums/The 6 Peptide Skin Boosting Serum.jpg",
    category: "Serums",
  },
  {
    id: 11,
    name: "Hyaluronic Acid Serum",
    description: "Deeply hydrates and plumps fine lines caused by dryness.",
    price: 80,
    image: "/SkinImages/Serums/Hyaluronic Acid Serum.jpg",
    category: "Serums",
  },
  {
    id: 12,
    name: "Vitamin C Serum",
    description:
      "Vitamin C serum helps brighten and even skin tone, and fight pigmentation and dark spots.",
    price: 75,
    image: "/SkinImages/Serums/Vitamin C Serum.jpg",
    category: "Serums",
  },

  // ================= TONERS =================
  {
    id: 13,
    name: "Clarifying Treatment Toner",
    description:
      "A gentle exfoliating toner that gently cleanses the skin's surface and deeply cleanses pores to remove dead skin cells, refine pores, and regulate oil",
    price: 60,
    image: "/SkinImages/Toner/Clarifying Treatment Toner.jpg",
    category: "Toners",
  },
  {
    id: 14,
    name: "Centella Water Alcohol-Free Toner",
    description:
      "A hydrating and soothing toner for sensitive or irritated skin",
    price: 60,
    image: "/SkinImages/Toner/Centella Water Alcohol-Free Toner.jpg",
    category: "Toners",
  },
  {
    id: 15,
    name: "Pure Fit Cica Alcohol-Free Toner",
    description: "A very soothing toner for sensitive and irritated skin",
    price: 60,
    image: "/SkinImages/Toner/Pure Fit Cica Alcohol-Free Toner.jpg",
    category: "Toners",
  },
  {
    id: 16,
    name: "AC Toner",
    description:
      "AC Collection Calming Liquid , Helps soothe inflammation and regulate oil before moisturizer",
    price: 80,
    image: "/SkinImages/Toner/AC Toner.jpg",
    category: "Toners",
  },
  {
    id: 17,
    name: "Niacinamide Toner",
    description: "To regulate oil, smooth skin, and refine pores",
    price: 80,
    image: "/SkinImages/Toner/Niacinamide Toner.webp",
    category: "Toners",
  },

  // ================= EXFOLIATORS =================
  {
    id: 18,
    name: "One Step Original Clear Pad",
    description:
      "Removes dead skin cells, dirt, excess oil, and unclogs pores. Reduces blackheads, evens skin tone, and improves texture",
    price: 85,
    image: "/SkinImages/Exfoliators/One Step Original Clear Pad.jpg",
    category: "Exfoliators",
  },
  {
    id: 19,
    name: "BHA Blackhead Power Liquid",
    description:
      "An exfoliating liquid (BHA) that focuses on deep pore cleansing and reducing oil and blackheads",
    price: 85,
    image: "/SkinImages/Exfoliators/BHA Blackhead Power Liquid.jpg",
    category: "Exfoliators",
  },
  {
    id: 20,
    name: "AHA 7 Whitehead Power Liquid",
    description:
      "An exfoliating liquid (AHA) that helps exfoliate the skin's surface and improve the appearance of whiteheads and dull skin",
    price: 85,
    image: "/SkinImages/Exfoliators/AHA 7 Whitehead Power Liquid.jpg",
    category: "Exfoliators",
  },
  {
    id: 21,
    name: "Two in One Poreless Power Liquid (Exfoliating)",
    description:
      "A light liquid with exfoliating properties. A gentle formula that combines a mild exfoliator to help unclog pores and smooth skin without a harsh feeling",
    price: 90,
    image:"/SkinImages/Exfoliators/Two in One Poreless Power Liquid (Exfoliating).jpg",
    category: "Exfoliators",
  },

  // ================= MASKS =================
  {
    id: 22,
    name: "Sheet Mask with Snail Mucin Extract",
    description:
      "Helps deeply hydrate, rejuvenate the skin, reduce fine lines, and brighten the complexion",
    price: 15,
    image: "/SkinImages/Mask/Sheet Mask with Snail Mucin Extract.jpg",
    category: "Masks",
  },
  {
    id: 23,
    name: "Ceramide Soft Mask",
    description:
      "Helps strengthen the skin barrier, lock in moisture, deeply hydrate, and leave skin feeling soft and plump",
    price: 15,
    image: "/SkinImages/Mask/Ceramide Soft Mask.jpg",
    category: "Masks",
  },
  {
    id: 24,
    name: "Pink Charcoal Pore Refining Mask",
    description:
      "Helps deeply cleanse pores, remove impurities, and reduce excess oil",
    price: 28,
    image: "/SkinImages/Mask/Pink Charcoal Pore Refining Mask.jpg",
    category: "Masks",
  },
  {
    id: 25,
    name: "Propolis & Royal Jelly Sheet Mask",
    description:
      "Helps deeply hydrate, nourish the skin, and improve its healthy texture",
    price: 17,
    image: "/SkinImages/Mask/Propolis & Royal Jelly Sheet Mask.jpg",
    category: "Masks",
  },
  {
    id: 26,
    name: "Honey Propolis Overnight Mask",
    description:
      "An anti-inflammatory overnight mask that helps soothe the skin, deeply hydrate, and accelerate healing of irritations",
    price: 35,
    image: "/SkinImages/Mask/Honey Propolis Overnight Mask.jpg",
    category: "Masks",
  },
  {
    id: 27,
    name: "Nourishing Rice Overnight Mask",
    description:
      "Helps to subtly brighten and even skin tone + beautifully moisturized upon waking",
    price: 35,
    image: "/SkinImages/Mask/Nourishing Rice Overnight Mask.jpg",
    category: "Masks",
  },

  // ================= SUNSCREENS =================
  {
    id: 28,
    name: "Ultra-Light Invisible Sunscreen SPF50 PA+++",
    description:
      "An ultra-light sunscreen that provides strong protection against UVA and UVB rays",
    price: 35,
    image:
      "/SkinImages/Sunscreen/Ultra-Light Invisible Sunscreen SPF50 PA+++.jpg",
    category: "Sunscreens",
  },
  {
    id: 29,
    name: "Aloe Soothing Sun Cream SPF50+ PA+++",
    description:
      "An aloe vera sunscreen that moisturizes and soothes the skin, providing light hydration and reducing redness",
    price: 35,
    image:
      "/SkinImages/Sunscreen/Aloe Soothing Sun Cream SPF50+ PA+++.jpg",
    category: "Sunscreens",
  },

  // ================= EYE CREAMS =================
  {
    id: 30,
    name: "Eye Repair Cream",
    description:
      "Reduces dark circles and puffiness and moisturizes under the eyes",
    price: 50,
    image: "/SkinImages/Eye Creams/CeraVe Eye Repair Cream.jpg",
    category: "Eye Creams",
  },
  {
    id: 31,
    name: "Skin Renewing Eye Cream",
    description:
      "Moisturizes, treats wrinkles and fine lines, and reduces puffiness",
    price: 75,
    image:
      "/SkinImages/Eye Creams/CeraVe Skin Renewing Eye Cream.jpg",
    category: "Eye Creams",
  },
];