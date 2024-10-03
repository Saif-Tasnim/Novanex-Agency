import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Button = ({ content, type, to, className }) => {
  const navigate = useNavigate();
  return (
    <button
      className={`${className} border border-green-800 p-2 text-nowrap md:px-4 md:py-3 rounded-md ${
        type === "primary"
          ? "bg-green-950 text-white hover:bg-gray-400 hover:text-gray-900 hover:scale-110"
          : type === "secondary"
          ? "hover:bg-red-700 hover:text-white"
          : ""
      }`}
      onClick={() => navigate(to)}
    >
      {content}
    </button>
  );
};

export default Button;
