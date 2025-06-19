import React from 'react';
import {Box, Button, Card, CardActions, CardContent, CardMedia, styled, Typography} from "@mui/material";
import { Link } from 'react-router-dom';

interface ComponentProps {
    person: {
        img: string,
        title: string,
        place: string,
        description: string[],
    }
    index: number;
}

const StyledTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.secondary,
    textAlign: "justify",
    margin: theme.spacing(1),
}))

const MakeCard = ({person, index} : ComponentProps) => {

    return (
        <Card sx={{display: 'flex', flexDirection: {
            md: index % 2 === 0 ? "row-reverse" : "row",
            xs: "column"}
        }}>
            <CardMedia
                component="img"
                alt={person.title}
                image={person.img}
                sx={{height: "280px"}}
            />
            <Box>
                <CardContent>
                    <Typography gutterBottom variant="h5" textAlign={{md:"left",xs:"center"}}>
                        {person.title}
                    </Typography>
                    <StyledTypography variant="body2">
                        {person.description[0]}
                    </StyledTypography>
                </CardContent>
                <CardActions sx={{justifyContent: {
                    md: index % 2 === 0 ? 'start' : 'end',
                    xs: 'end'}
                }}>
                    <Link to={"/person/"+index} key={index}>
                        <Button size="small">Подробнее</Button>
                    </Link>
                </CardActions>
            </Box>

        </Card>
    );
};

export default MakeCard;