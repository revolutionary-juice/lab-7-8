import {Box, Container, Divider, Link, Stack, Typography} from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <Box sx={{m: "12px", p: "10px 0", boxShadow: "2px 3px 5px black",
                background: "black"}}>
            <Stack direction="row"
                   divider={<Divider orientation="vertical" flexItem/>}
                   spacing={2}
                   sx={{m: "0 20px", justifyContent: {xs:"center", md: "space-between"}}}
            >
                <Typography variant="body2" color="white">
                    {"© Яковлев Кирилл Андреевич, Б9122-09.03.04(6)"}
                </Typography>
                <Typography variant="body2" color="white">
                    <Link href="https://github.com/revolutionary-juice" color="#FFF">
                        Контакты
                    </Link>{" "}
                    {" | 2024–2025"}
                </Typography>
            </Stack>
        </Box>
    );
};

export default Footer;