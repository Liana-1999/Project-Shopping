import React from 'react';
import { Box, Typography, Rating } from '@mui/material';

export const ProductBasicInfo = ({ data }) => {
  if (!data) return null;

  console.log({data});
  

  const imageSrc = data.image || "https://via.placeholder.com/120?text=No+Image";

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>Basic Information</Typography>

      <Box sx={{ display: 'flex', gap: 2 }}>
        <Box 
          sx={{
            width: 120,
            height: 120,
            borderRadius: 2,
            overflow: 'hidden',
            background: '#eee',
            flexShrink: 0,
          }}
        >
          <img
            src={imageSrc}
            alt={data.title || "No Title"}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            // onError={(e) => {
            //  e.target.onerror = null;
            //  e.target.src = "https://via.placeholder.com/120x120?text=No+Image";
            // }}
          />
        </Box>
        
        <Box>
          <Typography variant="subtitle1">{data.title}</Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>{data.description}</Typography>
        </Box>
      </Box>
    
      <Rating
        name="product-rating"
        value={data.rating}
        precision={0.5}
        readOnly
        sx={{ mt: 2 }}
      />
    </Box>
  );
};