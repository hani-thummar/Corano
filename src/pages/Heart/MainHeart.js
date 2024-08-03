// import React from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box, Button, IconButton, Container } from '@mui/material';
// import HouseIcon from '@mui/icons-material/House';
// import { useNavigate } from 'react-router-dom';
// import DeleteIcon from '@mui/icons-material/Delete';
// import t1 from '../../assets/img/Heart/t-1.webp';
// import t2 from '../../assets/img/Heart/t-2.webp';
// import t3 from '../../assets/img/Heart/t-3.webp';
// import t4 from '../../assets/img/Heart/t-4.webp';

// const rows = [
//   {
//     thumbnail: t1,
//     product: 'Diamond Exclusive Ornament',
//     price: '$295.00',
//     stockStatus: 'In Stock',
//   },
//   {
//     thumbnail: t2,
//     product: 'Perfect Diamond Jewellery',
//     price: '$275.00',
//     stockStatus: 'In Stock',
//   },
//   {
//     thumbnail: t3,
//     product: 'Handmade Golden Necklace',
//     price: '$295.00',
//     stockStatus: 'Stock Out',
//   },
//   {
//     thumbnail: t4,
//     product: 'Diamond Exclusive Ornament',
//     price: '$110.00',
//     stockStatus: 'In Stock',
//   },
// ];



// function MainHeart() {
  
//   const navigate = useNavigate();

//   return (

//     <div>
//       <Box sx={{ bgcolor: "#F5F5F5"}}>
//         <Container>
//           <Box sx={{ display: "flex", alignItems: "center", padding: "24px 0", textAlign: "center" }}>
//             <HouseIcon sx={{ fontSize: "20px", "&:hover": { transition: ".3s", color: "#c29958" } }} onClick={() => navigate("/")}>
//             </HouseIcon>
//             <Typography sx={{ color: "#7e7e7e", fontSize: "17px", margin: "0 5px" }}>/</Typography>
//             <Typography sx={{ fontSize: "16px", margin: "0 5px", fontWeight: "400" }} onClick={() => navigate("/shop")}>Shop</Typography>
//             <Typography sx={{ color: "#7e7e7e", fontSize: "17px", margin: "0 5px" }}>/</Typography>
//             <Typography sx={{ color: "#c29958", fontSize: "16px", margin: "0 5px", fontWeight: "400" }}>Wishlist</Typography>
//           </Box>    
//         </Container>
//       </Box>


//       <Box>
//       <Box sx={{ p: 13}}>
//         <Container >
//           <TableContainer component={Paper}>
//             <Table sx={{ minWidth: 650}} aria-label="product table">
//               <TableHead>
//                 <TableRow sx={{ backgroundColor: "#c29958" }}>
//                   {['Thumbnail', 'Product', 'Price', 'Stock Status', 'Add To Cart', 'Remove'].map((header) => (
//                     <TableCell key={header} sx={{ color: "white", fontWeight: "600", textAlign: 'center' }}>
//                       {header}
//                     </TableCell>
//                   ))}
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {rows.map((row, index) => (
//                   <TableRow key={index}>
//                     <TableCell sx={{ borderRight: "1px solid #ccc", textAlign: 'center' }}>
//                       <img src={row.thumbnail} alt={row.product} style={{ width: '100px' }} />
//                     </TableCell>
//                     <TableCell sx={{ borderRight: "1px solid #ccc", textAlign: 'center', "&:hover": {color:"#c29958",transition:".3s"} ,verticalAlign: 'middle' }}>
//                       {row.product}
//                     </TableCell>
//                     <TableCell sx={{ borderRight: "1px solid #ccc", textAlign: 'center', verticalAlign: 'middle' }}>
//                       {row.price}
//                     </TableCell>
//                     <TableCell sx={{ borderRight: "1px solid #ccc", textAlign: 'center', verticalAlign: 'middle' }}>
//                       <Typography color={row.stockStatus === 'In Stock' ? 'green' : 'red'}>
//                         {row.stockStatus}
//                       </Typography>
//                     </TableCell>
//                     <TableCell sx={{ borderRight: "1px solid #ccc", textAlign: 'center', verticalAlign: 'middle' }}>
//                       <Typography
//                         variant="contained"
//                         sx={{backgroundColor:"#c29958",padding:"12px 25px",color:"#fff","&:hover": {transition:".4s",backgroundColor:"#222222",color:"#fff"}}} onClick={()=>navigate("/cart")}>
//                         Add To Cart
//                       </Typography>
//                     </TableCell>
//                     <TableCell sx={{ textAlign: 'center', verticalAlign: 'middle' }}>
//                       <IconButton sx={{"&:hover": {color:"#c29958",transition:".3s"}}}>
//                         <DeleteIcon />
//                       </IconButton>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </Container>
//       </Box>
//       </Box>
//     </div>
//   );
// }

// export default MainHeart;



import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box, Button, IconButton, Container } from '@mui/material';
import HouseIcon from '@mui/icons-material/House';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import t1 from '../../assets/img/Heart/t-1.webp';
import t2 from '../../assets/img/Heart/t-2.webp';
import t3 from '../../assets/img/Heart/t-3.webp';
import t4 from '../../assets/img/Heart/t-4.webp';

const rows = [
  {
    thumbnail: t1,
    product: 'Diamond Exclusive Ornament',
    price: '$295.00',
    stockStatus: 'In Stock',
  },
  {
    thumbnail: t2,
    product: 'Perfect Diamond Jewellery',
    price: '$275.00',
    stockStatus: 'In Stock',
  },
  {
    thumbnail: t3,
    product: 'Handmade Golden Necklace',
    price: '$295.00',
    stockStatus: 'Stock Out',
  },
  {
    thumbnail: t4,
    product: 'Diamond Exclusive Ornament',
    price: '$110.00',
    stockStatus: 'In Stock',
  },
];

function MainHeart() {
  const navigate = useNavigate();

  return (
    <div>
      <Box sx={{ bgcolor: "#F5F5F5" }}>
        <Container>
          <Box sx={{ display: "flex", alignItems: "center", padding: "24px 0", textAlign: "center" }}>
            <HouseIcon sx={{ fontSize: "20px", "&:hover": { transition: ".3s", color: "#c29958" } }} onClick={() => navigate("/")}>
            </HouseIcon>
            <Typography sx={{ color: "#7e7e7e", fontSize: "17px", margin: "0 5px" }}>/</Typography>
            <Typography sx={{ fontSize: "16px", margin: "0 5px", fontWeight: "400" }} onClick={() => navigate("/shop")}>Shop</Typography>
            <Typography sx={{ color: "#7e7e7e", fontSize: "17px", margin: "0 5px" }}>/</Typography>
            <Typography sx={{ color: "#c29958", fontSize: "16px", margin: "0 5px", fontWeight: "400" }}>Wishlist</Typography>
          </Box>
        </Container>
      </Box>

      <Box sx={{ p: { xs: 3, md: 8 } }}>
        <Container>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="product table">
              <TableHead>
                <TableRow sx={{ backgroundColor: "#c29958" }}>
                  {['Thumbnail', 'Product', 'Price', 'Stock Status', 'Add To Cart', 'Remove'].map((header) => (
                    <TableCell key={header} sx={{ color: "white", fontWeight: "600", textAlign: 'center' }}>
                      {header}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell sx={{ borderRight: "1px solid #ccc", textAlign: 'center' }}>
                      <img src={row.thumbnail} alt={row.product} style={{ width: '100px', maxWidth: '100%' }} />
                    </TableCell>
                    <TableCell sx={{ borderRight: "1px solid #ccc", textAlign: 'center', "&:hover": { color: "#c29958", transition: ".3s" }, verticalAlign: 'middle', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', maxWidth: '150px' }}>
                      {row.product}
                    </TableCell>
                    <TableCell sx={{ borderRight: "1px solid #ccc", textAlign: 'center', verticalAlign: 'middle' }}>
                      {row.price}
                    </TableCell>
                    <TableCell sx={{ borderRight: "1px solid #ccc", textAlign: 'center', verticalAlign: 'middle' }}>
                      <Typography color={row.stockStatus === 'In Stock' ? 'green' : 'red'}>
                        {row.stockStatus}
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ borderRight: "1px solid #ccc", textAlign: 'center', verticalAlign: 'middle' }}>
                      <Button
                        variant="contained"
                        sx={{ backgroundColor: "#c29958", padding: "8px 12px", color: "#fff", fontSize: '12px', "&:hover": { transition: ".4s", backgroundColor: "#222222", color: "#fff" } }}
                        onClick={() => navigate("/cart")}>
                        Add To Cart
                      </Button>
                    </TableCell>
                    <TableCell sx={{ textAlign: 'center', verticalAlign: 'middle' }}>
                      <IconButton sx={{ "&:hover": { color: "#c29958", transition: ".3s" } }}>
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Box>
    </div>
  );
}

export default MainHeart;




