
import React, { Component, useState } from "react";
import { Route, Routes, useLocation, useNavigate ,Redirect, Navigate} from "react-router-dom";
import { NavLink,Link } from "react-router-dom";
 
const Navbar=(props)=>{
    const navigate = useNavigate();
    const [cat,set_cat]=useState("");
    const [country,set_country]=useState("india");
    const handle_country_change=(event)=>{
        set_country(event.target.value);
        navigate(`/${event.target.value}/${cat}`);
    }
    return (
        <>
            <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" to="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item" onClick={()=>set_cat("")}>
                                <NavLink className="nav-link" to={`/${country}`}>HOME</NavLink>
                            </li>
                            <li className="nav-item" onClick={()=>set_cat("business")}><NavLink className="nav-link" to={`/${country}/business`}>BUSINESS</NavLink></li>
                            <li className="nav-item" onClick={()=>set_cat("entertainment")}><NavLink className="nav-link" to={`/${country}/entertainment`}>ENTERTAINMENT</NavLink></li>
                            <li className="nav-item" onClick={()=>set_cat("health")}><NavLink className="nav-link" to={`/${country}/health`}>HEALTH</NavLink></li>
                            <li className="nav-item" onClick={()=>set_cat("science")}><NavLink className="nav-link" to={`/${country}/science`}>SCIENCE</NavLink></li>
                            <li className="nav-item" onClick={()=>set_cat("sports")}><NavLink className="nav-link" to={`/${country}/sports`}>SPORTS</NavLink></li>
                            <li className="nav-item" onClick={()=>set_cat("technology")}><NavLink className="nav-link" to={`/${country}/technology`}>TECHNOLOGY</NavLink></li>
                        </ul>

                        <div className="country_dropdown" onChange={handle_country_change}>
                            <select>
                                <option value="india">India</option>
                                <option value="us">US</option>
                                {/* <option value="uk">United-Kingdom</option> */}
                            </select>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;

