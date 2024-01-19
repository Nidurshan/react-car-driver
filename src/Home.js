import React, { useState } from 'react';
import "./Home.css";
import './mycar.png';

const Home = () => {

    const getCar = document.getElementById("car");
    const [car, setCar] = useState(getCar);

    function moveUp() {

    }

  return (
    <div>
        <div>
            <button className="arrowBtn">Up</button>
            <br />
            <button className="arrowBtn">Down</button>
            <br />
            <button className="arrowBtn">Left</button>
            <br />
            <button className="arrowBtn">Right</button>
        </div>
        <div className='playground'>
            <div className='car-Container'>
                <img src="./mycar.png" alt="" id='car' />
            </div>
        </div>
    </div>
  )
}

export default Home;