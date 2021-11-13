import { useParams } from "react-router";
import styled from "styled-components";
import { base } from "../utils/request";
import Frame61 from "../Homepage/images/Frame61.png";
import FloatButtn from "../utils/FLoatButton";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Main = styled.div`


p:nth-child(5){
font-size: 16px;
font-weight: 700;
line-height: 20px;
letter-spacing: 1px;
text-align: left;
margin: 7px 0 0 24px;
}
div:nth-child(6){
    width: 326px;
    margin: auto;
    margin-bottom: 10px !important;
}
div:nth-child(6) >p{
color: #151A17;
font-size: 12px;
font-weight: 400;
line-height: 16px;
letter-spacing: 1px;
text-align: left;
}
div:nth-child(8){
width:326px;
margin: auto;
display: flex;
flex-direction: row;
}
div:nth-child(8)> svg{
  
    margin: 0 3px 15px 3px;
    border-radius: 10px;
}

div:nth-child(10){
    width: 326px;
    margin: auto;
    margin-bottom: 10px !important;
}

div:nth-child(10)>p{
color: #151A17;
font-size: 12px;
font-weight: 400;
line-height: 16px;
letter-spacing: 1px;
text-align: left;
}
`;
const Preview = styled.div`
width: 327px;
height: 490px;
margin: 25px 24px 20px 24px;
background-color: #56675B;
`;

const Samples = styled.div`
display: flex;
width: 327px;
height: 64px;
margin: auto;
flex-direction: row;
justify-content: space-between;
  & div{
  width: 64px;
  height: 64px;
  background-color: #56675B;
  & img{
      height: 64px;
      width: 64px;
      object-fit: cover;
  }

}
`;

const Div = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 327px;
margin: 6px auto;

div:nth-child(1) >p{
font-size: 18px;
font-weight: 700;
line-height: 22px;
letter-spacing: 1px;
color: #151A17;
}
div:nth-child(2) >p{
color:#009944;
font-size: 14px;
font-weight: 400;
line-height: 17px;
letter-spacing: 1px;
}
`
const Highlight = styled.p`
margin: 0 0 10px 25px;
text-align: left;
font-size: 16px;
font-weight: 700;
line-height: 20px;
letter-spacing: 1px;
color: #151A17;
`;


export const ProductPage = () => {
    const [productData, setProductData] = useState({});
    const [img, setImg] = useState([])
    // const [error, setError] = useState(false);
    // const [loading, setLoading] = useState(false);

    const obj = useParams();


    const getData = async (id) => {
        try {

            const { data: { product } } = await base(`/products/${id}`);

            setProductData(product);
            setImg(product?.image)

        } catch (err) {
            console.log(err.message);
        }
    }

    const handleAdd = async () => {

        const id = JSON.parse(localStorage.getItem('CapdaS_user_id'));
        const productId = obj.productId;

        try {
            const {data: {item : user}} = await base.get(`/users/${id}`);
            const { data: { product } } = await base(`/products/${productId}`);

            var bag;
            let { data: { check }} = await base.get(`/carts/check/${id}/${productId}`);
            // console.log(check, "check");
            if(check !== null) {
                return;
                // bag = await base.patch(`/carts/${productId}/${id}`, {
                //     quantity: check.quantity + 1,
                //     price: check.price + product.price,
                // });

            } else {

                bag = await base.post(`/carts`, {
                    userId: id,
                    productId: productId,
                    name: product.name,
                    price: product.price,
                    quantity: 1,
                    image: product.image[0],
                })
                
   
                await base.patch(`/users/${id}`, {
                    totalPrice: +user.totalPrice + product.price,
                    totalItemsInBag: +user.totalItemsInBag + 1,
                })
            }
            // console.log(bag)
            localStorage.setItem(`${id}_bag`, JSON.stringify(bag))
            return;
        } catch (err) {

            console.log(err.message);
        }


    }


    useEffect(()=> {

        getData(obj.productId);

        return;

    }, [obj.productId])


    // const handleColorChange = () => {
    //     {backgroundColor: red}
    // }
 

    return <Main>
        
        <Preview>  
            <img src={img[0]} alt="mainImage" />
        </Preview>
         <Samples>
        <div> <img src={img[1]} alt="mainImage" /></div>
        <div><img src={img[2]} alt="mainImage" /></div>
        <div><img src={img[3]} alt="mainImage" /></div>
        <div><img src={img[4]} alt="mainImage" /></div>
        </Samples>
        <Div>
        <div><p>{productData?.name || "ROOP:CYAN"}</p></div>
        <div><p>{productData?.rating || "4.2/5"} <svg xmlns="http://www.w3.org/2000/svg" width="11" height="10" viewBox="0 0 11 10" fill="none">
<path d="M5.5 7.41659L8.59167 9.66659L7.40833 6.03325L10.5 3.83325H6.70833L5.5 0.083252L4.29167 3.83325H0.5L3.59167 6.03325L2.40833 9.66659L5.5 7.41659Z" fill="#009944"/>
</svg></p></div>
        </Div>
            <Link to="/bag">
                <FloatButtn handleAdd={handleAdd}>Add to Bag</FloatButtn>
            </Link>

        <p>Rs.{+productData?.price || 2499}</p>

        <div><p>Handwoven Maheshwari Silk By Cotton. Handwoven, comfortable and elegant Maheshwari saree in Plain white with gold and grey stripes across the body, embellished with a border in black and dull gold. <br /> Proudly Made in India, using 100% organic cotton.</p></div>
        <Highlight>Size</Highlight>
        <div id="parent"><svg width="54" height="38" viewBox="0 0 54 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 11C1 5.47715 5.47715 1 11 1H43C48.5228 1 53 5.47715 53 11V27C53 32.5228 48.5228 37 43 37H11C5.47715 37 1 32.5228 1 27V11Z" fill="#FFFFF7"/>
<path d="M25.544 24V22.768H19.608V19.12H24.504V17.888H19.608V14.512H25.544V13.28H18.216V24H25.544ZM32.0788 24.16C34.1588 24.16 35.7108 23.04 35.7108 21.184C35.7108 19.072 34.0468 18.48 32.5268 18.112L31.3588 17.824C30.1268 17.52 29.3428 17.12 29.3428 16.048C29.3428 15.056 30.2228 14.464 31.4068 14.464C32.7988 14.464 33.8868 15.056 34.3988 16.512L35.5668 15.584C34.9108 13.984 33.3748 13.136 31.4388 13.136C29.5668 13.136 27.8708 14.192 27.8708 16.144C27.8708 18.16 29.4868 18.8 30.9108 19.12L31.9188 19.344C33.3428 19.68 34.2868 19.984 34.2868 21.216C34.2868 22.384 33.2788 22.848 32.0788 22.848C30.7348 22.848 29.0707 22.224 28.5748 20.48L27.5188 21.408C28.2228 23.392 30.0628 24.16 32.0788 24.16Z" fill="#151A17"/>
<path d="M11 1.5H43V0.5H11V1.5ZM52.5 11V27H53.5V11H52.5ZM43 36.5H11V37.5H43V36.5ZM1.5 27V11H0.5V27H1.5ZM11 36.5C5.7533 36.5 1.5 32.2467 1.5 27H0.5C0.5 32.799 5.20101 37.5 11 37.5V36.5ZM52.5 27C52.5 32.2467 48.2467 36.5 43 36.5V37.5C48.799 37.5 53.5 32.799 53.5 27H52.5ZM43 1.5C48.2467 1.5 52.5 5.7533 52.5 11H53.5C53.5 5.20101 48.799 0.5 43 0.5V1.5ZM11 0.5C5.20101 0.5 0.5 5.20101 0.5 11H1.5C1.5 5.7533 5.7533 1.5 11 1.5V0.5Z" fill="#151A17"/>
        </svg>
            
            
            
            <svg width="44" height="38" viewBox="0 0 44 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 11C1 5.47715 5.47715 1 11 1H33C38.5228 1 43 5.47715 43 11V27C43 32.5228 38.5228 37 33 37H11C5.47715 37 1 32.5228 1 27V11Z" fill="#FFFFF7"/>
<path d="M22.36 24.16C24.44 24.16 25.992 23.04 25.992 21.184C25.992 19.072 24.328 18.48 22.808 18.112L21.64 17.824C20.408 17.52 19.624 17.12 19.624 16.048C19.624 15.056 20.504 14.464 21.688 14.464C23.08 14.464 24.168 15.056 24.68 16.512L25.848 15.584C25.192 13.984 23.656 13.136 21.72 13.136C19.848 13.136 18.152 14.192 18.152 16.144C18.152 18.16 19.768 18.8 21.192 19.12L22.2 19.344C23.624 19.68 24.568 19.984 24.568 21.216C24.568 22.384 23.56 22.848 22.36 22.848C21.016 22.848 19.352 22.224 18.856 20.48L17.8 21.408C18.504 23.392 20.344 24.16 22.36 24.16Z" fill="#151A17"/>
<path d="M11 1.5H33V0.5H11V1.5ZM42.5 11V27H43.5V11H42.5ZM33 36.5H11V37.5H33V36.5ZM1.5 27V11H0.5V27H1.5ZM11 36.5C5.75329 36.5 1.5 32.2467 1.5 27H0.5C0.5 32.799 5.20101 37.5 11 37.5V36.5ZM42.5 27C42.5 32.2467 38.2467 36.5 33 36.5V37.5C38.799 37.5 43.5 32.799 43.5 27H42.5ZM33 1.5C38.2467 1.5 42.5 5.7533 42.5 11H43.5C43.5 5.20101 38.799 0.5 33 0.5V1.5ZM11 0.5C5.20101 0.5 0.5 5.20101 0.5 11H1.5C1.5 5.7533 5.7533 1.5 11 1.5V0.5Z" fill="#151A17"/>
</svg><svg width="48" height="38" viewBox="0 0 48 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 11C1 5.47715 5.47715 1 11 1H37C42.5228 1 47 5.47715 47 11V27C47 32.5228 42.5228 37 37 37H11C5.47715 37 1 32.5228 1 27V11Z" fill="#FFFFF7"/>
<path d="M19.608 24V18.08L19.432 15.184L20.632 17.84L22.936 22.208H24.296L26.6 17.84L27.784 15.184L27.64 18.08V24H29.032V13.28H27.48L24.696 18.592L23.624 20.944L22.536 18.592L19.768 13.28H18.216V24H19.608Z" fill="#151A17"/>
<path d="M11 1.5H37V0.5H11V1.5ZM46.5 11V27H47.5V11H46.5ZM37 36.5H11V37.5H37V36.5ZM1.5 27V11H0.5V27H1.5ZM11 36.5C5.7533 36.5 1.5 32.2467 1.5 27H0.5C0.5 32.799 5.20101 37.5 11 37.5V36.5ZM46.5 27C46.5 32.2467 42.2467 36.5 37 36.5V37.5C42.799 37.5 47.5 32.799 47.5 27H46.5ZM37 1.5C42.2467 1.5 46.5 5.7533 46.5 11H47.5C47.5 5.20101 42.799 0.5 37 0.5V1.5ZM11 0.5C5.20101 0.5 0.5 5.20101 0.5 11H1.5C1.5 5.7533 5.7533 1.5 11 1.5V0.5Z" fill="#151A17"/>
</svg><svg width="43" height="38" viewBox="0 0 43 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 11C1 5.47715 5.47715 1 11 1H32C37.5228 1 42 5.47715 42 11V27C42 32.5228 37.5228 37 32 37H11C5.47715 37 1 32.5228 1 27V11Z" fill="#FFFFF7"/>
<path d="M25.224 24V22.768H19.608V13.28H18.216V24H25.224Z" fill="#151A17"/>
<path d="M11 1.5H32V0.5H11V1.5ZM41.5 11V27H42.5V11H41.5ZM32 36.5H11V37.5H32V36.5ZM1.5 27V11H0.5V27H1.5ZM11 36.5C5.7533 36.5 1.5 32.2467 1.5 27H0.5C0.5 32.799 5.20101 37.5 11 37.5V36.5ZM41.5 27C41.5 32.2467 37.2467 36.5 32 36.5V37.5C37.799 37.5 42.5 32.799 42.5 27H41.5ZM32 1.5C37.2467 1.5 41.5 5.7533 41.5 11H42.5C42.5 5.20101 37.799 0.5 32 0.5V1.5ZM11 0.5C5.20101 0.5 0.5 5.20101 0.5 11H1.5C1.5 5.7533 5.7533 1.5 11 1.5V0.5Z" fill="#151A17"/>
</svg><svg width="54" height="38" viewBox="0 0 54 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 11C1 5.47715 5.47715 1 11 1H43C48.5228 1 53 5.47715 53 11V27C53 32.5228 48.5228 37 43 37H11C5.47715 37 1 32.5228 1 27V11Z" fill="#FFFFF7"/>
<path d="M18.824 24L21.928 19.344L25.032 24H26.776L22.92 18.496L26.472 13.28H24.856L21.944 17.712L19.16 13.28H17.384L20.936 18.464L17.08 24H18.824ZM35.7709 24V22.768H30.1549V13.28H28.7629V24H35.7709Z" fill="#151A17"/>
<path d="M11 1.5H43V0.5H11V1.5ZM52.5 11V27H53.5V11H52.5ZM43 36.5H11V37.5H43V36.5ZM1.5 27V11H0.5V27H1.5ZM11 36.5C5.7533 36.5 1.5 32.2467 1.5 27H0.5C0.5 32.799 5.20101 37.5 11 37.5V36.5ZM52.5 27C52.5 32.2467 48.2467 36.5 43 36.5V37.5C48.799 37.5 53.5 32.799 53.5 27H52.5ZM43 1.5C48.2467 1.5 52.5 5.7533 52.5 11H53.5C53.5 5.20101 48.799 0.5 43 0.5V1.5ZM11 0.5C5.20101 0.5 0.5 5.20101 0.5 11H1.5C1.5 5.7533 5.7533 1.5 11 1.5V0.5Z" fill="#151A17"/>
</svg><svg width="64" height="38" viewBox="0 0 64 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 11C1 5.47715 5.47715 1 11 1H53C58.5228 1 63 5.47715 63 11V27C63 32.5228 58.5228 37 53 37H11C5.47715 37 1 32.5228 1 27V11Z" fill="#FFFFF7"/>
<path d="M25.544 24V22.768H21.112L19.8 22.864L20.952 21.888L22.616 20.32C23.592 19.392 25.272 17.792 25.272 16.032C25.272 14.384 24.328 13.12 22.232 13.12C19.768 13.12 18.088 14.816 18.312 16.928L19.608 17.744C19.336 15.616 20.344 14.464 22.136 14.464C23.352 14.464 23.832 15.264 23.832 16.128C23.832 17.312 22.92 18.304 21.752 19.456L18.248 22.912V24H25.544ZM29.1053 24L32.2093 19.344L35.3133 24H37.0573L33.2013 18.496L36.7533 13.28H35.1373L32.2253 17.712L29.4413 13.28H27.6653L31.2173 18.464L27.3613 24H29.1053ZM46.0521 24V22.768H40.4361V13.28H39.0441V24H46.0521Z" fill="#151A17"/>
<path d="M11 1.5H53V0.5H11V1.5ZM62.5 11V27H63.5V11H62.5ZM53 36.5H11V37.5H53V36.5ZM1.5 27V11H0.5V27H1.5ZM11 36.5C5.7533 36.5 1.5 32.2467 1.5 27H0.5C0.5 32.799 5.20101 37.5 11 37.5V36.5ZM62.5 27C62.5 32.2467 58.2467 36.5 53 36.5V37.5C58.799 37.5 63.5 32.799 63.5 27H62.5ZM53 1.5C58.2467 1.5 62.5 5.7533 62.5 11H63.5C63.5 5.20101 58.799 0.5 53 0.5V1.5ZM11 0.5C5.20101 0.5 0.5 5.20101 0.5 11H1.5C1.5 5.7533 5.75329 1.5 11 1.5V0.5Z" fill="#151A17"/>
</svg>
        
        </div>
        <Highlight>Product Care</Highlight>
        <div><p>Machine wash cold. <br /> Lay flat to dry. <br /> Iron lightly if needed (but not directly on the print!) Since it's 100% cotton, the garment may shrink in high heat washing or drying.</p></div>
        <img src={Frame61} alt="" />
       
    </Main>
}