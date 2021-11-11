
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import HeaderNav from "./components/navbar/HeaderNav";
import FooterNav from "./components/navbar/FooterNav";

import SplashScreen1 from "./landingPages/SplashScreen1";
import SplashScreen2 from "./landingPages/SplashScreen2";
import Signup from "./user/Signup";
import Login from "./user/Login";
import { Hp } from "./Homepage/Homepage";
import { Bag } from "./BagPage/Bag";
import AddAddress from "./user/AddAddress";
import { Payment } from "./payment/Payment";
import { CardDetail } from "./cardDetails/CardDetail";
import { Success } from "./successPage/Success";


export default function CapdaS() {
    const [showNav, setShowNav] = useState(true);


    return (<>

        { showNav ? <HeaderNav /> : null }

        <Routes>
            
            <Route path="/" element={<SplashScreen1 />} />
            <Route path="/ss2" element={<SplashScreen2 />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/CapdaS" exact element={<Hp />} />
            <Route path="/bag" element={<Bag />} />
            <Route path="/newAddress" element={<AddAddress />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/card" element={<CardDetail />} />
            <Route path="/success" element={<Success />} />
            
        </Routes>

        { showNav ? <FooterNav /> : null }

    </>)

}