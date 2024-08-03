// import React, { useState } from 'react';
// import { Container, Grid, Box, IconButton } from '@mui/material';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import brand1 from '../assets/img/HomePage/brand1.webp';
// import brand2 from '../assets/img/HomePage/brand2.webp';
// import brand3 from '../assets/img/HomePage/brand3.webp';
// import brand4 from '../assets/img/HomePage/brand4.webp';
// import brand5 from '../assets/img/HomePage/brand5.webp';

// function Brandlogo() {
//   const [showArrows, setShowArrows] = useState(false);

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     arrows: showArrows,
//     prevArrow: <CustomPrevArrow />,
//     nextArrow: <CustomNextArrow />,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//     ]
//   };

//   return (
//     <Container>
//     <Box 
//       sx={{ paddingBottom: "100px" }} 
//       onMouseEnter={() => setShowArrows(true)} 
//       onMouseLeave={() => setShowArrows(false)}
//     >
//       <Container>
//         <Grid item xs={12}>
//           <Slider {...settings}>
//             <Box>
//               <img src={brand1} alt="logo1" style={{ width: "90%", height: "90%" }} />
//             </Box>
//             <Box>
//               <img src={brand2} alt="logo2" style={{ width: "90%", height: "90%" }} />
//             </Box>
//             <Box>
//               <img src={brand3} alt="logo3" style={{ width: "90%", height: "90%" }} />
//             </Box>
//             <Box>
//               <img src={brand4} alt="logo4" style={{ width: "90%", height: "90%" }} />
//             </Box>
//             <Box>
//               <img src={brand5} alt="logo5" style={{ width: "90%", height: "90%" }} />
//             </Box>
//           </Slider>
//         </Grid>
//       </Container>
//     </Box>
//     </Container>
//   );
// }

// function CustomPrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <IconButton
//       className={className}
//       style={{ ...style, display: "block", color: "black" }}
//       onClick={onClick}
//     >
//       <ArrowBackIosIcon />
//     </IconButton>
//   );
// }

// function CustomNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <IconButton
//       className={className}
//       style={{ ...style, display: "block", color: "black" }}
//       onClick={onClick}
//     >
//       <ArrowForwardIosIcon />
//     </IconButton>
//   );
// }

// export default Brandlogo;

import React from 'react';
import { Container, Grid, Box, IconButton, Typography } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import brand1 from '../../assets/img/HomePage/brand1.webp'
import brand2 from '../../assets/img/HomePage/brand2.webp'
import brand3 from '../../assets/img/HomePage/brand3.webp'
import brand4 from '../../assets/img/HomePage/brand4.webp'
import brand5 from '../../assets/img/HomePage/brand5.webp'

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
    slidesToShow: 5,
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
          slidesToShow: 3,
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

    <Box sx={{paddingBottom:"80px"}}>
      <Container
        sx={{
          position: 'relative',
          '&:hover .next-arrow, &:hover .prev-arrow': {
            display: 'block'
          },
        }}
      >
        <Grid item xs={12} sx={{borderTop:"1px solid #efefef",borderBottom:"1px solid #efefef",padding:"30px 0"}}>
          <Slider {...settings}>
            <Box >
              <img src={brand1} alt="logo1" style={{ width: '95%', height: '95%' }} />
            </Box>
            <Box >
              <img src={brand2} alt="logo2" style={{ width: '95%', height: '95%' }} />
            </Box>
            <Box>
              <img src={brand3} alt="logo3" style={{ width: '95%', height: '95%' }} />
            </Box>
            <Box>
              <img src={brand4} alt="logo4" style={{ width: '95%', height: '95%' }} />
            </Box>
            <Box>
              <img src={brand5} alt="logo5" style={{ width: '95%', height: '95%' }} />
            </Box>
          </Slider>
        </Grid>
      </Container>
    </Box>
  );
}

export default Blog;