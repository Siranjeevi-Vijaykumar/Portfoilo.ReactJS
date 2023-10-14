import React from "react";
import './Social button.css'
export function Social(){
    return(
        <>
        <div className="container-fluid" id="bgimage">
            <div className="container" id="move">
                <h1 className="text-center text-white">SOCIAL BUTTON</h1>
                <div class="d-flex justify-content-evenly mt-5">
                <button type="button" class="btn btn-primary">Like</button>
                <button type="button" class="btn btn-secondary">Comment</button>
                <button type="button" class="btn btn-success">Share</button>
                </div>
                </div>
            </div>
        </>
    );
}