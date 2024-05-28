import React from 'react'
import { categories } from '../data/data'

const Category = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-2 py-4'>
      <h1 className='text-orange-600 font-bold text-center text-4xl'>Top Rated Menu Items</h1>
      {/* category */}
      <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6'>
        {categories.map((items, index) => (
          <div key={index} className="bg-gray-100 rounded-lg p-4 flex justify-between items-center">
            <h3 className='font-bold sm:text-lg'>{items.name}</h3>
            <img src={items.image} alt={items.name}
            className='w-20'
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category