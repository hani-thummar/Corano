import { Box, Container, Grid, Typography, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import React from 'react'
import product1 from '../../assets/img/Product/product-details-img1.webp'
import product2 from '../../assets/img/Product/product-details-img2.webp'
import product3 from '../../assets/img/Product/product-details-img3.webp'
import product4 from '../../assets/img/Product/product-details-img4.webp'
import product5 from '../../assets/img/Product/product-details-img5.webp'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SyncIcon from '@mui/icons-material/Sync';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import GoogleIcon from '@mui/icons-material/Google';

function MainProductpart() {

    const [s, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <Box>
            <Container sx={{ paddingTop: "80px" }}>
                <Grid container spacing={2} >
                    <Grid item xs={12} lg={6} md={6} sm={12}>
                        <img src={product1} alt="" style={{ width: "100%"}} />
                        <Box sx={{ marginTop: "20px" , textAlign:'center' }}>
                            <img src={product2} alt="" style={{ width: "130px", height: "130px" }} />
                            <img src={product3} alt="" style={{ width: "130px", height: "130px", marginLeft: "15px" }} />
                            <img src={product4} alt="" style={{ width: "130px", height: "130px", marginLeft: "15px"}} />
                            <img src={product5} alt="" style={{ width: "130px", height: "130px"}} />
                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={6} md={6} sm={12}>
                        <Box>
                            <Typography sx={{ color: "#555555", "&:hover": { transition: ".3s", color: "#c29958" } }}>HasTech</Typography>
                            <Typography sx={{ fontWeight: "500", fontSize: "24px", paddingTop: "5px", paddingBottom: "5px" }}>Handmade Golden Necklace Full Family Package</Typography>
                            <Typography sx={{ display: "flex" }}>
                                <StarBorderIcon sx={{ color: "#F9BE30" }}></StarBorderIcon>
                                <StarBorderIcon sx={{ marginLeft: "2px", color: "#F9BE30" }}></StarBorderIcon>
                                <StarBorderIcon sx={{ marginLeft: "2px", color: "#F9BE30" }}></StarBorderIcon>
                                <StarBorderIcon sx={{ marginLeft: "2px", color: "#F9BE30" }}></StarBorderIcon>
                                <StarBorderIcon sx={{ marginLeft: "2px", color: "#F9BE30" }}></StarBorderIcon>
                                <Typography sx={{ paddingLeft: "10px", color: "#555555" }}>1 Reviews</Typography>
                            </Typography>
                            <Box sx={{ display: "flex", alignItems: "center", paddingTop: "10px", paddingBottom: "10px" }}>
                                <Typography sx={{ fontWeight: "500", color: "#c29958" }}>$70.00</Typography>
                                <Typography sx={{ fontWeight: "500", color: "#999999", paddingLeft: "5px" }}>$90.00</Typography>
                            </Box>
                            <Box sx={{ display: "flex" }}>
                                <Typography sx={{ fontWeight: "700", fontSize: "18px", color: "#222222" }}>Hurry up! </Typography>
                                <Typography sx={{ color: "#222222", fontSize: "18px" }}>  offer ends in:</Typography>
                            </Box>
                            <Box sx={{ display: "flex" }}>
                                <Box sx={{ borderRadius: "50%", border: "1px solid black", marginRight: "10px", height: "45px", width: "45px", backgroundColor: "#eaeaea", color: "#222222", display: "flex", alignItems: "center", justifyContent: "center", border: "none" }}>
                                    <Typography>00</Typography>
                                </Box>
                                <Box sx={{ borderRadius: "50%", border: "1px solid black", marginRight: "10px", height: "45px", width: "45px", backgroundColor: "#eaeaea", color: "#222222", display: "flex", alignItems: "center", justifyContent: "center", border: "none" }}>
                                    <Typography>00</Typography>
                                </Box>
                                <Box sx={{ borderRadius: "50%", border: "1px solid black", marginRight: "10px", height: "45px", width: "45px", backgroundColor: "#eaeaea", color: "#222222", display: "flex", alignItems: "center", justifyContent: "center", border: "none" }}>
                                    <Typography>00</Typography>
                                </Box>
                                <Box sx={{ borderRadius: "50%", border: "1px solid black", height: "45px", width: "45px", backgroundColor: "#eaeaea", color: "#222222", display: "flex", alignItems: "center", justifyContent: "center", border: "none" }}>
                                    <Typography>00</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: "flex", marginTop: "5px" }}>
                                <Typography sx={{ marginLeft: "5px", marginRight: "20px", fontSize: "12px" }}>DAYS</Typography>
                                <Typography sx={{ marginRight: "20px", fontSize: "12px" }}>HOURS</Typography>
                                <Typography sx={{ marginRight: "25px", fontSize: "12px" }}>MINS</Typography>
                                <Typography sx={{ fontSize: "12px" }}>SECS</Typography>
                            </Box>
                            <Box sx={{ display: "flex", alignItems: "center", marginBottom: "15px", marginTop: "15px" }}>
                                <Typography><CheckCircleIcon sx={{ fontSize: "15px", color: "#81CA39" }}></CheckCircleIcon></Typography>
                                <Typography sx={{ paddingLeft: "3px", color: "#555555", fontSize: "13px", fontWeight: "500" }}>200 IN STOCK</Typography>
                            </Box>
                            <Typography sx={{ marginBottom: "18px", color: "#555555", fontSize: "14px" }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Phasellus id nisi quis justo tempus mollis sed et dui. In hac habitasse platea dictumst.</Typography>
                            <Box sx={{ display: "flex", alignItems: "center", marginBottom: "18px" }}>
                                <Typography>Qty:</Typography>
                                <Box sx={{ border: "1px solid #ddd", borderRadius: "40px", marginRight: "20px", display: "flex", justifyContent: "center", width: "90px", padding: "8px 0", marginLeft: "10px" }}>
                                    <Typography sx={{ height: "20px", width: "20px" }}>-</Typography>
                                    <Typography sx={{ height: "20px", width: "20px" }}>1</Typography>
                                    <Typography sx={{ height: "20px", width: "20px" }}>+</Typography>
                                </Box>
                                <Box sx={{ display: "flex" }}>
                                    <Button sx={{
                                        borderRadius: "50px", fontSize: "13px",  backgroundColor: "#C29958", border: "none", color: "#fff", textAlign: "center", transition: ".4s",
                                        "&:hover": {
                                            backgroundColor: "#222222"
                                        }
                                    }}>Add to cart</Button>
                                </Box>
                            </Box>
                            <Box sx={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
                                <Typography>Size: </Typography>
                                <Box sx={{ minWidth: 80 }}>
                                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                                        <InputLabel id="demo-simple-select-label">s</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={s}
                                            label="s"
                                            onChange={handleChange}>
                                            <MenuItem value={10}>S</MenuItem>
                                            <MenuItem value={20}>M</MenuItem>
                                            <MenuItem value={30}>L</MenuItem>
                                            <MenuItem value={30}>XL</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                            </Box>
                            <Box sx={{ display: "flex", alignItems: "center", marginBottom: "25px" }}>
                                <Typography>Color:</Typography>
                                <Box sx={{}}>
                                    <button style={{ borderRadius: "50%", height: "15px", backgroundColor: "#B0C4DE", width: "15px", border: "none", marginLeft: "10px" }}></button>
                                    <button style={{ borderRadius: "50%", height: "15px", border: "none", backgroundColor: "#AA9E78", width: "15px", marginLeft: "10px" }}></button>
                                    <button style={{ borderRadius: "50%", height: "15px", border: "none", backgroundColor: "#808080", width: "15px", marginLeft: "10px" }}></button>
                                    <button style={{ borderRadius: "50%", height: "15px", border: "none", backgroundColor: "#964B00", width: "15px", marginLeft: "10px" }}></button>
                                </Box>
                            </Box>
                            <Box sx={{ display: "flex", borderBottom: "1px solid #efefef" }}>
                                <Box sx={{ display: "flex", marginBottom: "10px", "&:hover": { transition: ".3s", color: "#c29958" } }}>
                                    <Typography sx={{ paddingRight: "5px", color: "#222222", "&:hover": { transition: ".3s", color: "#c29958" } }}><SyncIcon></SyncIcon></Typography>
                                    <Typography>Compare</Typography>
                                </Box>
                                <Box sx={{ display: "flex", marginBottom: "10px", "&:hover": { transition: ".3s", color: "#c29958" } }}>
                                    <Typography sx={{ paddingRight: "5px", marginLeft: "20px", color: "#222222", "&:hover": { transition: ".3s", color: "#c29958" } }}><FavoriteBorderIcon></FavoriteBorderIcon></Typography>
                                    <Typography>Wishlist</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: "flex", paddingTop: "20px" }}>
                                <Box sx={{ display: "flex", alignItems: "center", border: "1px solid black", marginRight: "10px", padding: "0 8px", borderRadius: "3px", fontSize: "12px", textAlign: "center", backgroundColor: "#3B5999", color: "#fff", border: "none" }}>
                                    <Typography><FacebookIcon sx={{ paddingRight: "5px", fontSize: "20px" }}></FacebookIcon></Typography>
                                    <Typography>Like</Typography>
                                </Box>
                                <Box sx={{ display: "flex", border: "1px solid black", marginRight: "10px", padding: "0 8px", borderRadius: "3px", fontSize: "12px", textAlign: "center", backgroundColor: "#1DA1F2", color: "#fff", border: "none" }}>
                                    <Typography><TwitterIcon sx={{ paddingRight: "5px", fontSize: "20px" }}></TwitterIcon></Typography>
                                    <Typography>Tweet</Typography>
                                </Box>
                                <Box sx={{ display: "flex", border: "1px solid black", marginRight: "10px", padding: "0 8px", borderRadius: "3px", fontSize: "12px", textAlign: "center", backgroundColor: "#CB2028", color: "#fff", border: "none" }}>
                                    <Typography><PinterestIcon sx={{ paddingRight: "5px", fontSize: "20px" }}></PinterestIcon></Typography>
                                    <Typography>Save</Typography>
                                </Box>
                                <Box sx={{ display: "flex", border: "1px solid black", marginRight: "10px", padding: "0 8px", borderRadius: "3px", fontSize: "12px", textAlign: "center", backgroundColor: "#fe6d4c", color: "#fff", border: "none" }}>
                                    <Typography><GoogleIcon sx={{ paddingRight: "5px", fontSize: "20px" }}></GoogleIcon></Typography>
                                    <Typography>Share</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

                <Box sx={{ paddingTop: "80px" }}>
                    <Box sx={{ display: "flex" }}>
                        <Typography sx={{ border: "1px solid #ddd", padding: "8px 10px" }}>Description</Typography>
                        <Typography sx={{ border: "1px solid #c29958", padding: "8px 10px", backgroundColor: "#c29958","&:hover": {transition:".3s",color:"#000"} }}>Information</Typography>
                        <Typography sx={{ border: "1px solid #c29958", padding: "8px 10px", backgroundColor: "#c29958","&:hover": {transition:".3s",color:"#000"} }}>Reviews(1)</Typography>

                    </Box>
                    <Box sx={{ padding: "15px 20px 20px", border: "1px solid #efefef" }}>
                        <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque.Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam erat mi, rutrum at sollicitudin rhoncus</Typography>
                    </Box>

                </Box>
            </Container>
        </Box>
    )
}

export default MainProductpart
