import { useParams, useLoaderData } from "react-router-dom";
import { FaStar } from "react-icons/fa6";

const Collection = () => {

  const { id } = useParams();
  const collections = useLoaderData();

  const item = collections.find((collection) => collection.id === id);


  return (
    <div className="bg-[#ffe9ee] md:pt-32 md:pb-20 md:px-9 lg:px-20">
        <div className="flex gap-12 items-start">
            <div>
                <img
                    src={item.img}
                    alt={item.name}
                    className="w-full max-w-md h-auto rounded cursor-pointer"
                />
            </div>
            <div>
                <h1 className="text-3xl font-bold mb-5">{item.name}</h1>
                <div className="flex gap-1 items-center mb-5">
                    <FaStar className="text-[#F59E0B] text-lg"/>
                    <FaStar className="text-[#F59E0B] text-lg"/>
                    <FaStar className="text-[#F59E0B] text-lg"/>
                    <FaStar className="text-[#F59E0B] text-lg"/>
                    <FaStar className="text-[#F59E0B] text-lg"/>
                </div>
                <p className="text-[#C43882] font-semibold text-3xl">৳ {item.price}</p>
                
            </div>
        </div>
    </div>
  );
};

export default Collection;
