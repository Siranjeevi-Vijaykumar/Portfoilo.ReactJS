import React from "react";
import './FeedBack.css'
import {Link} from 'react-router-dom'
import Im from './sad.jpg'
import Img from './none.jpeg'
import Imgs from './happy.jpeg'
export function Feedback(){
    return (
        <>
        <div className="container-fluid" id="FBBODY">
        <div className="d-flex justify-content-center pt-5">
            <div className="col-lg-5 bg-white p-5" id="FEEDMT">
                <div className="row-center">
                    <div className="col-12">How satisfied are you with our customer support performance?</div>
                    <div className="row">
                    <div className="col-4">
                    <Link to='/FeedBack/FeedBack1'><img src={Im} className="w-50 mt-5"/></Link>
                    </div>
                    <div className="col-4">
                    <Link to='/FeedBack/FeedBack1'><img src={Img} className="w-50 mt-5"/></Link>
                    </div>
                    <div className="col-4">
                    <Link to='/FeedBack/FeedBack1'><img src={Imgs} className="w-50 mt-5"/></Link>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </> 
    );
}