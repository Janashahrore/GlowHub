import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  Grid,
  Snackbar,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import type { Theme } from "@mui/material/styles";
import { useRef, useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { fetchHairProducts } from "../../api/hairApi";
import type { Product } from "../../api/hairApi";

const HairCarePage = () => {
  const theme = useTheme();

  // Refs
  const oilsRef = useRef<HTMLDivElement | null>(null);
  const serumsRef = useRef<HTMLDivElement | null>(null);
  const creamsRef = useRef<HTMLDivElement | null>(null);
  const masksRef = useRef<HTMLDivElement | null>(null);
  const shampoosRef = useRef<HTMLDivElement | null>(null);
  const toolsRef = useRef<HTMLDivElement | null>(null);

  const [products, setProducts] = useState<Product[]>([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  // Fetch products safely
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchHairProducts();

        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          console.error("Hair API did not return an array");
          setProducts([]);
        }
      } catch (error) {
        console.error("Error fetching hair products:", error);
        setProducts([]);
      }
    };

    fetchData();
  }, []);

  const categories = [
    { name: "Hair Oils", ref: oilsRef },
    { name: "Hair Serums", ref: serumsRef },
    { name: "Hair Creams", ref: creamsRef },
    { name: "Hair Masks", ref: masksRef },
    { name: "Shampoos", ref: shampoosRef },
    { name: "Hair Tools", ref: toolsRef },
  ];

  const normalize = (value: string) =>
    value.toLowerCase().trim();

  return (
    <>
      {/* Hero */}
      <Box sx={{ backgroundColor: theme.palette.background.default, py: 6, mt: 2 }}>
        <Container maxWidth="lg">
          <Box
            component="img"
            src="/images/hair_care.jpg"
            alt="Hair Care"
            sx={{
              width: "100%",
              height: "600px",
              objectFit: "cover",
              borderRadius: "20px",
            }}
          />

          <Stack
            direction="row"
            spacing={2}
            sx={{ mt: 5, flexWrap: "wrap", justifyContent: "center" }}
          >
            {categories.map((cat) => (
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
      <Container maxWidth="lg" sx={{ mt: 5 }}>
        {categories.map((cat) => (
          <Box key={cat.name} ref={cat.ref} sx={{ mt: 10 }}>
            <Typography variant="h5" align="center" sx={{ mb: 3 }}>
              {cat.name}
            </Typography>

            <Grid container spacing={3}>
              {products
                .filter(
                  (p) =>
                    normalize(p.category) === normalize(cat.name)
                )
                .map((p) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={p.id}>
                    <ProductCard product={p} />
                  </Grid>
                ))}
            </Grid>
          </Box>
        ))}
      </Container>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      />
    </>
  );
};

const buttonStyle = (theme: Theme) => ({
  backgroundColor: "#D6A99D",
  color: theme.palette.text.primary,
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