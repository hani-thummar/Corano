// import { Box, Button, Container, Grid, Typography } from '@mui/material'
// import React from 'react'
// import logo1 from '../assets/img/HomePage/logo.webp'
// import HouseIcon from '@mui/icons-material/House';
// import EmailIcon from '@mui/icons-material/Email';
// import CallIcon from '@mui/icons-material/Call';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import YouTubeIcon from '@mui/icons-material/YouTube';
// import money from '../assets/img/HomePage/money.webp'
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

// function Footer() {
//   return (
//    <Box>
//     <Box  sx={{backgroundColor:"#f7f7f7",padding:"70px 70px"}}>
//       <Container>
//         <Grid container spacing={2} >
//           <Grid item xs={3}>
//             <img src={logo1} alt="" />
//             <Typography sx={{ marginTop: "15px", color: "#555555", lineHeight: "1.7" }}>We are a team of designers and developers that create high quality wordpress, shopify, Opencart </Typography>
//           </Grid>
//           <Grid item xs={3}>
//             <Box>
//               <Typography sx={{ fontSize: "19px" }}>Contact Us</Typography>
//               <Box marginTop="20px">
//                 <Typography sx={{ color: "#555555", display: "flex", fontSize: "15px" }}><HouseIcon></HouseIcon>4710-4890 Breckinridge USA</Typography>
//                 <Box sx={{ color: "#555555", marginTop: "10px", fontSize: "15px" }}>
//                   <Typography sx={{
//                     display: "flex", textAlign: "center",
//                     "&:hover": {
//                       color: "#C29958"
//                     }
//                   }}><EmailIcon></EmailIcon>demo@yourdomain.com</Typography>
//                 </Box>
//                 <Typography sx={{
//                   color: "#555555", display: "flex", marginTop: "10px", fontSize: "15px",
//                   "&:hover": {
//                     color: "#C29958"
//                   }
//                 }}><CallIcon></CallIcon> (012) 800 456 789-987</Typography>
//               </Box>
//             </Box>
//           </Grid>
//           <Grid item xs={3}>
//             <Box>
//               <Typography sx={{ fontSize: "19px" }}>Information</Typography>
//               <Box sx={{ marginTop: "20px", color: "#555555", display: "flex", alignItems: "center" }}>
//                 <Box>
//                   <Typography sx={{
//                     marginTop: "6px", "&:hover": {
//                       transition: ".3s",
//                       color: "#C29958"
//                     }
//                   }}>About Us</Typography>
//                   <Typography sx={{
//                     marginTop: "6px", "&:hover": {
//                       transition: ".3s",
//                       color: "#C29958"
//                     }
//                   }}>Privet Policy</Typography>
//                   <Typography sx={{
//                     marginTop: "6px", "&:hover": {
//                       transition: ".3s",
//                       color: "#C29958"
//                     }
//                   }}>Contact Us</Typography>
//                 </Box>
//                 <Box sx={{ marginLeft: "23px" }}>
//                   <Typography sx={{
//                     whiteSpace: "nowrap", marginTop: "6px", "&:hover": {
//                       transition: ".3s",
//                       color: "#C29958"
//                     }
//                   }}>
//                     Delivery Information</Typography>
//                   <Typography sx={{
//                     whiteSpace: "nowrap", marginTop: "6px", "&:hover": {
//                       transition: ".3s",
//                       color: "#C29958"
//                     }
//                   }}>
//                     Terms & Conditions</Typography>
//                   <Typography sx={{
//                     whiteSpace: "nowrap", marginTop: "6px", "&:hover": {
//                       transition: ".3s",
//                       color: "#C29958"
//                     }
//                   }}>
//                     Site Map</Typography>
//                 </Box>
//               </Box>
//             </Box>
//           </Grid>
//           <Grid item xs={3}>
//             <Box>
//               <Typography sx={{ fontSize: "19px" }}>Follow Us</Typography>
//               <Box sx={{ display: "flex", marginTop: "20px" }}>
//                 <Typography sx={{
//                   border: "1px solid #dedede", borderRadius: "50%", height: "40px", width: "40px", fontSize: "18px", marginRight: "10px", color: "#777777", textAlign: "center",
//                   "&:hover": {
//                     transition: ".3s",
//                     backgroundColor: "#C29958",
//                     color: "#fff"
//                   }
//                 }}><FacebookIcon sx={{ paddingTop: "8px" }}></FacebookIcon></Typography>
//                 <Typography sx={{
//                   border: "1px solid #dedede", borderRadius: "50%", height: "40px", width: "40px", fontSize: "18px", marginRight: "10px", color: "#777777", textAlign: "center",
//                   "&:hover": {
//                     transition: ".3s",
//                     backgroundColor: "#C29958",
//                     color: "#fff"
//                   }
//                 }}><TwitterIcon sx={{ paddingTop: "8px" }}></TwitterIcon></Typography>
//                 <Typography sx={{
//                   border: "1px solid #dedede", borderRadius: "50%", height: "40px", width: "40px", fontSize: "18px", marginRight: "10px", color: "#777777", textAlign: "center",
//                   "&:hover": {
//                     transition: ".3s",
//                     backgroundColor: "#C29958",
//                     color: "#fff"
//                   }
//                 }}><InstagramIcon sx={{ paddingTop: "8px" }}></InstagramIcon></Typography>
//                 <Typography sx={{
//                   border: "1px solid #dedede", borderRadius: "50%", height: "40px", width: "40px", fontSize: "18px", marginRight: "10px", color: "#777777", textAlign: "center",
//                   "&:hover": {
//                     transition: ".3s",
//                     backgroundColor: "#C29958",
//                     color: "#fff"
//                   }
//                 }}><YouTubeIcon sx={{ paddingTop: "8px" }}></YouTubeIcon></Typography>
//               </Box>
//             </Box>
//           </Grid>
//         </Grid>
//         <Grid container spacing={2} columns={16}>
//           <Grid item xs={8}>
//             <Box sx={{ marginTop: "25px" }}>
//               <Typography sx={{ fontWeight: "600" }}>Signup for newsletter</Typography>
//                 <Box sx={{display:"flex",justifyContent:"space-between",borderBottom:"1px solid #000",padding:"20px 10px 7px  0px"}}>
//                   <Typography><input type="text" placeholder='Enter your email address' style={{border:"none",backgroundColor:"#f7f7f7" ,outline:"none"}}/></Typography>
//                   <Typography sx={{color:"#c29958", fontWeight: "600","&:hover": {
//                     transition:".3s",
//                     color: "#000"
//                   }}}>Subscribe</Typography>
//                 </Box>
//             </Box>
//           </Grid>
//           <Grid item xs={8} sx={{ marginTop: "50px" }}>
//             <img src={money} alt="" style={{ marginLeft: "180px" }} />
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//         <Box sx={{marginTop:"20px",display:"flex",justifyContent:"center",alignItems:"center"}}>
//           <Typography>© 2022 Corano Made with ❤ by </Typography>
//           <Typography sx={{color:"#c29958",marginLeft:"3px"}}> Has Themes</Typography>
//         </Box>
//    </Box>

   
    
//   )
// }

// export default Footer



import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import logo1 from '../assets/img/HomePage/logo.webp'
import HouseIcon from '@mui/icons-material/House';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import money from '../assets/img/HomePage/money.webp'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function Footer() {
  return (
    <Box>
      <Box sx={{ backgroundColor: "#f7f7f7", padding: { xs: "20px", sm: "40px", md: "70px" } }}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={3}  md={6} sm={6} py={3}>
              <img src={logo1} alt="" style={{ maxWidth: '100%' }} />
              <Typography sx={{ marginTop: "15px", color: "#555555", lineHeight: "1.7" }}>We are a team of designers and developers that create high quality wordpress, shopify, Opencart </Typography>
            </Grid>
            <Grid item xs={12} lg={3}  md={6} sm={6} py={3}>
              <Box>
                <Typography sx={{ fontSize: "19px" }}>Contact Us</Typography>
                <Box marginTop="20px">
                  <Typography sx={{ color: "#555555", display: "flex", fontSize: "15px", alignItems: 'center' }}>
                    <HouseIcon sx={{ marginRight: '8px' }} />4710-4890 Breckinridge USA
                  </Typography>
                  <Box sx={{ color: "#555555", marginTop: "10px", fontSize: "15px" }}>
                    <Typography sx={{
                      display: "flex", textAlign: "center", alignItems: 'center',
                      "&:hover": {
                        color: "#C29958"
                      }
                    }}><EmailIcon sx={{ marginRight: '8px' }} />demo@yourdomain.com</Typography>
                  </Box>
                  <Typography sx={{
                    color: "#555555", display: "flex", marginTop: "10px", fontSize: "15px", alignItems: 'center',
                    "&:hover": {
                      color: "#C29958"
                    }
                  }}><CallIcon sx={{ marginRight: '8px' }} /> (012) 800 456 789-987</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} lg={3}  md={6} sm={6} py={3}>
              <Box>
                <Typography sx={{ fontSize: "19px" }}>Information</Typography>
                <Box sx={{ marginTop: "13px", color: "#555555", display: "flex", alignItems: "center" }}>
                  <Box>
                    <Typography sx={{
                      marginTop: "6px", "&:hover": {
                        transition: ".3s",
                        color: "#C29958"
                      }
                    }}>About Us</Typography>
                    <Typography sx={{
                      marginTop: "6px", "&:hover": {
                        transition: ".3s",
                        color: "#C29958"
                      }
                    }}>Privet Policy</Typography>
                    <Typography sx={{
                      marginTop: "6px", "&:hover": {
                        transition: ".3s",
                        color: "#C29958"
                      }
                    }}>Contact Us</Typography>
                  </Box>
                  <Box sx={{ marginLeft:"30px" }}>
                    <Typography sx={{
                      whiteSpace: "nowrap", marginTop: "6px", "&:hover": {
                        transition: ".3s",
                        color: "#C29958"
                      }
                    }}>
                      Delivery Information</Typography>
                    <Typography sx={{
                      whiteSpace: "nowrap", marginTop: "6px", "&:hover": {
                        transition: ".3s",
                        color: "#C29958"
                      }
                    }}>
                      Terms & Conditions</Typography>
                    <Typography sx={{
                      whiteSpace: "nowrap", marginTop: "6px", "&:hover": {
                        transition: ".3s",
                        color: "#C29958"
                      }
                    }}>
                      Site Map</Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} lg={3}  md={6} sm={6} py={3}>
              <Box>
                <Typography sx={{ fontSize: "19px" }}>Follow Us</Typography>
                <Box sx={{ display: "flex", marginTop: "20px" }}>
                  <Typography sx={{
                    border: "1px solid #dedede", borderRadius: "50%", height: "40px", width: "40px", fontSize: "18px", marginRight: "10px", color: "#777777", textAlign: "center",
                    "&:hover": {
                      transition: ".3s",
                      backgroundColor: "#C29958",
                      color: "#fff"
                    }
                  }}><FacebookIcon sx={{ paddingTop: "8px" }}></FacebookIcon></Typography>
                  <Typography sx={{
                    border: "1px solid #dedede", borderRadius: "50%", height: "40px", width: "40px", fontSize: "18px", marginRight: "10px", color: "#777777", textAlign: "center",
                    "&:hover": {
                      transition: ".3s",
                      backgroundColor: "#C29958",
                      color: "#fff"
                    }
                  }}><TwitterIcon sx={{ paddingTop: "8px" }}></TwitterIcon></Typography>
                  <Typography sx={{
                    border: "1px solid #dedede", borderRadius: "50%", height: "40px", width: "40px", fontSize: "18px", marginRight: "10px", color: "#777777", textAlign: "center",
                    "&:hover": {
                      transition: ".3s",
                      backgroundColor: "#C29958",
                      color: "#fff"
                    }
                  }}><InstagramIcon sx={{ paddingTop: "8px" }}></InstagramIcon></Typography>
                  <Typography sx={{
                    border: "1px solid #dedede", borderRadius: "50%", height: "40px", width: "40px", fontSize: "18px", marginRight: "10px", color: "#777777", textAlign: "center",
                    "&:hover": {
                      transition: ".3s",
                      backgroundColor: "#C29958",
                      color: "#fff"
                    }
                  }}><YouTubeIcon sx={{ paddingTop: "8px" }}></YouTubeIcon></Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={2} columns={16}>
            <Grid item xs={16} md={8}>
              <Box sx={{ marginTop: "25px" }}>
                <Typography sx={{ fontWeight: "600" }}>Signup for newsletter</Typography>
                <Box sx={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #000", padding: "20px 10px 7px  0px" }}>
                  <Typography>
                    <input type="text" placeholder='Enter your email address' style={{ border: "none", backgroundColor: "#f7f7f7", outline: "none", width: '100%' }} />
                  </Typography>
                  <Typography sx={{
                    color: "#c29958", fontWeight: "600", cursor: 'pointer', "&:hover": {
                      transition: ".3s",
                      color: "#000"
                    }
                  }}>Subscribe</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={16} md={8} sx={{ marginTop: { xs: "20px", md: "50px" }, textAlign: { xs: 'center', md: 'right' } }}>
              <img src={money} alt="" style={{ maxWidth: '100%', marginLeft: { md: "180px" } }} />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ marginTop: "20px", display: {lg:"flex", md:"flex",sm:"flex",xs:"block"}, justifyContent:"center", alignItems: "center" }}>
        <Typography sx={{textAlign:"center"}}>© 2022 Corano Made with ❤ by </Typography>
        <Typography sx={{ color: "#c29958", marginLeft: "3px", textAlign:"center" }}> Has Themes</Typography>
      </Box>
    </Box>
  )
}

export default Footer
