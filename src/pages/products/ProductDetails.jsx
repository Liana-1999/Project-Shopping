import { Drawer, Box, Typography, Divider, CircularProgress } from "@mui/material";
import  CloseIcon  from "@mui/icons-material/Close";
import { ProductBasicInfo } from "./ProductBasicInfo";
import { ProductReviews } from "./ProductReviews";
import { useEffect, useState } from "react";
import { Description } from "@mui/icons-material";

export const ProductDetails = (props) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/products/${props.productId}`)
        .then(res => res.json())
        .then((productRespose) => {
          setProduct(productRespose);
          setLoading(false);
        })
        .catch(() => {
            setLoading(false);
        })
  }, [props.productId]);
  
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
                  {loading
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
                    : product && (
                        <>
                            <ProductBasicInfo data={{
                              image: product.thumbnail,
                              title: product.title,
                              description: product.description,
                              rating: product.rating
                            }}  />
                            <ProductReviews />
                        </>
                    )
              }
              </Box>
           </Box>
        </Drawer> 
  );
};