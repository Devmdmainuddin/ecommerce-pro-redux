
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProduceComponents } from "../providers/ContextComponent";
const Detail = () => {
    const { products, handleAddToCart } = useContext(ProduceComponents)
    
    const { slug } = useParams()
    const [detail, setDetail] = useState([])
    const [quantity, setQuantity] = useState(1)

    useEffect(() => {
        const findDetail = products.filter(product => product.slug === slug);
        if (findDetail.length > 0) {
            setDetail(findDetail[0]);
        } else {
            window.location.href = '/'
        }
    }, [products, slug])
    const handkeMinusQuantity = () => {
        setQuantity(quantity - 1 < 1 ? 1 : quantity - 1)
    }
    const handkePlusQuantity = () => {
        setQuantity(quantity + 1)
    }
    return (
        <div className="w-[600px]">
            details page
            <div>
                <img src={detail.image} alt="" />
                <h1 className="text-center">{detail.bookName}</h1>
                <div>
                    <p>{detail.price}</p>
                    <div className="flex gap-2 justify-center items-center">
                        <button className="bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center"
                           onClick={handkeMinusQuantity}
                        >-</button>
                        <span className="bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center"
                        >{quantity}</span>
                        <button className="bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center"
                            onClick={handkePlusQuantity}
                        >+</button>


                    </div>
                    {/* onClick={()=>handleAddToCart(bookId)} */}
                    <button onClick={() => handleAddToCart(detail.bookId)} className='py-2 px-6 bg-slate-400'>add to cart</button>


                </div>
            </div>
        </div>
    );
};

export default Detail;