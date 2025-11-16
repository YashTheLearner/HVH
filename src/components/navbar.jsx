import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import search from "../assets/search.png";
import user from "../assets/user.png";
import cart from "../assets/cart.png";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-10 bg-black shadow-md h-24">
  {/* Logo */}
  <img src={logo} alt="Logo" className="h-full w-auto object-contain" />

  {/* Menu */}
  <div className="flex space-x-10 text-white font-semibold">
    <NavLink to="/" className="hover:text-amber-500 cursor-pointer">HOME</NavLink>
    <NavLink to="/products" className="hover:text-amber-500 cursor-pointer">HELMETS</NavLink>
    <NavLink to="/products" className="hover:text-amber-500 cursor-pointer">ACCESSORIES</NavLink>
    <NavLink to="/products" className="hover:text-amber-500 cursor-pointer">SPARES</NavLink>
    <NavLink to="/aboutUs" className="hover:text-amber-500 cursor-pointer">ABOUT US</NavLink>
  </div>

  {/* Icons */}
  <div className="flex space-x-4 items-center">
    <img className="bg-[#FF0000] h-10 w-10 rounded-full"
    src={search}></img>
    <img className="bg-[#FF0000] h-10 w-10 rounded-full"
    src={user}></img>
    <img className="bg-[#FF0000] h-10 w-10 rounded-full"
    src={cart}></img>
  </div>
</nav>

  );
};

export default Navbar;
