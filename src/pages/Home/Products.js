
import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import p1 from '../../assets/img/HomePage/P-1.webp';
import p2 from '../../assets/img/HomePage/P-2.webp';
import p3 from '../../assets/img/HomePage/P-3.webp';
import p4 from '../../assets/img/HomePage/P-4.webp';
import { useNavigate } from 'react-router-dom';

function Products() {

    const navigate = useNavigate();

    return (
        <Box>
            <Container>
                <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12} sm={6} md={6} lg={6}>
                        <Box position={"relative"}>
                            <Box > <img src={p1} alt="" style={{ width: '100%' }} /></Box>
                            <Box position={"absolute"} top={"10%"} right={"7%"}  >
                                <Typography sx={{ color: "#777777" }} fontWeight={"600"}>BEAUTIFUL</Typography>
                                <Typography fontWeight={"700"} fontSize={{ xs: "17px", md: "30px" }} display={{lg:"block",md:"block",sm:"block",xs:"flex"}} marginTop={"10px"}>Wedding <Typography fontWeight={"700"} fontSize={{ xs: "17px", md: "30px" }}>Rings</Typography></Typography>
                               
                                <Typography className='shopNow' marginTop={0.5} borderBottom={"2px solid black"} width={"76px"}
                                    sx={{
                                        transition: ".3s", "&:hover": {
                                            "&.shopNow": {
                                                color: "#C29958 !important",
                                                borderBottom: "2px solid #C29958"
                                            }
                                        }
                                    }}
                                    onClick={() => navigate("/shop")}>Shop Now</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6}>
                        <Box position={"relative"}>
                            <Box > <img src={p2} alt="" style={{ width: '100%' }} /></Box>
                            <Box position={"absolute"} top={"10%"} right={"7%"}  >
                                <Typography sx={{ color: "#777777" }} fontWeight={"600"}>EARRINGS</Typography>
                                <Typography fontWeight={"700"} textAlign={"center"} fontSize={{ xs: "17px", md: "30px" }} display={{lg:"block",md:"block",sm:"block",xs:"flex"}} marginTop={"10px"}>Tangerine Floral<Typography fontWeight={"700"} fontSize={{ xs: "17px", md: "30px" }}>Earring</Typography></Typography>
                               
                                <Typography className='shopNow' marginTop={0.5} borderBottom={"2px solid black"} width={"76px"}
                                    sx={{marginLeft:"70px",
                                        transition: ".3s", "&:hover": {
                                            "&.shopNow": {
                                                color: "#C29958 !important",
                                                borderBottom: "2px solid #C29958"
                                            }
                                        }
                                    }}
                                onClick={() => navigate("/shop")}>Shop Now</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6}>
                        <Box position={"relative"}>
                            <Box > <img src={p3} alt="" style={{ width: '100%' }} /></Box>
                            <Box position={"absolute"} top={"10%"} right={"7%"}  >
                                <Typography sx={{ color: "#777777" }} fontWeight={"600"}>NEW ARRIVALS</Typography>
                                <Typography fontWeight={"700"} fontSize={{ xs: "17px", md: "30px" }} display={{lg:"block",md:"block",sm:"block",xs:"flex"}} marginTop={"10px"}>Pearl<Typography fontWeight={"700"} fontSize={{ xs: "17px", md: "30px" }}>Necklaces</Typography></Typography>
                               
                                <Typography className='shopNow' marginTop={0.5} borderBottom={"2px solid black"} width={"76px"}
                                    sx={{
                                        transition: ".3s", "&:hover": {
                                            "&.shopNow": {
                                                color: "#C29958 !important",
                                                borderBottom: "2px solid #C29958"
                                            }
                                        }
                                    }}
                                    onClick={() => navigate("/shop")} >Shop Now</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6}>
                        <Box position={"relative"}>
                            <Box > <img src={p4} alt="" style={{ width: '100%' }} /></Box>
                            <Box position={"absolute"} top={"10%"} right={"7%"}  >
                                <Typography sx={{ color: "#777777" }} fontWeight={"600"}>NEW DESIGN</Typography>
                                <Typography fontWeight={"700"} fontSize={{ xs: "17px", md: "30px" }} display={{lg:"block",md:"block",sm:"block",xs:"flex"}} marginTop={"10px"}>Diamond<Typography fontWeight={"700"} fontSize={{ xs: "17px", md: "30px" }}>Jewelry</Typography></Typography>
                               
                                <Typography className='shopNow' marginTop={0.5} borderBottom={"2px solid black"} width={"76px"}
                                    sx={{
                                        transition: ".3s", "&:hover": {
                                            "&.shopNow": {
                                                color: "#C29958 !important",
                                                borderBottom: "2px solid #C29958"
                                            }
                                        }
                                    }}
                                    onClick={() => navigate("/shop")}>Shop Now</Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Products;

