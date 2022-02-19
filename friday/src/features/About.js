import React from 'react';
import Intro from '../components/About/Intro'
import ResponsiveAppBar from '../components/Basic/js/ResponsiveAppBar';
import Footer from '../components/Basic/js/Footer';

function About() {
    return (
        <div class="about">
            <ResponsiveAppBar/>
            <Intro/>
            <Footer/>
        </div>
    );
}

export default About