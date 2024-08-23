import { Link } from 'react-router-dom';

const ProductCart = ({pdata,handleAddToCart}) => {
 
    const {bookId,bookName,price,slug,image}=pdata

    return (
        <div className='w-[300px] p-6 border shadow-lg'>
            <Link to={slug}>
            <img src={image} alt="" className='rounded-md w-full h-[200px]'/>
            <h1 className='my-3'>{bookName}</h1>
            
            </Link>
            <div className='flex justify-between items-center'>
                <p>{price}</p>
                <button onClick={()=>handleAddToCart(bookId)} className='py-2 px-6 bg-slate-400'>add to cart</button>
                </div>
            
            
        </div>
    );
};

export default ProductCart;