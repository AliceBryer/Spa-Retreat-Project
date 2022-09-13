import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        404 GetAway
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 1,
        px: 2,
        mt: "auto",
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        position: "fixed",
        bottom: 0,
        width: "100%",
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body1"></Typography>
        <Copyright />
      </Container>
    </Box>
  );
}
export default Footer;
