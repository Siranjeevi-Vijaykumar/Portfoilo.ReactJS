import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export function Detail(){
    const[Detail,setDetail]=useState([])
    var { id } =useParams()
    console.log(id);
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products/")
        .then(res => res.json())
        .then(File => setDetail(File))
    })
    return(
        <>
        </>
    )
}