import { MdFacebook } from "react-icons/md";
import { FaFacebookMessenger, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className='bg-black py-14 px-4 md:px-9 lg:px-20'>
      <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-10 md:gap-6 lg:gap-11'>
        <div>
            <img
              src="/src/assets/images/logo.png"
              alt="logo"
              className="w-60 mb-7"
            />
            <p className='text-white text-lg md:text-base lg:text-lg font-light'>Our collection offers you a perfect blend of modern fashion and tradition.</p>
        </div>
        <div className='list-none'>
            <h3 className='text-xl text-white font-medium mb-5'>Explore More</h3>
            <li className='text-gray-400 hover:text-[#C43882] w-fit cursor-pointer mb-1'>New Arrivals</li>
            <li className='text-gray-400 hover:text-[#C43882] w-fit cursor-pointer mb-1'>About</li>
            <li className='text-gray-400 hover:text-[#C43882] w-fit cursor-pointer'>Contact</li>
        </div>
        <div className='list-none'>
            <h3 className='text-xl text-white font-medium mb-5'>Client Experience</h3>
            <li className='text-gray-400 hover:text-[#C43882] w-fit cursor-pointer mb-1'>Track Your Order</li>
            <li className='text-gray-400 hover:text-[#C43882] w-fit cursor-pointer mb-1'>Returns & Exchanges</li>
            <li className='text-gray-400 hover:text-[#C43882] w-fit cursor-pointer mb-1'>Customer Reviews</li>
            <li className='text-gray-400 hover:text-[#C43882] w-fit cursor-pointer mb-1'>Privacy Policy</li>
            <li className='text-gray-400 hover:text-[#C43882] w-fit cursor-pointer'>FAQ</li>
        </div>
        <div className='list-none'>
            <h3 className='text-xl text-white font-medium mb-5'>GET IN TOUCH</h3>
            <li className='text-gray-400 hover:text-[#C43882] w-fit cursor-pointer mb-1'>Phone: +880 1855-375963</li>
            <li className='text-gray-400 hover:text-[#C43882] w-fit cursor-pointer mb-5'>Email: hello@glorebd.com</li>
            <div className="text-white text-3xl flex gap-5 md:gap-4 lg:gap-6 items-center">
                <MdFacebook />
                <FaFacebookMessenger />
                <FaTwitter />
                <FaInstagram />
            </div>
        </div>
      </div>
      <div className="text-white my-16 md:mb-4 md:mt-10 lg:mt-14 lg:mb-0 text-center">
        <p className="text-sm">© 2025 Powered by <span className="text-[#C43882]">GLORE</span></p>
      </div>
    </footer>
  )
}

export default Footer
