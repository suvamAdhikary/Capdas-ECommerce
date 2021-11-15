
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import HeaderNav from "./components/navbar/HeaderNav";
import FooterNav from "./components/navbar/FooterNav";
import SplashScreen1 from "./landingPages/SplashScreen1";
import SplashScreen2 from "./landingPages/SplashScreen2";
import Signup from "./user/Signup";
import Login from "./user/Login";
import { Account } from "./AccountPage/Account";
import { Hp } from "./Homepage/Homepage";
import { Menu } from "./Menu/Menu";
import Category from "./category/Category";
import WomenCategory from "./womencategory/WomenCategory";
import {ProductPage} from "./ProductPage/productPage"
import { Bag } from "./BagPage/Bag";
import AddAddress from "./user/AddAddress";
import { Payment } from "./payment/Payment";
import { CardDetail } from "./cardDetails/CardDetail";
import { Success } from "./successPage/Success";
import Filter from "./Filter/Filter";
import Tailer from "./Mend/Tailer";
import  {MendMenu} from "./MendMenu/MendMenu";


const noShowTop = ["/", "/ss2", "/signup", "/signin", "/menu", "/newaddress", "/bag", "/payment", "/card", "/success", "/filter"];
const noShowBot = ["/", "/ss2", "/signup", "/signin", "/menu", "/newaddress", "/filter", "/payment", "/bag", "/card", "/success" ];


export default function CapdaS() {
    const [showHeaderNav, setShowHeaderNav] = useState(true);
    const [showFooterNav, setShowFooterNav] = useState(true);

    const location = useLocation();


    useEffect(() => {

        noShowTop.includes(location.pathname) ? setShowHeaderNav(false) : setShowHeaderNav(true);

        noShowBot.includes(location.pathname) ? setShowFooterNav(false): setShowFooterNav(true);

        return;

    }, [location.pathname]);


    return (<>

        { showHeaderNav ? <HeaderNav /> : null }

        <Routes>
            
            <Route path="/" element={<SplashScreen1 />} />
            <Route path="/ss2" element={<SplashScreen2 />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/account" element={<Account />} />
            <Route path="/CapdaS" exact element={<Hp />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/mendmenu" element={<MendMenu />} />
            <Route path="/mend" element={<Tailer />} />
            <Route path="/categories" element={<Category />} />
            <Route path="/filter" element={<Filter />} />
            <Route path="/bag" element={<Bag />} />
            <Route path="/newAddress" element={<AddAddress />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/card" element={<CardDetail />} />
            <Route path="/success" element={<Success />} />
            <Route path="/women/sarees" element={<WomenCategory />} />
            <Route path="/women/sarees/:productId" element={<ProductPage />} />
            <Route path="/testing" element={<ProductPage />} />

        </Routes>

        {showFooterNav ? <FooterNav /> : null}

    </>)
}