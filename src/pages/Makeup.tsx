// src/pages/Makeup.tsx
import React, { useRef } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  IconButton,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCart } from "../hooks/UseCart";
import type { Product } from "../types/Product.type";

/* ================== الماركات ================== */
const brands = [
  { name: "Music Flower", key: "music flower" },
  { name: "Flormar", key: "flormar" },
  { name: "SHEGLAM", key: "sheglam" },
  { name: "Essence", key: "essence" },
];

/* ================== منتجات فيك ================== */
const fakeProducts: Product[] = [
  {
    id: 1,
    title: "Music Flower Lipstick",
    description: "",
    price: 25,
    image: "/images/products/lipstick1.png",
    brand: "music flower",
  },
  {
    id: 2,
    title: "Music Flower Mascara",
    description: "",
    price: 30,
    image: "/images/products/mascara1.png",
    brand: "music flower",
  },
  {
    id: 3,
    title: "Flormar Foundation",
    description: "",
    price: 55,
    image: "/images/products/foundation.png",
    brand: "flormar",
  },
  {
    id: 4,
    title: "Flormar Blush",
    description: "",
    price: 40,
    image: "/images/products/blush.png",
    brand: "flormar",
  },
  {
    id: 5,
    title: "SHEGLAM Lip Gloss",
    description: "",
    price: 35,
    image: "/images/products/gloss.png",
    brand: "sheglam",
  },
  {
    id: 6,
    title: "SHEGLAM Highlighter",
    description: "",
    price: 45,
    image: "/images/products/highlighter.png",
    brand: "sheglam",
  },
  {
    id: 7,
    title: "Essence Mascara",
    description: "",
    price: 22,
    image: "/images/products/mascara2.png",
    brand: "essence",
  },
  {
    id: 8,
    title: "Essence Lip Balm",
    description: "",
    price: 18,
    image: "/images/products/lipbalm.png",
    brand: "essence",
  },
];

const Makeup: React.FC = () => {
  const { addToCart } = useCart();

  /* refs للسكرول */
  const sectionsRef: Record<string, React.RefObject<HTMLDivElement | null>> = {
  "music flower": useRef<HTMLDivElement | null>(null),
  flormar: useRef<HTMLDivElement | null>(null),
  sheglam: useRef<HTMLDivElement | null>(null),
  essence: useRef<HTMLDivElement | null>(null),
};


  const scrollToBrand = (key: string) => {
    sectionsRef[key]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box sx={{ backgroundColor: "#ffeff8", pb: 10 }}>
      {/* ===== Banner ===== */}
      <Box
        component="img"
        src="/images/makeup.jpg"
        alt="Makeup Banner"
        sx={{
          width: "100%",
          height: 500,
          objectFit: "cover",
          mb: 5,
        }}
      />

      {/* ===== Brand Circles ===== */}
      <Box sx={{ display: "flex", justifyContent: "center", gap: 5, py: 4 }}>
        {brands.map((brand) => (
          <Box
            key={brand.key}
            onClick={() => scrollToBrand(brand.key)}
            sx={{
              width: 100,
              height: 100,
              borderRadius: "50%",
              backgroundColor: "#f3c6d3",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              fontWeight: "bold",
              color: "#8b5e5e",
              "&:hover": {
                backgroundColor: "#e89ab0",
              },
            }}
          >
            {brand.name}
          </Box>
        ))}
      </Box>

      {/* ===== Sections ===== */}
      {brands.map((brand) => {
        const productsByBrand = fakeProducts.filter(
          (p) => p.brand === brand.key
        );

        return (
          <Box
            key={brand.key}
            ref={sectionsRef[brand.key]}
            sx={{ px: 6, mb: 10 }}
          >
            <Typography
              variant="h4"
              textAlign="center"
              mb={4}
              color="#d4a744"
            >
              {brand.name}
            </Typography>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: 4,
              }}
            >
              {productsByBrand.map((product) => (
                <Card key={product.id} sx={{ p: 2, borderRadius: 4 }}>
                  <CardMedia
                    component="img"
                    image={product.image}
                    alt={product.title}
                    sx={{ height: 200, objectFit: "contain" }}
                  />
                  <CardContent>
                    <Typography>{product.title}</Typography>
                    <Typography fontWeight="bold">
                      ${product.price}
                    </Typography>
                    <IconButton
                      onClick={() => addToCart(product)}
                      sx={{ border: "1px solid #000", mt: 1 }}
                    >
                      <ShoppingCartIcon />
                    </IconButton>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default Makeup;
