
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import HeaderNav from "./components/navbar/HeaderNav";
import FooterNav from "./components/navbar/FooterNav";

import StartScreen from "./landingPages/StartScreen";
import SplashScreen1 from "./landingPages/SplashScreen1";
import SplashScreen2 from "./landingPages/SplashScreen2";
import Signup from "./user/Signup";
import Login from "./user/Login";
import { Hp } from "./Homepage/Homepage";
import AddAddress from "./user/AddAddress";




export default function CapdaS() {
    const [showNav, setShowNav] = useState(true);


    return (<>

        { showNav ? <HeaderNav /> : null }

        <Routes>
            
            <Route path="/" element={<SplashScreen1 />} />
            <Route path="/ss2" element={<SplashScreen2 />} />
            <Route path="/signup" element={<Signup />} />

            <Route path="/CapdaS" exact element={<Hp />} />

            
        </Routes>

        { showNav ? <FooterNav /> : null }

    </>)

}