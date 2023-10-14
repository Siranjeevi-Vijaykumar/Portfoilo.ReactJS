import React, { useState } from "react";

export function InDeRE(){
    const[Count,SetCount]=useState(0)
    function In(){
        SetCount(Count+1)
    }
    function De(){
        SetCount(Count-1)
    }
    function RESET(){
        SetCount(Count*0)
    }
    return(
        <>
        <div className="Container">
            <div className="col-12 text-center">{Count}</div>
            <button className="col-4" onClick={In}>ADD</button>
            <button className="col-4" onClick={RESET}>Reset</button>
            <button className="col-4" onClick={De}>SUB</button>
        </div>

        </>
    );
}