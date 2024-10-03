import img from "../../assets/contact.jpg";
import Button from "../../component/Button/Button";
import PageBanner from "../../component/PageBanner/PageBanner";
import SectionHeading from "../../component/SectionHeading/SectionHeading";

const Contact = () => {
  return (
    <>
      <PageBanner content="contact - with - us" img={img} />

      <div className="my-28">
        <SectionHeading content="Contact With Us" />

        <div className="flex flex-col gap-14 items-center md:flex-row justify-evenly my-20">
          <div>
            <h1 className="text-lg underline">Our Address : </h1>
            <p className="mt-3">Dhaka, Bangladesh</p>
            <p className="my-1 flex gap-2">
              Call: <a href="tel:+88012345678901"> +88012345678901 </a>{" "}
            </p>
            <p className="my-1 flex gap-2">
              Email:
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=novanexit@gmail.com"
                target="_blank"
              >
                {" "}
                novanexit@gmail.com
              </a>
            </p>
          </div>
          <div className="hidden md:block h-72 border border-green-600"></div>
          <div>
            <input
              type="text"
              name="user_name"
              id=""
              placeholder="Your Name"
              className="w-80 bg-gray-100 rounded-md px-7 py-2 text-gray-900 outline-0 block mb-6"
            />
            <input
              type="email"
              name="email"
              id=""
              placeholder="Your Email"
              className="w-80 bg-gray-100 rounded-md px-7 py-2 text-gray-900 outline-0 block mb-6"
            />

            <textarea
              name="text-box"
              id=""
              className="w-80 h-24 bg-gray-100 rounded-md px-7 py-2 resize-none block mb-6"
              placeholder="Your Message Here ...."
            ></textarea>
            <Button content="Submit" type="primary" className="w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
