import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import type { SkinProduct } from "../../api/SkinCareAPI";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

interface ProductCardProps {
  product: SkinProduct;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        maxWidth: 250,
        m: "auto",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.name}
        sx={{ objectFit: "cover" }}
      />

      <CardContent>
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
            mt: 1,
          }}
        >
          <Typography variant="subtitle1" fontWeight="bold">
            ${product.price}
          </Typography>

          <IconButton onClick={() => navigate("/cart")}>
            <ShoppingCartIcon />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;