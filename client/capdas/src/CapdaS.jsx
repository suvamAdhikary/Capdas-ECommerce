
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import HeaderNav from "./components/navbar/HeaderNav";
import FooterNav from "./components/navbar/FooterNav";

import Signup from "./user/Signup";
import { Hp } from "./Homepage/Homepage";
import AddAddress from "./user/AddAddress";
import Login from "./user/Login";



export default function CapdaS() {
    const [showNav, setShowNav] = useState(true);


    return (<>

        { showNav ? <HeaderNav /> : null }

        <Routes>

            <Route path="/" exact element={<Hp />} />

            
        </Routes>

        { showNav ? <FooterNav /> : null }

    </>)

}