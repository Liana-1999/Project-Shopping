import React, { useEffect, useState } from "react";
import { Box, Typography, IconButton, Divider, CircularProgress } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function UsersDetails({ userId, onClose }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (userId) {
      setLoading(true);
      fetch(`https://dummyjson.com/users/${userId}`)
        .then((res) => res.json())
        .then((data) => {
          setUser(data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [userId]);

  if (!user) return loading ? (
    <Box sx={{ display: "flex", justifyContent: "center", p: 2 }}>
      <CircularProgress />
    </Box>
  ) : null;

  return (
    <Box sx={{ width: 400, p: 2, pointerEvents: 'auto' }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Typography variant="h6">User Details</Typography>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider sx={{ my: 2 }} />

      <Box sx={{ textAlign: "center" }}>
        <Box
          component="img"
          src={user.image || "https://via.placeholder.com/150?text=No+Image"}
          alt={`${user.firstName} ${user.lastName}`}
          sx={{ width: 150, height: 150, borderRadius: "50%", objectFit: "cover", mb: 2 }}
        />
        <Typography variant="subtitle1">{user.firstName} {user.lastName}</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>Email: {user.email}</Typography>
        <Typography variant="body2" color="text.secondary">Phone: {user.phone}</Typography>
        <Typography variant="body2" color="text.secondary">Age: {user.age}</Typography>
      </Box>
    </Box>
  );
}

export default UsersDetails;