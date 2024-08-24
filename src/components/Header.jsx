
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProduceComponents } from '../providers/ContextComponent';
import CartItems from './CartItems';

const Header = () => {
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [show,setShow]=useState(false);
    const { products, carts, } = useContext(ProduceComponents)
    useEffect(() => {
        let total = 0;
        carts.forEach(item => total += item.quantity);
        setTotalQuantity(total)
    }, [carts])
    return (
        <div className='max-w-[1200px] mx-auto flex justify-center gap-8 '>
            <Link to='/'>home</Link>
            <Link onClick={()=>setShow(!show)} to='/'>cart <span className='p-2 bg-red-200 rounded-full'>{totalQuantity}</span></Link>
            <div className={ `fixed top-0 right-8 bg-gray-700  h-full grid grid-rows-[60px_1fr_60px] transition-all duration-300 ${show?'w-96':'w-0  -right-8'}`}>
                <h2 className='p-5 text-white text-2xl'>shopping Cart</h2>
                <div className='flex flex-col justify-center items-center gap-y-6'>
{carts.map((item,key)=><CartItems key={key} item={item}> </CartItems>)}

                </div>
                <div>
                    <p>total price <span></span></p>
                </div>
                <div className='grid grid-cols-2'>
                    <button className='bg-black text-white'>close</button>
                    <button className='bg-amber-600 text-white'>checkout</button>
                </div>
            </div>
        </div>
    );
};

export default Header;