import React, { useContext } from "react";
import { AuthContext } from "../context/auth/AuthContext";
import { Grid2, Box, Button, Typography, Card } from "@mui/material";

function MyProfile() {
  const { isLoggedIn, user, signOut } = useContext(AuthContext);

  return (
    <Grid2 container sx={{ width: '100%', mt: 2, justifyContent: "center", alignItems: "center" }} spacing={1}>
      <Grid2 xs={12} sm={3}>
        <Card sx={{ padding: 1, display: 'flex', justifyContent: 'center', alignItems: "center" }}>
          <Box
            component="img"
            src={user.image || "https://via.placeholder.com/150?text=No+Image"}
            alt={`${user.firstName} ${user.lastName}`}
            sx={{ width: '100%', height: 'auto', objectFit: 'cover' }}
          />
        </Card>
      </Grid2>

      <Grid2 xs={12} sm={9}>
        <Card sx={{ p: 2, textAlign: "center" }}>
          
      <Typography variant="h3">My Profile</Typography>
      {isLoggedIn ? (
        <>
          <Typography variant="h5">Welcome, {user.firstName || user.name}!</Typography>
          <Button variant="contained" onClick={signOut}>Sign Out</Button>
        </>
      ) : (
        <Typography variant="h6">You are not logged in.</Typography>
      )}
       </Card>
      </Grid2>
    </Grid2>
  );
}

export default MyProfile;