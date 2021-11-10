import { Route, Switch, Link } from "react-router-dom";
import './App.css';
import CapdaS from "./CapdaS";
import FooterNav from "./components/navbar/FooterNav";
import HeaderNav from "./components/navbar/HeaderNav";
import SplashScreen1 from "./landingPages/SplashScreen1";
import SplashScreen2 from "./landingPages/SplashScreen2";
import StartScreen from "./landingPages/StartScreen";

function App() {
  return (
    <div>
      <HeaderNav />
      <CapdaS />
      <FooterNav />
    </div>
  );
}

export default App;
