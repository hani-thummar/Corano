import React from 'react';
import { Grid, Box,Typography } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import j1 from '../../assets/img/HomePage/j-1.webp'
import j2 from '../../assets/img/HomePage/j-2.webp'
import j3 from '../../assets/img/HomePage/j-3.webp'
import j4 from '../../assets/img/HomePage/j-4.webp'
import j5 from '../../assets/img/HomePage/j-5.webp'

function Jwellary() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,          // Enable autoplay
    autoplaySpeed: 3000,     // Set autoplay speed (in milliseconds)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Box sx={{ paddingBottom: "100px" }}>

      <Grid item xs={12} sx={{overflowX:"hidden",}}>
        <Slider {...settings} >
          <Box>
            <Grid className='grid' item xs={3} sx={{ position: "relative", width: "100%" }}>
              <img src={j1} alt="" style={{ width: "95%", height: "95%" }} />
              <Box sx={{ position: "absolute", top: "80%", left: "7%" }}>
                <Typography sx={{ fontWeight: "700", fontSize: "20px" }}>PEARLS</Typography>
              </Box>
            </Grid>
          </Box>
          <Box>
            <Grid className='grid' item xs={3} sx={{ position: "relative", width: "100%" }}>
            <img src={j2} alt="logo2" style={{ width: "95%", height: "95%" }} />
              <Box sx={{ position: "absolute", top: "80%", left: "20%" }}>
                <Typography sx={{ fontWeight: "700", fontSize: "20px" }}>BRACELATES</Typography>
              </Box>
            </Grid>
          </Box>
          <Box>
            <Grid className='grid' item xs={3} sx={{ position: "relative", width: "100%" }}>
            <img src={j3} alt="logo3" style={{ width: "95%", height: "95%" }} />
              <Box sx={{ position: "absolute", top: "80%", left: "10%" }}>
                <Typography sx={{ fontWeight: "700", fontSize: "20px" }}>EARRINGS</Typography>
              </Box>
            </Grid>
          </Box>
          <Box>
            <Grid className='grid' item xs={3} sx={{ position: "relative", width: "100%" }}>
            <img src={j4} alt="logo4" style={{ width: "95%", height: "95%" }} />
              <Box sx={{ position: "absolute", top: "80%", left: "7%" }}>
                <Typography sx={{ fontWeight: "700", fontSize: "20px" }}>NECJLACES</Typography>
              </Box>
            </Grid>
          </Box>
          <Box>
            <Grid className='grid' item xs={3} sx={{ position: "relative", width: "100%" }}>
            <img src={j5} alt="logo5" style={{ width: "95%", height: "95%" }} />
              <Box sx={{ position: "absolute", top: "80%", left: "10%" }}>
                <Typography sx={{ fontWeight: "700", fontSize: "20px" }}>RINGS</Typography>
              </Box>
            </Grid>
          </Box>
        </Slider>
      </Grid>
    </Box>
  );
}

export default Jwellary;