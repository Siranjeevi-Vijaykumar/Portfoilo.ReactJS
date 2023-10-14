import React, { useState } from "react";
import FImg from './friuts.png'
import FImgs from './fruiunter 2.png'
import './Friuts.css'
export function FriutsCounter(){
    const [Fruits,SetFruits]=useState(0)
    function In(){
        SetFruits(Fruits+1)
    }
    const [Fruit,SetFruit]=useState(0)
    function Ins(){
        SetFruit(Fruit+1)
    }
    return (
        <div className="container-fluid" id="Fruitbody">
        <div className="d-flex justify-content-center pt-5">
            <div className="col-lg-5 bg-white p-5" id="FRuits">
                <div className="row-center">
                    <div className="col-12 text-center">Bob ate <a className="text-warning">{Fruits}</a> Mangoes <a className="text-warning">{Fruit}</a> bananas</div>
                </div>
                    <div className="row p-5">
                    <div className="col-6 text-center mt-3">
                    <button onClick={In} className="bg-white" id="Bufriut"><img src={FImg} className="w-100"/></button><br/>
                    <div onClick={In} className="btn btn-primary">Mangoes</div>
                    </div>
                    <div className="col-6 text-center">
                    <button onClick={Ins} className="bg-white" id="Bufriut"><img src={FImgs} className="w-100"/></button>
                    <div onClick={Ins} className="btn btn-primary">bananas</div>
                    </div>
                    </div>
                    </div>
            </div>
        </div>
    );

}