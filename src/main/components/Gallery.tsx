import React from 'react';
import {Box, Container, ImageList, ImageListItem, ImageListItemBar} from "@mui/material";
import { Link } from 'react-router-dom';
import {persons} from "../../data";

const imgData = persons.slice(0)

const Gallery = () => {

    return (
        <Container maxWidth="lg">
        <Box sx={{height: "400px", overflowY: "scroll", m:"20px auto"}}>
            <ImageList variant="masonry"
                       sx={{
                           columnCount: {
                               sm: '2 !important',
                               md: '3 !important',
                           }
                       }}
                       gap={8}>
                {imgData.map((item, i) => (
                    <Link to={"/person/" + i} key={i}>
                        <ImageListItem key={item.img}>
                                <img
                                    srcSet={item.img}
                                    src={item.img}
                                    alt={item.title}
                                    loading="lazy"
                                />

                            <ImageListItemBar position="bottom" title={item.title}></ImageListItemBar>
                        </ImageListItem>
                    </Link>
                ))}

            </ImageList>
        </Box>
        </Container>
    );
};

export default Gallery;