import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"
import { useParams } from "react-router-dom";
export function Detailjson() {
    // const [detail, setDetail] = useState([])
    // var {id} = useParams()
    // console.log(detail)
    // console.log(id)
    // useEffect(() => {
    //     fetch("https://fakestoreapi.com/products/"+id)
    //         .then(res => res.json())
    //         .then(viewq => setDetail(viewq))
    // })
    const[detail,setDetail]=useState([])
    var {id}=useParams()
  
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products/"+id)
        .then(res=>res.json())
        .then(viewdetails=>setDetail(viewdetails))
    })
    return (
        <>
            <div class="card col-lg-8">
                <img src={detail.image} class="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{detail.title}</h5>
                    <p className="card-text">{detail.description}</p>
                    <p className="card-text">{detail.price}</p>
                </div>
            </div>

        </>
    );
    
}