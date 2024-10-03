import { Link } from "react-router-dom";
import Icons from "../Icons/Icons";

// eslint-disable-next-line react/prop-types
const SingleCard = ({ title, description, link, children, number }) => {
  return (
    <div className="w-full p-10 border shadow-md hover:shadow-green-200 hover:scale-105 transition-all duration-500">
      {children}

      <h1 className="text-2xl font-semibold mt-5 mb-3 cursor-pointer hover:underline text-center">
        {title}
      </h1>

      {number && (
        <h1 className="text-2xl font-semibold mt-2 cursor-pointer hover:underline text-center">
          {number}
        </h1>
      )}

      <p className="py-4 text-center md:text-justify">{description}</p>

      {link && (
        <Link
          to={link}
          className="pt-5 flex gap-2 items-center text-green-600 text-xl"
        >
          {" "}
          Learn More{" "}
          <span className="pt-1 text-green-600">
            <Icons.MoveRightIcon />
          </span>{" "}
        </Link>
      )}
    </div>
  );
};

export default SingleCard;
