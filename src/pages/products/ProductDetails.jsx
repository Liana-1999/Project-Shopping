import React, { useState } from "react";
import { Box, Typography, Rating, Drawer, Divider, CircularProgress } from "@mui/material";
import  CloseIcon  from "@mui/icons-material/Close";
import { ProductBasicInfo } from "./ProductBasicInfo";
import { ProductReviews } from "./ProductReviews";
import { useEffect } from "react";

export const ProductDetails = (props) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${props.productId}`)
        .then(res => res.json())
        .then((productRespose) => {
          setProduct(productRespose);
          setLoading(false);
        })
        .catch(() => {
          
        })
  }, [props.product]);
  
  return (
      <Drawer
          anchor='right'
          open={props.open}
          onClose={props.onClose}
      >   
    <Box sx={{ width: '500px' }}>
      <Box sx={{ padding: '22px 20px', display: "flex", justifyContent: 'space-between' }}>
        <Typography variant="h5">Product Details</Typography>

        <CloseIcon sx={{ cursor: 'pointer' }} onClick={props.onClose} />
      </Box>
      
      <Divider />

      <Box sx={{ height: 'calc(100vh -78px)' }}>
           {true
          ? (
               <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%'
                  }}>
                  <CircularProgress />
                </Box>  
          )
          : (
              <>
                 <ProductBasicInfo />
                <ProductReviews />
              </>
          )
      }
      </Box>
    </Box>
     </Drawer> 
  );
};