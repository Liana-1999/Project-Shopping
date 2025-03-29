import React, { useEffect, useState } from "react";
import { Typography, Box } from "@mui/material";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users); 
      });
  }, []);

   return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h3" sx={{ mb: 2 }}>
        Users
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: 2,
        }}
      >
        {users.map((user) => (
          <Box
            key={user.id}
            sx={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              p: 2,
              backgroundColor: "#fff",
              color: "#000",
            }}
          >
            <Typography variant="subtitle1">
              {user.firstName} {user.lastName}
            </Typography>
            <Typography variant="body2">Age: {user.age}</Typography>
            <Typography variant="body2">{user.email}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Users;