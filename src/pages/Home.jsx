import React from 'react';
import { useParams } from 'react-router';
import ComicGrid from '../components/comic-grid/Comic-grid';
import MainBanner from '../assets/images/main-banner-marvel.jpg';

const Home = () => {
    const { comic } = useParams();

    return (
        <>
            <div className="banner" style={{ backgroundImage: `url(${MainBanner})` }}></div>
            <div className="container">
                <ComicGrid comic={comic} type />
            </div>
        </>
    );
}

export default Home;