import { Card, CardMedia, CardContent, Typography, Box, IconButton } from "@mui/material";
import { ShoppingCart as ShoppingCartIcon } from "@mui/icons-material";
import { useContext } from "react";
import type { Product } from "../../types/Product.type";
import { CartContext } from "../../context/CartContext";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error("CartContext not found. Make sure your app is wrapped with CartProvider.");
  }

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
        "&:hover .product-image": {
          transform: "scale(1.15)",
        },
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.name}
        className="product-image"
        sx={{ 
          objectFit: "contain",
          transition: "transform 0.3s ease",
        }}
      />

      <CardContent 
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h6" align="center">
         {product.name} 
      </Typography>


        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{ mb: 1 }}
        >
          {product.description}
        </Typography>

        {/* السعر + أيقونة السلة */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: "auto",
          }}
        >
          <Typography variant="subtitle1" fontWeight="bold" sx={{ color: '#afa8a8ff' }}>
             ₪{product.price}
          </Typography>

          {/* الزر الآن يضيف المنتج للكارت بدل Navigate */}
          <IconButton onClick={() => addToCart(product)}>
            <ShoppingCartIcon />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
