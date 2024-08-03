import React from 'react'
import { Typography, Box, Grid, Container } from '@mui/material'
import wedding from '../../assets/img/HomePage/Wedding.webp'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import w1 from '../../assets/img/HomePage/w - 1.webp'
import w2 from '../../assets/img/HomePage/w - 2.webp'
import w3 from '../../assets/img/HomePage/w - 3.webp'
import w4 from '../../assets/img/HomePage/w - 4.webp'
import wi1 from '../../assets/img/HomePage/wi - 1.webp'
import wi2 from '../../assets/img/HomePage/wi - 2.webp'
import wi3 from '../../assets/img/HomePage/wi - 3.webp'
import wi4 from '../../assets/img/HomePage/wi -4.webp'

function Wedding() {
    const Wedding = [
        {
            Img: w1,
            wt: "Diamond Exclusive",
            wr: "Ring",
            dollar: "$50.00",
            dol: "$29.99"
        },
        {
            Img: w2,
            wt: "Handmade Golden",
            wr: "Ring",
            dollar: "$50.00",
            dol: "$29.99"
        },
        {
            Img: w3,
            wt: "Exclusive gold Jewelry",
            wr: "Ring",
            dollar: "$50.00",
            dol: "$29.99"
        },
        {
            Img: w4,
            wt: "Perfect Diamond",
            wr: "earring",
            dollar: "$50.00",
            dol: "$29.99"
        },
    ]
    const Wedding2 = [
        {
            Img: wi1,
            wt: "Diamond Exclusive",
            wr: "earrings",
            dollar: "$90.00",
            dol: "$100"
        },
        {
            Img: wi2,
            wt: "Corano top exclusive",
            wr: "jewellry",
            dollar: "$20.00",
            dol: "$30.00"
        },
        {
            Img: wi3,
            wt: "Handmade Golden",
            wr: "Ring",
            dollar: "$55.00",
            dol: "$30.00"
        },
        {
            Img: wi4,
            wt: "Top Perfect Diamond",
            wr: "necklace",
            dollar: "$50.00",
            dol: "$29.99"
        },
    ]
    return (
        <Box>
            <Container>
                <Box sx={{paddingTop:"80px",paddingBottom:"80px"}}>
                    <Grid container item xs={12} spacing={2}>
                        <Grid item lg={6} md={6} sm={12} xs={12} sx={{ position: "relative" }}>
                            <img src={wedding} alt=""  width={"100%"}/>
                            <Box sx={{ position: "absolute", top: "38%", left: "10%" }}>
                                <Typography sx={{ color: "#777777", marginLeft: "28%" }} fontWeight={"600"} >
                                    BEAUTIFUL
                                </Typography>
                                <Typography fontWeight={"700"} fontSize={"30px"} marginTop={"10px"}>
                                    Wedding Rings
                                </Typography>
                                <Typography className='shopNow' marginTop={"30px"} borderBottom={"2px solid black"} width={"76px"} marginLeft={"28%"}
                                    sx={{
                                        transition: ".3s", "&:hover": {
                                            "&.shopNow": {
                                                color: "#C29958 !important",
                                                borderBottom: "2px solid #C29958"
                                            }
                                        }
                                    }}
                                >Shop Now</Typography>
                            </Box>
                        </Grid>
                        <Grid container item lg={6} md={6} sm={12} xs={12} sx={{ paddingTop: { md: "0px", xs: "200px" } }} spacing={4}>
                            <Grid item lg={6} md={6} sm={6} xs={12} display={"flex"} justifyContent={"center"}>
                                <Box>
                                    <Typography  variant="contained" sx={{ fontWeight: "700", fontSize: "18px", display: "flex", alignItems: "center" }}>
                                        Best Seller Product
                                        <KeyboardArrowLeftIcon className='hover' sx={{
                                            fontSize: "22px", marginLeft: "20px",
                                            "&:hover": {
                                                transition: ".3s", "&.hover": {
                                                    color: "#C29958"
                                                }
                                            }
                                        }}></KeyboardArrowLeftIcon>
                                        <KeyboardArrowRightIcon className='hover' sx={{
                                            fontSize: "22px",
                                            "&:hover": {
                                                transition: ".3s", "&.hover": {
                                                    color: "#C29958"
                                                }
                                            }
                                        }}></KeyboardArrowRightIcon>
                                    </Typography>
                                    {
                                        Wedding.map((item) => {
                                            return (
                                                <Box sx={{ display: "flex", gap: "10px", marginTop: "17px" }}>
                                                    <Box>
                                                        <img src={item.Img} alt="" width={'80px'} />
                                                    </Box>
                                                    <Box className='hover' whiteSpace={"nowrap"}
                                                        sx={{
                                                            "&:hover": {
                                                                transition: ".3s", "&.hover": {
                                                                    color: "#C29958"
                                                                }
                                                            }
                                                        }}>
                                                        <Typography sx={{ fontSize: "17px" }}>{item.wt}</Typography>
                                                        <Typography>{item.wr}</Typography>
                                                        <Box sx={{ fontSize: "17px", marginTop: "10px", color: "#c29958", display: "flex" }}>
                                                            {item.dollar}
                                                            <Box color='#999999' marginLeft="5px" >
                                                                <del>{item.dol}</del>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            )
                                        })
                                    }
                                </Box>
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xs={12} display={"flex"} justifyContent={"center"} >
                                <Box>
                                    <Typography sx={{ fontWeight: "700", fontSize: "18px", display: "flex", alignItems: "center" }}>
                                        On-sale product
                                        <KeyboardArrowLeftIcon className='hover' sx={{
                                            fontSize: "22px", marginLeft: "20px",
                                            "&:hover": {
                                                transition: ".3s", "&.hover": {
                                                    color: "#C29958"
                                                }
                                            }
                                        }}></KeyboardArrowLeftIcon>
                                        <KeyboardArrowRightIcon className='hover' sx={{
                                            fontSize: "22px",
                                            "&:hover": {
                                                transition: ".3s", "&.hover": {
                                                    color: "#C29958"
                                                }
                                            }
                                        }}></KeyboardArrowRightIcon>
                                    </Typography>
                                    {
                                        Wedding2.map((item) => {
                                            return (
                                                <Box sx={{ display: "flex", gap: "10px", marginTop: "17px" }}>
                                                    <Box>
                                                        <img src={item.Img} alt="" width={'80px'} />
                                                    </Box>
                                                    <Box className='hover' whiteSpace={"nowrap"}
                                                        sx={{
                                                            "&:hover": {
                                                                transition: ".3s", "&.hover": {
                                                                    color: "#C29958"
                                                                }
                                                            }
                                                        }}>
                                                        <Typography sx={{ fontSize: "17px" }}>{item.wt}</Typography>
                                                        <Typography>{item.wr}</Typography>
                                                        <Box sx={{ fontSize: "17px", marginTop: "10px", color: "#c29958", display: "flex" }}>
                                                            {item.dollar}
                                                            <Box color='#999999' marginLeft="5px" >
                                                                <del>{item.dol}</del>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            )
                                        })
                                    }
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}

export default Wedding





