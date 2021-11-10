// import Signup from "./user/Signup"
import { Hp } from "./Homepage/Homepage"
import AddAddress from "./user/AddAddress"
// import Login from "./user/Login"
import { Bag } from "./BagPage/Bag";
import Button from "./utils/Button"
import HeaderNav from "../src/components/navbar/HeaderNav";
export default function CapdaS() {

    return (<>
        {/* <Hp />
        <AddAddress /> */}
        <Bag />
        <Button>Checkout</Button>
        {/* <HeaderNav/>
        <Button>Next</Button>  */}
    </>)
}