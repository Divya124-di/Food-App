import React from 'react'

const Hero = () => {
  return (
    <div className="max-w-[1240px] mx-auto p-4 ">
      <div className="mx-h-[500px] relative">
        {/* overlay */}
        <div className="absolute w-full h-full text-white max-h-[500px] bg-black/50 flex flex-col justify-center rounded-xl">
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            The <span className="text-orange-500">Best</span>
          </h1>
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            <span className="text-orange-500"> Foods</span> Delivered
          </h1>
        </div>
        <img
          className="w-full max-h-[500px] object-cover rounded-xl"
          src="https://media.cnn.com/api/v1/images/stellar/prod/170206165040-dubai-michelin-dining-boca.jpg?q=w_2700,h_1800,x_0,y_0,c_fill"
          alt=""
        />
      </div>
    </div>
  );
}

export default Hero