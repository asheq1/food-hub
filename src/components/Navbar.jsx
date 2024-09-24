import { NavLink } from "react-router-dom";
import '../styles/Navbar.css'

const Navbar = () => {
    return (
        <nav className="nav">
            <NavLink to='/'>Foods</NavLink>
            <NavLink to='/cart'>Carts</NavLink>
            <NavLink to='/wishlist'>WishList</NavLink>
           
        </nav>
    );
};

export default Navbar;