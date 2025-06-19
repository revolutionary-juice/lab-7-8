import React from 'react';
import Navbar from '../components/Navbar';
import GamesGrid from "./components/GamesGrid";

const List = () => {
    return (
        <div>
            <Navbar active="2"/>
            <GamesGrid/>
        </div>
    );
};

export default List;