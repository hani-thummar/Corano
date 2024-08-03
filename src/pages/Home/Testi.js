import { Typography, Box, Grid, Container } from '@mui/material'
import React from 'react'
import testi from '../../assets/img/HomePage/testi.jpg'
import testiimg from '../../assets/img/HomePage/testiimg.webp'
import testiimg2 from '../../assets/img/HomePage/testiimg2.webp'
import testiimg3 from '../../assets/img/HomePage/testiimg-3.webp'
import StarOutlineIcon from '@mui/icons-material/StarOutline';

function Testi() {
  return (
    <Box py={10} sx={{backgroundImage:`url("https://htmldemo.net/corano/corano/assets/img/testimonial/testimonials-bg.jpg")`, width:"100%", objectFit:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"}}>
      <Container>
        <Box>
            <Box>
              <Typography fontWeight={"700"} variant='h4' textAlign={"center"}>
                Testimonials
              </Typography>
              <Typography textAlign={"center"} marginTop={"5px"}>What they say</Typography>
            </Box>
            <Box sx={{ marginTop: "30px", justifyContent: "center", display: "flex", alignItems: "center" }}>
              <img src={testiimg} alt="" style={{ height: "70px", width: "70px", marginRight: "15px" }} />
              <img src={testiimg2} alt="" style={{ marginRight: "15px" }} />
              <img src={testiimg3} alt="" style={{ height: "70px", width: "70px" }} />
            </Box>
            <Box Container>
              <Typography sx={{ display: "inline-block", textAlign: "center", width: "100%", color: "#555555", fontSize: "15px", marginTop: "20px" }}>Vivamus a lobortis ipsum, vel condimentum magna. Etiam id turpis tortor. Nunc scelerisque, nisi a blandit varius, nunc purus venenatis  ligula, <br />sed venenatis orci augue nec sapien. Cum sociis natoque</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", color: "#F8CB56", marginTop: "40px" }}>
              <StarOutlineIcon></StarOutlineIcon>
              <StarOutlineIcon></StarOutlineIcon>
              <StarOutlineIcon></StarOutlineIcon>
              <StarOutlineIcon></StarOutlineIcon>
              <StarOutlineIcon></StarOutlineIcon>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "10px" }}>
              <Typography sx={{ fontWeight: "700", fontSize: "17px" }}>Maria Mora</Typography>
            </Box>
          </Box>
      </Container>
    </Box>
  )
}

export default Testi


  ;








