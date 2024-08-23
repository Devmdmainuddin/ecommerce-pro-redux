
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProduceComponents } from "../providers/ContextComponent";
const Detail = () => {
    const {products}= useContext(ProduceComponents)
    const {slug}=useParams()
    const [detail,setDetail]=useState([])
    
    useEffect(()=>{
        const findDetail = products.filter(product=>product.slug === slug);
        if(findDetail.length >0){
            setDetail(findDetail[0]);
        }else{
            window.location.href = '/'
        }
    },[products,slug])
    return (
        <div className="w-[600px]">
            details page
            <div>
                <img src={detail.image} alt="" />
            <h1 className="text-center">{detail.bookName}</h1>
            <div>
                <p>{detail.price}</p>

            </div>
            </div>
        </div>
    );
};

export default Detail;