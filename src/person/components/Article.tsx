import {Box, Container, styled, Typography} from '@mui/material';
import React from 'react';
import {Link} from "react-router-dom";
import {persons} from "../../data";

const StyledTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.primary,
    fontSize: theme.typography.pxToRem(16),
    textAlign: "justify",
}))

const Article = ({id}:{id : number}) => {
    const person = persons.at(id);

    return (
        <Container maxWidth="xl" sx={{mt: "20px"}}>
            <Link to="/">Главная</Link> {" > "} {person?.title}
            <Typography variant="h4" sx={{color: "text.secondary"}} align="center">
                {person?.title}
            </Typography>
            <Typography variant="h6" sx={{color: "text.secondary", opacity: "80%"}} align="center">
                {person?.place}
            </Typography>
            <Box sx={{m: "20px auto"}} textAlign="center">
                <img
                    height={340}
                    srcSet={person?.img}
                    src={person?.img}
                    alt={person?.title}
                    loading="lazy"
                />
            </Box>
            <Box sx={{display: "flex", gap: {xs: "20px", md: "40px"}, flexDirection: {xs: "column", md: "row"}}}>
                <StyledTypography variant="body2" sx={{width: {xs: "100%", md:"50%"}, m: "0 auto"}}>
                    {person?.description[0]}
                </StyledTypography>
                <StyledTypography variant="body2" sx={{width: {xs: "100%", md:"50%"}, m: "0 auto"}}>
                    {person?.description[1]}
                </StyledTypography>
            </Box>

        </Container>
    );
};

export default Article;