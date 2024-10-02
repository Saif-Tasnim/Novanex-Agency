
// eslint-disable-next-line react/prop-types
const SingleBanner = ({ img, des, heading }) => {
  return (
    <>
    <div className="flex justify-between">
      
      <div className="w-1/2 mr-6">
        <h1 className="w-full text-5xl my-7"> {heading} </h1>
        <p className="text-lg italic w-full py-12">{des}</p>
      </div>

      <div className="w-1/2 h-auto">
        <img src={img} alt="Image-1" />
      </div>
    </div>

    
    </>
  );
};

export default SingleBanner;
