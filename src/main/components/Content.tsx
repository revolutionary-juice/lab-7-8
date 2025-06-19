import React from 'react';
import {persons} from "../../data";
import {Container, Grid} from "@mui/material";
import MakeCard from "./MakeCard";

const Content = () => {

    return (
        <Container maxWidth="xl">
            <Grid container spacing={{xs: 3, md: 6}}>
                {persons.map((item, index) => (
                    <Grid key={index} size={12}>
                        <MakeCard person={item} index={index} />
                    </Grid>
                ))}
            </Grid>

        </Container>
    );
};

export default Content;