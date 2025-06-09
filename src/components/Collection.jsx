import { useParams, useLoaderData } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import { FaMinus, FaPlus } from "react-icons/fa";
import { FaBagShopping, FaFacebook, FaInstagram, FaWhatsapp, FaTwitter, FaFacebookMessenger, FaPinterest } from "react-icons/fa6";
import { MdLocalShipping } from "react-icons/md";
import { IoMdRibbon } from "react-icons/io";
import { RiCashFill } from "react-icons/ri";

const Collection = () => {

  const { id } = useParams();
  const collections = useLoaderData();

  const item = collections.find((collection) => collection.id === id);

  return (
    <div className="bg-[#ffe9ee] md:pt-32 md:pb-20 md:px-9 lg:px-20">
        <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="w-full h-screen">
                <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full md:h-[750px] lg:h-full rounded cursor-pointer"
                />
            </div>
            <div className="w-full px-5 pb-14 md:p-0">
                <h1 className="text-2xl md:text-xl lg:text-3xl font-bold mb-5">{item.name}</h1>
                <div className="flex gap-1 items-center mb-5">
                    <FaStar className="text-[#F59E0B] text-lg"/>
                    <FaStar className="text-[#F59E0B] text-lg"/>
                    <FaStar className="text-[#F59E0B] text-lg"/>
                    <FaStar className="text-[#F59E0B] text-lg"/>
                    <FaStar className="text-[#F59E0B] text-lg"/>
                </div>
                <h2 className="text-[#C43882] font-semibold text-3xl mb-5">৳ {item.price}</h2>
                <p className="text-gray-500 mb-5">Category: {item.category}</p>
                <div className="flex items-center gap-5 mb-5">
                    <div className="p-2 border border-gray-200 rounded-md cursor-pointer">
                        <FaMinus/>
                    </div>
                    <h4>1</h4>
                    <div className="p-2 border border-gray-200 rounded-md cursor-pointer">
                        <FaPlus/>
                    </div>
                </div>
                <button className="bg-[#C43882] text-white cursor-pointer rounded py-2.5 w-full text-lg font-medium mb-10">
                    Order Now
                </button>
                <div className="text-gray-500 flex items-center gap-2 mb-2">
                    <IoMdRibbon className="text-2xl"/>
                    <p className="text-sm mt-0.5">100% Original Product</p>
                </div>
                <div className="text-gray-500 flex items-center gap-2 mb-2">
                    <MdLocalShipping className="text-2xl"/>
                    <p className="text-sm mt-0.5">Express Shipping</p>
                </div>
                <div className="text-gray-500 flex items-center gap-2 mb-2">
                    <RiCashFill className="text-2xl"/>
                    <p className="text-sm">Cash on Delivery Available</p>
                </div>
                <div className="text-gray-500 flex items-center gap-2 mb-8">
                    <FaBagShopping className="text-xl"/>
                    <p className="text-sm mt-1">Easy return and exchange policy within 3 days</p>
                </div>
                <h4 className="text-xl md:text-lg lg:text-xl font-semibold mb-3">Description</h4>
                <p className="text-justify text-gray-700 font-light text-base md:text-sm lg:text-base mb-6">{item.description}</p>
                <div className="flex gap-3 items-center">
                    <FaFacebook className="text-2xl"/>
                    <FaInstagram className="text-2xl"/>
                    <FaTwitter className="text-2xl"/>
                    <FaWhatsapp className="text-2xl"/>
                    <FaFacebookMessenger  className="text-2xl"/>
                    <FaPinterest  className="text-2xl"/>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Collection;
