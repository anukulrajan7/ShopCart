import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";

const Cart = () => {
  const [totalAmount,setTotalAmount ] = useState(0);
  const { cart } = useSelector((state) => state);
  useEffect(()=>{
     setTotalAmount(cart.reduce((total,item)=>total+item.price,0))  

  }, [ cart ])
  return (
    <div className="md:w-[90%]  w-full  flex flex-col md:flex-row">
      {cart.length > 0 ? (
        <div className="
        flex flex-col my-4 px-4 py-4   shadow-md rounded-sm shadow-slate-300  md:flex-row w-fit h-full justify-between ">
          <div className="checkout order-2 gap-4 flex flex-col h-full justify-between md:w-[30%]">
            <div className="flex flex-col gap-6">
              <h1 className="font-bold text-3xl text-purple-700 text-center capttilize"> your Cart</h1>
              <h2 className="bg-slate-900 text-white text-center text-lg captilize py-2 px-4 rounded-sm font-semiboldfont-serif mx-auto first-letter w-fit  mt-2">summary</h2>
              <p className="font-bold text-2xl capitalize font-serif text-center">
                total item <span className="text-purple-700 text-3xl">{cart.length}</span>
              </p>
            </div>
             <div className="flex gap-2 justify-evenly">
                <h2 className="bg-purple-700 text-white capitalize px-3 py-2 ">Total amount 
                  <span className="font-semibold"> :  ${totalAmount}</span>
                </h2>
                <button className="bg-slate-950 text-white px-3 py-2 rounded-md capitalize">
                  Checkout Now 
                </button>
             </div>
          </div>
          <div className="md:w-[60%] flex flex-col gap-4">
            {cart.map((item) => {
              return <CartItem key={item.id} item={item}></CartItem>;
            })}
          </div>
        </div>
      ) : (
        <div className="mx-auto flex flex-col h-[80vh] gap-4 items-center justify-center">
          <h1 className="font-bold text-3xl text-purple-700">Cart Empty</h1>
          <NavLink to="/" className="bg-purple-700 text-white px-3 py-3 text-2xl font-bold font-serif rounded-md shadow-md shadow-purple-300">Buy now</NavLink>
        </div>
      )}
    </div>
  );
};

export default Cart;
