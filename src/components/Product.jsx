import { toast } from 'react-hot-toast';
import "react-toastify/dist/ReactToastify.css";
import {AiTwotoneDelete} from "react-icons/ai"
import {MdOutlineAddToPhotos} from "react-icons/md"

import { useDispatch, useSelector } from "react-redux";

import {add,remove} from "../redux/Slices/CartSlice"

const Product = ({post}) => {
  
  const {cart} = useSelector((state)=>{return state})
 
  const dispatch = useDispatch();
  const  removeToCart = ()=>{
    dispatch(remove(post.id));
    toast.success('Removed from cart')
  }
  const addToCart = ()=>{
    dispatch(add(post));
    toast.success('Added to cart');
  }
  return (
    <div className='w-fit px-3 py-7 m-1 bg-white text-white shadow-lg flex flex-col items-center gap-2 hover:animate-pulse  shadow-slate-400 rounded-md '>
      <div className='w-fit text-purple-700 font-bold font-serif text-[20px]'>
        <p>{post.title.split(' ').slice(0,3).join(' ')}</p>
      </div>
      <div className='w-[220px] bg-white mt-2 rounded-sm h-[255px] overflow-hidden  mx-auto p-1 shadow-md shadow-purple-100'>
        <img src={post.image}  className='object-contain w-full h-full' alt=''/>
      </div>
      <div className='w-fit px-4 mt-2 mx-auto py-1 text-slate-500 leading-normal'>
        <p>{post.description.split('').slice(0,100).join('') } ...</p>
      </div>
      <div className='flex flex-row justify-between w-full px-3 mt-3'>
        <p className='
        bg-purple-700 w-fit text-white font-light px-2 py-1 shadow-md shadow-purple-300 rounded-sm font-serif text-[20px]'>${post.price}</p>
    
        {
          cart.some((item)=>item.id===post.id)?
          <button 
          className='bg-slate-700 w-fit text-white font-light px-5 py-2 shadow-md shadow-slate-400 rounded-md  text-2xl'
          onClick={removeToCart}><AiTwotoneDelete/></button>:
          <button
          className='bg-slate-700 text-2xl w-fit text-white font-light px-5 py-2 shadow-md shadow-slate-400 rounded-md '

          onClick={addToCart}><MdOutlineAddToPhotos/> </button>
           
        }</div>
    </div>
  );
};

export default Product;
