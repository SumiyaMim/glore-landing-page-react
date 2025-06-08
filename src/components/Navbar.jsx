import { RiShoppingBag2Fill } from "react-icons/ri";
import { CgMenuLeftAlt } from "react-icons/cg";
import { LuSearch } from "react-icons/lu";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const Navbar = () => {
  return (
    <div class="bg-[#faced9] py-3 lg:py-4 px-2 md:px-9 lg:px-20 hidden md:block">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-9">
            <div className="flex item-center gap-2">
                <CgMenuLeftAlt className="text-2xl"/>
                <h4 className="font-medium">Menu</h4>
            </div>
            <div className="flex item-center gap-2">
                <LuSearch className="text-2xl"/>
                <h4 className="font-medium">Search</h4>
            </div>
        </div>
        <div>
            <img src="/src/assets/images/logo.png" alt="logo" className="w-36" />
        </div>
        <div className="flex items-center gap-6">
            <div className="flex item-center gap-2">
                <RiShoppingBag2Fill className="text-2xl"/>
                <h4 className="font-medium">Shop</h4>
            </div>
            <div className="relative">
                <HiOutlineShoppingBag className="text-2xl" />
                <span className="absolute -bottom-2 -right-2 text-xs bg-[#c03c79] text-white rounded-full w-5 h-5 flex items-center justify-center">
                    0
                </span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
