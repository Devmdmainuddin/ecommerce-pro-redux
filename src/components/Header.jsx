
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
           <Link to='/'>home</Link>
           <Link to='/'>cart</Link>
        </div>
    );
};

export default Header;