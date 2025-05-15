import { Link, NavLink, useLocation } from "react-router-dom";
import React from "react";
import "./Header.css";
import scenelogo from "../img/scenelogo.svg";
import search from "../img/search.svg";
import alarm from "../img/mail.svg";
import user from "../img/user.svg";
import ham from "../img/ham.svg";

function Header() {
    const location = useLocation();
    const isUploadDashboard = location.pathname === '/Contest/UploadDashboard';

    return (
        <div className={`header ${isUploadDashboard ? 'UploadDashboard-header' : ''}`}>
            <div className="top">
                <div className="nav">
                    <NavLink className="MainLogo" to={'/'}>
                        <img src={scenelogo} alt="scene house" />
                    </NavLink>
                    <div className="gnb">
                        <NavLink className="navbarMenu" to={'/'}><h5>HOME</h5></NavLink>
                        <NavLink className="navbarMenu" to={'/All'}><h5>전체보기</h5></NavLink>
                        <NavLink className="navbarMenu" to={'/Contest'}><h5>공모전</h5></NavLink>
                        <NavLink className="navbarMenu" to={'/Game'}><h5>@씬하우스</h5></NavLink>
                    </div>
                </div>
                <div className="lefticon">
                    <img src={search} alt="search" />
                    <img src={alarm} alt="alarm" />
                    <NavLink className="iconUser" to={'/Setting'}>
                        <img src={user} alt="user" />
                    </NavLink>
                </div>
                <div className="hamMenu"><img src={ham} alt="ham" /></div>
            </div>
        </div>
    );
}

export default Header;