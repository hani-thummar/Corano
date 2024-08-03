import { Box, Container, Typography, Grid } from '@mui/material';
import React from 'react'
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import SupportIcon from '@mui/icons-material/Support';
import ReplyIcon from '@mui/icons-material/Reply';
import PaymentIcon from '@mui/icons-material/Payment';

function Parts() {
    return (
        <Box>
            <Container>
                <Typography variant='body2' sx={{textAlign:"center"}} borderBottom={"1px solid #efefef"} paddingTop={"80px"}
                    paddingBottom={"30px"} padding={"32px 0"} color={"#888"}>Check out "Corano - Multipurpose eCommerce Bootstrap 5 template" on #Envato by @Corano #Themeforest http://1.envato.market/9LbxW
                </Typography>

                <Box sx={{ paddingBottom: "80px" }}>
                    <Grid item xs={12} container spacing={2} marginTop={"50px"} >
                        <Grid item lg={3} md={6} sm={6} xs={12} sx={{ display: "flex", justifyContent: { lg: "center", md: "center", sm: "center", xs: "center" } }}>
                            <Box sx={{ display: { lg: "flex", sm: "flex", md: "flex", xs: "block" }, textAlign: {md:"start",xs:"center"} }}>
                                <Box >
                                    <ConnectingAirportsIcon sx={{ fontSize: "50px", color: "#C29958" }}></ConnectingAirportsIcon>
                                </Box>
                                <Box sx={{ marginLeft: "5px" }}>
                                    <Typography variant='body1' fontWeight={"600"}>Free Shipping</Typography>
                                    <Typography variant='body2' color={"#555555"} marginTop={"5px"}>Free shipping all order</Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item lg={3} md={6} sm={6} xs={12} display={"flex"} sx={{ justifyContent: { lg: "center", md: "center", sm: "center", xs: "center" } }}>
                            <Box sx={{ display: { lg: "flex", sm: "flex", md: "flex", xs: "block" }, textAlign: {md:"start",xs:"center"} }}>
                                <Box>
                                    <SupportIcon sx={{ fontSize: "35px", color: "#C29958" }}></SupportIcon>
                                </Box>
                                <Box sx={{ marginLeft: "5px" }}>
                                    <Typography variant='body1' fontWeight={"600"}>Support 24/7</Typography>
                                    <Typography variant='body2' color={"#555555"} marginTop={"5px"}>Support 24 hours a day</Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item lg={3} md={6} sm={6} xs={12} display={"flex"} sx={{ justifyContent: { lg: "center", md: "center", sm: "center", xs: "center" } }}>
                            <Box sx={{ display: { lg: "flex", sm: "flex", md: "flex", xs: "block" }, textAlign: {md:"start",xs:"center"} }}>
                                <Box>
                                    <ReplyIcon sx={{ fontSize: "35px", color: "#C29958" }}></ReplyIcon>
                                </Box>
                                <Box sx={{ marginLeft: "5px" }}>
                                    <Typography variant='body1' fontWeight={"600"}>Money Return</Typography>
                                    <Typography variant='body2' color={"#555555"} marginTop={"5px"}>30 days for free return</Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item lg={3} md={6} sm={6} xs={12} display={"flex"} sx={{ justifyContent: { lg: "center", md: "center", sm: "center", xs: "center" } }}>
                            <Box sx={{display:{lg:"flex" , sm:"flex", md:"flex", xs:"block"} ,textAlign: {md:"start",xs:"center"}}}>
                                <Box>
                                    <PaymentIcon sx={{ fontSize: "35px", color: "#C29958" }}></PaymentIcon>
                                </Box>
                                <Box sx={{ marginLeft: "5px" }}>
                                    <Typography variant='body1' fontWeight={"600"}>100% Payment Secure</Typography>
                                    <Typography variant='body2' color={"#555555"} marginTop={"5px"}>We ensure secure payment</Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}

export default Parts;

