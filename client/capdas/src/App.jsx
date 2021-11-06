import { Route, Switch, Link } from "react-router-dom";
import './App.css';
import FooterNav from "./components/navbar/FooterNav";
import HeaderNav from "./components/navbar/HeaderNav";


function App() {
  return (
    <div className="App">
      <HeaderNav />
      <FooterNav />
    </div>
  );
}

export default App;
