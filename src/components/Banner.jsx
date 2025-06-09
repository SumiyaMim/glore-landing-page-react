import { FaShoppingCart } from "react-icons/fa";

const Banner = () => {
  return (
    <div className='bg-[#fcd4de] py-8 md:py-20 md:pb-20 px-4 md:px-9 lg:px-20'>
    <div className='bg-[#ffe9ee] rounded-4xl flex justify-between items-center gap-4 md:gap-6 lg:gap-0 pt-2 md:pt-5 px-1 md:px-2 lg:px-14'>
        {/* banner details */}
        <div className='pb-5'>
            <div className='flex justify-center block md:hidden'>
                <img src="/src/assets/images/logo.png" alt="logo" className="w-32 mb-5" />
            </div>
            <h1 className='text-4xl md:text-5xl lg:text-7xl font-semibold text-center lg:leading-20 mb-4 md:mb-5 lg:mb-8'>New <br /> <span className='text-[#C43882]'>Collection</span></h1>
            <p className="text-sm md:text-lg lg:text-xl text-center mb-3 md:mb-0">
            ✨ <span className="text-[#C43882]">GloreBD</span> - Step into a new era of fashion with us! ❤️
            </p>
            <p className="text-lg lg:text-xl text-center hidden md:block">
            Our exclusive new collection is now available!
            </p>
            <p className="text-lg lg:text-xl text-center hidden md:block mb-8 lg:mb-12">
            Discover your favorite fashion style and express your uniqueness. ❤️
            </p>
            <div className='flex justify-center items-center'>
                <button className='bg-[#C43882] text-white cursor-pointer rounded-xl px-4 md:px-9 py-1.5 md:py-3 text-base md:text-xl font-medium'>
                    Order Now
                </button>
            </div>
        </div>
        {/* banner image */}
        <div>
            <img
                src="/src/assets/images/hero-img.png"
                alt="hero"
                className="h-72 md:h-full w-[250px] md:w-[450px] rounded-r-3xl pt-3 md:pt-0"
            />
        </div>
      </div>
       {/* small device fixed cart icon */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 md:hidden z-50 cursor-pointer bg-white rounded-xl p-2">
        <div className="relative">
          <FaShoppingCart className="text-xl" />
          <span className="absolute -top-3 -right-3 text-xs bg-[#38BDF8] text-white rounded-full w-4 h-4 flex items-center justify-center">
            0
          </span>
        </div>
      </div>
    </div>
  )
}

export default Banner
