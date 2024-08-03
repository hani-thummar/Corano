import React from 'react';
import { Box, Typography, Container, Grid, Button } from '@mui/material';
import HouseIcon from '@mui/icons-material/House';
import { useNavigate } from 'react-router-dom';
import BusinessIcon from '@mui/icons-material/Business';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';

function Project() {
    const navigate = useNavigate();

    return (
        <div>
            <Box sx={{ bgcolor: "#F5F5F5" }}>
                <Container>
                    <Box sx={{ display: "flex", alignItems: "center", padding: "24px 0", textAlign: "center" }}>
                        <HouseIcon sx={{ fontSize: "20px", "&:hover": { transition: ".3s", color: "#c29958" } }} onClick={() => navigate("/")}>
                        </HouseIcon>
                        <Typography sx={{ color: "#7e7e7e", fontSize: "17px", margin: "0 5px" }}>/</Typography>
                        <Typography sx={{ color: "#c29958", fontSize: "16px", margin: "0 5px", fontWeight: "400" }}>Contact Us</Typography>
                    </Box>
                </Container>
            </Box>
            <Box sx={{ paddingTop: "80px", paddingBottom: "80px" }}>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3747017.1750759515!2d87.70285707363887!3d23.489432210217977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaaed80e18ba7%3A0xf2d28e0c4e1fc6b!2sBangladesh!5e0!3m2!1sen!2sin!4v1721707712544!5m2!1sen!2sin" 
                    width="100%" 
                    height="450" 
                    style={{ border: "0" }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </Box>
            <Box>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ paddingBottom: "80px" }}>
                                <Typography variant='h5' sx={{ fontWeight: "600", fontSize: "22px", paddingBottom: "22px" }}>
                                    Tell Us Your Project
                                </Typography>
                                <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 2, marginBottom: "30px" }}>
                                    <input 
                                        type="text" 
                                        placeholder='Name*' 
                                        style={{ border: "none", outline: "none", padding: "16px", backgroundColor: "#f7f7f7", flex: 1 }}
                                    />
                                    <input 
                                        type="text" 
                                        placeholder='Phone*' 
                                        style={{ border: "none", outline: "none", padding: "16px", backgroundColor: "#f7f7f7", flex: 1 }}
                                    />
                                </Box>
                                <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 2, marginBottom: "30px" }}>
                                    <input 
                                        type="text" 
                                        placeholder='Email*' 
                                        style={{ border: "none", outline: "none", padding: "16px", backgroundColor: "#f7f7f7", flex: 1 }}
                                    />
                                    <input 
                                        type="text" 
                                        placeholder='Subject*' 
                                        style={{ border: "none", outline: "none", padding: "16px", backgroundColor: "#f7f7f7", flex: 1 }}
                                    />
                                </Box>
                                <Box sx={{ marginBottom: "30px" }}>
                                    <textarea 
                                        placeholder='Message*' 
                                        style={{ border: "none", outline: "none", width: "100%", padding: "21px", backgroundColor: "#f7f7f7" }} 
                                    />
                                </Box>
                                <Button
                                    variant="contained"
                                    sx={{ backgroundColor: "#C29958", color: "white", "&:hover": { backgroundColor: "#222222" } }}
                                >
                                    Send Message
                                </Button>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box>
                                <Typography variant='h5' sx={{ fontWeight: "600", fontSize: "22px", paddingBottom: "22px" }}>
                                    Contact Us
                                </Typography>
                                <Typography sx={{ color: "#555555", paddingBottom: "30px", marginBottom: "8px" }}>
                                    Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram anteposuerit litterarum formas human.
                                </Typography>
                                <Box>
                                    <Typography sx={{ display: "flex", alignItems: "center", color: "#555555", borderBottom: "1px solid #efefef", paddingBottom: "15px", marginBottom: "15px" }}>
                                        <BusinessIcon sx={{ paddingRight: "10px" }} /> Address: No 40 Baria Street 133/2 New York City
                                    </Typography>
                                    <Typography sx={{ display: "flex", alignItems: "center", color: "#555555", borderBottom: "1px solid #efefef", paddingBottom: "15px", marginBottom: "15px" }}>
                                        <MailIcon sx={{ paddingRight: "10px" }} /> E-mail: info@yourdomain.com
                                    </Typography>
                                    <Typography sx={{ display: "flex", alignItems: "center", color: "#555555", paddingBottom: "15px", marginBottom: "15px" }}>
                                        <PhoneIcon sx={{ paddingRight: "10px" }} /> +88013245657
                                    </Typography>
                                    <Typography sx={{ fontWeight: "700", color: "#222222", fontSize: "16px", padding: "0 0 5px"}}>
                                        Working Hours
                                    </Typography>
                                    <Typography sx={{ color: "#222222", fontSize: "14px",paddingBottom: { md: "0px", xs: "50px" }  }}>
                                        Monday – Saturday: 08AM – 22PM
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </div>
    );
}

export default Project;
