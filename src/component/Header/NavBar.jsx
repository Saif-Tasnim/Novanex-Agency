import { Link, useLocation } from "react-router-dom";
import { NAVBAR_DATA } from "../../static/nav";


const NavBar = () => {
 const location = useLocation();
  
 return (
    <>
      <div className="hidden lg:flex flex-row gap-9">
        {NAVBAR_DATA.map(({path,value}) => (
          <Link key={path} to={path} className={`link-class ${location.pathname === path ? "border-b-2 border-green-600" : ""}`}>
            {value}
          </Link>
        ))}
      </div>
    </>
  );
};

export default NavBar;
