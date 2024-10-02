import { Link, useLocation } from "react-router-dom";
import { NAVBAR_DATA } from "../../static/nav";
import Hamburger from "hamburger-react";

// eslint-disable-next-line react/prop-types
const MobileNav = ({ isOpen, setOpen }) => {
  const location = useLocation();

  return (
    <>
      <Hamburger toggled={isOpen} toggle={setOpen} />

      {isOpen && (
        <div className={`absolute right-0 w-full pb-5 pt-2 z-[999999]`}>
          <div className={`bg-gray-950 flex flex-col items-center gap-4 transition-all`}>
            {NAVBAR_DATA.map(({path, value}) => (
              <Link key={path} to={path} className={`link-class ${location.pathname===path ? "border-b-2 border-green-600" : ""}`}>
                {value}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNav;
