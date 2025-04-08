import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"; 
import { useSelector, useDispatch } from "react-redux";
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Typography, Rating } from '@mui/material';
import { ProductDetails } from "./ProductDetails";
import { productsActions } from "../../store/slice/productSlice"; 

function Products() {
  const { products } = useSelector((store) => store.products);
  const dispatch = useDispatch();

  const [isDetailsOpened, setIsDetailsOpened] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const { productId } = useParams();

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then((productsResponse) => {
        dispatch(productsActions.addProducts(productsResponse.products));
      });
  }, []);

  const handleDetailsOpen = (productId) => {
    setIsDetailsOpened(true);
    navigate(`/products/${productId}`);
  };

  const handleDetailsClose = () => {
    setIsDetailsOpened(false);
    navigate('/products');
  };

  return (
    <div>
      <Typography variant="h3" sx={{ mb: '10px' }}>Products</Typography>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Thumbnail</TableCell>
              <TableCell align="left">Title</TableCell>
              <TableCell align="center">SKU</TableCell>
              <TableCell align="center">Stock</TableCell>
              <TableCell align="center">Rating</TableCell>
              <TableCell align="center">Price</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {products.map((product) => (
              <TableRow
                onClick={() => handleDetailsOpen(product.id)}
                key={product.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <img src={product.thumbnail} width="80px" height="80px" alt={product.title} />
                </TableCell>

                <TableCell align="left">{product.title}</TableCell>
                <TableCell align="center">{product.sku}</TableCell>
                <TableCell align="center">{product.stock}</TableCell>
                <TableCell align="center">
                  <Rating value={product.rating} readOnly />
                </TableCell>
                <TableCell align="center">{product.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {params.productId && (
        <ProductDetails 
          productId={params.productId} 
          open={isDetailsOpened}
          onClose={handleDetailsClose}
        />
      )}
    </div>
  );
};

export default Products;