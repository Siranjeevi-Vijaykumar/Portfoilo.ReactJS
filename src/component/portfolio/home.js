import React, { useState, useEffect } from "react";
import './home.css'
import imgs from './siranjeeviprofile.jpeg'
import linkedin from './SIranjeevi linkedin.png'
import github from './SIranjeevi linkedin.png'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faXmark } from '@fortawesome/free-solid-svg-icons'
export function Portfoliohome() {
    const [autotyp] = useTypewriter({
        words: ['Developer', 'Front End Developer', 'Web developer'],
        backSpeed: 100,
        loop: {},
    })
    return (
        <>
            <div className="container-fluid pt-5" id="Portfoliohomebody">
                <div className="row d-flex justify-content-center">
                    <div className="col-5 mt-5 display-4 text-center text-white">
                        WELCOME
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <h1 id="Welcome-context" className="col-lg-12 fw-5 pt-5 mt-5 text-center">HI PEOPLE</h1>
                    <div id="Welcomeclass" className="col-lg-5 text-center text-white mt-5"> A warm welcome message works like a charm in any situation, be it the recruitment of a new employee or having returning ones back, or meeting friends after a long time! Welcome messages are also appreciated in more formal settings like welcoming a guest or customer. Whatever the arrangement is, these notes convey your excitement and happiness towards the other parties and help them settle in more comfortably. So if you have a new party to meet and greet cordially, pass along a sweet, meaningful welcome message while offering them a genuine smile! Perfect welcome messages can be hard to find, so help yourselves with a compilation of unique welcoming messages and notes below!</div>
                </div>
            </div>
            <div>
                <div className="container-fluid row p-5" id="porthome1">
                    <div className="col-lg-6">
                        <h3>Hello, This is</h3>
                        <h1>Siranjeevi</h1>
                        <h3>And I am<span className="col-lg-12 ms-3 text-info" id="textport">{autotyp}</span></h3>
                        <p className="col-lg-11 text-justify">Desires employment with Quest Inc. as a Front-end Developer. Versed in the production of high quality solutions for the company’s clients; bringing broad understanding of Modern HTML, JavaScript, CSS, and software development, plus a very strong ability to execute and standard software architectural patterns</p>
                        <div className="porthome2"></div>
                    </div>
                    <div className="col-lg-6 text-center">
                        <img className="w-50 rounded-circle" src={imgs} />
                    </div>
                </div>
            </div>
            <div className="p-5" id="Portfoliohomebody1">
                <div className="row">
                    <div className="col-lg-4">
                        <h1 className="text-white pt-4 ps-5  ">Coutact US</h1>
                        <p className="text-white pt-2 ps-5">7667643334</p>
                        <p className="text-white ps-5">Siranjeevi9942@gmail.com</p>
                        <div className="row ps-5">
                        <figure className="col-lg-4 "><img src={linkedin} className="col-lg-8 col-sm-4 col-4"/><figcaption className="text-white">Linkedin</figcaption></figure>
                        <figure className="col-lg-4 "><img src={github} className="col-lg-8 col-sm-4 col-4"/><figcaption className="text-white">github</figcaption></figure>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="row col-8 ms-3 pt-5 text-white">
                        To my amazing colleagues, thank you for the laughter, mentorship, and unforgettable memories we've created together. Leaving this team is bittersweet, but I'm grateful for the friendships we've built. Keep rocking!<br/><br/>A heartfelt thank you to my awesome coworkers. Your unwavering dedication and teamwork have inspired me every day. I'm moving on, but your impact on me will be forever cherished. Keep shining brightly!
                        </div>
                    </div>
                    <div className="col-lg-3 p-3">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d31268.95009339475!2d77.56909824524307!3d11.579164414368613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDM0JzM0LjgiTiA3N8KwMzQnNDcuNCJF!5e0!3m2!1sen!2sin!4v1697271902675!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" id="idmap"></iframe>
                    <div className="col-lg-5 text-white">
                            <h3>Siranjeevi</h3>
                            <h6>Ambethkar street cross 2</h6>
                            <h6>Thavuttipalayam,Anthiyur</h6>
                    </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center mt-5">
                            <div className="col-lg-6 col-12 d-flex justify-content-between"><a href="https://www.facebook.com/siranjeevi.v123"><FontAwesomeIcon icon={faFacebook} size="2xl" className="text-white" /></a><a href="https://www.instagram.com/?next=%2F"><FontAwesomeIcon icon={faInstagram} size="2xl" className="text-white"/></a><a href="mailto:siranjeevi9942@gmail.com"><FontAwesomeIcon icon={faEnvelope} size="2xl" className="text-white"/></a><a href="https://twitter.com/SiranjeeviVija9"><FontAwesomeIcon icon={faXmark} size="2xl" className="text-white"/></a></div>
                        </div>
            </div>
        </>
    )
}