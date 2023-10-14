import React, { useEffect, useState } from "react";
import StarRatings from "react-star-ratings";
import { Link } from "react-router-dom";
import { CSVLink } from "react-csv";
 export function Jsoncard(){
    const[jsonc,setJsonc]=useState([])

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(jsonQ=>setJsonc(jsonQ))
    })
    var header=[
        {
            lable:"S_NO", key:'id'
        },
        {
            lable:"TITLE", key:'title'
        }
    ]
    return(
        <>
        <CSVLink data={jsonc} headers={header} className="btn btn-primary">Download</CSVLink>
        <div className="container-fluid row">
        {
           jsonc.map((val, index) => (
                <>
                 <div class="card col-lg-3">
                            <img src={val.image} class="card-img-top col-lg-3" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title text-center">{val.title}</h5>
                                    <p class="card-text">{val.description}</p>
                                    <StarRatings rating={val.rating.rate} starRatedColor="gold" starDimension="30px"></StarRatings><br/>
                                    <Link to={`/Jsoncard/${val.id}`} className="btn btn-primary">View</Link>
                                </div>
                        </div>
                </>
            ))
        }
        </div>
        </>

    );

 }
