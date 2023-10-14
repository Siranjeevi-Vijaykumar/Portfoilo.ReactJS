import React from "react";
import Siranjeevi from './siranjeeviprofile.jpeg'
import './about.css'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faXmark } from '@fortawesome/free-solid-svg-icons'
export function AboutUS() {
    const [phone] = useTypewriter({
        words: ['7667643334', '8870806534'],
        backSpeed: 100,
        loop: {},
    })
    return (
        <>
            <div className="container-fluid" id="Aboutport">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <img src={Siranjeevi} className="w-100" />
                    </div>
                    <div className="col-lg-6 col-md-12 mt-5">
                        <div className="col-lg-12">
                            <h3 className="pt-2">Hello, This is Siranjeevi</h3>
                            <h5 className="pt-2">Phone no : <span className="text-secondary">{phone}</span></h5>
                            <a href="mailto:siranjeevi9942@gmail.com" id="Emailport" className="fw-bold pt-2"><h5>siranjeevi9942@gmail.com</h5></a>
                            <h3 className="pt-2">And I am<span className="col-lg-12 ms-3 text-info " id="textport">WEB DEVELOPER</span></h3>
                            <p className="col-lg-11 text-justify pt-2">Desires employment with Quest Inc. as a Front-end Developer. Versed in the production of high quality solutions for the company’s clients; bringing broad understanding of Modern HTML, JavaScript, CSS, and software development, plus a very strong ability to execute and standard software architectural patterns</p>
                            <h3 className="text-center mt-5">EDUCATION</h3>
                            <div class="accordion pt-5" id="accordionExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            SSLC
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <strong>ADHARSH VIDHAYALAYA MATRIC SCHOOL</strong> <br />
                                            <p>Adharsh Nagar</p>
                                            <ul>
                                                <li>Percentage - 68</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            POLYTECHNIC
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <strong>SAKTHI POLYTECHNIC COLLEGE</strong> <br />
                                            <p>Appakudal</p>
                                            <h5>DIPLAMO CIVIL ENGNEERING</h5>
                                            <ul>
                                                <li>Percentage - 82</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            ENGNEERING
                                        </button>
                                    </h2>
                                    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <strong>KUMARAGURU COLLEGE OF TECHNOLOGY</strong>
                                            <h5>BE CIVIL ENGINEERING</h5>
                                            <p>COIMBATORE</p>
                                            <ul>
                                                <li>Percentage - 82</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="container col-lg-12 bg-secondary p-5">
                    <div class="row ">
                        <div class="justify-content-center d-flex align-items-center">
                            <h2>Let Us Join Together</h2>
                        </div>
                        <div class="row">
                            <div class="col-lg-12 col-sm-12 mt-3 justify-content-center d-flex align-items-center">
                                <button class="btn" id="BTNPort">CONTACT US</button>
                            </div>
                            <div className="d-flex justify-content-center mt-5">
                            <div className="col-lg-6 col-12 d-flex justify-content-between"><a href="https://www.facebook.com/siranjeevi.v123"><FontAwesomeIcon icon={faFacebook} size="2xl" className="text-dark" /></a><a href="https://www.instagram.com/?next=%2F"><FontAwesomeIcon icon={faInstagram} size="2xl" className="text-dark"/></a><a href="mailto:siranjeevi9942@gmail.com"><FontAwesomeIcon icon={faEnvelope} size="2xl" className="text-dark"/></a><a href="https://twitter.com/SiranjeeviVija9"><FontAwesomeIcon icon={faXmark} size="2xl" className="text-dark"/></a></div>
                        </div>
                        </div>
                    </div>
                </div>
                    </div>
                </div>
            </div>

        </>
    );
}
