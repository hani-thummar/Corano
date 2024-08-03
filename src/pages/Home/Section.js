import React from 'react';
import { Container, Grid, Box, IconButton, Typography, Button } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import slide1 from '../../assets/img/HomePage/Slide 1.webp'
import slide2 from '../../assets/img/HomePage/Slide 2.webp'
import slide3 from '../../assets/img/HomePage/Slide 3.webp'
import { useNavigate } from 'react-router-dom';

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        display: 'none',
        // borderRadius: '50%',
        position: 'absolute',
        top: '50%',
        right: '10px',
        transform: 'translateY(-50%)',
        width: '40px',
        height: '40px',
        zIndex: 1,
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
        left: '10px',
        transform: 'translateY(-50%)',
        width: '40px',
        height: '40px',
        zIndex: 1,
      }}
      className="prev-arrow"
    >
      <ArrowBackIosIcon />
    </IconButton>
  );
};

function ServicesLogo() {

  const navigate = useNavigate();

  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,          // Enable autoplay
    autoplaySpeed: 3000,     // Set autoplay speed (in milliseconds)
    waitForAnimate: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
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
  const slides = [
    {
      img: slide1,
      title: 'Grace Designer',
      subtitle: 'Jewelry',
      description: 'Rings, Occasion Pieces, Pandora & More.',
      buttonText: 'Read More',
      link: '/shop'
    },
    {
      img: slide2,
      title: 'Family Jewelry',
      subtitle: 'Collection',
      description: 'Designer Jewelry Necklaces-Bracelets-Earings',
      buttonText: 'Read More',
      link: '/shop'
    },
    {
      img: slide3,
      title: 'Diamonds Jewelry',
      subtitle: 'Collection',
      description: 'Shukra Yogam & Silver Power Silver Saving Schemes.',
      buttonText: 'Read More',
      link: '/shop'
    }
  ];


  return (
    <Box>
      
        <Grid item xs={12} sx={{overflow:"hidden"}}>
          <Box
            sx={{
              overflow:"hidden",
              position: 'relative',
              '&:hover .next-arrow, &:hover .prev-arrow': {
                display: 'block'
              },
            }}
          >
            <Slider {...settings}>
            {slides.map((slide, index) => (
              <Box key={index} sx={{ position: 'relative', border: 'none' }}>
                <img src={slide.img} alt={`slide-${index + 1}`} style={{ width: '100%' ,height:"80vh",backgroundSize:"contain" }} />
                <Box sx={{ position: 'absolute', top: { xs: '20%', sm: '30%' }, left: { xs: '10%', sm: index === 2 ? '60%' : '10%' } }}>
                  <Typography variant='h2' fontWeight={"500"} sx={{ fontSize: { lg:"60px",md:"60px",sm:"50px",xs:"30px" } }}>{slide.title}</Typography>
                  <Typography variant='h2' fontWeight={"500"} sx={{ fontSize: { lg:"60px",md:"60px",sm:"50px",xs:"30px" } }}>{slide.subtitle}</Typography>
                  <Typography color={"#222222"} marginTop={"10px"} sx={{ fontSize: { lg:"17px",md:"20px",sm:"20px",xs:"20px" } }}>{slide.description}</Typography>
                  <Box>
                    <Button 
                      className='btn' 
                      sx={{
                        borderRadius: "50px",
                        fontSize: "13px",
                        padding: "9px 25px",
                        marginTop: "38px",
                        backgroundColor: "#C29958",
                        border: "none",
                        color: "#fff",
                        textAlign: "center",
                        transition: ".4s",
                        "&:hover": {
                          backgroundColor: "#222222"
                        }
                      }}  
                      onClick={() => navigate(slide.link)}
                    >
                      {slide.buttonText}
                    </Button>
                  </Box>
                </Box>
              </Box>
            ))}
          </Slider>
          </Box>
        </Grid>
    </Box>
  );
}

export default ServicesLogo;