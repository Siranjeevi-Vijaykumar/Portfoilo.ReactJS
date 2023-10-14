import React, { useEffect, useState } from "react";
import {Link, useParams} from 'react-router-dom'
import StarRatings from "react-star-ratings";

export function Datajson() {
    const [jsonw, setJsonw] = useState([])
  
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
            .then(res => res.json())
            .then(jsonq => setJsonw(jsonq))
    })
    return (
        <>
            <h1>View a Card</h1>
            <div className="container-fluid row">
            {
                jsonw.map((val, index) => (
                    <>
                        <div class="card col-lg-3">
                            <img src={val.image} class="card-img-top col-lg-3" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title text-center">{val.title}</h5>
                                    <p class="card-text">{val.description}</p>
                                    <StarRatings rating={val.rating.rate} starRatedColor="gold" starDimension="30px"></StarRatings><br/>
                                    <Link to={`/details/${val.id}`} className="btn btn-primary">View</Link>
                                </div>
                        </div>
                    </>
                ))
               
            }
             </div>

        </>
    )
}