import { useParams, useLoaderData } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import { FaMinus, FaPlus } from "react-icons/fa";

const Collection = () => {

  const { id } = useParams();
  const collections = useLoaderData();

  const item = collections.find((collection) => collection.id === id);


  return (
    <div className="bg-[#ffe9ee] md:pt-32 md:pb-20 md:px-9 lg:px-20">
        <div className="flex flex-col md:flex-row gap-12 items-start">
            <div>
                <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-auto rounded cursor-pointer"
                />
            </div>
            <div className="w-full p-5 md:p-0">
                <h1 className="text-3xl md:text-xl lg:text-3xl font-bold mb-5">{item.name}</h1>
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
                    <div className="p-2 border border-gray-200 rounded-md">
                        <FaMinus/>
                    </div>
                    <h4>1</h4>
                    <div className="p-2 border border-gray-200 rounded-md">
                        <FaPlus/>
                    </div>
                </div>
                <button className="bg-[#C43882] text-white cursor-pointer rounded py-2.5 w-full text-lg font-medium">
                    Order Now
                </button>
            </div>
        </div>
    </div>
  );
};

export default Collection;
