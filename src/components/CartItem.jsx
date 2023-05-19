import { useDispatch } from "react-redux";
import { toast } from 'react-hot-toast';
import {AiTwotoneDelete} from "react-icons/ai"

import 'react-toastify/dist/ReactToastify.css';
import {remove} from "../redux/Slices/CartSlice"

const CartItem = ({item}) => {
  const dispatch = useDispatch()
  const  removeToCart = ()=>{
    dispatch(remove(item.id));
    toast.success('Removed from cart')
  }
  return <div>
<div className="w-full grid md:grid-cols-2 grid-cols-1 py-4  gap-5  px-3 md:py-3 bg-purple-700 shadow-md  text-white md:gap-2   shadow-purple-400 rounded-md">
       <div className="w-[200px] h-[220px] mx-auto p-1 bg-purple-500 shadow-md">
        <img src={item.image} alt="" 
        className="w-full h-full o"/>
       </div>
       <div className="h-full flex flex-col gap-8">
         <h1c className="font-bold text-xl font-serif">{item.title}</h1c>
         <h1 className="font-semibold font-serif leading-normal">{item.description.split('').slice(0,100).join('')}</h1>
         <div className="flex justify-evenly md:px-5">
          <span className="
          text-xl
          bg-white text-purple-700 font-bold font-serif px-2 py-1  rounded-md ">$ {item.price}</span>
           <button
           className="bg-slate-900 w-fit text-white font-light px-3 py-2 shadow-md shadow-slate-400 rounded-sm "
           onClick= {removeToCart}><AiTwotoneDelete/></button>
         </div>
       </div>

</div>
  </div>;
};

export default CartItem;
