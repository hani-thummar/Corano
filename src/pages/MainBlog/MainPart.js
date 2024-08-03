import { Container, Box, Grid, Typography, Button, Input } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Height, Padding } from "@mui/icons-material";
import bolgimg1 from "../../assets/img/MainBlog/blog-img1.webp";
import bolgimg2 from "../../assets/img/MainBlog/blog-img2.webp";
import bolgimg3 from "../../assets/img/MainBlog/blog-img3.webp";
import bolgimg4 from "../../assets/img/MainBlog/blog-img4.webp";
import bolgimg5 from "../../assets/img/MainBlog/blog-img5.webp";
import bolgimg6 from "../../assets/img/MainBlog/blog-img6.webp";
import miniblog1 from '../../assets/img/MainBlog/miniblog1.webp';
import miniblog2 from '../../assets/img/MainBlog/miniblog2.webp';
import miniblog3 from '../../assets/img/MainBlog/miniblog3.webp';
import youtubeimg from '../../assets/img/MainBlog/youtubeimg.webp';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";

function MainPart() {

  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
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
    <Box>
      <Container sx={{ paddingTop: "80px", paddingBottom: "80px" }}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Box>
              <Typography
                fontFamily={"Lato, sans-serif"}
                sx={{
                  fontWeight: "700",
                  fontSize: "20px",
                  borderBottom: "1px dashed #efefef",
                  paddingBottom: "5px",
                  width: "65%",
                }}
              >
                Search
              </Typography>
              <Box sx={{ display: "flex", marginTop: "25px" }}>
                <Typography
                  sx={{
                    padding: "14px 0 14px 0",
                    border: "1px solid #ccc",
                    width: "80%",
                    borderRadius: "0px",
                    borderRight: "none",
                    display: "flex",
                    justifyContent: "center",
                  }}>
                  <input
                    type="text"
                    placeholder="Search Here"
                    style={{ border: "none", outline: "none" }} />
                </Typography>
                <Typography
                  sx={{
                    border: "1px solid #ccc",
                    justifyContent: "center",
                    display: "flex",
                    alignItems: "center",
                    width: "13%",
                    borderRadius: "0px",
                    color: "#000",
                    "&:hover": {
                      transition: ".3s",
                      backgroundColor: "#C29958",
                      color: "#fff",
                    },
                  }}
                >
                  <SearchIcon></SearchIcon>
                </Typography>
              </Box>
            </Box>
            <Box>
              <Typography
                fontFamily={"Lato, sans-serif"}
                sx={{
                  marginTop: "20px",
                  fontWeight: "700",
                  fontSize: "20px",
                  borderBottom: "1px dashed #efefef",
                  paddingBottom: "5px",
                  marginBottom: "5px",
                  width: "65%",
                }}
              >
                Categories
              </Typography>
              <Box>
                <Typography
                  sx={{
                    color: "#555555",
                    padding: "8px 0",
                    "&:hover": { transition: ".3s", color: "#C29958" },
                  }}
                >
                  Barber (10)
                </Typography>
                <Typography
                  sx={{
                    color: "#555555",
                    padding: "8px 0",
                    "&:hover": { transition: ".3s", color: "#C29958" },
                  }}
                >
                  Fashion (08)
                </Typography>
                <Typography
                  sx={{
                    color: "#555555",
                    padding: "8px 0",
                    "&:hover": { transition: ".3s", color: "#C29958" },
                  }}
                >
                  Handbag (07)
                </Typography>
                <Typography
                  sx={{
                    color: "#555555",
                    padding: "8px 0",
                    "&:hover": { transition: ".3s", color: "#C29958" },
                  }}
                >
                  Accessories (4)
                </Typography>
                <Typography
                  sx={{
                    color: "#555555",
                    padding: "8px 0",
                    "&:hover": { transition: ".3s", color: "#C29958" },
                  }}
                >
                  Jewelry (14)
                </Typography>
                <Typography
                  sx={{
                    color: "#555555",
                    padding: "8px 0",
                    "&:hover": { transition: ".3s", color: "#C29958" },
                  }}
                >
                  Food (10)
                </Typography>
              </Box>
            </Box>

            <Box>
              <Typography
                fontFamily={"Lato, sans-serif"}
                sx={{
                  marginTop: "20px",
                  fontWeight: "700",
                  fontSize: "20px",
                  borderBottom: "1px dashed #efefef",
                  paddingBottom: "5px",
                  marginBottom: "5px",
                  width: "65%",
                }}
              >
                Blog Archives
              </Typography>
              <Box>
                <Typography
                  sx={{
                    color: "#555555",
                    padding: "8px 0",
                    "&:hover": { transition: ".3s", color: "#C29958" },
                  }}
                >
                  January (10)
                </Typography>
                <Typography
                  sx={{
                    color: "#555555",
                    padding: "8px 0",
                    "&:hover": { transition: ".3s", color: "#C29958" },
                  }}
                >
                  February (08)
                </Typography>
                <Typography
                  sx={{
                    color: "#555555",
                    padding: "8px 0",
                    "&:hover": { transition: ".3s", color: "#C29958" },
                  }}
                >
                  March (07)
                </Typography>
                <Typography
                  sx={{
                    color: "#555555",
                    padding: "8px 0",
                    "&:hover": { transition: ".3s", color: "#C29958" },
                  }}
                >
                  April (14)
                </Typography>
                <Typography
                  sx={{
                    color: "#555555",
                    padding: "8px 0",
                    "&:hover": { transition: ".3s", color: "#C29958" },
                  }}
                >
                  May (10)
                </Typography>
              </Box>
            </Box>

            <Box>
              <Typography
                fontFamily={"Lato, sans-serif"}
                sx={{
                  marginTop: "20px",
                  fontWeight: "700",
                  fontSize: "20px",
                  borderBottom: "1px dashed #efefef",
                  paddingBottom: "5px",
                  marginBottom: "35px",
                  width: "65%",
                }}>
                Recent Post
              </Typography>
              <Box sx={{ display: "flex", marginBottom: "30px" }}>
                <img src={miniblog1} alt="" style={{ width: "26%" }} />
                <Box>
                  <Typography sx={{ color: "#222222", fontWeight: "600", paddingLeft: "10px", "&:hover": { transition: ".3s", color: "#C29958" } }}>Auctor Gravida Enim</Typography>
                  <Typography sx={{ color: "#555555", paddingLeft: "10px" }}>March 10 2019</Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", marginBottom: "30px" }}>
                <img src={miniblog2} alt="" style={{ width: "26%" }} />
                <Box>
                  <Typography sx={{ color: "#222222", fontWeight: "600", paddingLeft: "10px", "&:hover": { transition: ".3s", color: "#C29958" } }}>Auctor Gravida Enim</Typography>
                  <Typography sx={{ color: "#555555", paddingLeft: "10px" }}>March 10 2019</Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", marginBottom: "30px" }}>
                <img src={miniblog3} alt="" style={{ width: "26%" }} />
                <Box>
                  <Typography sx={{ color: "#222222", fontWeight: "600", paddingLeft: "10px", "&:hover": { transition: ".3s", color: "#C29958" } }}>Auctor Gravida Enim</Typography>
                  <Typography sx={{ color: "#555555", paddingLeft: "10px" }}>March 10 2019</Typography>
                </Box>
              </Box>
            </Box>

            <Box>
              <Typography
                fontFamily={"Lato, sans-serif"}
                sx={{
                  marginTop: "20px",
                  fontWeight: "700",
                  fontSize: "20px",
                  borderBottom: "1px dashed #efefef",
                  paddingBottom: "5px",
                  marginBottom: "35px",
                  width: "65%",
                }}>
                Tags
              </Typography>
              <Box sx={{ display: "flex" }}>
                <Typography sx={{ border: "1px solid #ccc", marginRight: "2px", padding: "6px 15px 4px", display: "inline-block0", fontSize: "15px", color: "#222222", "&:hover": { transition: ".3s", backgroundColor: "#C29958", color: "#fff" } }}>Camera</Typography>
                <Typography sx={{ border: "1px solid #ccc", marginRight: "2px", padding: "6px 15px 4px", display: "inline-block0", fontSize: "15px", color: "#222222", "&:hover": { transition: ".3s", backgroundColor: "#C29958", color: "#fff" } }}>Computer</Typography>
                <Typography sx={{ border: "1px solid #ccc", marginRight: "2px", padding: "6px 15px 4px", display: "inline-block0", fontSize: "15px", color: "#222222", "&:hover": { transition: ".3s", backgroundColor: "#C29958", color: "#fff" } }}>Bag</Typography>
              </Box>
              <Box sx={{ display: "flex", paddingTop: "6px" }}>
                <Typography sx={{ border: "1px solid #ccc", marginRight: "2px", padding: "6px 15px 4px", display: "inline-block0", fontSize: "15px", color: "#222222", "&:hover": { transition: ".3s", backgroundColor: "#C29958", color: "#fff" } }}>Watch</Typography>
                <Typography sx={{ border: "1px solid #ccc", marginRight: "2px", padding: "6px 15px 4px", display: "inline-block0", fontSize: "15px", color: "#222222", "&:hover": { transition: ".3s", backgroundColor: "#C29958", color: "#fff" } }}>Smartphone</Typography>
                <Typography sx={{ border: "1px solid #ccc", marginRight: "2px", padding: "6px 15px 4px", display: "inline-block0", fontSize: "15px", color: "#222222", "&:hover": { transition: ".3s", backgroundColor: "#C29958", color: "#fff" } }}>Shoes</Typography>
              </Box>
            </Box>
          </Grid>


          <Grid item xs={4.5}>
            <Box >
              <img src={bolgimg1} alt="" width={"100%"} />
              <Box sx={{ display: "flex", marginTop: "10px" }}>
                <Typography sx={{ color: "#777", fontSize: "15px" }}>
                  10/04/2019 |{" "}
                </Typography>
                <Typography
                  sx={{ color: "#c29958", fontSize: "15px", marginLeft: "3px" }}
                >
                  Corano
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "19px",
                    fontWeight: "600",
                    marginTop: "7px",
                    "&:hover": { transition: ".4s", color: "#C29958" },
                  }}
                >
                  Celebrity Daughter Opens Up About Having Her Eye Color Changed
                </Typography>
              </Box>
            </Box>
            <Box sx={{ marginTop: "20px" }}>
              <img src={youtubeimg} alt="" width={"100%"} />
              <Box sx={{ display: "flex", marginTop: "10px" }}>
                <Typography sx={{ color: "#777", fontSize: "15px" }}>
                  15/04/2019 |{" "}
                </Typography>
                <Typography
                  sx={{ color: "#c29958", fontSize: "15px", marginLeft: "3px" }}
                >
                  Corano
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "19px",
                    fontWeight: "600",
                    marginTop: "7px",
                    "&:hover": { transition: ".4s", color: "#C29958" },
                  }}
                >
                  Children Left Home Alone For 4 Days In TV series Experiment
                </Typography>
              </Box>
            </Box>
            <Box sx={{ marginTop: "20px" }}>
              <img src={bolgimg5} alt="" width={"100%"} />
              <Box sx={{ display: "flex", marginTop: "10px" }}>
                <Typography sx={{ color: "#777", fontSize: "15px" }}>
                  02/04/2019 |{" "}
                </Typography>
                <Typography
                  sx={{ color: "#c29958", fontSize: "15px", marginLeft: "3px" }}
                >
                  Corano
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "19px",
                    fontWeight: "600",
                    marginTop: "7px",
                    "&:hover": { transition: ".4s", color: "#C29958" },
                  }}
                >
                  romantic Love Stories Of Hollywood’s Biggest Celebrities
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={4.5} alignItems={"center"} >
            <Box>
              <Box sx={{ width: "100%" }}>
                <Container>
                  <Grid item xs={12}>
                    <Slider {...settings}>
                      <Box onClick={() => navigate("/blogright")}>
                        <img src={bolgimg2} alt="" style={{ width: "100%", height: "300px" }} />
                        <Box sx={{ display: "flex", marginTop: "10px" }}>
                          <Typography sx={{ color: "#777", fontSize: "15px" }}>25/03/2019 |{" "}</Typography>
                          <Typography sx={{ color: "#c29958", fontSize: "15px", marginLeft: "3px" }}>Corano</Typography>
                        </Box>
                        <Box>
                          <Typography
                            variant="body1"
                            sx={{
                              fontSize: "19px",
                              fontWeight: "600",
                              marginTop: "7px",
                              "&:hover": { transition: ".4s", color: "#C29958" },
                            }}
                          >
                            Lotto Winner Offering Up Money To Any Man That Will Date Her
                          </Typography>
                        </Box>
                      </Box>
                      <Box onClick={() => navigate("/blogright")}>
                        <img src={bolgimg3} alt="" style={{ width: "100%", height: "300px" }} />
                        <Box sx={{ display: "flex", marginTop: "10px" }}>
                          <Typography sx={{ color: "#777", fontSize: "15px" }}>12/04/2019 |{" "}</Typography>
                          <Typography sx={{ color: "#c29958", fontSize: "15px", marginLeft: "3px" }}>Corano</Typography>
                        </Box>
                        <Box>
                          <Typography
                            variant="body1"
                            sx={{
                              fontSize: "19px",
                              fontWeight: "600",
                              marginTop: "7px",
                              "&:hover": { transition: ".4s", color: "#C29958" },
                            }}
                          >Lotto Winner Offering Up Money To Any Man That Will Date Her
                          </Typography>
                        </Box>
                      </Box>
                      <Box onClick={() => navigate("/blogright")}>
                        <img src={bolgimg4} alt="" style={{ width: "100%", height: "300px" }} />
                        <Box sx={{ display: "flex", marginTop: "10px" }}>
                          <Typography sx={{ color: "#777", fontSize: "15px" }}>12/04/2019 |{" "}</Typography>
                          <Typography sx={{ color: "#c29958", fontSize: "15px", marginLeft: "3px" }}>Corano</Typography>
                        </Box>
                        <Box>
                          <Typography
                            variant="body1"
                            sx={{
                              fontSize: "19px",
                              fontWeight: "600",
                              marginTop: "7px",
                              "&:hover": { transition: ".4s", color: "#C29958" },
                            }}
                          > Lotto Winner Offering Up Money To Any Man That Will Date Her
                          </Typography>
                        </Box>
                      </Box>
                    </Slider>
                  </Grid>
                </Container>
              </Box>
            </Box>
            <Box sx={{ marginTop: "25px" }}>
              <img src={youtubeimg} alt="" width={"100%"} />
              <Box sx={{ display: "flex", marginTop: "10px" }}>
                <Typography sx={{ color: "#777", fontSize: "15px" }}>
                  05/04/2019 |{" "}
                </Typography>
                <Typography
                  sx={{ color: "#c29958", fontSize: "15px", marginLeft: "3px" }}
                >
                  Corano
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "19px",
                    fontWeight: "600",
                    marginTop: "7px",
                    "&:hover": { transition: ".4s", color: "#C29958" },
                  }}
                >
                  People are Willing Lie When Comes Money, According to Research
                </Typography>
              </Box>
            </Box>
            <Box sx={{ marginTop: "20px" }}>
              <img src={bolgimg6} alt="" width={"100%"} />
              <Box sx={{ display: "flex", marginTop: "10px" }}>
                <Typography sx={{ color: "#777", fontSize: "15px" }}>
                  25/03/2019 |{" "}
                </Typography>
                <Typography
                  sx={{ color: "#c29958", fontSize: "15px", marginLeft: "3px" }}
                >
                  Corano
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "19px",
                    fontWeight: "600",
                    marginTop: "7px",
                    "&:hover": { transition: ".4s", color: "#C29958" },
                  }}
                >
                  Celebrity Daughter Opens Up About Having Her Eye Color Changed
                </Typography>
              </Box>
            </Box>
          </Grid>


        </Grid>
        <Box sx={{ display: "flex", border: "1px solid #efefef", width: "100%", padding: "20px", marginTop: "30px", justifyContent: "center", alignItems: "center" }}>

          <Typography sx={{ border: "none", outline: "none", height: "40px", width: "40px", textAlign: "center", "&:hover": { transition: ".4s", backgroundColor: "#C29958", color: "white" }, display: "inline-block", margin: "0 5px 0 0", backgroundColor: "#f5f5f5", fontSize: "30px", borderRadius: "50%" }}><NavigateBeforeIcon></NavigateBeforeIcon></Typography>

          <Typography sx={{ border: "none", outline: "none", height: "40px", width: "40px", justifyContent: "center", alignItems: "center", "&:hover": { transition: ".4s", backgroundColor: "#C29958", color: "white" }, display: "flex", margin: "0 5px 0 0", backgroundColor: "#C29958", color: "white", fontSize: "15px", borderRadius: "50%" }}>1</Typography>

          <Typography sx={{ border: "none", outline: "none", height: "40px", width: "40px", justifyContent: "center", alignItems: "center", "&:hover": { transition: ".4s", backgroundColor: "#C29958", color: "white" }, display: "flex", margin: "0 5px 0 0", backgroundColor: "#f5f5f5", fontSize: "15px", borderRadius: "50%" }}>2</Typography>

          <Typography sx={{ border: "none", outline: "none", height: "40px", width: "40px", justifyContent: "center", alignItems: "center", "&:hover": { transition: ".4s", backgroundColor: "#C29958", color: "white" }, display: "flex", margin: "0 5px 0 0", backgroundColor: "#f5f5f5", fontSize: "15px", borderRadius: "50%" }}>3</Typography>

          <Typography sx={{ border: "none", outline: "none", height: "40px", width: "40px", textAlign: "center", "&:hover": { transition: ".4s", backgroundColor: "#C29958", color: "white" }, display: "inline-block", margin: "0 5px 0 0", backgroundColor: "#f5f5f5", fontSize: "30px", borderRadius: "50%" }}><ChevronRightIcon></ChevronRightIcon></Typography>

        </Box>
      </Container>
    </Box>
  );
}

export default MainPart;





