import React from "react";
import { data } from "../data/data.js";

const Food = () => {
  console.log(data);
  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-blue-600 font-bold text-4xl text-center">Customer Favs</h1>
      {/* filter row */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* filter type */}
        <div>
          <p className="font-bold text-gray-700">Type</p>
          <div className="flex justify-between flex-wrap">
            <button className="m-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">all</button>
            <button className="m-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">fish</button>
            <button className="m-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">shrimp</button>
            <button className="m-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">lobster</button>
            <button className="m-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">conch</button>
          </div>
        </div>
        {/* filter price */}
        <div>
          <p className="font-bold text-gray-700">Pricing</p>
          <div className="flex justify-between max-w-[390px] w-full">
            <button className="m-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">$</button>
            <button className="m-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">$$</button>
            <button className="m-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">$$$</button>
            <button className="m-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">$$$$</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Food;
