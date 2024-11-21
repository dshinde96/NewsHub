
import React, { Component, useState } from "react";
import Navbar from './Components/Navbar'
import News from "./Components/News";
import { Route, Routes, useLocation, useNavigate ,Redirect, Navigate} from "react-router-dom";


export default function App() {
    // const [country,set_country]=useState("india");
    // const [cat,set_cat]=useState("general");
    // const location=useLocation();
    // const [refresh, setRefresh] = useState(false);
    // const navigate = useNavigate();

    // const country_change=(a)=>{
    //     set_country(a.country);
    //     const path=`/${country}/${a.category}`;
    //     navigate(path);
    //     console.log(path);
    //     console.log(country);
    //     // handleNavigation("/");
    // }
    return (
        <>
            <Navbar/>

            <Routes>
                <Route exact path="/" element={<Navigate to="/india" replace={true} />}/>
                <Route exact path="/india" element={<News key="india-general" category="general" country="in"/>}/>
                <Route exact path="/india/entertainment" element={<News key="india-entertainment" category="entertainment" country="in"/>}/>
                <Route exact path="/india/sports" element={<News key="india-sports" category="sports" country="in"/>}/>
                <Route exact path="/india/business" element={<News key="india-business" category="business" country="in"/>}/>
                <Route exact path="/india/health" element={<News key="india-health" category="health" country="in"/>}/>
                <Route exact path="/india/science" element={<News key="india-science" category="science" country="in"/>}/>
                <Route exact path="/india/technology" element={<News key="india-technology" category="technology" country="in"/>}/>

                <Route exact path="/us" element={<News key="us-general" category="general" country="us"/>}/>
                <Route exact path="/us/entertainment" element={<News key="us-entertainment" category="entertainment" country="us"/>}/>
                <Route exact path="/us/sports" element={<News key="us-sports" category="sports" country="us"/>}/>
                <Route exact path="/us/business" element={<News key="us-business" category="business" country="us"/>}/>
                <Route exact path="/us/health" element={<News key="us-health" category="health" country="us"/>}/>
                <Route exact path="/us/science" element={<News key="us-science" category="science" country="us"/>}/>
                <Route exact path="/us/technology" element={<News key="us-technology" category="technology" country="us"/>}/>
            </Routes>
        </>
    )
}



