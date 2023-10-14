import React from "react";
import './congrats.css'
export function Congrats() {
    return (
        <>
            <div className="container-fluid" id="background">
                <div className="text-center">
                    <h1 id="title" className="pt-5">congratulations</h1>
                </div>
                <div className="text-center col-lg-4 mx-auto bg-info mt-5">
                    <img src=" https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png" className="pt-5" />
                    <h3 className="mt-5">KIRAN V</h3>
                    <p>Vishnu Institute of Computer Education and Technology,</p>
                    <p>Bhimavaram</p>
                    <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png" className="pb-3" />
                </div>
            </div>
        </>
    );
}