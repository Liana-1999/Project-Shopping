import { useContext } from 'react';
import { AuthContext } from '../context/auth/AuthContext';
import { Typography, Box } from '@mui/material';

export const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h3" sx={{ mb: 2 }}>Home Page</Typography>
      <Typography variant="body1">Welcome to our homepage!</Typography>
      
      {user && (
        <Box sx={{ mt: 2 }}>
          <Typography variant="h6">Logged in as: {user.firstName}</Typography>
        </Box>
      )}
    </Box>
  );
};