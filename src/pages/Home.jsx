import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchProductData() {
    setLoading(true);

    try{
      const res = await fetch(API_URL);
      const data = await res.json();

      setPosts(data);
    }
    catch(error) {
      console.log("Error aagya ji");
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect( () => {
    fetchProductData();
  },[])

  return (
    <div className="flex flex-col items-center  lg:w-[80%] w-full mx-auto">
      {
        loading ? <Spinner />  :
        posts.length > 0 ? 
        (<div className="grid   lg:grid-cols-3 md:grid-cols-2 grid-cols-1 m-3 gap-10 md:px-5">
          {
            posts.map( (post) => (
            <Product key = {post.id} post={post}/>
          ) )
          }
        </div>) :
        <div>
          <p>No Data Found</p>
        </div> 
      }
    </div>
  );
};

export default Home;
