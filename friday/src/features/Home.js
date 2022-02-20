import React from 'react';
import ResponsiveAppBar from '../components/Basic/js/ResponsiveAppBar';
import Footer from '../components/Basic/js/Footer';
import Login from '../components/Authentication/Login';


const Home = () => {

    return (
        <div className="home" >
            <ResponsiveAppBar/>
            <Login/>
            <Footer/>
        </div>
    );
}
export default Home