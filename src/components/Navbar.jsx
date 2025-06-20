import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { RiShoppingBag2Fill } from "react-icons/ri";
import { CgMenuLeftAlt } from "react-icons/cg";
import { LuSearch } from "react-icons/lu";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { GrGroup } from "react-icons/gr";
import { IoHome } from "react-icons/io5";
import { PiHeadsetBold } from "react-icons/pi";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logo from '../assets/images/logo.png'; 

const Navbar = () => {

  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isCollection = location.pathname.startsWith("/collection/");

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
      <nav
        className={`hidden md:block fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isCollection
            ? isScrolled
              ? "bg-white shadow-lg"
              : "bg-[#ffe9ee]"
            : isScrolled
            ? "bg-white shadow-lg"
            : "bg-[#fcd4de]"
        } py-3 lg:py-4 px-4 md:px-9 lg:px-20`}
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-9">
            <div className="flex items-center gap-2 cursor-pointer">
              <CgMenuLeftAlt className="text-2xl" />
              <h4 className="font-medium">Menu</h4>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <LuSearch className="text-2xl" />
              <h4 className="font-medium">Search</h4>
            </div>
          </div>
          <div onClick={() => navigate("/")}>
            <img
              src={logo}
              alt="logo"
              className="w-36 cursor-pointer"
            />
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 cursor-pointer">
              <RiShoppingBag2Fill className="text-2xl" />
              <h4 className="font-medium">Shop</h4>
            </div>
            <div className="relative cursor-pointer">
              <HiOutlineShoppingBag className="text-2xl" />
              <span className="absolute -bottom-2 -right-2 text-xs bg-[#C43882] text-white rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* BOTTOM NAVBAR: for small devices only */}
      {isCollection ? (
        // If on collection page, show only Order Now button on small devices
        <nav className="fixed bottom-0 left-0 w-full bg-white md:hidden z-50 py-3 px-5">
          <div className="flex items-center gap-4">
            <button className="bg-[#C43882] text-white cursor-pointer rounded-3xl px-2 py-2 w-full text-base font-medium">
              Order Now
            </button>
            <div className="relative cursor-pointer">
              <FaShoppingCart className="text-2xl" />
              <span className="absolute -top-2 -right-2 text-xs bg-[#38BDF8] text-white rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </div>
          </div>
        </nav>
      ) : (
        // Normal bottom navbar for other pages
        <nav className="fixed bottom-0 left-0 w-full bg-white shadow md:hidden z-50 py-1 px-5 border-t border-t-slate-100">
          <div className="flex justify-between items-center gap-2 text-xs">
            <div className="flex items-center gap-11">
              <div className="flex flex-col items-center cursor-pointer">
                <CgMenuLeftAlt className="text-3xl" />
                <h4>Menu</h4>
              </div>
              <div className="flex flex-col items-center cursor-pointer">
                <RiShoppingBag2Fill className="text-3xl" />
                <h4>Shop</h4>
              </div>
            </div>
            <div className="bg-slate-50 border-2 border-slate-200 p-4 rounded-full -translate-y-10 shadow-xl cursor-pointer">
              <IoHome className="text-3xl text-[#C43882]" />
            </div>
            <div className="flex items-center gap-11">
              <div className="flex flex-col items-center cursor-pointer">
                <GrGroup className="text-3xl" />
                <h4>About</h4>
              </div>
              <div className="flex flex-col items-center cursor-pointer">
                <PiHeadsetBold className="text-3xl" />
                <h4>Contact</h4>
              </div>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
