import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Button = ({content, type, to}) => {
    return (
       <button className={`border border-green-950 px-4 py-3 rounded-md ${type==="primary"? "bg-green-950 text-white hover:bg-gray-200 hover:text-gray-900 hover:scale-110" : type==="secondary"?"hover:bg-red-700 hover:text-white" : ""}`}
       onClick={()=><Navigate to={to}/>}
       >
         {content}
       </button>
    );
};

export default Button;