// eslint-disable-next-line react/prop-types
const SingleBanner = ({ img, des, heading }) => {
  return (
    <>
      <div className="flex flex-row-reverse justify-between">
        
        <div className="w-full md:w-1/2 h-auto">
          <img src={img} alt="Image-1" />
        </div>

        <div className="hidden md:block w-1/2 mr-6">
          <h1 className="w-full text-5xl my-7"> {heading} </h1>
          <p className="text-lg italic w-full py-12">{des}</p>
        </div>
      </div>
    </>
  );
};

export default SingleBanner;
