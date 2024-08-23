import { useSelector } from "react-redux";
// import  {increment,decrement}  from "../redux/state/counterSlice";
import Product from "../components/Product";
// import ProductCart from "../components/ProductCart";

const Home = () => {
    // const count = useSelector((state)=>state.counter.item)
   
    // const dispatch = useDispatch( )
    return (
        <div>
        home page    

        {/* <div>
            <h2>{count}</h2>
            <div className="flex gap-6">
                <button className="py-2 px-6 bg-slate-200" onClick={()=>{dispatch(increment())}}>increase</button>
                <button className="py-2 px-6 bg-slate-200" onClick={()=>{dispatch(decrement())}}>decrease</button>
            </div>
        </div> */}
        <Product></Product>
        </div>
    );
};

export default Home;