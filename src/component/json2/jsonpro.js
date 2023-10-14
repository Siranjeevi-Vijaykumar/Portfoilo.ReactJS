import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export function Jatadate(){
    const[jsonpro,setJsonpro]=useState([])
    var {id}=useParams()
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/'+id)
            .then(res=>res.json())
            .then(json=>setJsonpro(json))
    })
    return(
        <>
        <div>{jsonpro.price}</div>
        </>
    );
}