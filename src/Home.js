import React, { useState } from 'react';
import "./Home.css";
import myCarImage from './mycar.png';

const Home = () => {

    const [carPosition, setCarPosition] = useState({ top: 0, left: 0 });
    const [carDirection, setCarDirection] = useState("N");
    const [rotation, setRotation] = useState(0);
    const step = 20;

    var drivePositions = {
        N: { ...carPosition, top: carPosition.top - step },
        E: { ...carPosition, left: carPosition.left + step },
        S: { ...carPosition, top: carPosition.top + step },
        W: { ...carPosition, left: carPosition.left - step },
    }

    var reversePositions = {
        N: { ...carPosition, top: carPosition.top + step },
        E: { ...carPosition, left: carPosition.left - step },
        S: { ...carPosition, top: carPosition.top - step },
        W: { ...carPosition, left: carPosition.left + step },
    }

    const leftTurns = {
        N: "W",
        E: "N",
        S: "E",
        W: "S",
    }

    const rightTurns = {
        N: "E",
        E: "S",
        S: "W",
        W: "N",
    }

    function move(control){
        switch (control) {
            case "drive":
                setCarPosition(drivePositions[carDirection]);
                break;                
            case "reverse":                
                setCarPosition(reversePositions[carDirection]);
                break;
        }
    }

    function turn(control){
        switch (control) {
            case "left":
                setCarDirection(leftTurns[carDirection]);
                setRotation(rotation - 90);
                break;                
            case "right":
                setCarDirection(rightTurns[carDirection]);
                setRotation(rotation + 90);
                break;
        }
    }

    return (
        <div>
            <div>
                <button className="arrowBtn" onClick={() => move('drive')}>Drive</button>
                <br />
                <button className="arrowBtn" onClick={() => move('reverse')}>Reverse</button>
                <br />
                <button className="arrowBtn" onClick={() => turn('left')}>Left</button>
                <br />
                <button className="arrowBtn" onClick={() => turn('right')}>Right</button>
            </div>
            <div className='playground'>
                <div className='car-Container' style={{ ...carPosition,
                    backgroundImage: `url(${myCarImage})`, 
                    transform: `rotate(${rotation}deg)`
                }}></div>
            </div>
        </div>
    );
}

export default Home;
