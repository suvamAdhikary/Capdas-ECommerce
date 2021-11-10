import { Route, Switch, Link } from "react-router-dom";
import './App.css';
import CapdaS from "./CapdaS";
import FooterNav from "./components/navbar/FooterNav";
import HeaderNav from "./components/navbar/HeaderNav";
import { Hp } from "./Homepage/Homepage";
import CarouselContainer from "./components/CarouselContainer"
function App() {
  return (
    <div className="App">
      <HeaderNav />
      {/* <CapdaS /> */}
      <Hp />
      {/* <FooterNav /> */}
    </div>
  );
}

export default App;
