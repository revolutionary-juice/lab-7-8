import React from 'react';
import Gallery from './components/Gallery';
import Navbar from '../components/Navbar';
import Content from "./components/Content";
import Footer from "../components/Footer";

const Main = () => {
    return (
        <>
            <Navbar active="1"/>
            <Gallery />
            <Content />
            <Footer />
        </>
    );
};

export default Main;