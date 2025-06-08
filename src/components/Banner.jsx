import React from 'react'

const Banner = () => {
  return (
    <div className='bg-[#fcd4de] py-8 md:py-20 md:pb-20 px-4 md:px-9 lg:px-20'>
    <div className='bg-[#ffe9ee] rounded-4xl flex justify-between items-center gap-4 md:gap-6 lg:gap-0 pt-2 md:pt-5 px-1 md:px-2 lg:px-14'>
        <div className='pb-5'>
            <div className='flex justify-center block md:hidden'>
                <img src="/src/assets/images/logo.png" alt="logo" className="w-32 mb-5" />
            </div>
            <h1 className='text-4xl md:text-5xl lg:text-7xl font-semibold text-center lg:leading-20 mb-4 md:mb-5 lg:mb-8'>New <br /> <span className='text-[#C43882]'>Collection</span></h1>
            <h3 className="text-sm md:text-lg lg:text-xl text-center mb-3 md:mb-0">
            ✨ <span className="text-[#C43882]">GloreBD</span> - Step into a new era of fashion with us! ❤️
            </h3>
            <h3 className="text-lg lg:text-xl text-center hidden md:block">
            Our exclusive new collection is now available!
            </h3>
            <h3 className="text-lg lg:text-xl text-center hidden md:block mb-8 lg:mb-12">
            Discover your favorite fashion style and express your uniqueness. ❤️
            </h3>
            <div className='flex justify-center items-center'>
                <button className='bg-[#C43882] text-white rounded-xl px-4 md:px-9 py-1.5 md:py-3 text-base md:text-xl font-medium'>
                    Order Now
                </button>
            </div>
        </div>
        <div>
            <img
                src="/src/assets/images/hero-img.png"
                alt="hero"
                className="h-72 md:h-full w-[250px] md:w-[450px] rounded-r-3xl pt-3 md:pt-0"
            />
        </div>
      </div>
    </div>
  )
}

export default Banner
