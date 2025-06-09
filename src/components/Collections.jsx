import { useLoaderData } from "react-router-dom";
import CollectionCard from "./CollectionCard";

const Collections = () => {

  const collections = useLoaderData(); 

  return (
    <div className='bg-[#ffe9ee] py-20 px-5 md:px-10 lg:px-20'>
      <div className="flex items-center gap-2 justify-center mb-4">
        <h2 className="text-2xl md:text-3xl text-gray-500">
          LATEST <span className="text-gray-700 font-medium">COLLECTIONS</span>
        </h2>
        <hr className="w-12 border" />
      </div>
      <p className="text-center text-sm md:text-lg font-light text-gray-800">✨ Shine in a New Style! ✨</p>
      <p className="text-center text-sm md:text-lg font-light text-gray-800 mb-10">
        Stay one step ahead with trending products! Your fashion, your identity — with GloreBD. ❤️
      </p>
      <h3 className="text-xl md:text-2xl font-semibold mb-5">Women Clothing</h3>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {collections.map(item => (
          <CollectionCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Collections;
