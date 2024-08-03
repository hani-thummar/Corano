import { Box, Typography, Container, Grid } from '@mui/material'
import React from 'react'
import Slider from "react-slick";
import mainblogimg1 from '../../assets/img/RightBlog/blog-img1.webp'
import mainblogimg2 from '../../assets/img/RightBlog/blog-img2.webp'
import mainblogimg3 from '../../assets/img/RightBlog/blog-img3.webp'
import SearchIcon from "@mui/icons-material/Search";
import miniblog1 from '../../assets/img/MainBlog/miniblog1.webp';
import miniblog2 from '../../assets/img/MainBlog/miniblog2.webp';
import miniblog3 from '../../assets/img/MainBlog/miniblog3.webp';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import GoogleIcon from '@mui/icons-material/Google';

function RightSection2() {
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
                    slidesToShow: 1,
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
        <Box sx={{ paddingTop: "80px",paddingBottom:"80px" }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} lg={9} alignItems={"center"}>
                        <Box>
                            <Box sx={{ width: "100%" ,overflow:"hidden"}}>
                                <Grid item xs={12}>
                                    <Slider {...settings}>
                                        <Box>
                                            <img src={mainblogimg1} alt="" style={{ width: "100%", height: "500px" }} />
                                        </Box>
                                        <Box>
                                            <img src={mainblogimg2} alt="" style={{ width: "100%", height: "500px" }} />
                                        </Box>
                                        <Box>
                                            <img src={mainblogimg3} alt="" style={{ width: "100%", height: "500px" }} />
                                        </Box>
                                    </Slider>

                                    <Box>
                                        <Typography variant="body1" sx={{ fontSize: "19px", fontWeight: "600", marginTop: "7px", "&:hover": { transition: ".4s", color: "#C29958" } }}>
                                            Celebrity Daughter Opens Up About Having Her Eye Color Changed
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: "flex", marginTop: "10px" }}>
                                        <Typography sx={{ color: "#777", fontSize: "15px" }}>
                                            25/03/2019 |{" "}
                                        </Typography>
                                        <Typography sx={{ color: "#c29958", fontSize: "15px", marginLeft: "3px" }}>
                                            Corano
                                        </Typography>
                                    </Box>
                                    <Box sx={{ paddingTop: "25px", color: "#555555", marginBottom: "16px" }}>
                                        <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate perferendis consequuntur illo aliquid nihil ad neque, debitis praesentium libero ullam asperiores exercitationem deserunt inventore facilis, officiis,</Typography>
                                    </Box>
                                    <Box>
                                        <Typography sx={{ margin: "25px 32px 25px 30px", borderLeft: "5px solid #c29958", color: "#555555", backgroundColor: "#f8f8f8", padding: "15px" }}>Quisque semper nunc vitae erat pellentesque, ac placerat arcu consectetur. venenatis elit ac ultrices convallis. Duis est nisi, tincidunt ac urna sed, cursus blandit lectus. In ullamcorper sit amet ligula ut eleifend. Proin dictum tempor ligula, ac feugiat metus. Sed finibus tortor eu scelerisque scelerisque.</Typography>
                                    </Box>
                                    <Box >
                                        <Typography sx={{ color: "#555555" }}>aliquam maiores asperiores recusandae commodi blanditiis ipsum tempora culpa possimus assumenda ab quidem a voluptatum quia natus? Ex neque, saepe reiciendis quasi velit perspiciatis error vel quas quibusdam autem nesciunt voluptas odit quis dignissimos eos aspernatur voluptatum est repellat. Pariatur praesentium, corrupti deserunt ducimus quo doloremque nostrum aspernatur saepe cupiditate sit autem exercitationem debitis, maiores vitae perferendis nemo? Voluptas illo, animi temporibus quod earum molestias eaque, iure rem amet autem dignissimos officia dolores numquam distinctio esse voluptates optio pariatur aspernatur omnis? Ipsam qui commodi velit natus reiciendis quod quibusdam nemo eveniet similique animi!</Typography>
                                    </Box>

                                    <Box sx={{ marginTop: "20px", display: "flex", alignItems: "center", borderTop: "1px solid #efefef", borderBottom: "1px solid #efefef" }}>
                                        <Typography sx={{ padding: "10px 0", color: "#222222", fontWeight: "600", paddingRight: "5px" }}>Tag :</Typography>
                                        <Typography > Necklaces,Earrings, Jewellery,</Typography>
                                    </Box>
                                    <Box sx={{ paddingTop: "30px",display:"flex",alignItems:"center" }}>
                                        <Typography sx={{ padding: "10px 0", color: "#222222", fontWeight: "600", paddingRight: "15px" }}>Share :</Typography>
                                        <Box sx={{ display: "flex" }}>
                                            <Typography sx={{
                                                border: "1px solid #dedede", borderRadius: "50%", height: "40px", width: "40px", fontSize: "18px", marginRight: "10px", color: "#777777", textAlign: "center",backgroundColor:"#3B5999",color:"#fff"}}>
                                                    <FacebookIcon sx={{ paddingTop: "8px" }}></FacebookIcon>
                                            </Typography>
                                        </Box>
                                        <Box sx={{ display: "flex" }}>
                                            <Typography sx={{
                                                border: "1px solid #dedede", borderRadius: "50%", height: "40px", width: "40px", fontSize: "18px", marginRight: "10px", color: "#777777", textAlign: "center",backgroundColor:"#0c85d0",color:"#fff"}}>
                                                    <TwitterIcon sx={{ paddingTop: "8px" }}></TwitterIcon>
                                            </Typography>
                                        </Box>
                                        <Box sx={{ display: "flex" }}>
                                            <Typography sx={{
                                                border: "1px solid #dedede", borderRadius: "50%", height: "40px", width: "40px", fontSize: "18px", marginRight: "10px", color: "#777777", textAlign: "center",backgroundColor:"#CB2028",color:"#fff"}}>
                                                    <PinterestIcon sx={{ paddingTop: "8px" }}></PinterestIcon>
                                            </Typography>
                                        </Box>
                                        <Box sx={{ display: "flex" }}>
                                            <Typography sx={{
                                                border: "1px solid #dedede", borderRadius: "50%", height: "40px", width: "40px", fontSize: "18px", marginRight: "10px", color: "#777777", textAlign: "center",backgroundColor:"#fe6d4c",color:"#fff"}}>
                                                    <GoogleIcon sx={{ paddingTop: "8px" }}></GoogleIcon>
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={8} lg={3} >
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
                                    marginTop: "10px",
                                    fontWeight: "700",
                                    fontSize: "20px",
                                    borderBottom: "1px dashed #efefef",
                                    paddingBottom: "5px",
                                    marginBottom: "20px",
                                    width: "65%",
                                }}>
                                Recent Post
                            </Typography>
                            <Box sx={{ display: "flex", marginBottom: "15px" }}>
                                <img src={miniblog1} alt="" style={{ width: "26%" }} />
                                <Box>
                                    <Typography sx={{ color: "#222222", fontWeight: "600", paddingLeft: "10px", "&:hover": { transition: ".3s", color: "#C29958" } }}>Auctor Gravida Enim</Typography>
                                    <Typography sx={{ color: "#555555", paddingLeft: "10px" }}>March 10 2019</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: "flex", marginBottom: "15px" }}>
                                <img src={miniblog2} alt="" style={{ width: "26%" }} />
                                <Box>
                                    <Typography sx={{ color: "#222222", fontWeight: "600", paddingLeft: "10px", "&:hover": { transition: ".3s", color: "#C29958" } }}>Auctor Gravida Enim</Typography>
                                    <Typography sx={{ color: "#555555", paddingLeft: "10px" }}>March 10 2019</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: "flex", marginBottom: "15px" }}>
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
                                    marginBottom: "20px",
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
                </Grid>
            </Container>
        </Box>
    )
}

export default RightSection2


// import { Box, Typography, Cont


// import { Box, Typography, Container, Grid } from '@mui/material';
// import React from 'react';
// import Slider from "react-slick";
// import mainblogimg1 from '../../assets/img/RightBlog/blog-img1.webp';
// import mainblogimg2 from '../../assets/img/RightBlog/blog-img2.webp';
// import mainblogimg3 from '../../assets/img/RightBlog/blog-img3.webp';
// import SearchIcon from "@mui/icons-material/Search";
// import miniblog1 from '../../assets/img/MainBlog/miniblog1.webp';
// import miniblog2 from '../../assets/img/MainBlog/miniblog2.webp';
// import miniblog3 from '../../assets/img/MainBlog/miniblog3.webp';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import PinterestIcon from '@mui/icons-material/Pinterest';
// import GoogleIcon from '@mui/icons-material/Google';

// function RightSection2() {
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                 },
//             },
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                 },
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                 },
//             },
//         ],
//     };

//     return (
//         <Box sx={{ padding: { xs: "20px", sm: "40px", md: "80px" } }}>
//             <Container>
//                 <Grid container spacing={2}>
//                     <Grid item xs={12} lg={9}>
//                         <Box>
//                             <Slider {...settings}>
//                                 <Box>
//                                     <img src={mainblogimg1} alt="" style={{ width: "100%", height: "auto" }} />
//                                 </Box>
//                                 <Box>
//                                     <img src={mainblogimg2} alt="" style={{ width: "100%", height: "auto" }} />
//                                 </Box>
//                                 <Box>
//                                     <img src={mainblogimg3} alt="" style={{ width: "100%", height: "auto" }} />
//                                 </Box>
//                             </Slider>

//                             <Typography variant="h6" sx={{ fontWeight: "600", marginTop: "15px", "&:hover": { color: "#C29958" } }}>
//                                 Celebrity Daughter Opens Up About Having Her Eye Color Changed
//                             </Typography>
//                             <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, marginTop: "10px" }}>
//                                 <Typography sx={{ color: "#777", fontSize: "15px" }}>
//                                     25/03/2019 |{" "}
//                                 </Typography>
//                                 <Typography sx={{ color: "#c29958", fontSize: "15px", marginLeft: "3px" }}>
//                                     Corano
//                                 </Typography>
//                             </Box>
//                             <Typography sx={{ paddingTop: "25px", color: "#555555", marginBottom: "16px" }}>
//                                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate perferendis consequuntur illo aliquid nihil ad neque, debitis praesentium libero ullam asperiores exercitationem deserunt inventore facilis, officiis,
//                             </Typography>
//                             <Typography sx={{ margin: "25px 0", borderLeft: "5px solid #c29958", color: "#555555", backgroundColor: "#f8f8f8", padding: "15px" }}>
//                                 Quisque semper nunc vitae erat pellentesque, ac placerat arcu consectetur. venenatis elit ac ultrices convallis. Duis est nisi, tincidunt ac urna sed, cursus blandit lectus. In ullamcorper sit amet ligula ut eleifend. Proin dictum tempor ligula, ac feugiat metus. Sed finibus tortor eu scelerisque scelerisque.
//                             </Typography>
//                             <Typography sx={{ color: "#555555" }}>
//                                 aliquam maiores asperiores recusandae commodi blanditiis ipsum tempora culpa possimus assumenda ab quidem a voluptatum quia natus? Ex neque, saepe reiciendis quasi velit perspiciatis error vel quas quibusdam autem nesciunt voluptas odit quis dignissimos eos aspernatur voluptatum est repellat. Pariatur praesentium, corrupti deserunt ducimus quo doloremque nostrum aspernatur saepe cupiditate sit autem exercitationem debitis, maiores vitae perferendis nemo? Voluptas illo, animi temporibus quod earum molestias eaque, iure rem amet autem dignissimos officia dolores numquam distinctio esse voluptates optio pariatur aspernatur omnis? Ipsam qui commodi velit natus reiciendis quod quibusdam nemo eveniet similique animi!
//                             </Typography>

//                             <Box sx={{ marginTop: "20px", borderTop: "1px solid #efefef", borderBottom: "1px solid #efefef", paddingY: "10px", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
//                                 <Typography sx={{ color: "#222222", fontWeight: "600" }}>Tag :</Typography>
//                                 <Typography>Necklaces, Earrings, Jewellery,</Typography>
//                             </Box>

//                             <Box sx={{ paddingTop: "30px", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
//                                 <Typography sx={{ color: "#222222", fontWeight: "600", paddingRight: "15px" }}>Share :</Typography>
//                                 <Box sx={{ display: "flex", gap: "10px" }}>
//                                     <Box sx={{ border: "1px solid #dedede", borderRadius: "50%", height: "40px", width: "40px", fontSize: "18px", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#3B5999", color: "#fff" }}>
//                                         <FacebookIcon />
//                                     </Box>
//                                     <Box sx={{ border: "1px solid #dedede", borderRadius: "50%", height: "40px", width: "40px", fontSize: "18px", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#0c85d0", color: "#fff" }}>
//                                         <TwitterIcon />
//                                     </Box>
//                                     <Box sx={{ border: "1px solid #dedede", borderRadius: "50%", height: "40px", width: "40px", fontSize: "18px", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#CB2028", color: "#fff" }}>
//                                         <PinterestIcon />
//                                     </Box>
//                                     <Box sx={{ border: "1px solid #dedede", borderRadius: "50%", height: "40px", width: "40px", fontSize: "18px", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#fe6d4c", color: "#fff" }}>
//                                         <GoogleIcon />
//                                     </Box>
//                                 </Box>
//                             </Box>
//                         </Box>
//                     </Grid>
//                     <Grid item xs={12} lg={3}>
//                         <Box>
//                             <Typography fontFamily={"Lato, sans-serif"} sx={{ fontWeight: "700", fontSize: { xs: "18px", sm: "20px" }, borderBottom: "1px dashed #efefef", paddingBottom: "5px" }}>
//                                 Search
//                             </Typography>
//                             <Box sx={{ display: "flex", marginTop: "25px", flexDirection: { xs: "column", sm: "row" } }}>
//                                 <Typography sx={{ padding: "14px 0", border: "1px solid #ccc", width: { xs: "100%", sm: "80%" }, borderRadius: "0px", borderRight: { xs: "none", sm: "none" }, display: "flex", justifyContent: "center" }}>
//                                     <input type="text" placeholder="Search Here" style={{ border: "none", outline: "none", width: "100%" }} />
//                                 </Typography>
//                                 <Typography sx={{ border: "1px solid #ccc", justifyContent: "center", display: "flex", alignItems: "center", width: { xs: "100%", sm: "20%" }, borderRadius: "0px", color: "#000", "&:hover": { transition: ".3s", backgroundColor: "#C29958", color: "#fff" } }}>
//                                     <SearchIcon />
//                                 </Typography>
//                             </Box>
//                         </Box>
//                         <Box sx={{ marginTop: "20px" }}>
//                             <Typography fontFamily={"Lato, sans-serif"} sx={{ fontWeight: "700", fontSize: { xs: "18px", sm: "20px" }, borderBottom: "1px dashed #efefef", paddingBottom: "5px" }}>
//                                 Recent Post
//                             </Typography>
//                             {recentPosts.map((post, index) => (
//                                 <Box key={index} sx={{ display: "flex", marginTop: "15px" }}>
//                                     <img src={post.img} alt={post.title} style={{ width: "30%", height: "auto" }} />
//                                     <Box sx={{ marginLeft: "10px" }}>
//                                         <Typography sx={{ color: "#c29958", fontWeight: "700", "&:hover": { transition: ".3s", color: "#222222" } }}>
//                                             {post.title}
//                                         </Typography>
//                                         <Typography sx={{ color: "#777", fontSize: "13px", marginTop: "5px" }}>
//                                             {post.date}
//                                         </Typography>
//                                     </Box>
//                                 </Box>
//                             ))}
//                         </Box>
//                     </Grid>
//                 </Grid>
//             </Container>
//         </Box>
//     );
// }

// const recentPosts = [
//     {
//         img: miniblog1,
//         title: "Harry Potter",
//         date: "25/03/2019",
//     },
//     {
//         img: miniblog2,
//         title: "Jow Troden",
//         date: "25/03/2019",
//     },
//     {
//         img: miniblog3,
//         title: "Inicia Gobar",
//         date: "25/03/2019",
//     },
// ];

// export default RightSection2;

