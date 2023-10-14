import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faExclamation} from '@fortawesome/free-solid-svg-icons'
import {faBell} from '@fortawesome/free-regular-svg-icons'
import './Notification.css'
export function Notifications() {
    return (
        <>
            <div class="d-grid gap-4 col-7 mx-auto">
                <div className="text-center mt-5">Notifications</div>
                <div class="bg-primary p-2 rounded">
                    <div className="row">
                    <div className="col-2 text-center"><FontAwesomeIcon icon={faCheck} className="text-danger" /></div>
                    <div className="col-9">INFORMATION MESSAGE</div>
                    </div>
                    </div>
                    <div class="bg-success p-2 rounded">
                    <div className="row">
                    <div className="col-2 text-center"><FontAwesomeIcon icon={faCheck} className="text-danger" /></div>
                    <div className="col-9">SUCCESS MESSAGE</div>
                    </div>
                    </div>
                    <div class="bg-warning p-2 rounded">
                    <div className="row">
                    <div className="col-2 text-center"><FontAwesomeIcon icon={faBell} className="text-danger" /></div>
                    <div className="col-9">WARNING MESSAGE</div>
                    </div>
                    </div>
                    <div class="bg-danger p-2 rounded">
                    <div className="row">
                    <div className="col-2 text-center"><FontAwesomeIcon icon={faExclamation} className="text-dange" /></div>
                    <div className="col-9">ERROR MESSAGE</div>
                    </div>
                    </div>
            </div>
        </>
    )
}