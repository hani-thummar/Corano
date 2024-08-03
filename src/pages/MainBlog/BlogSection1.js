import React from 'react'
import { Box, Typography, Container} from '@mui/material'
import HouseIcon from '@mui/icons-material/House';
import { useNavigate } from 'react-router-dom';

function BlogSection1() {

    const navigate = useNavigate();

  return (
    
      <Box sx={{bgcolor:"#F5F5F5"}}>
        <Container>
            <Box sx={{display:"flex",alignItems:"center",padding:"24px 0",textAlign:"center"}}>
                <HouseIcon sx={{fontSize:"20px","&:hover": {transition:".3s",color:"#c29958"}}} onClick={()=>navigate("/")}>
                </HouseIcon>
                <Typography sx={{color:"#7e7e7e",fontSize:"17px",margin:"0 5px"}}>/</Typography>
                <Typography sx={{color:"#c29958",fontSize:"16px",margin:"0 5px",fontWeight:"400"}}>Blog Left Sidebar</Typography>
            </Box>
        </Container>
    </Box>
  )
}

export default BlogSection1
