import { Link } from "react-router-dom";

const CollectionCard = ({ item }) => {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-md transition group overflow-hidden">
      <div className="overflow-hidden">
        <Link to={`/collection/${item.id}`}>
          <img
            src={item.img}
            alt={item.name}
            className="w-full h-[350px] md:h-[600px] object-cover rounded-t-lg cursor-pointer transform transition-transform duration-500 group-hover:scale-110"
          />
        </Link>
      </div>
      <div className="p-3">
        <h4 className="text-base font-semibold mb-4 truncate overflow-hidden whitespace-nowrap md:whitespace-normal md:overflow-visible md:truncate-none">
          {item.name}
        </h4>

        <div className="flex justify-between items-center">
          <button className="bg-[#C43882] text-white cursor-pointer rounded px-2 md:px-4 py-1 md:py-1.5 text-sm md:text-base font-medium">
            Order Now
          </button>
          <p className="text-[#C43882] font-semibold text-sm md:text-base">৳{item.price}</p>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
