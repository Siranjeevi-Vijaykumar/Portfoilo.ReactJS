import React from "react";
import imgresume from './siranjeeviprofile.jpeg'
export function Resume(){
    return(
    <>
    <section id="resume" class="resume">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Resume</h2>
          <p>Self-motivated IT professional with deep knowledge and proficiency in JavaScript, HTML, CSS, and mobile responsive website development, as well as highly potent skills and ability in encoding virus-free and efficient code, seeks the position of Front-end Web Developer</p>
        </div>

        <div class="row">
          <div class="col-lg-6">
            <h3 class="resume-title">Summary</h3>
            <div class="resume-item pb-0">
              <h4>Siranjeevi</h4>
              <h6>Front end developer</h6>
              <p><em>Innovative and deadline-driven Front-end-developer and Graphic Designer from initial concept to final, polished deliverable.</em></p>
              <ul>
                <li>Ambethkar Street cross-2</li>
                <li>+91 7667643334</li>
                <li>siranjeevi9942@gmail.com</li>
              </ul>
            </div>

            <h3 class="resume-title pt-3">Education</h3>
            <div class="resume-item">
              <h4>Diplamo in CIVIL ENGINEERING</h4>
              <h5>2017 - 2020</h5>
              <p><em>Sakthi polytechnic college, Appakudal, Erode</em></p>
              <p>Envisioned and developed architectural concepts, layout plans and Revit 3D conceptual model.</p>
            </div>
            <div class="resume-item">
              <h4>Bachelor of Engineering CIVIL ENGINEERING</h4>
              <h5>2020 - 2023</h5>
              <p><em>Kumaraguru college of Technology, Coimbatore</em></p>
              <p>Include any certifications or education related to AutoCAD that you have.</p>
            </div>
          </div>
          <div class="col-lg-6 ">
            <div className="d-flex justify-content-center">
          <img src={imgresume} className="col-lg-4"/></div>
            <h3 class="resume-title pt-3 text-center">TECHNICAL SKILLS</h3>
            <div class="resume-item d-flex justify-content-center">
              <ul>
                <li>HTML5</li>
                <li>CSS3 </li>
                <li>Bootstrap</li>
                <li>JavaScript</li>
                <li>ReactJS</li>
              </ul>
            </div>
            <div class="resume-item pt-4">
              <h4 className="text-center">Soft skill</h4>
              <div className="d-flex justify-content-center">
              <ul>
                <li>Leadership quality</li>
                <li>Teamwork</li>
                <li>Time management</li>
              </ul>
              </div>
            </div>
            <div class="resume-item pt-4">
              <h4 className="text-center">Language know</h4>
              <div className="d-flex justify-content-center">
              <ul>
                <li>Tamil</li>
                <li>English</li>
              </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
    )
}