
import { Bag } from "./BagPage/Bag";
import Button from "./utils/Button"
import HeaderNav from "../src/components/navbar/HeaderNav";
import {Payment} from "../src/payment/Payment"
export default function CapdaS() {


    return (<>
        {/* <Hp />
        <AddAddress /> */}
        {/* <Bag />
        <Button>Checkout</Button> 
        <HeaderNav />*/}
        <Payment>Payment</Payment>
        <Button>Next</Button> 
    </>)


}