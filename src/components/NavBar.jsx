import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { AuthContext } from "../context/auth/AuthContext";
import LogoutIcon from '@mui/icons-material/Logout';

import { AppBar, Box, Button, Typography } from "@mui/material";

const pages = [
  { text: "Home", link: "/" },
  { text: "Images", link: "/images" },
  { text: "Shorts", link: "/shorts" },
  { text: "Subscriptions", link: "/subscriptions" },
  { text: "Products", link: "/products" },
  { text: "Users", link: "/users" },
];

function NavBar() {
  const navigate = useNavigate();

  const { signOut, user } = useContext(AuthContext);

  const handlePageChange = (link) => {
    navigate(link);
  };

  return (
    <AppBar position="static" sx={{ px: 2 }}>
      <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Box sx={{ display: "flex", gap: 2 }}>
          {pages.map((page) => (
            <Button key={page.text} color="inherit" onClick={() => handlePageChange(page.link)}>
              {page.text}
            </Button>
          ))}
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="subtitle1" fontWeight="bold">{user?.firstName || "Guest"}</Typography>
          
          <Button onClick={signOut} color="inherit" sx={{ ml: 1 }}>
            <LogoutIcon />
          </Button>
        </Box>
      </Box>
    </AppBar>
  );
}

export default NavBar;