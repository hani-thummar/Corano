import { Box, Container, Typography, Grid } from '@mui/material';
import React from 'react'
import FlightIcon from '@mui/icons-material/Flight';
import SupportIcon from '@mui/icons-material/Support';
import ReplyIcon from '@mui/icons-material/Reply';
import PaymentIcon from '@mui/icons-material/Payment';

function Parts() {
    return (
        <Box>
            <Container>
                <Typography variant='body2' marginLeft={"100px"} borderBottom={"1px solid #efefef"}
                paddingBottom={"30px"}>Check out "Corano - Multipurpose eCommerce Bootstrap 5 template" on #Envato by @Corano #Themeforest http://1.envato.market/9LbxW</Typography>

                <Box display={"flex"}>
                <Grid container spacing={2} marginTop={"50px"}>
                    <Grid item xs={3}><FlightIcon sx={{fontSize:"40px"}}></FlightIcon>
                        <Typography variant='body1'>Free Shipping</Typography>
                        <Typography variant='body2' color={"#555555"}>Free shipping all order</Typography>
                    </Grid>
                    <Grid item xs={3}><SupportIcon></SupportIcon></Grid>
                    <Grid item xs={3}><ReplyIcon></ReplyIcon></Grid>
                    <Grid item xs={3}><PaymentIcon></PaymentIcon></Grid>
                </Grid>
                </Box>
            </Container>
        </Box>
    )
}

export default Parts;
