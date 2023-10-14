import React from "react";
import { Link } from 'react-router-dom'
import'./portfolio.css'
export function Portfolio() {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-dark p-3" id="portfliobody">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#" id="TEXTBOLD">SIRAN<span id="namePORT">jeevi</span></a>
                    <button class="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                            <Link to='/home'><a class="nav-link active" aria-current="page" href="#" id="Textnav">Home</a></Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/aboutus'><a class="nav-link" href="#" id="Textnav">About</a></Link>
                            </li>
                            <li class="nav-item">
                            <Link to='/skill'><a class="nav-link" href="#" id="Textnav">Skills</a></Link>
                            </li>
                            <li class="nav-item">
                            <Link to='/resume'><a class="nav-link" href="#" id="Textnav">Resume</a></Link>
                            </li>
                            <li class="nav-item">
                            <Link to='/project'><a class="nav-link" href="#" id="Textnav">Projects</a></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}