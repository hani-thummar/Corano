import React, { useState } from 'react'
import { Box, Typography, Container, Grid, MenuItem, FormControl, Select, Button, colors } from '@mui/material'
import AppsIcon from '@mui/icons-material/Apps';
import ViewListIcon from '@mui/icons-material/ViewList';
import imagec1 from '../../assets/img/Shop/imgc1.webp'
import imagec2 from '../../assets/img/Shop/imgc2.webp'
import imagec3 from '../../assets/img/Shop/imgc3.webp'
import imagec4 from '../../assets/img/Shop/imgc4.webp'
import imagec5 from '../../assets/img/Shop/imgc5.webp'
import imagec6 from '../../assets/img/Shop/imgc6.webp'
import imagec7 from '../../assets/img/Shop/imgc7.webp'
import imagec8 from '../../assets/img/Shop/imgc8.webp'
import imagec9 from '../../assets/img/Shop/imgc9.webp'
import imagec10 from '../../assets/img/Shop/imgc10.webp'
import imagec11 from '../../assets/img/Shop/imgc11.webp'
import imagec12 from '../../assets/img/Shop/imgc12.webp'
import imagec13 from '../../assets/img/Shop/imgc13.webp'
import imagec14 from '../../assets/img/Shop/imgc14.webp'
import imagec15 from '../../assets/img/Shop/imgc15.webp'
import Slider from '@mui/material/Slider';
import Checkbox from '@mui/material/Checkbox';
import jwellarycollection from '../../assets/img/Shop/jwellaey collection.webp'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


function valuetext(value) {
    return `${value}°C`;
  };
  

function Categories() {

    const [data, setData] = useState();

    const handleChange = (event) => {
        setData(event.target.value);
    };

    const imgC1 = [
        {
            img1: imagec1,
        },
        {
            img1: imagec2,
        },
        {
            img1: imagec3,
        }
    ];

    const imgC2 = [
        {
            img2: imagec4,
        },
        {
            img2: imagec5,
        },
        {
            img2: imagec6,
        }
    ];
    const imgC3 = [
        {
            img3: imagec7,
        },
        {
            img3: imagec8,
        },
        {
            img3: imagec9,
        }
    ];
    const imgC4 = [
        {
            img4: imagec10,
        },
        {
            img4: imagec11,
        },
        {
            img4: imagec12,
        }
    ];
    const imgC5 = [
        {
            img5: imagec13,
        },
        {
            img5: imagec14,
        },
        {
            img5: imagec15,
        }
    ];

    const [value, setValue] = React.useState([20, 37]);

  const handleChange1 = (event, newValue) => {
    setValue(newValue);
  };

    return (
        <Box sx={{paddingTop:"80px",paddingBottom:"80px"}}>
            <Container>
                <Grid container item xs={12} spacing={2}>
                    <Grid item xs={12} lg={3} md={3} sm={12}> 
                        <Box sx={{marginTop:"20px"}}>
                            <Typography fontFamily={"Lato, sans-serif"} sx={{ fontWeight: "700", fontSize: "20px", borderBottom: "1px dashed #efefef", paddingBottom: "15px", width: "100%" }}>
                                Categories
                            </Typography>
                            <Box>
                                <Typography sx={{ color: "#555555", padding: "8px 0", "&:hover": { transition: ".3s", color: "#C29958" } }}>Fashionware (10)</Typography>
                                <Typography sx={{ color: "#555555", padding: "8px 0", "&:hover": { transition: ".3s", color: "#C29958" } }}>Kitchenware (5)</Typography>
                                <Typography sx={{ color: "#555555", padding: "8px 0", "&:hover": { transition: ".3s", color: "#C29958" } }}>Kitchenware (5)</Typography>
                                <Typography sx={{ color: "#555555", padding: "8px 0", "&:hover": { transition: ".3s", color: "#C29958" } }}>Accessories (4)</Typography>
                                <Typography sx={{ color: "#555555", padding: "8px 0", "&:hover": { transition: ".3s", color: "#C29958" } }}>Shoe (5)</Typography>
                                <Typography sx={{ color: "#555555", padding: "8px 0", "&:hover": { transition: ".3s", color: "#C29958" } }}>Toys (2)</Typography>
                            </Box>

                            <Box sx={{marginTop:"20px"}}>
                                <Typography fontFamily={"Lato, sans-serif"} sx={{ fontWeight: "700", fontSize: "20px", borderBottom: "1px dashed #efefef", paddingBottom: "20px", marginBottom:"20px",width: "100%" }}>
                                    Price
                                </Typography>
                                <Box sx={{ width: 240 ,color:"#c29958" }}>
                                    <Slider
                                        getAriaLabel={() => 'Temperature range'}
                                        value={value}
                                        onChange={handleChange1}
                                        valueLabelDisplay="auto"
                                        getAriaValueText={valuetext}/>
                                </Box>
                                <Box sx={{display:"flex",alignItems:"center !important",marginTop:"15px"}}>
                                    <Typography fontFamily={"Lato, sans-serif"} sx={{color:"#222222",textAlign:"center"}}>Price: $1 - $969</Typography>
                                    <Box sx={{marginLeft:"60px"}}>
                                        <Button sx={{fontSize:"13px",padding:"4px 15px", backgroundColor:"rgb(204, 197, 197)",color:"black",border:"none", textAlign:"center",transition:".4s", "&:hover": {backgroundColor:"#C29958",color:"white"}}}>
                                            FILTER
                                        </Button>
                                    </Box>
                                </Box>
                            </Box>

                            <Box sx={{marginTop:"20px"}}>
                            <Typography fontFamily={"Lato, sans-serif"} sx={{ fontWeight: "700", fontSize: "20px", borderBottom: "1px dashed #efefef", paddingBottom: "20px", marginBottom:"20px",width: "100%" }}>
                                Brand
                            </Typography>
                            <Box>
                                <div style={{display:"flex"}}>
                                    <Checkbox {...label} defaultChecked size="small" />
                                    <Typography sx={{ color: "#555555", padding: "8px 8px", "&:hover": { transition: ".3s", color: "#C29958" } }}>Studio (3)</Typography>
                                </div>
                                <div style={{display:"flex"}}>
                                    <Checkbox {...label} defaultChecked size="small" />
                                    <Typography sx={{ color: "#555555", padding: "8px 8px", "&:hover": { transition: ".3s", color: "#C29958" } }}>Hastech (4)</Typography>
                                </div>
                                <div style={{display:"flex"}}>
                                    <Checkbox {...label} defaultChecked size="small" />
                                    <Typography sx={{ color: "#555555", padding: "8px 8px", "&:hover": { transition: ".3s", color: "#C29958" } }}>Quickiin (15)</Typography>
                                </div>
                                <div style={{display:"flex"}}>
                                    <Checkbox {...label} defaultChecked size="small" />
                                    <Typography sx={{ color: "#555555", padding: "8px 8px", "&:hover": { transition: ".3s", color: "#C29958" } }}>Graphic Corner (10)</Typography>
                                </div>
                                <div style={{display:"flex"}}>
                                    <Checkbox {...label} defaultChecked size="small" />
                                    <Typography sx={{ color: "#555555", padding: "8px 8px", "&:hover": { transition: ".3s", color: "#C29958" } }}>DevItems (12)</Typography>
                                </div>
                            </Box>
                            </Box>

                            <Box sx={{marginTop:"20px"}}>
                            <Typography fontFamily={"Lato, sans-serif"} sx={{ fontWeight: "700", fontSize: "20px", borderBottom: "1px dashed #efefef", paddingBottom: "20px", marginBottom:"20px",width: "100%" }}>
                                Color
                            </Typography>
                            <Box>
                                <div style={{display:"flex"}}>
                                    <Checkbox {...label} defaultChecked size="small" />
                                    <Typography sx={{ color: "#555555", padding: "8px 8px", "&:hover": { transition: ".3s", color: "#C29958" } }}>Black (20)</Typography>
                                </div>
                                <div style={{display:"flex"}}>
                                    <Checkbox {...label} defaultChecked size="small" />
                                    <Typography sx={{ color: "#555555", padding: "8px 8px", "&:hover": { transition: ".3s", color: "#C29958" } }}>Red (6)</Typography>
                                </div>
                                <div style={{display:"flex"}}>
                                    <Checkbox {...label} defaultChecked size="small" />
                                    <Typography sx={{ color: "#555555", padding: "8px 8px", "&:hover": { transition: ".3s", color: "#C29958" } }}>Blue (8)</Typography>
                                </div>
                                <div style={{display:"flex"}}>
                                    <Checkbox {...label} defaultChecked size="small" />
                                    <Typography sx={{ color: "#555555", padding: "8px 8px", "&:hover": { transition: ".3s", color: "#C29958" } }}>Green (5)</Typography>
                                </div>
                                <div style={{display:"flex"}}>
                                    <Checkbox {...label} defaultChecked size="small" />
                                    <Typography sx={{ color: "#555555", padding: "8px 8px", "&:hover": { transition: ".3s", color: "#C29958" } }}>Pink (4)</Typography>
                                </div>
                            </Box>
                            </Box>

                            <Box sx={{marginTop:"20px"}}>
                            <Typography fontFamily={"Lato, sans-serif"} sx={{ fontWeight: "700", fontSize: "20px", borderBottom: "1px dashed #efefef", paddingBottom: "20px", marginBottom:"20px",width: "100%" }}>
                                Size
                            </Typography>
                            <Box>
                                <div style={{display:"flex"}}>
                                    <Checkbox {...label} defaultChecked size="small" />
                                    <Typography sx={{ color: "#555555", padding: "8px 8px", "&:hover": { transition: ".3s", color: "#C29958" } }}>S (4)</Typography>
                                </div>
                                <div style={{display:"flex"}}>
                                    <Checkbox {...label} defaultChecked size="small" />
                                    <Typography sx={{ color: "#555555", padding: "8px 8px", "&:hover": { transition: ".3s", color: "#C29958" } }}>M (5)</Typography>
                                </div>
                                <div style={{display:"flex"}}>
                                    <Checkbox {...label} defaultChecked size="small" />
                                    <Typography sx={{ color: "#555555", padding: "8px 8px", "&:hover": { transition: ".3s", color: "#C29958" } }}>L (7)</Typography>
                                </div>
                                <div style={{display:"flex"}}>
                                    <Checkbox {...label} defaultChecked size="small" />
                                    <Typography sx={{ color: "#555555", padding: "8px 8px", "&:hover": { transition: ".3s", color: "#C29958" } }}>XL (3)</Typography>
                                </div>
                            </Box>
                            </Box>

                            <Box sx={{marginTop:"30px",width:"100%"}}>
                                <img src={jwellarycollection} alt="" />
                            </Box>

                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={9} md={9} sm={12}>
                        <Grid container spacing={5}>
                            <Grid item xs={12} lg={6} md={6} sm={12}>
                                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center", paddingTop: "24px" }}>
                                    <Typography sx={{ color: "#C29958", marginRight: "4px" }}><AppsIcon></AppsIcon></Typography>
                                    <Typography sx={{ marginRight: "60px", color: "#b6b6b6", "&:hover": { transition: ".3s", color: "#C29958" } }}><ViewListIcon></ViewListIcon></Typography>
                                    <Typography sx={{ color: "#777777", fontSize: "15px" }}>Showing 1–16 Of 21 Results</Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} lg={6} md={6} sm={12}>
                                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <Typography sx={{ color: "#777777", fontSize: "15px" }}>Sort By:</Typography>
                                    <Box sx={{ textAlign: "start" }}>
                                        <FormControl variant="standard" sx={{ m: 1, width: "200px", height: "36px", padding: "10px 10px" }}>
                                            <Select
                                                sx={{ padding: "3px 10px", border: "solid 1px #e8e8e8", borderRadius: "5px" }}
                                                labelId="demo-simple-select-standard-label"
                                                id="demo-simple-select-standard"
                                                value={data}
                                                onChange={handleChange}
                                                label="data">
                                                <MenuItem value="Relevance">
                                                    Relevance
                                                </MenuItem>
                                                <MenuItem value={"Name (A - Z)"}>
                                                    Name (A - Z)
                                                </MenuItem>
                                                <MenuItem value={"Name (A - Z)"}>
                                                    Name (Z - A)
                                                </MenuItem>
                                                <MenuItem value={"Price (Low  High)"}>
                                                    Price (Low  High)
                                                </MenuItem>
                                                <MenuItem value={"Rating (Lowest)"}>
                                                    Rating (Lowest)
                                                </MenuItem>
                                                <MenuItem value={"Model (A - Z)"}>
                                                    Model (A - Z)
                                                </MenuItem>
                                                <MenuItem value={"Model (Z - A)"}>
                                                    Model (Z - A)
                                                </MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </Box>
                            </Grid>
                            {/* =======card======= */}
                            <Grid container item xs={12} sx={{ display: "flex" }}>
                                {
                                    imgC1.map((item) => {
                                        return (
                                            <Grid item xs={12} lg={4} md={4} sm={4} >
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
                                                    <img src={item.img1} alt="" style={{ width: "93%", height: "93%", textAlign: "center" }} />
                                                    <Box sx={{ position: "absolute", top: "5%", left: "5%" }}>
                                                        <Box sx={{ borderRadius: "20px", fontWeight: "400", padding: "2px 12px", color: "white", background: "#c29958" }}>New</Box>
                                                        <Box sx={{ borderRadius: "20px", fontWeight: "300", padding: "2px 12px", color: "white", marginTop: "5px", background: "#000" }}>10%</Box>
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
                                            </Grid>
                                        )
                                    })
                                }
                            </Grid>
                            <Grid container item xs={12} sx={{ display: "flex" }}>
                                {
                                    imgC2.map((item) => {
                                        return (
                                            <Grid item xs={12} lg={4} md={4} sm={4} >
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
                                                    <img src={item.img2} alt="logo1" style={{ width: "93%", height: "93%", textAlign: "center" }} />
                                                    <Box sx={{ position: "absolute", top: "5%", left: "5%" }}>
                                                        <Box sx={{ borderRadius: "20px", fontWeight: "400", padding: "2px 12px", color: "white", background: "#c29958" }}>New</Box>
                                                        <Box sx={{ borderRadius: "20px", fontWeight: "300", padding: "2px 12px", color: "white", marginTop: "5px", background: "#000" }}>10%</Box>
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
                                            </Grid>
                                        )
                                    })
                                }
                            </Grid>
                            <Grid container item xs={12} sx={{ display: "flex" }}>
                                {
                                    imgC3.map((item) => {
                                        return (
                                            <Grid item xs={12} lg={4} md={4} sm={4}>
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
                                                    <img src={item.img3} alt="logo1" style={{ width: "93%", height: "93%", textAlign: "center" }} />
                                                    <Box sx={{ position: "absolute", top: "5%", left: "5%" }}>
                                                        <Box sx={{ borderRadius: "20px", fontWeight: "400", padding: "2px 12px", color: "white", background: "#c29958" }}>New</Box>
                                                        <Box sx={{ borderRadius: "20px", fontWeight: "300", padding: "2px 12px", color: "white", marginTop: "5px", background: "#000" }}>10%</Box>
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
                                            </Grid>
                                        )
                                    })
                                }
                            </Grid>
                            <Grid container item xs={12} sx={{ display: "flex" }}>
                                {
                                    imgC4.map((item) => {
                                        return (
                                            <Grid item xs={12} lg={4} md={4} sm={4}>
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
                                                    <img src={item.img4} alt="logo1" style={{ width: "93%", height: "93%", textAlign: "center" }} />
                                                    <Box sx={{ position: "absolute", top: "5%", left: "5%" }}>
                                                        <Box sx={{ borderRadius: "20px", fontWeight: "400", padding: "2px 12px", color: "white", background: "#c29958" }}>New</Box>
                                                        <Box sx={{ borderRadius: "20px", fontWeight: "300", padding: "2px 12px", color: "white", marginTop: "5px", background: "#000" }}>10%</Box>
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
                                            </Grid>
                                        )
                                    })
                                }
                            </Grid>
                            <Grid container item xs={12} sx={{ display: "flex" }}>
                                {
                                    imgC5.map((item) => {
                                        return (
                                            <Grid item xs={12} lg={4} md={4} sm={4}>
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
                                                    <img src={item.img5} alt="logo1" style={{ width: "93%", height: "93%", textAlign: "center" }} />
                                                    <Box sx={{ position: "absolute", top: "5%", left: "5%" }}>
                                                        <Box sx={{ borderRadius: "20px", fontWeight: "400", padding: "2px 12px", color: "white", background: "#c29958" }}>New</Box>
                                                        <Box sx={{ borderRadius: "20px", fontWeight: "300", padding: "2px 12px", color: "white", marginTop: "5px", background: "#000" }}>10%</Box>
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
                                            </Grid>
                                        )
                                    })
                                }
                            </Grid>
                            <Box sx={{display:"flex",border:"1px solid #efefef",width:"100%",padding:"20px",marginTop:"30px",justifyContent:"center",alignItems:"center"}}>
                                <Typography sx={{border:"none",outline:"none",height:"40px",width:"40px",textAlign:"center","&:hover": {transition:".4s",backgroundColor:"#C29958",color:"white"},display:"inline-block",margin:"0 5px 0 0",backgroundColor:"#f5f5f5",fontSize:"30px",borderRadius:"50%"}}><NavigateBeforeIcon></NavigateBeforeIcon></Typography>
                                <Typography sx={{border:"none",outline:"none",height:"40px",width:"40px",justifyContent:"center",alignItems:"center","&:hover": {transition:".4s",backgroundColor:"#C29958",color:"white"},display:"flex",margin:"0 5px 0 0",backgroundColor:"#C29958",color:"white",fontSize:"15px",borderRadius:"50%"}}>1</Typography>
                                <Typography sx={{border:"none",outline:"none",height:"40px",width:"40px",justifyContent:"center",alignItems:"center","&:hover": {transition:".4s",backgroundColor:"#C29958",color:"white"},display:"flex",margin:"0 5px 0 0",backgroundColor:"#f5f5f5",fontSize:"15px",borderRadius:"50%"}}>2</Typography>
                                <Typography sx={{border:"none",outline:"none",height:"40px",width:"40px",justifyContent:"center",alignItems:"center","&:hover": {transition:".4s",backgroundColor:"#C29958",color:"white"},display:"flex",margin:"0 5px 0 0",backgroundColor:"#f5f5f5",fontSize:"15px",borderRadius:"50%"}}>3</Typography>
                                <Typography sx={{border:"none",outline:"none",height:"40px",width:"40px",textAlign:"center","&:hover": {transition:".4s",backgroundColor:"#C29958",color:"white"},display:"inline-block",margin:"0 5px 0 0",backgroundColor:"#f5f5f5",fontSize:"30px",borderRadius:"50%"}}><ChevronRightIcon></ChevronRightIcon></Typography>
                    </Box>
                        </Grid>
                    
                    </Grid>
                </Grid>
            </Container>
                
        </Box>
    )
}

export default Categories
