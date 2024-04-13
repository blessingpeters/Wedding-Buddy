import Navbar from "../components/navs/Navbar";
import WbButton from "../components/common/WbButton";

const ContactPage = () => {
  return (
    <>
      <section className="h-full font-raleway w-full bg-cover bg-[100%] bg-no-repeat bg-[url(/assets/images/map.jpeg)]">
        <Navbar />
        <div className="py-28 max-w-screen-2xl mx-auto lg:px-20 px-10">
          <h1 className="md:text-8xl text-5xl font-bold">Contact Us</h1>
        </div>
      </section>
      <section className="bg-burgundy-100 font-raleway text-gold-100 py-4 md:px-10 px-3">
        <h2 className="md:text-5xl text-2xl text-center py-8">Get In Touch</h2>
        <div className="flex justify-around items-center my-12">
          <div className="flex flex-col items-center gap-3">
            <img
              className="w-12 h-12"
              src="/assets/icons/mail.svg"
              alt="mail icon"
            />
            <p className="font-semibold sm:text-lg">Email Address</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <img
              className="w-12 h-12"
              src="/assets/icons/phone.svg"
              alt="phone icon"
            />
            <p>Phone Number</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <img
              className="w-12 h-12"
              src="/assets/icons/users.svg"
              alt="user icon"
            />
            <p>Community</p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-[#0000000D]">
        <div className="bg-white sm:pl-5 lg:pl-10 sm:gap-6 shadow-xl flex flex-col sm:flex-row">
          <div className=" basis-1/2 flex flex-col items-end">
            <form
              className=" lg:w-11/12 sm:px-6 px-3 py-10 max-sm:mx-3 my-10  md:my-20 font-inter bg-[#DDCCCC] rounded-2xl shadow-xl"
              action=""
            >
              <div className="flex items-center gap-3 md:gap-6">
                <img
                  className="h-28 lg:px-12 border-r-4 border-burgundy-100 "
                  src="/assets/images/wblogo.svg"
                  alt=""
                />
                <h4 className="font-raleway text-xl text-burgundy-100 font-semibold">
                  Get in contact with <br className="max-sm:hidden" />
                  us today!
                </h4>
              </div>

              <div className="w-full my-6">
                <label className="text-graywhite-400" htmlFor="email">
                Email Address
                </label>{" "}
                <br />
                <input
                  className="w-full border border-graywhite-400 outline-none rounded-md bg-transparent p-4 text-sm placeholder:text-graywhite-400"
                  type="text"
                  name="name"
                  id="email"
                  placeholder="Enter your  email address"
                />{" "}
              </div>

              <div className="my-6">
                <label className="text-graywhite-400" htmlFor="message">
                  Mesage
                </label>
                <textarea
                  className="border border-graywhite-400 w-full outline-none rounded-md bg-transparent p-4 placeholder:text-graywhite-400"
                  name="message"
                  id="message"
                  cols="70"
                  rows="8"
                  placeholder="Enter your message here"
                ></textarea>
              </div>

              <WbButton className="w-full" text="Send" />
            </form>
          </div>
          <div className="basis-1/2 w-full">
            <img
              className="max-sm:h-72 h-full w-full object-cover"
              src="/assets/images/flower.png"
              alt="vendor detail images"
            />
          </div>
        </div>
      </section>
      <section className=" bg-[url(/assets/images/flower-ring.jpeg)] bg-cover bg-[100%] mb-20 bg-no-repeat p-20  md:px-10 px-3">
        <div className="text-white text-xl md:p-20 p-10  text-center md:w-4/6 h-5/6 mx-auto bg-gradient-to-b from-[#A4235E] to-[#3E0D24] rounded-tl-5xl rounded-br-5xl">
            <h6 className="mb-5">How Helpful Were We Today?</h6>
            <p>At Wedding Buddy, we are committed to giving you the best experiences during your wedding ceremonies with ease.</p>
        </div>

      </section>

    </>
  );
};

export default ContactPage;
