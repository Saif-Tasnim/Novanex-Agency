import { Link } from "react-router-dom";
import Icons from "../../../../../component/Icons/Icons";

// eslint-disable-next-line react/prop-types
const SingleCard = ({ title, description, link}) => {
    return (
        <div className="w-full p-10 border shadow-md shadow-green-200">
            <Icons.AppWindow className="w-14 h-14"/>
            <h1 className="text-2xl font-semibold mt-5 mb-3 cursor-pointer hover:underline">{title}</h1>
            <p className="my-4">{description}</p>

           {link && <Link to={link} className="pt-5 flex gap-2 items-center text-green-600 text-xl"> Learn More <span className="pt-1 text-green-600"><Icons.MoveRightIcon /></span> </Link>}
        </div>
    );
};

export default SingleCard;