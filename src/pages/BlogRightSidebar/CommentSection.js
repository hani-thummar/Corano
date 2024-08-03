import { Box, Container, Typography, Grid } from '@mui/material';
import React from 'react';
import commentimg1 from '../../assets/img/RightBlog/comment-icon.webp';

function CommentSection() {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} lg={9} alignItems="center">
                    <Box sx={{ paddingTop: { xs: "40px", sm: "60px", md: "80px" } }}>
                        <Box>
                            <Typography sx={{ fontWeight: "700", fontSize: { xs: "18px", sm: "20px" }, paddingBottom: "15px" }}>03 Comment</Typography>
                        </Box>

                        {comments.map((comment, index) => (
                            <Box key={index} sx={{ border: "1px solid #efefef", marginBottom: "30px", display: "flex", justifyContent: "space-between", flexDirection: { xs: "column", sm: "row" }, padding: "10px 20px" }}>
                                <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" } }}>
                                    <Box sx={{ marginBottom: { xs: "10px", sm: "0" } }}>
                                        <img src={commentimg1} alt="" style={{ marginRight: "20px" }} />
                                    </Box>
                                    <Box>
                                        <Typography sx={{ color: "#222222", fontWeight: "600" }}>{comment.author}</Typography>
                                        <Typography sx={{ color: "#555555", fontSize: "14px", paddingBottom: "10px" }}>{comment.date}</Typography>
                                        <Typography sx={{ color: "#555555", fontSize: "14px" }}>{comment.text}</Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ padding: "4px", alignSelf: { xs: "flex-start", sm: "center" } }}>
                                    <Typography sx={{ borderRadius: "50px", border: "1px solid #efefef", padding: "4px 15px", fontSize: "14px", "&:hover": { backgroundColor: "#c29958", color: "white", transition: ".3s" } }}>Reply</Typography>
                                </Box>
                            </Box>
                        ))}

                        <Box>
                            <Typography sx={{ fontWeight: "700", fontSize: { xs: "18px", sm: "20px" }, paddingTop: { xs: "40px", sm: "60px", md: "80px" } }}>Leave a reply</Typography>
                            <Typography sx={{ color: "#555555", marginBottom: "10px", paddingTop: "10px" }}>Your email address will not be published. Required fields are marked *</Typography>
                            <Typography sx={{ color: "#222222", marginBottom: "10px" }}>Comment</Typography>
                        </Box>
                        <Box>
                            <Typography sx={{ padding: "10px", height: "130px", backgroundColor: "#f8f8f8", marginBottom: "20px" }}>
                                <input type="text" placeholder="Write a comment" style={{ outline: "none", border: "none", backgroundColor: "#f8f8f8", width: "100%", height: "100%" }} />
                            </Typography>
                        </Box>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={4}>
                                <Typography sx={{ marginBottom: "10px" }}>Name</Typography>
                                <Typography sx={{ padding: "8px 20px", color: "#555555", backgroundColor: "#f8f8f8", width: "100%" }}>
                                    <input type="text" placeholder="Name" style={{ outline: "none", border: "none", backgroundColor: "#f8f8f8", width: "100%" }} />
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Typography sx={{ marginBottom: "10px" }}>Email</Typography>
                                <Typography sx={{ padding: "8px 20px", color: "#555555", backgroundColor: "#f8f8f8", width: "100%" }}>
                                    <input type="email" placeholder="Email" style={{ outline: "none", border: "none", backgroundColor: "#f8f8f8", width: "100%" }} />
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Typography sx={{ marginBottom: "10px" }}>Website</Typography>
                                <Typography sx={{ padding: "8px 20px", color: "#555555", backgroundColor: "#f8f8f8", width: "100%" }}>
                                    <input type="text" placeholder="Website" style={{ outline: "none", border: "none", backgroundColor: "#f8f8f8", width: "100%" }} />
                                </Typography>
                            </Grid>
                        </Grid>
                        <Box sx={{ marginTop: "30px", paddingBottom: { xs: "40px", sm: "60px", md: "80px" } }}>
                            <Typography component="button" sx={{ backgroundColor: "#c29958", padding: "10px 25px", color: "#fff", border: "none", cursor: "pointer", "&:hover": { transition: ".4s", backgroundColor: "#222222", color: "#fff" } }}>
                                Post Comment
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} lg={3}></Grid>
            </Grid>
        </Container>
    );
}

const comments = [
    {
        author: "Admin",
        date: "15 Dec, 2019 at 9:30pm",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim maiores adipisci optio ex, laboriosam facilis non pariatur itaque illo sunt?"
    },
    {
        author: "Admin",
        date: "15 Dec, 2019 at 9:30pm",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim maiores adipisci optio ex, laboriosam facilis non pariatur itaque illo sunt?"
    },
    {
        author: "Admin",
        date: "15 Dec, 2019 at 9:30pm",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim maiores adipisci optio ex, laboriosam facilis non pariatur itaque illo sunt?"
    }
];

export default CommentSection;


// import { Box, Container, Typography, Grid } from '@mui/material'
// import React from 'react'
// import commentimg1 from '../../assets/img/RightBlog/comment-icon.webp'

// function CommentSection() {
//     return (


//         <Container>
//             <Grid container spacing={2}>
//                 <Grid item xs={12} lg={9} alignItems={"center"} >
//                     <Box sx={{ paddingTop: "80px" }}>
//                         <Container>
//                             <Box>
//                                 <Typography sx={{ fontWeight: "700", fontSize: "20px", paddingBottom: "15px" }}>03 Comment</Typography>
//                             </Box>

//                             <Box sx={{ border: "1px solid #efefef", marginBottom:"30px",display: "flex", justifyContent: "space-between" }}>
//                                 <Typography sx={{ display: "flex", padding: "10px 20px" }}>
//                                     <Box>
//                                         <img src={commentimg1} alt="" style={{ marginRight: "20px" }} />
//                                     </Box>
//                                     <Box>
//                                         <Typography sx={{ color: "#222222", fontWeight: "600" }}>Admin</Typography>
//                                         <Typography sx={{ color: "#555555", fontSize: "14px", paddingBottom: "10px" }}>15 Dec, 2019 at 9:30pm</Typography>
//                                         <Typography sx={{ color: "#555555", fontSize: "14px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim maiores adipisci optio ex, laboriosam facilis non pariatur itaque illo sunt?</Typography>
//                                     </Box>
//                                 </Typography>
//                                 <Box sx={{padding:"4px"}}>
//                                     <Typography sx={{borderRadius:"50px",border:"1px solid #efefef",padding:"4px 15px",fontSize:"14px","&:hover": {backgroundColor:"#c29958",color:"white",transition:".3s"}}}>Reply</Typography>
//                                 </Box>
//                             </Box>
//                             <Box sx={{ border: "1px solid #efefef", marginBottom:"30px",marginLeft:"40px",display: "flex", justifyContent: "space-between  " }}>
//                                 <Typography sx={{ display: "flex", padding: "10px 20px" }}>
//                                     <Box>
//                                         <img src={commentimg1} alt="" style={{ marginRight: "20px" }} />
//                                     </Box>
//                                     <Box>
//                                         <Typography sx={{ color: "#222222", fontWeight: "600" }}>Admin</Typography>
//                                         <Typography sx={{ color: "#555555", fontSize: "14px", paddingBottom: "10px" }}>15 Dec, 2019 at 9:30pm</Typography>
//                                         <Typography sx={{ color: "#555555", fontSize: "14px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim maiores adipisci optio ex, laboriosam facilis non pariatur itaque illo sunt?</Typography>
//                                     </Box>
//                                 </Typography>
//                                 <Box sx={{padding:"4px"}}>
//                                     <Typography sx={{borderRadius:"50px",border:"1px solid #efefef",padding:"4px 15px",fontSize:"14px","&:hover": {backgroundColor:"#c29958",color:"white",transition:".3s"}}}>Reply</Typography>
//                                 </Box>
//                             </Box>
//                             <Box sx={{ border: "1px solid #efefef",display: "flex", justifyContent: "space-between  " }}>
//                                 <Typography sx={{ display: "flex", padding: "10px 20px" }}>
//                                     <Box>
//                                         <img src={commentimg1} alt="" style={{ marginRight: "20px" }} />
//                                     </Box>
//                                     <Box>
//                                         <Typography sx={{ color: "#222222", fontWeight: "600" }}>Admin</Typography>
//                                         <Typography sx={{ color: "#555555", fontSize: "14px", paddingBottom: "10px" }}>15 Dec, 2019 at 9:30pm</Typography>
//                                         <Typography sx={{ color: "#555555", fontSize: "14px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim maiores adipisci optio ex, laboriosam facilis non pariatur itaque illo sunt?</Typography>
//                                     </Box>
//                                 </Typography>
//                                 <Box sx={{padding:"4px"}}>
//                                     <Typography sx={{borderRadius:"50px",border:"1px solid #efefef",padding:"4px 15px",fontSize:"14px","&:hover": {backgroundColor:"#c29958",color:"white",transition:".3s"}}}>Reply</Typography>
//                                 </Box>
//                             </Box>
//                             <Box>
//                                 <Typography sx={{ fontWeight: "700", fontSize: "20px" ,paddingTop:"80px"}}>Leave a reply</Typography>
//                                 <Typography sx={{ color: "#555555", marginBottom: "10px", paddingTop: "10px" }}>Your email address will not be published. Required fields are marked *</Typography>
//                                 <Typography sx={{ color: "#222222", marginBottom: "10px" }}>Comment</Typography>
//                             </Box>
//                             <Box>
//                                 <Typography sx={{ padding: "10px", height: "130px", backgroundColor: "#f8f8f8", marginBottom: "20px" }}>
//                                     <input type="text" placeholder='Write a comment' style={{ outline: "none", border: "none", backgroundColor: "#f8f8f8" }} />
//                                 </Typography>
//                             </Box>
//                             <Box sx={{ display: "flex" }}>
//                                 <Box sx={{ padding: "0 40px" }}>
//                                     <Typography sx={{ marginBottom: "10px" }}>Name</Typography>
//                                     <Typography sx={{ padding: "8px 20px", color: "#555555", backgroundColor: "#f8f8f8", width: "100%" }}>
//                                         <Typography><input type="text" placeholder='Name' style={{ outline: "none", border: "none", backgroundColor: "#f8f8f8" }} /></Typography>
//                                     </Typography>
//                                 </Box>
//                                 <Box sx={{ padding: "0 40px" }}>
//                                     <Typography sx={{ marginBottom: "10px" }}>Email</Typography>
//                                     <Typography sx={{ padding: "8px 20px", color: "#555555", backgroundColor: "#f8f8f8", width: "100%" }}>
//                                         <Typography><input type="Email" placeholder='Email' style={{ outline: "none", border: "none", backgroundColor: "#f8f8f8" }} /></Typography>
//                                     </Typography>
//                                 </Box>
//                                 <Box sx={{ padding: "0 40px", marginBottom: "40px" }}>
//                                     <Typography sx={{ marginBottom: "10px" }}>Website</Typography>
//                                     <Typography sx={{ padding: "8px 20px", color: "#555555", backgroundColor: "#f8f8f8", width: "100%" }}>
//                                         <Typography><input type="text" placeholder='Website' style={{ outline: "none", border: "none", backgroundColor: "#f8f8f8" }} /></Typography>
//                                     </Typography>
//                                 </Box>
//                             </Box>
//                             <Box sx={{marginTop:"30px",paddingBottom:"80px"}}>
//                                 <Typography variant="contained" sx={{ backgroundColor: "#c29958", padding: "10px 25px", color: "#fff", "&:hover": { transition: ".4s", backgroundColor: "#222222", color: "#fff" } }}>
//                                     Post Comment
//                                 </Typography>
//                             </Box>
//                         </Container>

//                     </Box>
//                 </Grid>
//                 <Grid item xs={8} lg={3} ></Grid>
//             </Grid>
//         </Container>
//     )
// }

// export default CommentSection