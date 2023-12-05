import React from "react";
import Navbar from "../components/Navbar";
import { storeData } from "../Data";
import Product from "../components/Product";

const Home = () => {
  return (
    <div className="text-3xl text-center font-semibold mt-2 py-2">
      <Navbar />
      <h1>useContext + useReducer Store</h1>
      <h2 className="text-4xl tracking-wide py-4">New In</h2>
      <div className="flex flex-col lg:grid lg:grid-cols-3
      px-8">
        {storeData.map((item, i) => (
          <Product key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
