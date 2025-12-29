import { Box, Container, Typography, Button, Stack, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import type { Theme } from "@mui/material/styles";
import { useRef, useState, useEffect, useContext } from "react";
import ProductCard from "./ProductCard";
import { fetchMakeupProducts } from "../../api/makeupapi";
import type { Product } from "../../api/makeupapi";
import { CartContext } from "../../context/CartContext";

const MakeupPage = () => {
  const theme = useTheme();
  const cartContext = useContext(CartContext);

  const musicFlowerRef = useRef<HTMLDivElement | null>(null);
  const flormarRef = useRef<HTMLDivElement | null>(null);
  const sheglamRef = useRef<HTMLDivElement | null>(null);
  const essenceRef = useRef<HTMLDivElement | null>(null);

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = fetchMakeupProducts();
      setProducts(data);
    };
    fetchData();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <Box sx={{ backgroundColor: theme.palette.background.default, py: 6, mt: 2 }}>
        <Container maxWidth="lg">
          <Box
            component="img"
            src="/images/makeup.jpg"
            alt="Makeup"
            sx={{
              width: "100%",
              height: "600px",
              objectFit: "cover",
              borderRadius: "20px",
            }}
          />

          {/* Brand Buttons */}
          <Stack direction="row" gap={2} sx={{ mt: 5, flexWrap: "wrap", justifyContent: "center" }}>
            {[
              { name: "Music Flower", ref: musicFlowerRef },
              { name: "Flormar", ref: flormarRef },
              { name: "Sheglam", ref: sheglamRef },
              { name: "Essence", ref: essenceRef },
            ].map((brand) => (
              <Button
                key={brand.name}
                onClick={() => brand.ref.current?.scrollIntoView({ behavior: "smooth" })}
                sx={buttonStyle(theme)}
              >
                {brand.name}
              </Button>
            ))}
          </Stack>
        </Container>
      </Box>

      {/* Sections */}
      <Container maxWidth="lg" sx={{ fontWeight: 'bold', mt: 5, color: "#bfa338" }}>
        {[
          { name: "Music Flower", ref: musicFlowerRef },
          { name: "Flormar", ref: flormarRef },
          { name: "Sheglam", ref: sheglamRef },
          { name: "Essence", ref: essenceRef },
        ].map((brand) => (
          <Box key={brand.name} ref={brand.ref} sx={{ mt: 10 }}>
            <Typography variant="h5" align="center" sx={{ mb: 3 }}>{brand.name}</Typography>
            <Grid container spacing={3}>
              {products
                .filter((p) => p.brand === brand.name)
                .map((p) => (
                  <Grid item xs={6} sm={4} md={3} key={p.id}>
                    <ProductCard product={p} />
                  </Grid>
                ))}
            </Grid>
          </Box>
        ))}
      </Container>
    </>
  );
};

const buttonStyle = (theme: Theme) => ({
  backgroundColor: "#D6A99D",
  color:"#ffffffff",
  borderRadius: 3,
  px: 5,
  fontWeight: "bold",
  fontSize: "15px",
  padding: "10px 20px",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "#EE6983",
    transform: "scale(1.1)",
  },
});

export default MakeupPage;
