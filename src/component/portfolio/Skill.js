import React from "react";
import "./skills.css"
import Img1 from './css3 corse.png'
import Img2 from './html5 siranj.png'
import Img3 from './front end.png'
import StarRatings from "react-star-ratings";
export function SkillPortfolio() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4 col-sm-6 bg-secondary p-5">
                        <h1 className="text-center">TECHNICAL SKILLS</h1><br />
                        <ul className="ms-4 p-5">
                            <li className="pt-3">HTML5</li>
                            <li className="pt-3">CSS3</li>
                            <li className="pt-3">JavaScript</li>
                            <li className="pt-3">Bootstrap</li>
                            <li className="pt-3">ReactJS</li>
                        </ul>
                    </div>
                    <div className="col-lg-8 col-sm-6 bg-info p-5">
                        <div className="row">
                        <div className="col-lg-5">
                        <div class="progress mt-5" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="90" aria-valuemax="100">
                            <div class="progress-bar progress-bar-striped bg-secondary" id="Point">HTML5 100%</div>
                        </div>
                        <div class="progress mt-5" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="90" aria-valuemax="100">
                            <div class="progress-bar progress-bar-striped" id="Point1">CSS3 95%%</div>
                        </div>
                        <div class="progress mt-5" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="90" aria-valuemax="100">
                            <div class="progress-bar progress-bar-striped bg-success" id="Point2">JavaScript 90%</div>
                        </div>
                        <div class="progress mt-5" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="90" aria-valuemax="100">
                            <div class="progress-bar progress-bar-striped bg-danger" id="Point">Bootstrap 100%</div>
                        </div>
                        <div class="progress mt-5" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="90" aria-valuemax="100">
                            <div class="progress-bar progress-bar-striped bg-warning" id="Point3">ReactJS 70%</div>
                        </div>
                        </div>
                        <div className="col-lg-6  text-center">
                            <h1 className="pt-3 ps-5 mt-3 ms-3">SOFT SKILLS</h1>
                            <ul className="ms-5">
                                <li id="li" className="fs-5 pt-3">LEADERSHIP QULITY</li>
                                <StarRatings rating={4.5} starDimension="30px" starRatedColor="white"></StarRatings>
                                <li className="fs-5 pt-3" id="li">Team Work</li>
                                <StarRatings rating={4.5} starDimension="30px" starRatedColor="white"></StarRatings>
                                <li className="fs-5 pt-3" id="li">Time Management</li>
                                <StarRatings rating={4.5} starDimension="30px" starRatedColor="white"></StarRatings>
                            </ul>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                <h1 className="text-center text-dark pt-5">Certification</h1>
      <div class="row">
        <div className="col-md-6 col-sm-12 col-lg-6 p-5 d-flex justify-content-center">
          <img src={Img1} className="col-6" id="ig"/>
        </div>
        <div className="col-md-6 col-sm-12 col-lg-6 p-5 d-flex justify-content-center">
        <img src={Img2} className="col-6" id="ig"/>
        </div>
        </div>
        <div className="row pt-5">
        <div className="col-md-6 col-sm-12 col-lg-6 p-5 d-flex justify-content-center">
        <img src={Img3} className="col-6" id="ig"/>
        </div>
        <div className="col-md-6 col-sm-12 col-lg-6 p-5 d-flex justify-content-center">
        <img src={Img1} className="col-6" id="ig"/>
        </div>
        </div>

                </div>
            </div>
        </>
    );
}