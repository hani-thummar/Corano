import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button,Typography , Box } from '@material-ui/core';
import image1 from "../assets/img/HomePage/Slide 1.webp"
import image2 from "../assets/img/HomePage/Slide 2.webp"
import image3 from "../assets/img/HomePage/Slide 3.webp"

const items = [
    {
        name: "Item 1",
        description: "Description for Item 1",
        image:image1,
        title:"Grace Designer Jewelry"
    },
    {
        name: "Item 2",
        description: "Description for Item 2",
        image:image2,
    },
    {
        name: "Item 3",
        description: "Description for Item 3",
        image:image3
    },
];

const CarouselComponent = () => {
    return (
        <Carousel animation="slide" >
            {items.map((item, index) => (
                <Paper key={index} position={'relative'}  >
                    <img src={item.image} alt={item.name}/>
                    <Box position={'absolute'} top={0} left={0}>
                        tyhytu
                    </Box>
                </Paper>
            ))}
        </Carousel>
    );
};

export default CarouselComponent;
