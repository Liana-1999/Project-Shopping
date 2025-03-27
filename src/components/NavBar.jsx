import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/auth/AuthContext';
import LogoutIcon from '@mui/icons-material/Logout';
import { AppBar, Button, Box, Typography } from '@mui/material';

const pages = [
  { text: 'Home', link: '/' },
  { text: 'Shorts', link: '/shorts' },
  { text: 'Subscriptions', link: '/subscriptions' },
  { text: 'Products', link: '/products' },
  { text: 'Users', link: '/users' },
];

function NavBar() {
  const navigate = useNavigate();
  const { signOut, user } = useContext(AuthContext);

  const handlePageChange = (link) => {
    navigate(link);
  };

  return (
    <AppBar sx={{ px: '8px' }}>
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box sx={{ display: 'flex' }}>
          {pages.map((page) => (
            <Button
              key={page.text}
              onClick={() => handlePageChange(page.link)}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              {page.text}
            </Button>
          ))}
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography fontWeight='bold'>
            {user ? user.firstName : 'Guest'}
          </Typography>

          <Button
            onClick={signOut}
            sx={{ my: 2, color: 'white', display: 'block', ml: 1 }}
          >
            <LogoutIcon />
          </Button>
        </Box>
      </Box>
    </AppBar>
  );
}

export default NavBar;