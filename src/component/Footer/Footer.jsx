const Footer = () => {
  return (
    <div className="bg-gray-700 mt-28">
      <div className="flex justify-around border-b border-gray-300 py-5 text-3xl">
        <h1>Novanex IT </h1>
        <p>Call Us At : 999877778787878 </p>
      </div>
      
      <div className="py-9 px-4 flex flex-col gap-2 border-b border-gray-300">
        <h1 className="text-xl">Our Address : </h1>
        <p className="text-lg">Dhaka, Bangladesh</p>
      </div>

      <div className="text-center py-4">&copy; all rights reserved to Novanex IT | 2024</div>
    </div>
  );
};

export default Footer;
