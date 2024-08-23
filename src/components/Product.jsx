
import { useContext } from "react";
import ProductCart from "./ProductCart";
import { ProduceComponents } from "../providers/ContextComponent";


const Product = () => {
    const {products,handleAddToCart}= useContext(ProduceComponents)
    return (
        <div>
            <h1>List Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product,key)=><ProductCart key={key} pdata={product} handleAddToCart={handleAddToCart}/>)}

            </div>
        </div>
    );
};

export default Product;