import { Route, Switch, Link } from "react-router-dom";
import './App.css';
import CapdaS from "./CapdaS";
import FooterNav from "./components/navbar/FooterNav";
import HeaderNav from "./components/navbar/HeaderNav";
import { Hp } from "./Homepage/Homepage";
import CarouselContainer from "./components/CarouselContainer"
import  Button  from "./utils/Button";
import { Bag } from "./BagPage/Bag";






function App() {

  const handleSubmit = () => {
  
  }

  return (
    <div className="App">
      {/*
      <CapdaS />
     
        */}
      <HeaderNav />
       {/* <FooterNav />  */}
       <Hp /> 
      {/* <Bag />
      <Button handleSubmit={handleSubmit}>Checkout</Button> */}
    </div>
  );
}

export default App;
