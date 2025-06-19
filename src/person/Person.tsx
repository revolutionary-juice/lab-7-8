import React from 'react';
import Navbar from "../components/Navbar";
import {useParams} from "react-router-dom";
import Article from './components/Article';
import Footer from '../components/Footer';

const Person = () => {

    const {id} = useParams();

    return (
        <>
            <Navbar active=""/>
            <Article id={id ? +id : 0}/>
            <Footer />
        </>
    );
};

export default Person;