import { useContext, useEffect, useState } from "react";
import { ProduceComponents } from "../providers/ContextComponent";


const CartItems = ({ item }) => {
    const { products, carts,handkeMinusQuantity,handkePlusQuantity } = useContext(ProduceComponents)
    const { productId,quantity } = item;
    const [cartProduct, setCartProduct] = useState([])
    // const [quantity, setQuantity] = useState(1)
    useEffect(() => {
        const filterProduct = products.filter(product => product.bookId === productId)[0]

        setCartProduct(filterProduct)
    }, [products, productId])

    // const handkeMinusQuantity = () => {
    //     setQuantity(quantity - 1 < 1 ? 1 : quantity - 1)
    // }
    // const handkePlusQuantity = () => {
    //     setQuantity(quantity + 1)
    // }

    return (
        <div>
{cartProduct &&
            <div className="flex justify-between items-center  gap-6">
            <img className="w-10 h-10 rounded-lg" src={cartProduct.image} alt="" />
            <h3>{cartProduct.name}</h3>
            <p>{cartProduct.price * quantity}</p>
            
            <div className="flex gap-2 justify-center items-center">
                <button className="bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center"
                    onClick={()=>handkeMinusQuantity(productId,quantity)}
                >-</button>
                <span className="bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center"
                >{quantity}</span>
                <button className="bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center"
                    onClick={()=>handkePlusQuantity(productId,quantity)}
                >+</button>


            </div>
        </div>
        }
        </div>
        
        
    );
};

export default CartItems;