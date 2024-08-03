// import React from 'react'
// import { Box, Typography, Container, Grid, Checkbox } from '@mui/material'
// import HouseIcon from '@mui/icons-material/House';
// import { useNavigate } from 'react-router-dom';

// const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

// function Login() {

//     const navigate = useNavigate();

//     return (
//         <div >
//             <Box sx={{ bgcolor: "#F5F5F5" }}>
//                 <Container>
//                     <Box sx={{ display: "flex", alignItems: "center", padding: "24px 0", textAlign: "center" }}>
//                         <HouseIcon sx={{ fontSize: "20px", "&:hover": { transition: ".3s", color: "#c29958" } }} onClick={() => navigate("/")}></HouseIcon>
//                         <Typography sx={{ color: "#7e7e7e", fontSize: "17px", margin: "0 5px" }}>/</Typography>
//                         <Typography sx={{ color: "#c29958", fontSize: "16px", margin: "0 5px", fontWeight: "400" }}>Login-Register</Typography>
//                     </Box>
//                 </Container>
//             </Box>

//             <Container sx={{paddingTop:"80px",paddingBottom:"80px"}}>
//                 <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
//                     <Grid item xs={6} lg={6}>
//                         <Box sx={{boxShadow:"0 0 6px rgba(0, 0, 0, 0.1)",padding:"20px 25px"}}>
//                             <Typography sx={{fontWeight:"700",fontSize:"18px",marginBottom:"20px"}}>Sign In</Typography>
//                             <Typography ><input type="text" placeholder='Email or Username' style={{padding:"3% 67% 3% 2%",outline:"none",border:"1px solid #ccc",backgroundColor:"#f7f7f7",marginBottom:"25px"}} /></Typography>
//                             <Typography ><input type="text" placeholder='Email or Password' style={{padding:"3% 67% 3% 2%",outline:"none",border:"1px solid #ccc",backgroundColor:"#f7f7f7"}} /></Typography>
//                             <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
//                                 <Typography sx={{marginTop:"5px",fontSize:"14px"}}> <Checkbox {...label} defaultChecked size="small" sx={{borderRadius:"none"}}/> Remember Me</Typography>
//                                 <Typography sx={{color:"#c29958",fontSize:"14px"}}>Forget Password?</Typography>
//                             </Box>    
//                             <Box sx={{display:"flex",textAlign:"center",marginTop:"10px"}}>
//                                 <Typography sx={{width:"20%",border:"solid 1px black",padding:"12px 15px",backgroundColor:"#C29958",color:"white",border:"none",outline:"none","&:hover": {transition:".3s",backgroundColor:"#222222"}}}>
//                                     Login
//                                 </Typography>
//                             </Box>                    
//                         </Box>
//                     </Grid>

//                     <Grid item xs={6} lg={6}>
//                     <Box sx={{boxShadow:"0 0 6px rgba(0, 0, 0, 0.1)",padding:"20px 25px"}}>
//                             <Typography sx={{fontWeight:"700",fontSize:"18px",marginBottom:"20px"}}>Singup Form</Typography>
//                             <Typography ><input type="text" placeholder='Full Name' style={{padding:"3% 68% 3% 2%",outline:"none",border:"1px solid #ccc",backgroundColor:"#f7f7f7",marginBottom:"25px"}} /></Typography>
//                             <Typography ><input type="text" placeholder='Enter Your Email' style={{marginBottom:"25px",padding:"3% 68% 3% 2%",outline:"none",border:"1px solid #ccc",backgroundColor:"#f7f7f7"}} /></Typography>
//                             {/* <Box sx={{display:"flex"}}>
//                                 <Typography><input type="text" placeholder='Enter your Password' style={{padding:"3% 100% 3% 2%",outline:"none",border:"1px solid #ccc",backgroundColor:"#f7f7f7"}}/></Typography>
//                                 <Typography><input type="text" placeholder='Repet your Password' style={{padding:"3% 67% 3% 2%",outline:"none",border:"1px solid #ccc",backgroundColor:"#f7f7f7"}}/></Typography>
//                             </Box> */}
//                             <Box sx={{display:"flex",justifyContent:"space-between"}}>
//                             <Box>
//                                 <Typography><input type="text" placeholder='Enter your Password' style={{padding:"13px 84px 13px 10px",outline:"none",border:"none",border:"1px solid #ccc",backgroundColor:"#f7f7f7"}}/></Typography>
//                             </Box>
//                             <Box>
//                                 <Typography><input type="text" placeholder='Repeat your Password' style={{padding:"13px 84px 13px 10px",outline:"none",border:"none",border:"1px solid #ccc",backgroundColor:"#f7f7f7"}}/></Typography>
//                             </Box>
//                             </Box>
//                             <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
//                                 <Typography sx={{marginTop:"5px",fontSize:"14px"}}> <Checkbox {...label} defaultChecked size="small" sx={{borderRadius:"none"}}/> Subscribe Our Newsletter</Typography>
//                             </Box>    
//                             <Box sx={{display:"flex",textAlign:"center",marginTop:"10px"}}>
//                                 <Typography sx={{width:"20%",border:"solid 1px black",padding:"12px 15px",backgroundColor:"#C29958",color:"white",border:"none",outline:"none","&:hover": {transition:".3s",backgroundColor:"#222222"}}}>
//                                     Register
//                                 </Typography>
//                             </Box>                    
//                         </Box>
//                     </Grid>
//                 </Grid>
//             </Container>
//         </div>
//     )
// }

// export default Login



import React from 'react'
import { Box, Typography, Container, Grid, Checkbox, Button } from '@mui/material'
import HouseIcon from '@mui/icons-material/House';
import { useNavigate } from 'react-router-dom';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function Login() {

    const navigate = useNavigate();

    return (
        <div>
            <Box sx={{ bgcolor: "#F5F5F5" }}>
                <Container>
                    <Box sx={{ display: "flex", alignItems: "center", padding: "24px 0", textAlign: "center" }}>
                        <HouseIcon sx={{ fontSize: "20px", "&:hover": { transition: ".3s", color: "#c29958" } }} onClick={() => navigate("/")}></HouseIcon>
                        <Typography sx={{ color: "#7e7e7e", fontSize: "17px", margin: "0 5px" }}>/</Typography>
                        <Typography sx={{ color: "#c29958", fontSize: "16px", margin: "0 5px", fontWeight: "400" }}>Login-Register</Typography>
                    </Box>
                </Container>
            </Box>

            <Container sx={{ paddingTop: "80px", paddingBottom: "80px" }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ boxShadow: "0 0 6px rgba(0, 0, 0, 0.1)", padding: "20px 25px" }}>
                            <Typography sx={{ fontWeight: "700", fontSize: "18px", marginBottom: "20px" }}>Sign In</Typography>
                            <input type="text" placeholder='Email or Username' style={{ width: "100%", padding: "10px", marginBottom: "25px", outline: "none", border: "1px solid #ccc", backgroundColor: "#f7f7f7" }} />
                            <input type="password" placeholder='Password' style={{ width: "100%", padding: "10px", marginBottom: "25px", outline: "none", border: "1px solid #ccc", backgroundColor: "#f7f7f7" }} />
                            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px" }}>
                                <Checkbox {...label} defaultChecked size="small" sx={{ padding: 0 }} />
                                <Typography sx={{ fontSize: "14px" }}>Remember Me</Typography>
                                <Typography sx={{ color: "#c29958", fontSize: "14px" }}>Forget Password?</Typography>
                            </Box>
                            <Button variant="contained" sx={{  backgroundColor: "#C29958", color: "white", "&:hover": { backgroundColor: "#222222" } }}>
                                Login
                            </Button>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Box sx={{ boxShadow: "0 0 6px rgba(0, 0, 0, 0.1)", padding: "20px 25px" }}>
                            <Typography sx={{ fontWeight: "700", fontSize: "18px", marginBottom: "20px" }}>Signup Form</Typography>
                            <input type="text" placeholder='Full Name' style={{ width: "100%", padding: "10px", marginBottom: "25px", outline: "none", border: "1px solid #ccc", backgroundColor: "#f7f7f7" }} />
                            <input type="email" placeholder='Enter Your Email' style={{ width: "100%", padding: "10px", marginBottom: "25px", outline: "none", border: "1px solid #ccc", backgroundColor: "#f7f7f7" }} />
                            <input type="password" placeholder='Enter your Password' style={{ width: "100%", padding: "10px", marginBottom: "25px", outline: "none", border: "1px solid #ccc", backgroundColor: "#f7f7f7" }} />
                            <input type="password" placeholder='Repeat your Password' style={{ width: "100%", padding: "10px", marginBottom: "25px", outline: "none", border: "1px solid #ccc", backgroundColor: "#f7f7f7" }} />
                            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px" }}>
                                <Checkbox {...label} defaultChecked size="small" sx={{ padding: 0 }} />
                                <Typography sx={{ fontSize: "14px" }}>Subscribe Our Newsletter</Typography>
                            </Box>
                            <Button variant="contained" sx={{  backgroundColor: "#C29958", color: "white", "&:hover": { backgroundColor: "#222222" } }}>
                                Register
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Login;

