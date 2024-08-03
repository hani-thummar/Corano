import { Box, Container, Typography,IconButton,Grid } from '@mui/material'
import Slider from 'react-slick';
import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import productimg1 from '../../assets/img/Product/productimg1.webp'
import productimg2 from '../../assets/img/Product/productimg2.webp'
import productimg3 from '../../assets/img/Product/productimg3.webp'
import productimg4 from '../../assets/img/Product/productimh4.webp'
import productimg5 from '../../assets/img/Product/productimg5.webp'


const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <IconButton
        onClick={onClick}
        sx={{
          display: 'none',
          borderRadius: '50%',
          position: 'absolute',
          top: '40%',
          right: '15px',
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
          borderRadius: '50%',
          position: 'absolute',
          top: '40%',
          left: '15px',
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

function Related() {


    const settings = {
        dots: false,
        infinite: true,
        speed: 900,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
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
        <Box>
            <Container>
                <Box sx={{paddingTop:"80px"}}>
                    <Typography className='product' variant='h4' sx={{textAlign: "center",transition: ".4s", "&:hover": {"&.product": {color: '#C29958'}}}}>
                        Related Products
                    </Typography>
                    <Typography variant='body2' sx={{ textAlign: "center", margin: "5px", marginBottom: "10px", marginBottom: "40px" }} >
                        Add related products to weekly lineup
                    </Typography>
                </Box>

                <Box sx={{ paddingBottom: "80px" }}>
          <Container
            sx={{
              position: 'relative',
              '&:hover .next-arrow, &:hover .prev-arrow': {
                display: 'block'
              }
            }}
          >
            <Grid item xs={12} sx={12} lg={3} md={6} sm={6} xxl={12} whiteSpace={"nowrap"}>
              <Slider {...settings}>
                <Box sx={{
                  marginTop: "30px", position: "relative", marginBottom: "10px",
                  "&:hover": {
                    "& .shoBtn": {
                      opacity: "1",
                      visibility: "visible",
                      transform: "translateY(-80%)",
                      transition: ".  3s"
                    }
                  }
                }}>
                  <img src={productimg1} alt="logo1" style={{ width: "93%", height: "93%", textAlign: "center" }} />
                  <Box sx={{ position: "absolute", top: "5%", left: "5%" }}>
                    <Box sx={{ borderRadius: "20px", fontWeight: "400", padding: "2px 12px", color: "white", background: "#c29958" }}>Sale</Box>
                    <Box sx={{ borderRadius: "20px", fontWeight: "300", padding: "2px 12px", color: "white", marginTop: "5px", background: "#000" }}>New</Box>
                  </Box>
                  <Box className='mony' sx={{ width: "93%" }}>
                    <Typography className='hover' sx={{
                      marginTop: "7px", marginLeft: "15px", textAlign: "center", fontSize: "15px", color: "#777777", "&:hover": {
                        transition: ".3s", "&.hover": {
                          color: "#c29958"
                        }
                      }
                    }}>
                      Mony
                    </Typography>
                  </Box>
                  <Box sx={{ textAlign: "center", marginTop: "17px" }}>
                    <button style={{ borderRadius: "50%", height: "15px", backgroundColor: "#B0C4DE", width: "15px", border: "none", marginLeft: "10px" }}></button>
                    <button style={{ borderRadius: "50%", height: "15px", border: "none", backgroundColor: "#AA9E78", width: "15px", marginLeft: "10px" }}></button>
                    <button style={{ borderRadius: "50%", height: "15px", border: "none", backgroundColor: "#808080", width: "15px", marginLeft: "10px" }}></button>
                    <button style={{ borderRadius: "50%", height: "15px", border: "none", backgroundColor: "#964B00", width: "15px", marginLeft: "10px" }}></button>
                  </Box>
                  <Box sx={{ textAlign: "center", fontSize: "18px", marginTop: "10px" }}>
                    <Typography className='hover' sx={{
                      "&:hover": {
                        transition: ".3s", "&.hover": {
                          color: "#c29958"
                        }
                      }
                    }}>Handmade Golden Necklace</Typography>
                  </Box>
                  <Box sx={{ alignItems: "center", justifyContent: "center", fontSize: "20px", marginTop: "10px", color: "#c29958", display: "flex" }}>
                    <Typography>$50.00</Typography>
                    <Box color='#999999' marginLeft="5px" >
                      <del>$80.00</del>
                    </Box>
                  </Box>
                </Box>
                <Box sx={{
                  marginTop: "30px", position: "relative", marginBottom: "10px",
                  "&:hover": {
                    "& .shoBtn": {
                      opacity: "1",
                      visibility: "visible",
                      transform: "translateY(-80%)",
                      transition: ".  3s"
                    }
                  }
                }}>
                  <img src={productimg2} alt="logo2" style={{ width: "93%", height: "93%" }} />
                  <Box sx={{ position: "absolute", top: "5%", left: "5%" }}>
                    <Box sx={{ borderRadius: "20px", fontWeight: "400", padding: "2px 12px", color: "white", background: "#c29958" }}>New</Box>
                  </Box>
                  <Box className='mony' sx={{ width: "93%" }}>
                    <Typography className='hover' sx={{
                      marginTop: "7px", marginLeft: "15px", textAlign: "center", fontSize: "15px", color: "#777777", "&:hover": {
                        transition: ".3s", "&.hover": {
                          color: "#c29958"
                        }
                      }
                    }}>
                      Diamond
                    </Typography>
                  </Box>
                  <Box sx={{ textAlign: "center", marginTop: "17px" }}>
                    <button style={{ borderRadius: "50%", height: "15px", backgroundColor: "#B0C4DE", width: "15px", border: "none", marginLeft: "10px" }}></button>
                    <button style={{ borderRadius: "50%", height: "15px", border: "none", backgroundColor: "#AA9E78", width: "15px", marginLeft: "10px" }}></button>
                    <button style={{ borderRadius: "50%", height: "15px", border: "none", backgroundColor: "#808080", width: "15px", marginLeft: "10px" }}></button>
                    <button style={{ borderRadius: "50%", height: "15px", border: "none", backgroundColor: "#964B00", width: "15px", marginLeft: "10px" }}></button>
                  </Box>
                  <Box sx={{ textAlign: "center", fontSize: "18px", marginTop: "10px" }}>
                    <Typography className='hover' sx={{
                      "&:hover": {
                        transition: ".3s", "&.hover": {
                          color: "#c29958"
                        }
                      }
                    }}>Perfect Diamond Jewelry</Typography>
                  </Box>
                  <Box sx={{ alignItems: "center", justifyContent: "center", fontSize: "20px", marginTop: "10px", color: "#c29958", display: "flex" }}>
                    <Typography>$99.00</Typography>
                  </Box>
                </Box>
                <Box sx={{
                  marginTop: "30px", position: "relative", marginBottom: "10px",
                  "&:hover": {
                    "& .shoBtn": {
                      opacity: "1",
                      visibility: "visible",
                      transform: "translateY(-80%)",
                      transition: ".  3s"
                    }
                  }
                }}>
                  <img src={productimg3} alt="logo3" style={{ width: "93%", height: "93%" }} />
                  <Box sx={{ position: "absolute", top: "5%", left: "5%" }}>
                    <Box sx={{ borderRadius: "20px", fontWeight: "400", padding: "2px 12px", color: "white", background: "#c29958" }}>Sale</Box>
                    <Box sx={{ borderRadius: "20px", fontWeight: "300", padding: "2px 12px", color: "white", marginTop: "5px", background: "#000" }}>15%</Box>
                  </Box>
                  <Box className='mony' sx={{ width: "93%" }}>
                    <Typography className='hover' sx={{
                      marginTop: "7px", marginLeft: "15px", textAlign: "center", fontSize: "15px", color: "#777777", "&:hover": {
                        transition: ".3s", "&.hover": {
                          color: "#c29958"
                        }
                      }
                    }}>
                      Sliver
                    </Typography>
                  </Box>
                  <Box sx={{ textAlign: "center", marginTop: "17px" }}>
                    <button style={{ borderRadius: "50%", height: "15px", backgroundColor: "#B0C4DE", width: "15px", border: "none", marginLeft: "10px" }}></button>
                    <button style={{ borderRadius: "50%", height: "15px", border: "none", backgroundColor: "#AA9E78", width: "15px", marginLeft: "10px" }}></button>
                    <button style={{ borderRadius: "50%", height: "15px", border: "none", backgroundColor: "#808080", width: "15px", marginLeft: "10px" }}></button>
                    <button style={{ borderRadius: "50%", height: "15px", border: "none", backgroundColor: "#964B00", width: "15px", marginLeft: "10px" }}></button>
                  </Box>
                  <Box sx={{ textAlign: "center", fontSize: "18px", marginTop: "10px" }}>
                    <Typography className='hover' sx={{
                      "&:hover": {
                        transition: ".3s", "&.hover": {
                          color: "#c29958"
                        }
                      }
                    }}>Diamond Exclusive Ornament</Typography>
                  </Box>
                  <Box sx={{ alignItems: "center", justifyContent: "center", fontSize: "20px", marginTop: "10px", color: "#c29958", display: "flex" }}>
                    <Typography>$55.00</Typography>
                    <Box color='#999999' marginLeft="5px" >
                      <del>$75.00</del>
                    </Box>
                  </Box>
                </Box>
                <Box sx={{
                  marginTop: "30px", position: "relative", marginBottom: "10px",
                  "&:hover": {
                    "& .shoBtn": {
                      opacity: "1",
                      visibility: "visible",
                      transform: "translateY(-80%)",
                      transition: ".  3s"
                    }
                  }
                }}>
                  <img src={productimg4} alt="logo4" style={{ width: "93%", height: "93%" }} />
                  <Box sx={{ position: "absolute", top: "5%", left: "5%" }}>
                    <Box sx={{ borderRadius: "20px", fontWeight: "400", padding: "2px 12px", color: "white", background: "#c29958" }}>New</Box>
                    <Box sx={{ borderRadius: "20px", fontWeight: "300", padding: "2px 12px", color: "white", marginTop: "5px", background: "#000" }}>20%</Box>
                  </Box>
                  <Box className='mony' sx={{ width: "93%" }}>
                    <Typography className='hover' sx={{
                      marginTop: "7px", marginLeft: "15px", textAlign: "center", fontSize: "15px", color: "#777777", "&:hover": {
                        transition: ".3s", "&.hover": {
                          color: "#c29958"
                        }
                      }
                    }}>
                      Mony
                    </Typography>
                  </Box>
                  <Box sx={{ textAlign: "center", marginTop: "17px" }}>
                    <button style={{ borderRadius: "50%", height: "15px", backgroundColor: "#B0C4DE", width: "15px", border: "none", marginLeft: "10px" }}></button>
                    <button style={{ borderRadius: "50%", height: "15px", border: "none", backgroundColor: "#AA9E78", width: "15px", marginLeft: "10px" }}></button>
                    <button style={{ borderRadius: "50%", height: "15px", border: "none", backgroundColor: "#808080", width: "15px", marginLeft: "10px" }}></button>
                    <button style={{ borderRadius: "50%", height: "15px", border: "none", backgroundColor: "#964B00", width: "15px", marginLeft: "10px" }}></button>
                  </Box>
                  <Box sx={{ textAlign: "center", fontSize: "18px", marginTop: "10px" }}>
                    <Typography className='hover' sx={{
                      "&:hover": {
                        transition: ".3s", "&.hover": {
                          color: "#c29958"
                        }
                      }
                    }}>Diamond Exclusive Ornament</Typography>
                  </Box>
                  <Box sx={{ alignItems: "center", justifyContent: "center", fontSize: "20px", marginTop: "10px", color: "#c29958", display: "flex" }}>
                    <Typography>$60.00</Typography>
                    <Box color='#999999' marginLeft="5px" >
                      <del>$70.00</del>
                    </Box>
                  </Box>
                </Box>
                <Box sx={{
                  marginTop: "30px", position: "relative", marginBottom: "10px",
                  "&:hover": {
                    "& .shoBtn": {
                      opacity: "1",
                      visibility: "visible",
                      transform: "translateY(-80%)",
                      transition: ".  3s"
                    }
                  }
                }}>
                  <img src={productimg5} alt="logo4" style={{ width: "93%", height: "93%" }} />
                  <Box sx={{ position: "absolute", top: "5%", left: "5%" }}>
                    <Box sx={{ borderRadius: "20px", fontWeight: "400", padding: "2px 12px", color: "white", background: "#c29958" }}>Sale</Box>
                    <Box sx={{ borderRadius: "20px", fontWeight: "300", padding: "2px 12px", color: "white", marginTop: "5px", background: "#000" }}>New</Box>
                  </Box>
                  <Box className='mony' sx={{ width: "93%" }}>
                    <Typography className='hover' sx={{
                      marginTop: "7px", marginLeft: "15px", textAlign: "center", fontSize: "15px", color: "#777777", "&:hover": {
                        transition: ".3s", "&.hover": {
                          color: "#c29958"
                        }
                      }
                    }}>
                      Gold
                    </Typography>
                  </Box>
                  <Box sx={{ textAlign: "center", marginTop: "17px" }}>
                    <button style={{ borderRadius: "50%", height: "15px", backgroundColor: "#B0C4DE", width: "15px", border: "none", marginLeft: "10px" }}></button>
                    <button style={{ borderRadius: "50%", height: "15px", border: "none", backgroundColor: "#AA9E78", width: "15px", marginLeft: "10px" }}></button>
                    <button style={{ borderRadius: "50%", height: "15px", border: "none", backgroundColor: "#808080", width: "15px", marginLeft: "10px" }}></button>
                    <button style={{ borderRadius: "50%", height: "15px", border: "none", backgroundColor: "#964B00", width: "15px", marginLeft: "10px" }}></button>
                  </Box>
                  <Box sx={{ textAlign: "center", fontSize: "18px", marginTop: "10px" }}>
                    <Typography className='hover' sx={{
                      "&:hover": {
                        transition: ".3s", "&.hover": {
                          color: "#c29958"
                        }
                      }
                    }}>Perfect Diamond Jewelry</Typography>
                  </Box>
                  <Box sx={{ alignItems: "center", justifyContent: "center", fontSize: "20px", marginTop: "10px", color: "#c29958", display: "flex" }}>
                    <Typography>$60.00</Typography>
                    <Box color='#999999' marginLeft="5px" >
                      <del>$70.00</del>
                    </Box>
                  </Box>
                </Box>
              </Slider>
            </Grid>
          </Container>
                </Box>
                
                
            </Container>
        </Box>
    )
}

export default Related
