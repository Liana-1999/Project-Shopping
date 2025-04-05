import React from "react";
import { Box, Typography, Rating, List, ListItem, ListItemText } from "@mui/material";

export const ProductReviews = (props) => {
  const { data } = props;
  if (!data) return null; 

  const reviews = [
    { id: 1, reviewer: "Anna", text: "Great product!", rating: 4 },
    { id: 2, reviewer: "James", text: "Good value for money.", rating: 4.5 },
    { id: 3, reviewer: "Leo", text: "Could be better.", rating: 3.5 },
  ];

  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="subtitle1">Rating:</Typography>
      <Rating value={data.rating} precision={0.5} readOnly />
      <Typography variant="subtitle1" sx={{ mt: 2 }}>Reviews:</Typography>
      <List>
        {reviews.map((review) => (
          <ListItem key={review.id} disableGutters>
            <ListItemText
              primary={`${review.reviewer} - ${review.rating} stars`}
              secondary={review.text}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};