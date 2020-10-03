import React from 'react';
import Navbar from '../Navbar/Navbar';
import Bannar from './Bannar';
import VolunteerCard from './VolunteerCard';

const Home = () => {
    return (
        <>
            <Navbar></Navbar>
            <Bannar></Bannar>
            <VolunteerCard></VolunteerCard>
        </>
    );
};

export default Home;