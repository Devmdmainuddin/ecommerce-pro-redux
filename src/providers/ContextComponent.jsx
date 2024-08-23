import { createContext, useEffect, useState } from "react";
import { useDispatch, useSelector, } from 'react-redux';
import { addToCart } from '../redux/state/cart';
import PropTypes from 'prop-types';
export const ProduceComponents = createContext()
const ContextComponent = ({ children }) => {
    const [products, setProducts] = useState([])
    const carts = useSelector((state) => state.cart.items)
    const dispatch = useDispatch();
    console.log(carts);


    useEffect(() => {
        fetch('FakeBooks.json')
            .then((res) => res.json())
            .then((data) => {
                setProducts(data)
            })
    }, [])

    const handleAddToCart = (bookId) => {
        dispatch(addToCart({
            productId: bookId,
            quantity: 1,
        }))
    }

    return (
        <ProduceComponents.Provider value={{ products,carts, handleAddToCart }}>
            {children}
        </ProduceComponents.Provider>
    );
};

ContextComponent.propTypes = {
    children: PropTypes.node,
}

export default ContextComponent;