import { Card, CardMedia, CardContent, Typography, Box, IconButton } from "@mui/material";
import { ShoppingCart as ShoppingCartIcon } from "@mui/icons-material";
import { useContext } from "react";
import type { Product } from "../../api/SkinCareAPI";
import { CartContext } from "../../context/CartContext";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const cartContext = useContext(CartContext);

  if (!cartContext) return null;

  const { addToCart } = cartContext;

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        maxWidth: 250,
        borderRadius: "10px",
        m: "auto",
        transition: "all 0.3s ease",
        "&:hover .product-image": { transform: "scale(1.15)" },
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.title || product.name}
        className="product-image"
        sx={{ objectFit: "contain", transition: "transform 0.3s ease" }}
      />

      <CardContent>
        <Typography variant="h6" align="center">
          {product.title || product.name}
        </Typography>

        <Typography variant="body2" color="text.secondary" align="center" sx={{ mb: 1 }}>
          {product.description}
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 1 }}>
          <Typography variant="subtitle1" fontWeight="bold" sx={{ color: '#afa8a8ff'}}>
            ₪{product.price}
          </Typography>

          <IconButton onClick={() => addToCart(product)}>
            <ShoppingCartIcon />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
