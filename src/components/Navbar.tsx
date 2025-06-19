import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import {Box, Button, Container, Drawer, IconButton, MenuItem, styled, Typography} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import React from "react";
import { Link } from "react-router-dom";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexShrink: 0,
    borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
    border: '1px solid',
    borderColor: theme.palette.divider,
    padding: '8px 12px',
}))

interface ComponentProps {
    active: string;
}

const Navbar = ({active} : ComponentProps) => {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    return (
        <AppBar
            position="static"
            sx={{
                boxShadow: 0,
                bgcolor: 'transparent',
                mt: '20px',
            }}>
            <Container maxWidth="xl">
                <StyledToolbar>
                    <Typography variant="h6" sx={{color: 'black'}}>
                        Популярные личности в игровой индустрии
                    </Typography>

                    <Box sx={{display: {xs: "none", md: "flex", gap:"16px"} }}>
                        <Link to="/">
                            <Button variant={active === "1" ? "contained" : "text"} color="primary" size="medium">
                                Главная
                            </Button>
                        </Link>
                        <Link to="/list">
                            <Button variant={active === "2" ? "contained" : "text"} color="primary" size="medium">
                                Список видеоигр
                            </Button>
                        </Link>
                        <Link to="/chart">
                            <Button variant={active === "3" ? "contained" : "text"} color="primary" size="medium">
                                Диаграммы
                            </Button>
                        </Link>
                    </Box>

                    <Box sx={{display: {xs: "flex", md: "none"} }}>
                        <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
                            <MenuIcon />
                        </IconButton>

                        <Drawer
                            anchor="top"
                            open={open}
                            onClose={() => toggleDrawer(false)}
                            >
                            <Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "flex-end",
                                    }}
                                >
                                    <IconButton onClick={toggleDrawer(false)}>
                                        <CloseRoundedIcon/>
                                    </IconButton>
                                </Box>
                                <Link to="/" >
                                    <MenuItem
                                        sx={{":hover": {bgcolor: "deepskyblue", color: "white"},
                                            bgcolor: active === "1" ? "blue" : "white",
                                            color: active === "1" ? "white" : "black"}}>
                                        Главная
                                    </MenuItem>
                                </Link>
                                <Link to="/list">
                                    <MenuItem
                                        sx={{":hover": {bgcolor: "deepskyblue", color: "white"},
                                            bgcolor: active === "2" ? "blue" : "white",
                                            color: active === "2" ? "white" : "black"}}>
                                        Список видеоигр
                                    </MenuItem>
                                </Link>
                                <Link to="/chart">
                                    <MenuItem
                                        sx={{":hover": {bgcolor: "deepskyblue", color: "white"},
                                            bgcolor: active === "3" ? "blue" : "white",
                                            color: active === "3" ? "white" : "black"}}>
                                        Диаграммы
                                    </MenuItem>
                                </Link>
                            </Box>
                        </Drawer>
                    </Box>
                </StyledToolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;