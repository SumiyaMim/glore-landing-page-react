import { useParams, useLoaderData } from "react-router-dom";

const Collection = () => {
    
  const { id } = useParams();
  const collections = useLoaderData();

  const item = collections.find((collection) => collection.id === id);


  return (
    <div className="p-5 md:p-10 bg-white min-h-screen">
      <h1 className="text-3xl font-bold mb-4">{item.name}</h1>
      <img
        src={item.img}
        alt={item.name}
        className="w-full max-w-md h-auto rounded shadow mb-6"
      />
      <p className="text-xl font-semibold text-pink-600">Price: ৳{item.price}</p>
    </div>
  );
};

export default Collection;
