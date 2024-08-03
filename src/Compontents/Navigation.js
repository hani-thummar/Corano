import { Box, Toolbar, Typography, button, Drawer, IconButton, Container, ListItem, Grid, ListItemText, Divider, List } from '@mui/material'
// import React from 'react'
import * as React from 'react';
import img1 from "../assets/img/HomePage/logo.webp"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import megamenu from '../assets/img/HomePage/megamenu.webp'
import megamenu2 from '../assets/img/HomePage/megamenu2.webp'
import "../index.css"
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';


function Navigation(props) {

  const drawerWidth = 240;
  const navItems = ['Home', 'Pages', 'Shop', 'Blog', 'Contact Us'];
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate()
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'end', padding: "10px" }}>
      <CloseIcon  />
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding sx={{ borderBottom: "1px solid #3333", textAlign: "center", padding: "10px" }}>
            <Typography variant="h5" fontWeight={"600px"} >
              <ListItemText primary={item} />
            </Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: { lg: "flex", md: "flex", sm: "none", xs: "none" }, justifyContent: { lg: "space-between", md: "space-between" }, borderBottom: "1px solid #efefef" }}>
        <Typography sx={{ color: "#555555", padding: "5px 0", color: "#555555", fontSize: "14px" }}>Welcome to Corano Jewelry online store</Typography>
        <Box sx={{ display: "flex" }}>
          <Typography sx={{
            display: "flex", position: "relative", justifyContent: "center", alignItems: "center", marginRight: "30px", color: "#555555", fontSize: "14px", "&:hover": {
              "& .country": {
                visibility: "visible",
                opacity: "1"
              }
            }
          }}>$ Currency <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
            <Typography className='country' sx={{ position: "absolute", top: "100%", left: "-50px", opacity: "0", visibility: "hidden", backgroundColor: "#fff", border: "1px solid #EFEFEF", padding: "13px 65px 13px 13px" }}>
              <Typography sx={{ "&:hover": { transition: ".3s", color: "#c29958" }, fontSize: "14px" }}>$USD</Typography>
              <Typography sx={{ margin: "5px 0 0 0", "&:hover": { transition: ".3s", color: "#c29958" }, fontSize: "14px" }}>$EURO</Typography>
            </Typography>

          </Typography>
          <Typography sx={{
            display: "flex", position: "relative", justifyContent: "center", alignItems: "center", marginRight: "30px", color: "#555555", fontSize: "14px", "&:hover": {
              "& .country": {
                visibility: "visible",
                opacity: "1"
              }
            }
          }}>🚩 English <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
            <Typography className='country' sx={{ position: "absolute", top: "100%", zIndex: "1", left: "-50px", opacity: "0", visibility: "hidden", backgroundColor: "#fff", border: "1px solid #EFEFEF", padding: "13px 65px 13px 13px" }}>
              <Typography sx={{ "&:hover": { transition: ".3s", color: "#c29958" }, fontSize: "14px" }}>English</Typography>
              <Typography sx={{ margin: "5px 0 0 0", "&:hover": { transition: ".3s", color: "#c29958" }, fontSize: "14px" }}>French</Typography>
            </Typography>

          </Typography>
        </Box>
      </Box>

      <Container maxWidth={"xl"}>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Typography onClick={() => navigate("/")}><img src={img1} alt="" /></Typography>

          <Box sx={{ display: { lg: "flex", md: "flex", sm: "none", xs: "none" }, padding: "0 20px" }}>
            <Typography display={"flex"} alignItems={"center"} sx={{ position: "relative" }}>
              <Typography className='menu' fontFamily={"Lato, sans-serif"}
                sx={{
                }}>
                <Box sx={{
                  position: "relative", padding: "20px 10px", zIndex: "1", whiteSpace: "nowrap", display: "flex", color: "#C29958", "&:hover": {
                    "& .subMenu": { opacity: "1", visibility: "visible" }
                  }
                }} onClick={() => navigate("/")}>
                  Home
                  <KeyboardArrowDownIcon ></KeyboardArrowDownIcon>
                  <Box className="subMenu" sx={{ position: "absolute", top: "100%", left: "0", opacity: "0", backgroundColor: "#fff", color: "#555555", width: "250%", visibility: "hidden" }}>
                    <Typography sx={{ borderBottom: "1px dashed #efefef", padding: "10px 0px 10px 15px" }}>
                      <Typography fontFamily={"Lato, sans-serif"} sx={{
                        "&:hover": {
                          transition: ".3s",
                          color: "#C29958"
                        }
                      }}>Home Version 01
                      </Typography>
                    </Typography>
                    <Typography fontFamily={"Lato, sans-serif"} sx={{
                      borderBottom: "1px dashed #efefef", padding: "10px 0px 10px 15px", "&:hover": {
                        transition: ".3s",
                        color: "#C29958"
                      }
                    }}>Home Version 02
                    </Typography>
                    <Typography fontFamily={"Lato, sans-serif"} sx={{
                      borderBottom: "1px dashed #efefef", padding: "10px 0px 10px 15px", "&:hover": {
                        transition: ".3s",
                        color: "#C29958"
                      }
                    }}>Home Version 03
                    </Typography>
                    <Typography fontFamily={"Lato, sans-serif"} sx={{
                      borderBottom: "1px dashed #efefef", padding: "10px 0px 10px 15px", "&:hover": {
                        transition: ".3s",
                        color: "#C29958"
                      }
                    }}>Home Version 04
                    </Typography>
                    <Typography fontFamily={"Lato, sans-serif"} sx={{
                      borderBottom: "1px dashed #efefef", padding: "10px 0px 10px 15px", "&:hover": {
                        transition: ".3s",
                        color: "#C29958"
                      }
                    }}>Home Version 05
                    </Typography>
                    <Typography fontFamily={"Lato, sans-serif"} sx={{
                      padding: "10px 0px 10px 15px", "&:hover": {
                        transition: ".3s",
                        color: "#C29958"
                      }
                    }}>Home Version 06
                    </Typography>
                  </Box>
                </Box>
              </Typography>
              <Typography className='menu' fontFamily={"Lato, sans-serif"}><Box sx={{
                position: "relative", zIndex: "1", whiteSpace: "nowrap", display: "flex", padding: "20px 10px",
                "&:hover": {
                  color: "#C29958", transition: ".3s",
                  "& .subMenu": { opacity: "1", visibility: "visible" }
                }
              }}>
                Pages
                <KeyboardArrowDownIcon ></KeyboardArrowDownIcon>
                <Box className="subMenu" sx={{ position: "absolute", top: "100%", right: "-750%", opacity: "0", backgroundColor: "#fff", padding: "30px", maxWidth: "1110%", visibility: "hidden" }}>
                  <Box sx={{ display: "flex", color: "#555555" }}>

                    <Grid item xs={4}>
                      <Typography marginLeft={"10px"}>
                        <Box sx={{ display: "flex", marginBottom: "10px" }}>
                          <Typography fontFamily={"Lato, sans-serif"} sx={{ borderBottom: "2px solid #C29958", width: "25%", fontWeight: "700", fontSize: "16px" }}>Column 01</Typography>
                          <Typography sx={{ borderBottom: "2px solid  rgb(211, 210, 210)", width: "22%" }}></Typography>
                        </Box>
                        <Typography fontFamily={"Lato, sans-serif"} sx={{ padding: "7px 0 7px 0", "&:hover": { transition: ".3s", color: "#C29958" } }}>Shop Grid Left Sidebar</Typography>
                        <Typography fontFamily={"Lato, sans-serif"} sx={{ padding: "7px 0 7px 0", "&:hover": { transition: ".3s", color: "#C29958" } }}>Shop Grid Right Sidebar</Typography>
                        <Typography fontFamily={"Lato, sans-serif"} sx={{ padding: "7px 0 7px 0", "&:hover": { transition: ".3s", color: "#C29958" } }}>Shop List Left Sidebar</Typography>
                        <Typography fontFamily={"Lato, sans-serif"} sx={{ padding: "7px 0 7px 0", "&:hover": { transition: ".3s", color: "#C29958" } }}>Shop List Right Sidebar</Typography>
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography sx={{ marginLeft: "125px" }}>
                        <Box sx={{ display: "flex", marginBottom: "10px" }}>
                          <Typography fontFamily={"Lato, sans-serif"} sx={{ borderBottom: "2px solid #C29958", width: "25%", fontWeight: "700", fontSize: "16px" }}>Column 02</Typography>
                          <Typography sx={{ borderBottom: "2px solid  rgb(211, 210, 210)", width: "25%" }}></Typography>
                        </Box>
                        <Typography fontFamily={"Lato, sans-serif"} sx={{ padding: "7px 0 7px 0", "&:hover": { transition: ".3s", color: "#C29958" } }} onClick={() => navigate("/product")}>Product Details</Typography>
                        <Typography fontFamily={"Lato, sans-serif"} sx={{ padding: "7px 0 7px 0", "&:hover": { transition: ".3s", color: "#C29958" } }}>Product details affiliate</Typography>
                        <Typography fontFamily={"Lato, sans-serif"} sx={{ padding: "7px 0 7px 0", "&:hover": { transition: ".3s", color: "#C29958" } }}>Product details variable</Typography>
                        <Typography fontFamily={"Lato, sans-serif"} sx={{ padding: "7px 0 7px 0", "&:hover": { transition: ".3s", color: "#C29958" } }}>Privacy policy</Typography>
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography sx={{ marginLeft: "125px" }}>
                        <Box sx={{ display: "flex", marginBottom: "10px" }}>
                          <Typography fontFamily={"Lato, sans-serif"} sx={{ borderBottom: "2px solid #C29958", width: "50%", fontWeight: "700", fontSize: "16px" }}>Column 03</Typography>
                          <Typography sx={{ borderBottom: "2px solid  rgb(211, 210, 210)", width: "50%" }}></Typography>
                        </Box>
                        <Typography fontFamily={"Lato, sans-serif"} sx={{ padding: "7px 0 7px 0", "&:hover": { transition: ".3s", color: "#C29958" } }} onClick={() => navigate("/cart")}>Cart</Typography>
                        <Typography fontFamily={"Lato, sans-serif"} sx={{ padding: "7px 0 7px 0", "&:hover": { transition: ".3s", color: "#C29958" } }}>Checkout</Typography>
                        <Typography fontFamily={"Lato, sans-serif"} sx={{ padding: "7px 0 7px 0", "&:hover": { transition: ".3s", color: "#C29958" } }}>Compare</Typography>
                        <Typography fontFamily={"Lato, sans-serif"} sx={{ padding: "7px 0 7px 0", "&:hover": { transition: ".3s", color: "#C29958" } }}>wishlist</Typography>
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography sx={{ marginLeft: "125px", marginBottom: "10px" }}>
                        <Box sx={{ display: "flex", marginBottom: "10px" }}>
                          <Typography fontFamily={"Lato, sans-serif"} sx={{ borderBottom: "2px solid #C29958", width: "45%", fontWeight: "700", fontSize: "16px" }}>Column 04</Typography>
                          <Typography fontFamily={"Lato, sans-serif"} sx={{ borderBottom: "2px solid  rgb(211, 210, 210)", width: "45%" }}></Typography>
                        </Box>
                        <Typography fontFamily={"Lato, sans-serif"} sx={{ padding: "7px 0 7px 0", "&:hover": { transition: ".3s", color: "#C29958" } }}>my-account</Typography>
                        <Typography fontFamily={"Lato, sans-serif"} sx={{ padding: "7px 0 7px 0", "&:hover": { transition: ".3s", color: "#C29958" } }}>login-register</Typography>
                        <Typography fontFamily={"Lato, sans-serif"} sx={{ padding: "7px 0 7px 0", "&:hover": { transition: ".3s", color: "#C29958" } }}>about us</Typography>
                        <Typography fontFamily={"Lato, sans-serif"} sx={{ padding: "7px 0 7px 0", "&:hover": { transition: ".3s", color: "#C29958" } }}>contact us</Typography>
                      </Typography>
                    </Grid>
                  </Box>
                  <Grid container spacing={2} columns={16} marginTop={"5px"}>
                    <Grid item xs={8} >
                      <img src={megamenu} alt="" style={{ width: "100%" }} />
                    </Grid>
                    <Grid item xs={8}>
                      <img src={megamenu2} alt="" style={{ width: "100%" }} />
                    </Grid>
                  </Grid>
                </Box>
              </Box>
              </Typography>
              <Box >
                <Typography className='menu' fontFamily={"Lato, sans-serif"}
                  sx={{
                    zIndex: "1", position: "relative", "&:hover": {
                      color: "#C29958", transition: ".3s",
                      "& .subMenu": {
                        opacity: "1",
                        visibility: "visible"
                      }
                    }
                  }}><Box sx={{ position: "relative", display: "flex", padding: "20px 10px" }} onClick={() => navigate("/shop")}>
                    Shop <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
                    <Box className="subMenu" sx={{ position: "absolute", whiteSpace: "nowrap", top: "100%", left: "0", opacity: "0", backgroundColor: "#fff", width: "300%", visibility: "hidden", alignItems: "center" }}>
                      <Typography sx={{
                        transition: ".3s",
                        "&:hover": {
                          "& .megaMenu": {
                            transition: ".3s",
                            opacity: "1",
                            visibility: "visible"
                          }
                        },
                        display: "flex", justifyContent: "space-between", borderBottom: "1px dashed #efefef"
                      }}>
                        <Typography fontFamily={"Lato, sans-serif"} sx={{
                          position: "relative", display: "flex", padding: "10px 0px 10px 15px", color: "#555555", "&:hover": { color: "#C29958" }
                        }}>Shop Grid Layout
                          <Box className='megaMenu' sx={{ position: "absolute", top: "0", left: "153%", opacity: "0", visibility: "hidden", backgroundColor: "#fff", color: "#000", margin: "0 30px", padding: "0 15px" }}>
                            <Typography fontFamily={"Lato, sans-serif"} sx={{
                              borderBottom: "1px dashed #efefef", padding: "10px 0px 10px 15px", color: "#555555", "&:hover": {
                                transition: ".3s",
                                color: "#C29958"
                              }
                            }}>Shop Grid Left Sidebar</Typography>
                            <Typography fontFamily={"Lato, sans-serif"} sx={{
                              borderBottom: "1px dashed #efefef", padding: "10px 0px 10px 15px", color: "#555555", "&:hover": {
                                transition: ".3s",
                                color: "#C29958"
                              }
                            }}>Shop Grid Right Sidebar</Typography>
                            <Typography fontFamily={"Lato, sans-serif"} sx={{
                              borderBottom: "1px dashed #efefef", padding: "10px 0px 10px 15px", color: "#555555", "&:hover": {
                                transition: ".3s",
                                color: "#C29958"
                              }
                            }}>Shop grid full 3 col</Typography>
                            <Typography fontFamily={"Lato, sans-serif"} sx={{
                              borderBottom: "1px dashed #efefef", padding: "10px 0px 10px 15px", color: "#555555", "&:hover": {
                                transition: ".3s",
                                color: "#C29958"
                              }
                            }}>Shop grid full 4 col</Typography>
                          </Box>

                        </Typography><ChevronRightIcon sx={{ paddingTop: "10px" }}></ChevronRightIcon>
                      </Typography>
                      <Typography sx={{
                        transition: ".3s",
                        "&:hover": {
                          "& .megaMenu": {
                            transition: ".3s",
                            opacity: "1",
                            visibility: "visible"
                          }
                        },
                        display: "flex", justifyContent: "space-between", borderBottom: "1px dashed #efefef"
                      }}>
                        <Typography fontFamily={"Lato, sans-serif"} sx={{
                          position: "relative", display: "flex", padding: "10px 0px 10px 15px", color: "#555555", "&:hover": { color: "#C29958" }
                        }}>Shop List Layout
                          <Box className='megaMenu' sx={{ position: "absolute", top: "10%", left: "153%", opacity: "0", visibility: "hidden", backgroundColor: "#fff", color: "#000", margin: "0 30px", padding: "0 15px" }}>
                            <Typography fontFamily={"Lato, sans-serif"} sx={{
                              borderBottom: "1px dashed #efefef", padding: "10px 0px 10px 15px", color: "#555555", "&:hover": {
                                transition: ".3s",
                                color: "#C29958"
                              }
                            }}>Shop list left sidebar</Typography >
                            <Typography fontFamily={"Lato, sans-serif"} sx={{
                              borderBottom: "1px dashed #efefef", padding: "10px 0px 10px 15px", color: "#555555", "&:hover": {
                                transition: ".3s",
                                color: "#C29958"
                              }
                            }}>Shop list right sidebar</Typography>
                            <Typography fontFamily={"Lato, sans-serif"} sx={{
                              borderBottom: "1px dashed #efefef", padding: "10px 0px 10px 15px", color: "#555555", "&:hover": {
                                transition: ".3s",
                                color: "#C29958"
                              }
                            }}>Shop list full width</Typography>
                          </Box>
                        </Typography><ChevronRightIcon sx={{ paddingTop: "10px" }}></ChevronRightIcon>
                      </Typography>
                      <Typography sx={{
                        transition: ".3s",
                        "&:hover": {
                          "& .megaMenu": {
                            transition: ".3s",
                            opacity: "1",
                            visibility: "visible"
                          }
                        },
                        display: "flex", justifyContent: "space-between", borderBottom: "1px dashed #efefef"
                      }}><Typography fontFamily={"Lato, sans-serif"} sx={{
                        position: "relative", display: "flex", padding: "10px 0px 10px 15px", color: "#555555", "&:hover": { color: "#C29958" }
                      }}>Product Details
                          <Box className='megaMenu' sx={{ position: "absolute", top: "0", left: "165%", opacity: "0", visibility: "hidden", backgroundColor: "#fff", color: "#000", margin: "0 30px", padding: "0 15px" }}>
                            <Typography fontFamily={"Lato, sans-serif"} sx={{
                              borderBottom: "1px dashed #efefef", padding: "10px 0px 10px 15px", color: "#555555", "&:hover": {
                                transition: ".3s",
                                color: "#C29958"
                              }
                            }} onClick={() => navigate("/product")}>Product Details</Typography>
                            <Typography fontFamily={"Lato, sans-serif"} sx={{
                              borderBottom: "1px dashed #efefef", padding: "10px 0px 10px 15px", color: "#555555", "&:hover": {
                                transition: ".3s",
                                color: "#C29958"
                              }
                            }}>Product details affiliate</Typography>
                            <Typography fontFamily={"Lato, sans-serif"} sx={{
                              borderBottom: "1px dashed #efefef", padding: "10px 0px 10px 15px", color: "#555555", "&:hover": {
                                transition: ".3s",
                                color: "#C29958"
                              }
                            }}>Product details variable</Typography>
                            <Typography fontFamily={"Lato, sans-serif"} sx={{
                              borderBottom: "1px dashed #efefef", padding: "10px 0px 10px 15px", color: "#555555", "&:hover": {
                                transition: ".3s",
                                color: "#C29958"
                              }
                            }}>Product details group</Typography>
                          </Box>
                        </Typography><ChevronRightIcon sx={{ paddingTop: "10px" }}></ChevronRightIcon>
                      </Typography>

                    </Box>
                  </Box>
                </Typography>
              </Box>
              <Typography className='menu' fontFamily={"Lato, sans-serif"}>
                <Box sx={{
                  position: "relative", padding: "20px 10px", zIndex: "1", whiteSpace: "nowrap", display: "flex", "&:hover": {
                    color: "#C29958", transition: ".3s",
                    "& .subMenu": {
                      opacity: "1",
                      visibility: "visible"
                    }
                  }
                }} onClick={() => navigate("/blogright")}>
                  Blog <KeyboardArrowDownIcon ></KeyboardArrowDownIcon>
                  <Box className="subMenu" sx={{ position: "absolute", top: "100%", left: "0", opacity: "0", backgroundColor: "#fff", color: "#555555", width: "300%", visibility: "hidden" }}>
                    <Typography sx={{ borderBottom: "1px dashed #efefef", padding: "10px 0px 10px 15px" }}>
                      <Typography sx={{
                        "&:hover": {
                          transition: ".3s",
                          color: "#C29958"
                        }
                      }} onClick={() => navigate("/blog")}>Blog left sidebar</Typography>
                    </Typography>
                    <Typography fontFamily={"Lato, sans-serif"} sx={{
                      borderBottom: "1px dashed #efefef", padding: "10px 0px 10px 15px", "&:hover": {
                        transition: ".3s",
                        color: "#C29958"
                      }
                    }}>Blog left sidebar</Typography>
                    <Typography fontFamily={"Lato, sans-serif"} sx={{
                      borderBottom: "1px dashed #efefef", padding: "10px 0px 10px 15px", "&:hover": {
                        transition: ".3s",
                        color: "#C29958"
                      }
                    }} onClick={() => navigate("/blogright")}>Blog right sidebar</Typography>
                    <Typography fontFamily={"Lato, sans-serif"} sx={{
                      borderBottom: "1px dashed #efefef", padding: "10px 0px 10px 15px", "&:hover": {
                        transition: ".3s",
                        color: "#C29958"
                      }
                    }}>Blog list right sidebar</Typography>
                    <Typography fontFamily={"Lato, sans-serif"} sx={{
                      borderBottom: "1px dashed #efefef", padding: "10px 0px 10px 15px", "&:hover": {
                        transition: ".3s",
                        color: "#C29958"
                      }
                    }}>Blog grid full width</Typography>
                    <Typography fontFamily={"Lato, sans-serif"} sx={{
                      borderBottom: "1px dashed #efefef",
                      padding: "10px 0px 10px 15px", "&:hover": {
                        transition: ".3s",
                        color: "#C29958"
                      }
                    }}>Blog details</Typography>
                    <Typography fontFamily={"Lato, sans-serif"} sx={{
                      borderBottom: "1px dashed #efefef",
                      padding: "10px 0px 10px 15px", "&:hover": {
                        transition: ".3s",
                        color: "#C29958"
                      }
                    }}>Blog details left sidebar</Typography>
                    <Typography fontFamily={"Lato, sans-serif"} sx={{
                      borderBottom: "1px dashed #efefef",
                      padding: "10px 0px 10px 15px", "&:hover": {
                        transition: ".3s",
                        color: "#C29958"
                      }
                    }}>Blog details audio</Typography>
                    <Typography fontFamily={"Lato, sans-serif"} sx={{
                      borderBottom: "1px dashed #efefef",
                      padding: "10px 0px 10px 15px", "&:hover": {
                        transition: ".3s",
                        color: "#C29958"
                      }
                    }}>Blog details video</Typography>
                    <Typography fontFamily={"Lato, sans-serif"} sx={{
                      padding: "10px 0px 10px 15px", "&:hover": {
                        transition: ".3s",
                        color: "#C29958"
                      }
                    }}>blog details image</Typography>
                  </Box>
                </Box>
              </Typography>

              <Typography
                className='red' fontFamily={"Lato, sans-serif"}
                sx={{
                  "&:hover": {
                    "&.red": {
                      transition:".3s",
                      color: "#C29958"
                    }
                  }
                }} onClick={() => navigate("/contactus")}>Contact Us
              </Typography>
            </Typography>
          </Box>

          <Box alignItems={"center"} sx={{ display: { lg: "flex", md: "none", sm: "none", xs: "none" } }} >
            <button style={{ borderRadius: "50px", border: "none", padding: "10px", alignItems: "center", display: "flex" }}>
              <SearchIcon className='red'
                sx={{
                  "&:hover": {
                    "&.red": {
                      color: "#C29958"
                    }
                  }
                }}></SearchIcon>
              <Typography><input type="text" placeholder='Search entire store hire' style={{ outline: "none", border: "none", background: "none", marginLeft: "5px" }} /></Typography>
            </button>
          </Box>

          <Box display={"flex"} alignItems={"center"} sx={{ position: "relative" , padding:"0 20px"}}>
            <Typography sx={{ display: { lg: "none", md: "flex", sm: "none", xs: "none" }, color: "#22222294" }}><SearchIcon /></Typography>
            <Typography marginRight={2} onClick={() => navigate("/user")} sx={{ display: { lg: "flex", md: "flex", sm: "none", xs: "none" }, color: "#22222294" }} >
              <AccountCircleOutlinedIcon sx={{ fontSize: "26px", "&:hover": {transition:".3s",color:"#C29958"} }}></AccountCircleOutlinedIcon>
            </Typography>

            <Typography marginRight={2} position={"relative"} sx={{ display: { lg: "flex", md: "flex", sm: "none", xs: "none" }, color: "#22222294" }} >
              <div style={{ position: 'absolute', top: "-8px", left: "15px", background: "#C29958", borderRadius: "50px", width: "20px", height: "20px", justifyContent: "center", display: "flex", alignItems: "center" }}>o</div>
              <FavoriteBorderOutlinedIcon
                className='red'
                sx={{
                  fontSize: "26px",
                  "&:hover": {
                    "&.red": {
                      color: "#C29958"
                    }
                  }
                }} onClick={() => navigate("/heart")}></FavoriteBorderOutlinedIcon>
            </Typography>
            <Typography position={"relative"} sx={{ color: "#22222294" }}>
              <div style={{ position: 'absolute', top: "-8px", left: "15px", background: "#C29958", borderRadius: "50px", width: "20px", height: "20px", justifyContent: "center", display: "flex", alignItems: "center" }}>o</div>
              <ShoppingBagOutlinedIcon
                className='red'
                sx={{
                  fontSize: "28px",
                  "&:hover": {
                    "&.red": {
                      color: "#C29958"
                    }
                  }
                }} onClick={() => navigate("/cart")}></ShoppingBagOutlinedIcon>
            </Typography>
            
            <Typography aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle} sx={{ display: { xs: "block", sm: "block", md: "none", lg: "none" } ,margin:"0 20px"}}><MenuIcon xs={{ display: "flex", justifyContent: { xs: "end" },  }} /></Typography>
            <nav>
              <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                  '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
              >
                {drawer}
              </Drawer>
            
            </nav>
          </Box>

        </Box>
      </Container>
    </>
  )
}

export default Navigation;


