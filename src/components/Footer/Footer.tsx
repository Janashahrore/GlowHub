import React from "react";
import { Box, Typography, Link, Grid } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "primary.main",
        color: "text.primary",
        py: 5,
        px: { xs: 2, md: 6 },
      }}
    >
      {/* ===== Top Section (4 Columns) ===== */}
      <Grid container spacing={4}>
        {/* Logo + Slogan */}
        <Grid item xs={12} md={3} textAlign={{ xs: "center", md: "left" }}>
          <Typography variant="h5" fontWeight="bold" color="secondary.main">
            léora
          </Typography>
          <Typography variant="body2">
            Beauty that speaks for you
          </Typography>
        </Grid>

        {/* About Us */}
        <Grid item xs={12} md={3} textAlign={{ xs: "center", md: "left" }}>
          <Typography
            variant="h6"
            fontWeight="bold"
            color="secondary.main"
            gutterBottom
          >
            About Us
          </Typography>
          <Typography variant="body2">
            Léora is a cosmetics destination dedicated to enhancing your natural
            beauty.
          </Typography>
        </Grid>

        {/* Quick Links */}
        <Grid item xs={12} md={3} textAlign={{ xs: "center", md: "left" }}>
          <Typography
            variant="h6"
            fontWeight="bold"
            color="secondary.main"
            gutterBottom
          >
            Quick Links
          </Typography>
          <Link underline="hover" href="#" display="block">
            Home
          </Link>
          <Link underline="hover" href="#" display="block">
            Shop
          </Link>
          <Link underline="hover" href="#" display="block">
            About
          </Link>
          <Link underline="hover" href="#" display="block">
            Contact
          </Link>
        </Grid>

        {/* Contact */}
        <Grid item xs={12} md={3} textAlign={{ xs: "center", md: "left" }}>
          <Typography
            variant="h6"
            fontWeight="bold"
            color="secondary.main"
            gutterBottom
          >
            Contact Us
          </Typography>
          <Typography variant="body2">Email: info@leora.com</Typography>
          <Typography variant="body2">Phone: +970 59 000 0000</Typography>
        </Grid>
      </Grid>

      {/* ===== Payment Methods (Full Width) ===== */}
      <Box
        mt={5}
        pt={3}
        borderTop={1}
        borderColor="grey.300"
        textAlign="center"
      >
        <Typography
          variant="h6"
          fontWeight="bold"
          color="secondary.main"
          gutterBottom
        >
          Payment Methods
        </Typography>

        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Typography variant="body2">Visa</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2">Mastercard</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2">PayPal</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2">Cash on Delivery</Typography>
          </Grid>
        </Grid>
      </Box>

      {/* ===== Copyright ===== */}
      <Box mt={4} textAlign="center">
        <Typography variant="caption">
          © 2025 léora Cosmetics. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;