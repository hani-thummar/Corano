// import React from 'react'
// import { useNavigate } from 'react-router-dom';
// import HouseIcon from '@mui/icons-material/House';
// import { Box, Typography, Container} from '@mui/material'

// function RightSection1() {

//     const navigate = useNavigate();

//   return (
//     <div>
//       <Box sx={{ bgcolor: "#F5F5F5" }}>
//         <Container>
//           <Box sx={{ display: "flex", alignItems: "center", padding: "24px 0", textAlign: "center" }}>
//             <HouseIcon sx={{ fontSize: "20px", "&:hover": { transition: ".3s", color: "#c29958" } }} onClick={() => navigate("/")}>
//             </HouseIcon>
//             <Typography sx={{ color: "#7e7e7e", fontSize: "17px", margin: "0 5px" }}>/</Typography>
//             <Typography sx={{ fontSize: "16px", margin: "0 5px", fontWeight: "400" }} onClick={() => navigate("/shop")}>Shop</Typography>
//             <Typography sx={{ color: "#7e7e7e", fontSize: "17px", margin: "0 5px" }}>/</Typography>
//             <Typography sx={{ color: "#c29958", fontSize: "16px", margin: "0 5px", fontWeight: "400" }}>Blog Details Right Sidebar</Typography>
//           </Box>
//         </Container>
//       </Box>
//     </div>
//   )
// }

// export default RightSection1


import React from 'react';
import { useNavigate } from 'react-router-dom';
import HouseIcon from '@mui/icons-material/House';
import { Box, Typography, Container } from '@mui/material';

function RightSection1() {
    const navigate = useNavigate();

    return (
        <Box sx={{ bgcolor: "#F5F5F5", padding: "10px 0" }}>
            <Container>
                <Box 
                    sx={{ 
                        display: "flex", 
                        padding: { xs: "10px", sm: "16px", md: "24px" }, // Responsive padding
                        textAlign: { xs: "left", sm: "center" } // Responsive text alignment
                    }}
                >
                    <HouseIcon 
                        sx={{ 
                            fontSize: { xs: "16px", sm: "20px" }, 
                            cursor: "pointer", 
                            transition: ".3s", 
                            "&:hover": { color: "#c29958" }
                        }} 
                        onClick={() => navigate("/")}
                    />
                    <Typography 
                        sx={{ 
                            color: "#7e7e7e", 
                            fontSize: { xs: "14px", sm: "17px" }, 
                            margin: "0 5px" 
                        }}
                    >
                        /
                    </Typography>
                    <Typography 
                        sx={{ 
                            fontSize: { xs: "14px", sm: "16px" }, 
                            margin: "0 5px", 
                            fontWeight: "400", 
                            cursor: "pointer",
                            "&:hover": { color: "#c29958" }
                        }} 
                        onClick={() => navigate("/shop")}
                    >
                        Shop
                    </Typography>
                    <Typography 
                        sx={{ 
                            color: "#7e7e7e", 
                            fontSize: { xs: "14px", sm: "17px" }, 
                            margin: "0 5px" 
                        }}
                    >
                        /
                    </Typography>
                    <Typography 
                        sx={{ 
                            color: "#c29958", 
                            fontSize: { xs: "14px", sm: "16px" }, 
                            margin: "0 5px", 
                            fontWeight: "400" 
                        }}
                    >
                        Blog Details Right Sidebar
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}

export default RightSection1;
