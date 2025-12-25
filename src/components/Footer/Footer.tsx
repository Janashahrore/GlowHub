import React from "react";
import { Box, Typography, Link } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#d7bf97bd", // لون بني فاتح (بيج)
        color: "#5a4a42",
        py: 6,
        px: { xs: 3, md: 6 },
        mt: 5,
      }}
    >
      {/* ===== Top Section ===== */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="flex-start"
        flexWrap="wrap"
        mb={5}
      >
        {/* Logo + léora (Left) */}
        <Box>
          <Typography variant="h5" fontWeight="bold" color="#E06B80">
            léora
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            Beauty that speaks for you
          </Typography>
        </Box>

        {/* Middle Section: About Us + Quick Links + Payment Methods */}
        <Box
          display="flex"
          justifyContent="center"
          gap={12} // المسافات بينهم
          flexWrap="wrap"
        >
         {/* About Us */}
<Box textAlign="center" sx={{ maxWidth: "220px" }}> {/* حجم أصغر */}
  <Typography variant="h6" fontWeight="bold" color="#E06B80" gutterBottom>
    About Us
  </Typography>
  <Typography
    variant="body2"
    sx={{
      whiteSpace: "pre-line",
      lineHeight: 1.3, // مسافة بين السطور مرتبة
      textAlign: "justify", // يحافظ على الشكل المنتظم للنص
    }}
  >
    Léora is a cosmetics destination dedicated to enhancing your natural beauty. We offer a curated selection of makeup, skincare, and haircare products designed to suit every style and skin type.
  </Typography>
</Box>


          {/* Quick Links */}
          <Box textAlign="center">
            <Typography variant="h6" fontWeight="bold" color="#E06B80" gutterBottom>
              Quick Links
            </Typography>
            <Link
              href="/"
              display="block"
              sx={{ color: "#5a4a42", textDecoration: "none", "&:hover": { color: "#EE6983" } }}
            >
              Home
            </Link>
            <Link
              href="/haircare"
              display="block"
              sx={{ color: "#5a4a42", textDecoration: "none", "&:hover": { color: "#EE6983" } }}
            >
              Hair Care
            </Link>
            <Link
              href="/skincare"
              display="block"
              sx={{ color: "#5a4a42", textDecoration: "none", "&:hover": { color: "#EE6983" } }}
            >
              Skin Care
            </Link>
            <Link
              href="/makeup"
              display="block"
              sx={{ color: "#5a4a42", textDecoration: "none", "&:hover": { color: "#EE6983" } }}
            >
              Makeup
            </Link>
          </Box>

          {/* Payment Methods */}
          <Box textAlign="center">
            <Typography variant="h6" fontWeight="bold" color="#E06B80" gutterBottom>
              Payment Methods
            </Typography>
            <Typography variant="body2">Visa</Typography>
            <Typography variant="body2">Mastercard</Typography>
            <Typography variant="body2">PayPal</Typography>
            <Typography variant="body2">Cash on Delivery</Typography>
          </Box>
        </Box>

        {/* Contact Us (Right) */}
        <Box textAlign="right">
          <Typography variant="h6" fontWeight="bold" color="#E06B80" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body2">Email: info@leora.com</Typography>
          <Typography variant="body2">Phone: +970 59 000 0000</Typography>
        </Box>
      </Box>

      {/* ===== Divider Line ===== */}
      <Box borderTop={1} borderColor="grey.400" />

      {/* ===== Copyright ===== */}
      <Box textAlign="center" mt={3}>
        <Typography variant="caption" color="#333">
          © 2025 léora Cosmetics. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
