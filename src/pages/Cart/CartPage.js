// import React, { useState } from 'react';
// import {Table, TableBody, TableCell, TableContainer,TableHead,TableRow, Paper,Typography, Box, IconButton, Container} from '@mui/material';
// import HouseIcon from '@mui/icons-material/House';
// import DeleteIcon from '@mui/icons-material/Delete';
// import c1 from '../../assets/img/cart/c1.webp';
// import c2 from '../../assets/img/cart/c2.webp';
// import c3 from '../../assets/img/cart/c3.webp';
// import c4 from '../../assets/img/cart/c4.webp';
// import { useNavigate } from 'react-router-dom';


// const rows = [
//   {
//     thumbnail: c1,
//     product: 'Diamond Exclusive Ornament',
//     price: '$295.00',
//     quantity: 1,
//     Total: '$295.00'
//   },
//   {
//     thumbnail: c2,
//     product: 'Perfect Diamond Jewelry',
//     price: '$275.00',
//     quantity: 2,
//     Total: '$550.00'
//   },
//   {
//     thumbnail: c3,
//     product: 'Handmade Golden Necklace',
//     price: '$295.00',
//     quantity: 1,
//     Total: '$295.00'
//   },
//   {
//     thumbnail: c4,
//     product: 'Diamond Exclusive Ornament',
//     price: '$110.00',
//     quantity: 3,
//     Total: '$110.00'
//   },
// ];

// function CartPage() {

//     const navigate = useNavigate();

//   return (
//     <div>
//       <Box sx={{ bgcolor: "#F5F5F5" }}>
//         <Container>
//           <Box sx={{ display: "flex", alignItems: "center", padding: "24px 0", textAlign: "center" }}>
//             <HouseIcon sx={{ fontSize: "20px", "&:hover": { transition: ".3s", color: "#c29958" } }} onClick={() => navigate("/")}>
//             </HouseIcon>
//             <Typography sx={{ color: "#7e7e7e", fontSize: "17px", margin: "0 5px" }}>/</Typography>
//             <Typography sx={{ fontSize: "16px", margin: "0 5px", fontWeight: "400" }} onClick={() => navigate("/shop")}>Shop</Typography>
//             <Typography sx={{ color: "#7e7e7e", fontSize: "17px", margin: "0 5px" }}>/</Typography>
//             <Typography sx={{ color: "#c29958", fontSize: "16px", margin: "0 5px", fontWeight: "400" }}>Cart</Typography>
//           </Box>
//         </Container>
//       </Box>

//       <Box sx={{ p: 3 }}>
//         <Container>
//           <TableContainer component={Paper}>
//             <Table sx={{ minWidth: 650,  }} aria-label="product table">
//               <TableHead>
//                 <TableRow sx={{ backgroundColor: "#c29958" }}>
//                   {['Thumbnail', 'Product', 'Price', 'Quantity', 'Total', 'Remove'].map((header) => (
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
//                     <TableCell sx={{ borderRight: "1px solid #ccc", textAlign: 'center', verticalAlign: 'middle',"&:hover": {color:"#c29958",transition:".3s"} }}>
//                       {row.product}
//                     </TableCell>
//                     <TableCell sx={{ borderRight: "1px solid #ccc", textAlign: 'center', verticalAlign: 'middle' }}>
//                       {row.price}
//                     </TableCell>


                  
//                   <TableCell sx={{ borderRight: "1px solid #ccc", textAlign: 'center',verticalAlign: 'middle',width:"100px"}}>
//                     <Box sx={{border:"1px solid #ccc",display:"flex",justifyContent:"center",width:"80px",padding:"8px 0",marginLeft:"10px"}}>
//                     <Typography sx={{height:"20px",width:"20px"}}>+</Typography>
//                     <Typography sx={{height:"20px",width:"20px"}}>{row.quantity}</Typography>
//                     <Typography  sx={{height:"20px",width:"20px"}}>-</Typography>
//                     </Box>
//                     </TableCell>

//                     <TableCell sx={{ borderRight: "1px solid #ccc", textAlign: 'center', verticalAlign: 'middle' }}>
//                       {row.Total}
//                     </TableCell>
//                     <TableCell sx={{ textAlign: 'center', verticalAlign: 'middle'}}>
//                       <IconButton sx={{"&:hover": {color:"#c29958",transition:".3s"}}}>
//                         <DeleteIcon />
//                       </IconButton>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//             <Box>
//             <Typography sx={{padding:"15px 20px"}}>
//                 <input type="text" placeholder='Enter Your Coupon Code' style={{border:"1px solid #ccc",outline:"none",padding:"10px 10px",width:"35%",marginRight:"15px"}}/>
//                 <Typography
//                         variant="contained"
//                         sx={{backgroundColor:"#c29958",padding:"10px 25px",color:"#fff","&:hover": {transition:".4s",backgroundColor:"#222222",color:"#fff"}}}>
//                         Apply Coupon
//                 </Typography>
//                 <Typography
//                         variant="contained"
//                         sx={{backgroundColor:"#c29958",padding:"10px 25px",color:"#fff",marginLeft:"35%","&:hover": {transition:".4s",backgroundColor:"#222222",color:"#fff"}}}>
//                         Update Cart
//                 </Typography>
                
//             </Typography>
//           </Box>
//           </TableContainer>
          


//         </Container>
//         <Container>
//         <Box sx={{width:"38%",backgroundColor:"#F5F5F5",marginTop:"40px",marginBottom:"60px"}}>
//             <Typography sx={{fontWeight:"600",padding:"20px 15px 18px"}}>Cart Totals</Typography>
//             <Box sx={{display:"flex",justifyContent:"space-between",borderBottom:"1px solid #ccc"}}>
//                 <Typography sx={{padding:"15px 20px"}}>Sub Total</Typography>
//                 <Typography sx={{padding:"15px 20px"}}>$230</Typography>
//             </Box>
//             <Box sx={{display:"flex",justifyContent:"space-between",borderBottom:"1px solid #ccc"}}>
//                 <Typography sx={{padding:"15px 20px"}}>Shipping</Typography>
//                 <Typography sx={{padding:"15px 20px"}}>$70</Typography>
//             </Box>
//             <Box sx={{display:"flex",justifyContent:"space-between",borderBottom:"1px solid #ccc"}}>
//                 <Typography sx={{padding:"15px 20px"}}>Total</Typography>
//                 <Typography sx={{padding:"15px 20px",color:"#c29958"}}>$300</Typography>
//             </Box>
//             <Box sx={{display:"flex",justifyContent:"center",borderBottom:"1px solid #ccc",backgroundColor:"#c29958",color:"#fff","&:hover": {backgroundColor:"#222222",color:"#fff",transition:".3s"}}}>
//                 <Typography sx={{padding:"12px 25px"}}>Proceed Checkout</Typography>
//             </Box>
//           </Box>
//         </Container>
//       </Box>

      
      
//     </div>
//   );
// }

// export default CartPage;









// import React from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box, IconButton, Container } from '@mui/material';
// import HouseIcon from '@mui/icons-material/House';
// import DeleteIcon from '@mui/icons-material/Delete';
// import c1 from '../../assets/img/cart/c1.webp';
// import c2 from '../../assets/img/cart/c2.webp';
// import c3 from '../../assets/img/cart/c3.webp';
// import c4 from '../../assets/img/cart/c4.webp';
// import { useNavigate } from 'react-router-dom';
// import { useTheme } from '@mui/material/styles';
// import useMediaQuery from '@mui/material/useMediaQuery';

// const rows = [
//   {
//     thumbnail: c1,
//     product: 'Diamond Exclusive Ornament',
//     price: '$295.00',
//     quantity: 1,
//     Total: '$295.00'
//   },
//   {
//     thumbnail: c2,
//     product: 'Perfect Diamond Jewelry',
//     price: '$275.00',
//     quantity: 2,
//     Total: '$550.00'
//   },
//   {
//     thumbnail: c3,
//     product: 'Handmade Golden Necklace',
//     price: '$295.00',
//     quantity: 1,
//     Total: '$295.00'
//   },
//   {
//     thumbnail: c4,
//     product: 'Diamond Exclusive Ornament',
//     price: '$110.00',
//     quantity: 3,
//     Total: '$330.00'
//   },
// ];

// function CartPage() {
//   const navigate = useNavigate();
//   const theme = useTheme();
//   const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

//   return (
//     <div>
//       <Box sx={{ bgcolor: "#F5F5F5" }}>
//         <Container>
//           <Box sx={{ display: "flex", alignItems: "center", padding: "24px 0", textAlign: "center" }}>
//             <HouseIcon sx={{ fontSize: "20px", "&:hover": { transition: ".3s", color: "#c29958" } }} onClick={() => navigate("/")}>
//             </HouseIcon>
//             <Typography sx={{ color: "#7e7e7e", fontSize: "17px", margin: "0 5px" }}>/</Typography>
//             <Typography sx={{ fontSize: "16px", margin: "0 5px", fontWeight: "400" }} onClick={() => navigate("/shop")}>Shop</Typography>
//             <Typography sx={{ color: "#7e7e7e", fontSize: "17px", margin: "0 5px" }}>/</Typography>
//             <Typography sx={{ color: "#c29958", fontSize: "16px", margin: "0 5px", fontWeight: "400" }}>Cart</Typography>
//           </Box>
//         </Container>
//       </Box>

//       <Box sx={{ p: 3 }}>
//         <Container>
//           <TableContainer component={Paper}>
//             <Table sx={{ minWidth: 650 }} aria-label="product table">
//               <TableHead>
//                 <TableRow sx={{ backgroundColor: "#c29958" }}>
//                   {['Thumbnail', 'Product', 'Price', 'Quantity', 'Total', 'Remove'].map((header) => (
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
//                     <TableCell sx={{ borderRight: "1px solid #ccc", textAlign: 'center', verticalAlign: 'middle', "&:hover": { color: "#c29958", transition: ".3s" } }}>
//                       {row.product}
//                     </TableCell>
//                     <TableCell sx={{ borderRight: "1px solid #ccc", textAlign: 'center', verticalAlign: 'middle' }}>
//                       {row.price}
//                     </TableCell>
//                     <TableCell sx={{ borderRight: "1px solid #ccc", textAlign: 'center', verticalAlign: 'middle', width: "100px" }}>
//                       <Box sx={{ border: "1px solid #ccc", display: "flex", justifyContent: "center", width: "80px", padding: "8px 0", marginLeft: "10px" }}>
//                         <Typography sx={{ height: "20px", width: "20px" }}>+</Typography>
//                         <Typography sx={{ height: "20px", width: "20px" }}>{row.quantity}</Typography>
//                         <Typography sx={{ height: "20px", width: "20px" }}>-</Typography>
//                       </Box>
//                     </TableCell>
//                     <TableCell sx={{ borderRight: "1px solid #ccc", textAlign: 'center', verticalAlign: 'middle' }}>
//                       {row.Total}
//                     </TableCell>
//                     <TableCell sx={{ textAlign: 'center', verticalAlign: 'middle' }}>
//                       <IconButton sx={{ "&:hover": { color: "#c29958", transition: ".3s" } }}>
//                         <DeleteIcon />
//                       </IconButton>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//             <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: 'center', padding: '15px 20px' }}>
//               <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', marginBottom: { xs: 2, sm: 0 } }}>
//                 <input type="text" placeholder='Enter Your Coupon Code' style={{ border: "1px solid #ccc", outline: "none", padding: "10px 10px", width: "100%", maxWidth: "200px", marginRight: "15px" }} />
//                 <Typography
//                   variant="contained"
//                   sx={{ backgroundColor: "#c29958", padding: "10px 25px", color: "#fff", marginTop: { xs: 2, sm: 0 }, "&:hover": { transition: ".4s", backgroundColor: "#222222", color: "#fff" } }}>
//                   Apply Coupon
//                 </Typography>
//               </Box>
//               <Typography
//                 variant="contained"
//                 sx={{ backgroundColor: "#c29958", padding: "10px 25px", color: "#fff", "&:hover": { transition: ".4s", backgroundColor: "#222222", color: "#fff" } }}>
//                 Update Cart
//               </Typography>
//             </Box>
//           </TableContainer>
//         </Container>
//         <Container>
//           <Box sx={{ width: { xs: '100%', md: "38%" }, backgroundColor: "#F5F5F5", marginTop: "40px", marginBottom: "60px" }}>
//             <Typography sx={{ fontWeight: "600", padding: "20px 15px 18px" }}>Cart Totals</Typography>
//             <Box sx={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #ccc" }}>
//               <Typography sx={{ padding: "15px 20px" }}>Sub Total</Typography>
//               <Typography sx={{ padding: "15px 20px" }}>$230</Typography>
//             </Box>
//             <Box sx={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #ccc" }}>
//               <Typography sx={{ padding: "15px 20px" }}>Shipping</Typography>
//               <Typography sx={{ padding: "15px 20px" }}>$70</Typography>
//             </Box>
//             <Box sx={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #ccc" }}>
//               <Typography sx={{ padding: "15px 20px" }}>Total</Typography>
//               <Typography sx={{ padding: "15px 20px", color: "#c29958" }}>$300</Typography>
//             </Box>
//             <Box sx={{ display: "flex", justifyContent: "center", borderBottom: "1px solid #ccc", backgroundColor: "#c29958", color: "#fff", "&:hover": { backgroundColor: "#222222", color: "#fff", transition: ".3s" } }}>
//               <Typography sx={{ padding: "12px 25px" }}>Proceed Checkout</Typography>
//             </Box>
//           </Box>
//         </Container>
//       </Box>
//     </div>
//   );
// }

// export default CartPage




import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box, IconButton, Container } from '@mui/material';
import HouseIcon from '@mui/icons-material/House';
import DeleteIcon from '@mui/icons-material/Delete';
import c1 from '../../assets/img/cart/c1.webp';
import c2 from '../../assets/img/cart/c2.webp';
import c3 from '../../assets/img/cart/c3.webp';
import c4 from '../../assets/img/cart/c4.webp';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const rows = [
  {
    thumbnail: c1,
    product: 'Diamond Exclusive Ornament',
    price: '$295.00',
    quantity: 1,
    Total: '$295.00'
  },
  {
    thumbnail: c2,
    product: 'Perfect Diamond Jewelry',
    price: '$275.00',
    quantity: 2,
    Total: '$550.00'
  },
  {
    thumbnail: c3,
    product: 'Handmade Golden Necklace',
    price: '$295.00',
    quantity: 1,
    Total: '$295.00'
  },
  {
    thumbnail: c4,
    product: 'Diamond Exclusive Ornament',
    price: '$110.00',
    quantity: 3,
    Total: '$330.00'
  },
];

function CartPage() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

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
            <Typography sx={{ color: "#c29958", fontSize: "16px", margin: "0 5px", fontWeight: "400" }}>Cart</Typography>
          </Box>
        </Container>
      </Box>

      <Box sx={{ p: 3 }}>
        <Container>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="product table">
              <TableHead>
                <TableRow sx={{ backgroundColor: "#c29958" }}>
                  {['Thumbnail', 'Product', 'Price', 'Quantity', 'Total', 'Remove'].map((header) => (
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
                      <img src={row.thumbnail} alt={row.product} style={{ width: '100px' }} />
                    </TableCell>
                    <TableCell sx={{ borderRight: "1px solid #ccc", textAlign: 'center', verticalAlign: 'middle', "&:hover": { color: "#c29958", transition: ".3s" } }}>
                      <Typography noWrap>{row.product}</Typography>
                    </TableCell>
                    <TableCell sx={{ borderRight: "1px solid #ccc", textAlign: 'center', verticalAlign: 'middle' }}>
                      {row.price}
                    </TableCell>
                    <TableCell sx={{ borderRight: "1px solid #ccc", textAlign: 'center', verticalAlign: 'middle', width: "100px" }}>
                      <Box sx={{ border: "1px solid #ccc", display: "flex", justifyContent: "center", width: "80px", padding: "8px 0", marginLeft: "10px" }}>
                        <Typography sx={{ height: "20px", width: "20px" }}>+</Typography>
                        <Typography sx={{ height: "20px", width: "20px" }}>{row.quantity}</Typography>
                        <Typography sx={{ height: "20px", width: "20px" }}>-</Typography>
                      </Box>
                    </TableCell>
                    <TableCell sx={{ borderRight: "1px solid #ccc", textAlign: 'center', verticalAlign: 'middle' }}>
                      {row.Total}
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
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: 'center', padding: '15px 20px' }}>
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', marginBottom: { xs: 2, sm: 0 } }}>
                <input type="text" placeholder='Enter Your Coupon Code' style={{ border: "1px solid #ccc", outline: "none", padding: "10px 10px", width: "100%", maxWidth: "200px", marginRight: "15px" }} />
                <Typography
                  variant="contained"
                  sx={{ backgroundColor: "#c29958", padding: "10px 25px", color: "#fff", marginTop: { xs: 2, sm: 0 }, "&:hover": { transition: ".4s", backgroundColor: "#222222", color: "#fff" } }}>
                  Apply Coupon
                </Typography>
              </Box>
              <Typography
                variant="contained"
                sx={{ backgroundColor: "#c29958", padding: "10px 25px", color: "#fff", "&:hover": { transition: ".4s", backgroundColor: "#222222", color: "#fff" } }}>
                Update Cart
              </Typography>
            </Box>
          </TableContainer>
        </Container>
        <Container>
          <Box sx={{ width: { xs: '100%', md: "38%" }, backgroundColor: "#F5F5F5", marginTop: "40px", marginBottom: "60px" }}>
            <Typography sx={{ fontWeight: "600", padding: "20px 15px 18px" }}>Cart Totals</Typography>
            <Box sx={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #ccc" }}>
              <Typography sx={{ padding: "15px 20px" }}>Sub Total</Typography>
              <Typography sx={{ padding: "15px 20px" }}>$230</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #ccc" }}>
              <Typography sx={{ padding: "15px 20px" }}>Shipping</Typography>
              <Typography sx={{ padding: "15px 20px" }}>$70</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #ccc" }}>
              <Typography sx={{ padding: "15px 20px" }}>Total</Typography>
              <Typography sx={{ padding: "15px 20px", color: "#c29958" }}>$300</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", borderBottom: "1px solid #ccc", backgroundColor: "#c29958", color: "#fff", "&:hover": { backgroundColor: "#222222", color: "#fff", transition: ".3s" } }}>
              <Typography sx={{ padding: "12px 25px" }}>Proceed Checkout</Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </div>
  );
}

export default CartPage;
