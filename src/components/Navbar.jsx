import {FaShoppingCart} from "react-icons/fa"
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const {cart }= useSelector((state) => state);
  return (
    <div className="bg-gray-100 sticky top-0  py-4 shadow-sm shadow-slate-400 w-full">
      <div className="flex flex-row justify-between px-4 lg:w-[1080px] mx-auto py-3 ">

        <NavLink to="/">
          <div className="font-bold  bg-slate-900 px-2 py-2 shadow-md rounded-sm  font-serif capitalize text-2xl text-purple-100 hover:text-purple-600 ">cmaspar</div>
        </NavLink>

          <div className="flex flex-row items-center gap-7  text-purple-700">
            <NavLink to="/">
              <p className="font-light text-purple-700 font-serif text-2xl">Home</p>
            </NavLink>

            <NavLink to="/cart">
              <div className="flex flex-row text-purple-700 text-2xl">
                  <FaShoppingCart/>
                  <sup className="font-light text-purple-700">{cart.length}</sup>
              </div>
            </NavLink>
            
          </div>
      </div>
    </div>
  )
};

export default Navbar;
