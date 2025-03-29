import React, { useContext } from "react";
import { AuthContext } from "../context/auth/AuthContext";
import { Button, Typography } from "@mui/material";

function MyProfile() {
  const { isLoggedIn, user, signOut } = useContext(AuthContext);

  return (
    <div style={{ border: "1px solid blue", padding: "1rem" }}>
      <Typography variant="h3">My Profile</Typography>
      {isLoggedIn ? (
        <>
          <Typography variant="h5">Welcome, {user.firstName || user.name}!</Typography>
          <Button variant="contained" onClick={signOut}>
            Sign Out
          </Button>
        </>
      ) : (
        <Typography variant="h6">You are not logged in.</Typography>
      )}
    </div>
  );
}

export default MyProfile;