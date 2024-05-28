import React, { useState } from 'react'
import { data } from '../data/data';

const Food = () => {
    const [foods, setFoods] = useState(data);

    //Filter type burgers/pizza/etc

    const filterType = (category) => {
        setFoods(
            data.filter((items) => {
                return items.category === category;
            })
        )
    }

    const filterprice = (price)=> {
        setFoods(
            data.filter((items) => {
                return items.price === price;
            })
        )
    }
  return (
    <div className="max-w-[1240px] mx-auto py-12 px-4">
      <h1 className="text-4xl text-orange-600 font-bold text-center pb-6">
        Top Rated Menu Items
      </h1>
      {/* Filter row */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* Filter type */}
        <div>
          <p className="font-bold text-gray-700 text-xl">Filter by Type</p>
          <div>
            <button
              onClick={() => setFoods(data)}
              className="m-1 border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600"
            >
              All
            </button>
            <button
              onClick={() => filterType("burger")}
              className="m-1 border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600"
            >
              Burgers
            </button>
            <button
              onClick={() => filterType("pizza")}
              className="m-1 border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600"
            >
              Pizza
            </button>
            <button
              onClick={() => filterType("salad")}
              className="m-1 border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600"
            >
              Salad
            </button>
            <button
              onClick={() => filterType("chicken")}
              className="m-1 border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600"
            >
              Chicken
            </button>
          </div>
        </div>

        {/* Filter Price */}
        <div>
          <p className="font-bold text-gray-700 text-xl">Filter By Price</p>
          <div>
            <button
              onClick={() => filterprice("$")}
              className="m-1 border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600"
            >
              $
            </button>
            <button
              onClick={() => filterprice("$$")}
              className="m-1 border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600"
            >
              $$
            </button>
            <button
              onClick={() => filterprice("$$$")}
              className="m-1 border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600"
            >
              $$$
            </button>
            <button
              onClick={() => filterprice("$$$$")}
               className="m-1 border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600"
            >
              $$$$
            </button>
          </div>
        </div>
      </div>

      {/* Display food */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((items, index) => (
          <div
            key={index}
            className="border shadow-lg hover:scale-105 duration-300"
          >
            <img
              src={items.image}
              alt={items.name}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold text-gray-700">{items.name}</p>
              <p className="">
                <span className="bg-orange-500 text-white rounded-full p-1">
                  {items.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Food