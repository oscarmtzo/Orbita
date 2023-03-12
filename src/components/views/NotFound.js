import React from 'react'
import { useParams } from 'react-router-dom';

import NavBar from './../NavBar';
import Footer from './../Footer';

const NotFound = () => {
    const params = useParams();
    return (
        <>
            <NavBar />
            <h1>No encontramos ""</h1>

            <Footer />
        </>
    )
}

export default NotFound;