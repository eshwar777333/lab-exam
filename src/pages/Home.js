// src/pages/Home.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Home() {
    return (
        <div className="home-container">
            <h2>Welcome to the Home Page</h2>
            <p>..................</p>
            <Carousel showArrows={true} autoPlay={true} infiniteLoop={true}>
                <div><img src="https://images.pexels.com/photos/29175446/pexels-photo-29175446/free-photo-of-f-16-fighter-jet-in-flight-with-clear-sky.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 1" /></div>
                <div><img src="https://images.pexels.com/photos/29154588/pexels-photo-29154588/free-photo-of-night-view-of-buenos-aires-obelisco.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 2" /></div>
                <div><img src="https://images.pexels.com/photos/29159804/pexels-photo-29159804/free-photo-of-f-16-fighter-jet-in-flight-with-vapor-trails.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 3" /></div>
                <div><img src="https://images.pexels.com/photos/1252399/pexels-photo-1252399.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 4" /></div>
            </Carousel>
        </div>
    );
}

export default Home;