import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import MobileNav from "./MobileNav";
import { useState } from "react";


const Header = () => {
  const [isOpen, setOpen] = useState(false);
  
  return (
    <div className="flex justify-around py-5 bg-fixed h-full bg-gray-950">
      <div>
         <Link to="/" className="bg-transparent text-3xl">Novanex IT </Link>{" "}
      </div>

      <div>
        <NavBar />
      </div>

      <div className="block lg:hidden">
        <MobileNav isOpen={isOpen} setOpen={setOpen}/>
      </div>
    </div>
  );
};

export default Header;
