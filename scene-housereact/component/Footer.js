import React from "react";
import "./Footer.css";

import logo from "../../src/img/scenelogo.svg"
import map from "../../src/img/mapicon.svg"
import phone from "../../src/img/phoneicon.svg"

function Footer({style}) {
    return (
        <div className="footer"  style={style}>
            <div className="topfooter">
                <img src={logo} alt="scene-house"></img>
                <ul className="info">
                    <li>
                        <img src={map} alt="location" />
                        <div className=".bu1">서울특별시 강남구 역삼로 210,5층</div>
                    </li>
                    <li>
                        <img src={phone} alt="call" />
                        <div className=".bu1">(123)456-7800</div>
                    </li>
                </ul>
                <div className="right">
                    <ul className="fnavTop">
                        <li><h6>About us</h6></li>
                        <li><h6>Contact us</h6></li>
                        <li><h6>Help</h6></li>
                    </ul>
                    <ul className="fnavBot">
                        <li><h6>Privacy Policy</h6></li>
                        <li><h6>Disclaimer</h6></li>
                    </ul>
                </div>

            </div>
            <div className="copy">
                <div className="ft">
                    Copyright © 2025 • Scene House
                </div>
            </div>
        </div>
    )
}

export default Footer