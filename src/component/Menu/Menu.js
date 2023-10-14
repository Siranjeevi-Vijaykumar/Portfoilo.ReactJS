import React from "react";
import { Link } from 'react-router-dom'
import './menu.css'
export function Menu() {
  return (
    <>
      <nav class="navbar navbar-expand-lg " id="COF">
        <div class="container-fluid" >
          <p class="navbar-brand" ><Link to='/' className="btn">Menu</Link></p>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to='/Congrats' id="NTCOLOUR" className="btn">Congrats</Link>
              </li>
              <li class="nav-item">
                <Link to="/Login" id="NTCOLOUR" className="btn">Login</Link>
              </li>
              <li class="nav-item">
                <Link to="/Notifications" id="NTCOLOUR" className="btn">Notifications</Link>
              </li>
              <li class="nav-item">
                <Link to="/Social" id="NTCOLOUR" className="btn">Social</Link>
              </li>
              <li class="nav-item">
                <Link to="/Superover" id="NTCOLOUR" className="btn">Superover</Link>
              </li>
              <li class="nav-item">
                <Link to="/Technology" id="NTCOLOUR" className="btn">Technology</Link>
              </li>
              <li class="nav-item">
                <Link to="/Feedback" id="NTCOLOUR" className="btn">Feedback App</Link>
              </li>
              <li class="nav-item">
                <Link to="/Counter" id="NTCOLOUR" className="btn">Counter</Link>
              </li>
              <li class="nav-item">
                <Link to="/Fruits" id="NTCOLOUR" className="btn">Friuts</Link>
              </li>
            </ul>
            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Other component
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#"><Link to="/Datajson" id="NTCOLOUR" className="btn">Datajson</Link></a></li>
                <li><a class="dropdown-item" href="#"><Link to="/DateFunction" id="NTCOLOUR" className="btn">DateFunction</Link></a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}