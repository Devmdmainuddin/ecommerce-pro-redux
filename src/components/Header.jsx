
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='max-w-[1200px] mx-auto flex justify-center gap-8'>
           <Link to='/'>home</Link>
           <Link to='/'>cart</Link>
        </div>
    );
};

export default Header;