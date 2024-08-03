import React from 'react';
import { Container, Grid, Box, IconButton, Typography } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import b1 from '../../assets/img/HomePage/b - 1.webp';
import b2 from '../../assets/img/HomePage/b - 2.webp';
import b3 from '../../assets/img/HomePage/b - 3.webp';
import b4 from '../../assets/img/HomePage/b - 4.webp';
import b5 from '../../assets/img/HomePage/b - 5.webp';
import transitions from '@material-ui/core/styles/transitions';

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        display: 'none',
        borderRadius: '50%',
        position: 'absolute',
        top: '50%',
        right: '10px',
        transform: 'translateY(-50%)',
        width: '40px',
        height: '40px',
        zIndex: 1,
        "&:hover": {
                    "&.next-arrow": {
                            color: '#C29958'
                        }}
      }}
      className="next-arrow"
    >
      <ArrowForwardIosIcon />
    </IconButton>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        display: 'none',
        // borderRadius: '50%',
        position: 'absolute',
        top: '50%',
        left: '-5px',
        transform: 'translateY(-50%)',
        width: '40px',
        height: '40px',
        zIndex: 1,
        "&:hover": {
                    "&.prev-arrow": {
                            color: '#C29958'
                        }}
      }}
      className="prev-arrow"
    >
      <ArrowBackIosIcon />
    </IconButton>
  );
};

function Blog() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,          // Enable autoplay
    autoplaySpeed: 3000,     // Set autoplay speed (in milliseconds)
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (

    
    <Box sx={{ paddingBottom: '80px' }}>
        <Container>
                <Box>
                    <Typography className='product' variant='h4' sx={{
                        textAlign: "center",
                        transition: ".4s", "&:hover": {
                            "&.product": {
                                color: '#C29958'
                            }
                        }
                    }}>Latest Blog</Typography>
                    <Typography variant='body2' sx={{ textAlign: "center", margin: "5px", marginBottom: "10px",marginBottom:"40px" }} >
                        There are latest blog posts
                    </Typography>
                </Box>

            </Container>
      <Container
        sx={{
          position: 'relative',
          '&:hover .next-arrow, &:hover .prev-arrow': {
            display: 'block'
          },
        }}
      >
        <Grid item xs={12}>
          <Slider {...settings}>
            <Box >
              <img src={b1} alt="logo1" style={{ width: '95%', height: '95%' }} />
              <Box sx={{display:"flex", marginTop:"10px"}}>
                <Typography sx={{color:"#777", fontSize:"15px"}}>25/03/2019 | </Typography>
                <Typography sx={{color:"#c29958", fontSize:"15px", marginLeft:"3px"}}>
                    Corano
                </Typography>
              </Box>
                <Box>
                    <Typography variant='body1' sx={{fontSize:"19px", fontWeight:"600",marginTop:"7px"}}>Children Left Home Alone For 4 Days In TV series Experiment</Typography>
                </Box>
            </Box>
            <Box sx={{gap:"10px"}}>
              <img src={b2} alt="logo2" style={{ width: '95%', height: '95%' }} />
              <Box sx={{display:"flex", marginTop:"10px"}}>
                <Typography sx={{color:"#777", fontSize:"15px"}}>25/03/2019 | </Typography>
                <Typography sx={{color:"#c29958", fontSize:"15px", marginLeft:"3px"}}>
                    Corano
                </Typography>
              </Box>
                <Box>
                    <Typography variant='body1' sx={{fontSize:"19px", fontWeight:"600",marginTop:"7px"}}>Lotto Winner Offering Up Money To Any Man That Will Date Her</Typography>
                </Box>
            </Box>
            <Box>
              <img src={b3} alt="logo3" style={{ width: '95%', height: '95%' }} />
              <Box sx={{display:"flex", marginTop:"10px"}}>
                <Typography sx={{color:"#777", fontSize:"15px"}}>25/03/2019 | </Typography>
                <Typography sx={{color:"#c29958", fontSize:"15px", marginLeft:"3px"}}>
                    Corano
                </Typography>
              </Box>
                <Box>
                    <Typography variant='body1' sx={{fontSize:"19px", fontWeight:"600",marginTop:"7px"}}>Lotto Winner Offering Up Money To Any Man That Will Date Her</Typography>
                </Box>
            </Box>
            <Box>
              <img src={b4} alt="logo4" style={{ width: '95%', height: '95%' }} />
              <Box sx={{display:"flex", marginTop:"10px"}}>
                <Typography sx={{color:"#777", fontSize:"15px"}}>25/03/2019 | </Typography>
                <Typography sx={{color:"#c29958", fontSize:"15px", marginLeft:"3px"}}>
                    Corano
                </Typography>
              </Box>
                <Box>
                    <Typography variant='body1' sx={{fontSize:"19px", fontWeight:"600",marginTop:"7px",marginTop:"7px"}}>romantic Love Stories Of Hollywoodâ€™s Biggest Celebrities</Typography>
                </Box>
            </Box>
            <Box>
              <img src={b5} alt="logo5" style={{ width: '95%', height: '95%' }} />
              <Box sx={{display:"flex", marginTop:"10px"}}>
                <Typography sx={{color:"#777", fontSize:"15px"}}>25/03/2019 | </Typography>
                <Typography sx={{color:"#c29958", fontSize:"15px", marginLeft:"3px"}}>
                    Corano
                </Typography>
              </Box>
                <Box>
                    <Typography variant='body1' sx={{fontSize:"19px", fontWeight:"600", marginTop:"7px"}}>Celebrity Daughter Opens Up About Having Her Eye Color Changed</Typography>
                </Box>
            </Box>
          </Slider>
        </Grid>
      </Container>
    </Box>
  );
}

export default Blog;