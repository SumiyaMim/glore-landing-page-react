import { useEffect, useState } from "react";
import { RiShoppingBag2Fill } from "react-icons/ri";
import { CgMenuLeftAlt } from "react-icons/cg";
import { LuSearch } from "react-icons/lu";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { GrGroup } from "react-icons/gr";
import { IoHome } from "react-icons/io5";
import { SlEarphonesAlt } from "react-icons/sl";

const Navbar = () => {
  
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* TOP NAVBAR: for medium and large devices */}
      <div
        className={`hidden md:block fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg" : "bg-[#fcd4de]"
        } py-3 lg:py-4 px-4 md:px-9 lg:px-20`}
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-9">
            <div className="flex items-center gap-2">
              <CgMenuLeftAlt className="text-2xl" />
              <h4 className="font-medium">Menu</h4>
            </div>
            <div className="flex items-center gap-2">
              <LuSearch className="text-2xl" />
              <h4 className="font-medium">Search</h4>
            </div>
          </div>
          <div>
            <img
              src="/src/assets/images/logo.png"
              alt="logo"
              className="w-36"
            />
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <RiShoppingBag2Fill className="text-2xl" />
              <h4 className="font-medium">Shop</h4>
            </div>
            <div className="relative">
              <HiOutlineShoppingBag className="text-2xl" />
              <span className="absolute -bottom-2 -right-2 text-xs bg-[#C43882] text-white rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM NAVBAR: for small devices only */}
      <div className="fixed bottom-0 left-0 w-full bg-white shadow md:hidden z-50 py-1 px-6 border-t border-t-slate-100">
        <div className="flex justify-between items-center gap-2 text-xs">
          <div className="flex items-center gap-11">
            <div className="flex flex-col items-center">
              <CgMenuLeftAlt className="text-3xl" />
              <h4>Menu</h4>
            </div>
            <div className="flex flex-col items-center">
              <RiShoppingBag2Fill className="text-3xl" />
              <h4>Shop</h4>
            </div>
          </div>
          <div className="bg-slate-50 border-2 border-slate-200 p-4 rounded-full -translate-y-10 shadow-xl">
            <IoHome className="text-3xl text-[#C43882]" />
          </div>
          <div className="flex items-center gap-11">
            <div className="flex flex-col items-center">
              <GrGroup className="text-3xl" />
              <h4>About</h4>
            </div>
            <div className="flex flex-col items-center">
              <SlEarphonesAlt className="text-3xl" />
              <h4>Contact</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
