import { Link } from "react-router-dom";
import { NAVBAR_DATA } from "../../static/nav";


const NavBar = () => {
 
  return (
    <>
      <div className="hidden lg:flex flex-row gap-9">
        {NAVBAR_DATA.map((nav) => (
          <Link key={nav.path} to={nav.path} className="link-class">
            {nav.value}
          </Link>
        ))}
      </div>
    </>
  );
};

export default NavBar;
