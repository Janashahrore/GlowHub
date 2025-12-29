import { Box, Container, Typography, Button, Stack, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import type { Theme } from "@mui/material/styles";
import { useRef, useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { fetchHairProducts } from "../../api/hairApi";
import type { Product } from "../../api/hairApi";

const HairCarePage = () => {
  const theme = useTheme();

  // Refs للأقسام 
  const oilsRef = useRef<HTMLDivElement | null>(null);
  const serumsRef = useRef<HTMLDivElement | null>(null);
  const creamsRef = useRef<HTMLDivElement | null>(null);
  const masksRef = useRef<HTMLDivElement | null>(null);
  const shampoosRef = useRef<HTMLDivElement | null>(null);
  const toolsRef = useRef<HTMLDivElement | null>(null);

  // State للمنتجات
  const [products, setProducts] = useState<Product[]>([]);

  // جلب المنتجات من Fake API 
  useEffect(() => {
    const fetchData = async () => {
      const data = fetchHairProducts();
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
        src="/images/hair_care.jpg"
        alt="Hair Care"
        sx={{
          width: '100%',
          height: '600px',
          borderRadius: '20px', // الحواف دائرية
          objectFit: 'cover',
          mb: 5, // مسافة تحت الصورة
        }}
      />

          {/* Category Buttons */}
          <Stack direction="row" gap={2} sx={{ mt: 5, flexWrap: "wrap", justifyContent: "center" }}>
            {[
              { name: "Hair Oils", ref: oilsRef },
              { name: "Hair Serums", ref: serumsRef },
              { name: "Hair Creams", ref: creamsRef },
              { name: "Hair Masks", ref: masksRef },
              { name: "Shampoos", ref: shampoosRef },
              { name: "Hair Tools", ref: toolsRef },
            ].map((cat) => (
              <Button
                key={cat.name}
                onClick={() =>
                  cat.ref.current?.scrollIntoView({ behavior: "smooth" })
                }
                sx={buttonStyle(theme)}
              >
                {cat.name}
              </Button>
            ))}
          </Stack>
        </Container>
      </Box>

      {/* Sections */}
      <Container maxWidth="lg" sx={{ fontWeight: 'bold', mt: 5, color: "#bfa338" }}>
        {[
          { name: "Hair Oils", ref: oilsRef },
          { name: "Hair Serums", ref: serumsRef },
          { name: "Hair Creams", ref: creamsRef },
          { name: "Hair Masks", ref: masksRef },
          { name: "Shampoos", ref: shampoosRef },
          { name: "Hair Tools", ref: toolsRef },
        ].map((cat) => (
          <Box key={cat.name} ref={cat.ref} sx={{ mt: 10 }}>
            <Typography variant="h5" align="center" sx={{ mb: 3 }}>{cat.name}</Typography>
            <Grid container spacing={3}>
              {products
                .filter((p) => p.category === cat.name)
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

// Button style
const buttonStyle = (theme: Theme) => ({
  backgroundColor: "#d69da0ff",
  color: "#ffffffff",
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

export default HairCarePage;