// eslint-disable-next-line react/prop-types
const PageBanner = ({ img, content }) => {
  return (
    <div
      className="w-full h-screen bg-cover bg-no-repeat flex justify-center items-center"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="absolute inset-0 bg-gray-950/40 backdrop-blur-sm"></div>

      <div className="relative uppercase bg-green-900/60 backdrop-blur-lg border border-green-400/40 p-6 rounded-md flex gap-6 items-center mt-52">
        <span className="h-2 w-2 bg-white rounded-full inline-block"> </span>
        <p className="text-4xl font-semibold">{content}</p>
        <span className="h-2 w-2 bg-white rounded-full inline-block"> </span>
      </div>
    </div>
  );
};

export default PageBanner;
