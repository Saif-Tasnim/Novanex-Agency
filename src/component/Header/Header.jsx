import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import MobileNav from "./MobileNav";
import { useState } from "react";
import { useEffect } from "react";


const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight-200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`flex fixed top-0 justify-around py-5 h-20 w-full z-[9999] transition-all duration-700 ${
        isScrolled ? "bg-gray-500 shadow-xl" : "bg-gray-900"
      }`}
    >
      {" "}
      <div>
        <Link to="/" className="bg-transparent text-3xl">
          Novanex IT{" "}
        </Link>{" "}
      </div>
      <div>
        <NavBar />
      </div>
      <div className="block lg:hidden">
        <MobileNav isOpen={isOpen} setOpen={setOpen} />
      </div>
    </div>
  );
};

export default Header;
