import { Box, Container, Typography, Button, Stack, Grid} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import type { Theme } from "@mui/material/styles";
import { useRef, useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { fetchSkinProducts } from "../../api/SkinCareAPI";
import type { SkinProduct } from '../../api/SkinCareAPI';

const Skincare = () => {
  const theme = useTheme();

  // Refs للأقسام
  const cleansersRef = useRef<HTMLDivElement | null>(null);
  const moisturizersRef = useRef<HTMLDivElement | null>(null);
  const serumsRef = useRef<HTMLDivElement | null>(null);
  const tonersRef = useRef<HTMLDivElement | null>(null);
  const exfoliatorsRef = useRef<HTMLDivElement | null>(null);
  const masksRef = useRef<HTMLDivElement | null>(null);
  const sunscreensRef = useRef<HTMLDivElement | null>(null);
  const eyeCreamsRef = useRef<HTMLDivElement | null>(null);

  // State للمنتجات و Snackbar
  const [products, setProducts] = useState<SkinProduct[]>([]);

  // جلب المنتجات من Fake API
  useEffect(() => {
  const fetchData = async () => {
    const data = fetchSkinProducts();
    setProducts(data);
  };

  fetchData();
}, []);

  return (
    <>
      {/* Hero Section */}
      <Box sx={{ backgroundColor: theme.palette.background.default, py: 6 , mt: 2}}>
        <Container maxWidth="lg">
          <Box
            component="img"
            src="/images/hair_care.jpg"
            alt="Hair Care"
            sx={{
              width: "100%",
              height: "600px" ,
              objectFit: "cover",
              borderRadius: "20px",
            }}
          />

          {/* Category Buttons */}
          <Stack direction="row" spacing={2} sx={{ mt: 5, flexWrap: "wrap", justifyContent: "center" }}>
            {[
              { name: "Cleansers", ref: cleansersRef },
              { name: "Moisturizers", ref: moisturizersRef },
              { name: "Serums", ref: serumsRef },
              { name: "Toners", ref: tonersRef },
              { name: "Exfoliators", ref: exfoliatorsRef },
              { name: "Masks", ref: masksRef },
              { name: "Sunscreens", ref: sunscreensRef },
              { name: "Eye Creams", ref: eyeCreamsRef },
            ].map((cat) => (
              <Button
                key={cat.name}
                onClick={() => cat.ref.current?.scrollIntoView({ behavior: "smooth" })}
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
        {[
          { name: "Cleansers", ref: cleansersRef },
          { name: "Moisturizers", ref: moisturizersRef },
          { name: "Serums", ref: serumsRef },
          { name: "Toners", ref: tonersRef },
          { name: "Exfoliators", ref: exfoliatorsRef },
          { name: "Masks", ref: masksRef },
          { name: "Sunscreens", ref: sunscreensRef },
          { name: "Eye Creams", ref: eyeCreamsRef },
        ].map((cat) => (
          <Box key={cat.name} ref={cat.ref} sx={{ mt: 10 }}>
            <Typography variant="h5" align="center" sx={{ mb: 3 }}>{cat.name}</Typography>
            <Grid container spacing={3}>
              {products
                .filter((p) => p.category === cat.name)
                .map((p) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={p.id}>
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
  backgroundColor: '#D6A99D',
  color: theme.palette.text.primary,
  borderRadius: 3,
  px: 5,
  fontWeight: 'bold',
  fontSize: '15px',
  padding: '10px 20px',
  transition: "all 0.3s ease",
  '&:hover': {
    backgroundColor: '#EE6983', 
    transform: 'scale(1.1)',
  },
});

export default Skincare;