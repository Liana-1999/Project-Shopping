import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Typography, Grid, Card, CardMedia, CardContent, Drawer, CircularProgress } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import UsersDetails from "../Users/UsersDetails";
import { usersActions } from '../../store/slice/usersSlice';

function Users() {
  const { users } = useSelector((store) => store.users);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { userId } = useParams();
  // const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        dispatch(usersActions.addUsers(data.users));
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });  
  }, []);


  const handleUserClick = (id) => {
    navigate(`/users/${id}`);
  };

  const handleCloseDrawer = () => {
    navigate("/users");
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h3" sx={{ mb: 2 }}>Users</Typography>
       {users.length === 0 ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
      <Grid container spacing={2}>
        {users.map((user) => (
          <Grid item xs={12} sm={6} md={4} key={user.id}>
            <Card
              sx={{ border: "1px solid #ccc", borderRadius: 2, cursor: "pointer" }}
              onClick={() => handleUserClick(user.id)}
            >
              <CardMedia
                component="img"
                height="140"
                image={user.image || "https://via.placeholder.com/150?text=No+Image"}
                alt={`${user.firstName} ${user.lastName}`}
              />
              <CardContent>
                <Typography variant="h6">{user.firstName} {user.lastName}</Typography>
                <Typography variant="body2" color="text.secondary">Age: {user.age}</Typography>
                <Typography variant="body2" color="text.secondary">{user.email}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
     )}

      <Drawer anchor="right" open={Boolean(userId)} onClose={handleCloseDrawer}>
        <UsersDetails userId={userId} onClose={handleCloseDrawer} />
      </Drawer>
    </Box>
  );
}

export default Users;