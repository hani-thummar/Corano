import { Box, Toolbar, Typography, button, Container, ListItem } from '@mui/material'
// import React from 'react'
import * as React from 'react';
import img1 from "../assets/img/HomePage/logo.webp"
import { Label } from '@mui/icons-material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { hover } from '@testing-library/user-event/dist/hover';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import "../index.css"

function Navigation() {
  return (
    <Container>
      <Box style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Typography ><img src={img1} alt="" /></Typography>
        <Box style={{ display: "flex" }}>
          <Typography display={"flex"} alignItems={"center"} style={{ position: "relative" }}>

            <Typography className='menu'
              sx={{
                position: "relative", "&:hover": {
                  "&.menu": {
                    color: "#C29958",
                  },
                  "&.submenu": {
                    // display: "block !important",
                    opacity:"1 !important",
                    visibility:"visible",
                    transform: "transletY(-80%)",
                  }
                }
              }}><Box sx={{ display: "flex" }}>
                Home <KeyboardArrowDownIcon ></KeyboardArrowDownIcon>
              </Box>
              <Box sx={{ position: "absolute", top: "100%", left: "0",opacity:"0",visibility:"hidden", width: "200px", background: "white", transform: "transletY(0)" }} className='submenu ' >
                <ListItem sx={{ borderBottom: "1px solid #efefef" }}>Home Version 01</ListItem>
                <ListItem sx={{ borderBottom: "1px solid #efefef" }}>Home Version 02</ListItem>
                <ListItem sx={{ borderBottom: "1px solid #efefef" }}>Home Version 03</ListItem>
                <ListItem sx={{ borderBottom: "1px solid #efefef" }}>Home Version 04</ListItem>
                <ListItem sx={{ borderBottom: "1px solid #efefef" }}>Home Version 05</ListItem>
                <ListItem>Home Version 06</ListItem>
              </Box>
            </Typography>

            <Typography paddingLeft="20px"
              className='red'
              sx={{
                "&:hover": {
                  "&.red": {
                    color: "#C29958"
                  }
                }
              }} >Pages</Typography><KeyboardArrowDownIcon></KeyboardArrowDownIcon>

            <Box>
              <Typography className='menu'
                sx={{
                  marginLeft: "20px", position: "relative", "&:hover": {
                    "&.menu": {
                      color: "#C29958"
                    },
                    "&.submenu": {
                      opacity:"1 !important",
                    visibility:"visible",
                    transform: "transletY(-80%)",
                    }
                  }
                }}><Box sx={{ display: "flex" }}>
                  Shop <KeyboardArrowDownIcon ></KeyboardArrowDownIcon>
                </Box>
                <Box sx={{ position: "absolute", top: "100%", left: "0", opacity:"0",visibility:"hidden", width: "200px", background: "white" }} className='submenu'>
                  <ListItem sx={{ borderBottom: "1px solid #efefef" }}>Shop Grid Layout<ChevronRightIcon></ChevronRightIcon></ListItem>
                  <ListItem sx={{ borderBottom: "1px solid #efefef" }}>Shop List Layout<ChevronRightIcon></ChevronRightIcon></ListItem>
                  <ListItem>Product Details<ChevronRightIcon></ChevronRightIcon></ListItem>
                </Box>
              </Typography>
            </Box>

            <Typography paddingLeft="20px"
              className='red'
              sx={{
                "&:hover": {
                  "&.red": {
                    color: "#C29958"
                  }
                }
              }} >Blog</Typography><KeyboardArrowDownIcon></KeyboardArrowDownIcon>
            <Typography paddingLeft="20px"
              className='red'
              sx={{
                "&:hover": {
                  "&.red": {
                    color: "#C29958"
                  }
                }
              }} >Contact Us</Typography>
          </Typography>
        </Box>

        <Box alignItems={"center"} display={"flex"}>
          <button style={{ borderRadius: "50px", border: "none", padding: "10px", alignItems: "center", display: "flex" }}>
            <SearchIcon className='red'
              sx={{
                "&:hover": {
                  "&.red": {
                    color: "#C29958"
                  }
                }
              }}></SearchIcon>
            <Typography> <input type="text" placeholder='Search entire store hire' style={{ outline: "none", border: "none", background: "none", marginLeft: "5px" }} /></Typography>
          </button>
        </Box>

        <Box display={"flex"}>
          <Typography marginRight={2}><AccountCircleIcon className='red'
            sx={{
              "&:hover": {
                "&.red": {
                  color: "#C29958"
                }
              }
            }}></AccountCircleIcon></Typography>
          <Typography marginRight={2} position={"relative"}>
            <div style={{ position: 'absolute', top: "-8px", left: "15px", background: "#C29958", borderRadius: "50px", width: "20px", height: "20px", justifyContent: "center", display: "flex", alignItems: "center" }}>o</div>
            <FavoriteBorderIcon
              className='red'
              sx={{
                "&:hover": {
                  "&.red": {
                    color: "#C29958"
                  }
                }
              }}></FavoriteBorderIcon>
          </Typography>
          <Typography position={"relative"}>
            <div style={{ position: 'absolute', top: "-8px", left: "15px", background: "#C29958", borderRadius: "50px", width: "20px", height: "20px", justifyContent: "center", display: "flex", alignItems: "center" }}>o</div>
            <ShoppingBagIcon
              className='red'
              sx={{
                "&:hover": {
                  "&.red": {
                    color: "#C29958"
                  }
                }
              }}></ShoppingBagIcon>
          </Typography>
        </Box>
      </Box>
    </Container>
  )
}

export default Navigation;


