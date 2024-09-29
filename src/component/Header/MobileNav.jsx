import { Link } from "react-router-dom";
import { NAVBAR_DATA } from "../../static/nav";
import Hamburger from "hamburger-react";

const MobileNav = ({ isOpen, setOpen }) => {
  return (
    <>
      <Hamburger toggled={isOpen} toggle={setOpen} />

      {isOpen && (
        <div className={`absolute right-0 w-full pb-5 pt-2 z-[999999]`}>
          <div className={`bg-gray-950 flex flex-col items-center gap-4 transition-all`}>
            {NAVBAR_DATA.map((nav) => (
              <Link key={nav.path} to={nav.path} className="link-class">
                {nav.value}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNav;
