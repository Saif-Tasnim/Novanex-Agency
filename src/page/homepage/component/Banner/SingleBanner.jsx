import Button from "../../../../component/Button/Button";

// eslint-disable-next-line react/prop-types
const SingleBanner = ({ img, des, heading }) => {
  return (
    <>
    <div className="flex justify-between">
      
      <div className="w-1/2 mr-6 py-12">
        <h1 className="w-full text-4xl my-7"> {heading} </h1>
        <p className="text-lg italic w-full py-2">{des}</p>
      </div>

      <div className="w-1/2 h-auto">
        <img src={img} alt="Image-1" />
      </div>
    </div>

    <div className="absolute bottom-16 left-8 flex gap-12">
        <Button content="See Our Works" type="primary"/>
        <Button content="Contact With Us" type="secondary"/>
    </div>
    </>
  );
};

export default SingleBanner;
