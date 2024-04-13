import Review from "../components/Review";
import WbButton from "../components/common/WbButton";
import Navbar from "../components/navs/Navbar";

const VendorDetailPage = () => {
  return (
    <>
      <section className="h-full font-raleway w-full bg-right-top bg-no-repeat bg-[url(/assets/images/vendorinfo.png)]">
        <Navbar />
        <div className="py-28 max-w-screen-2xl mx-auto lg:px-20 px-10">
          <div className="lg:my-10 rounded-2xl lg:w-2/3 ">
            <h1 className="md:text-8xl text-5xl font-bold gradient">
              Ajevo Orettsi
            </h1>
            <p className="my-8 text-gray-600 max-md:text-gray-900 font-semibold lg:text-5xl text-3xl">
              Wedding Planner
            </p>
            <p className="font-lato mb-16 text-graywhite-400 max-md:text-gray-900 text-lg lg:text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
            <WbButton
              className="px-16 font-bold rounded-tl-3xl rounded-br-3xl"
              text="Contact Us"
            />
            <div className="bg-[#7D77771A] w-max flex gap-5 my-8 p-4 rounded-2xl">
              <a href="">
                <img src="/assets/icons/fb.svg" alt="facebook icon" />
              </a>
              <a href="">
                <img src="/assets/icons/insta.svg" alt="instagram icon" />
              </a>
              <a href="">
                <img src="/assets/icons/whatsapp.svg" alt="whatsapp icon" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="relative font-raleway h-[607px] sm:h-[500px] lg:h-screen bg-gradient-to-r from-[#D4B8C533] to-[#B6276933]">
        <div className="absolute right-0 bg-white h-max w-11/12 lg:w-7/12 text-graywhite-600 px-4 lg:pl-28 pt-10 pb-14 lg:pb-28 rounded-bl-[100px] lg:rounded-bl-[300px]">
          <h2 className="md:text-6xl text-3xl font-semibold">About US</h2>
          <p className="md:text-2xl text-lg mt-4 font-lato">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </p>{" "}
          <br />
          <p className="md:text-2xl text-lg font-lato">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
      </section>
      <section className="bg-gradient-to-r from-[#D4B8C533] to-[#B6276933] py-10 flex flex-col items-center font-raleway text-graywhite-600 md:px-10 px-6">
        <h2 className="md:text-6xl text-3xl font-semibold">Our Services</h2>
        <p className=" my-8  text-center font-semibold md:text-5xl">
          Wedding Planning and Management
        </p>
        <ul className="mt-10 grid grid-cols-2 list-disc gap-8 md:gap-20 text-lg  md:text-3xl">
          <li>Wedding Decoration</li>
          <li>Venue Selection</li>
          <li>Budget Management</li>
          <li>Logistics Planning</li>
          <li>Catering and Wedding Cake</li>
          <li>RSVP management</li>
          <li>Makeup and Hairstyle</li>
          <li>Vendor Selection</li>
          <li>Photography and Videography</li>
          <li>Design and Styling</li>
        </ul>
      </section>
      <section className="py-10 bg-gradient-to-r from-[#D4B8C533] to-[#B6276933] text-graywhite-600 ">
        <h2 className="md:text-6xl text-3xl font-semibold py-4 md:px-10 px-3">
          Portfolio
        </h2>
        <div className="bg-white flex flex-col sm:flex-row">
          <div className="basis-1/2">
            <p className="md:px-10 px-3 pt-10 sm:text-xl">
              At our core, we specialize in transforming dreams into timeless
              memories. With meticulous attention to detail and a passion for
              perfection, we curate every aspect of your special day. From the
              initial concept to the joyous celebration, we pride ourselves on
              bringing your unique vision to life.
            </p>{" "}
            <br />
            <p className="md:px-10 px-3 pb-10 sm:text-xl">
              Entrust us with crafting your unforgettable moment, and let our
              expertise elevate your experience to extraordinary height
            </p>
            <div className="flex gap-3 overflow-x-scroll no-scrollbar">
              <img
                className="w-80 h-72 object-cover"
                src="/assets/images/interracialcouple.jpeg"
                alt=""
              />
              <img
                className="w-80 h-72 object-cover"
                src="/assets/images/brideandplant.png"
                alt=""
              />
              <img
                className="w-80 h-72 object-cover"
                src="/assets/images/weddingband.png"
                alt=""
              />
            </div>
            <WbButton
              className=" px-20 md:mx-10 mx-3  my-5 text-sm font-medium rounded-tl-3xl rounded-br-3xl"
              text="See More"
            />
          </div>
          <div className="basis-1/2 ">
            <img
              className="max-sm:h-72 h-full w-full object-cover"
              src="/assets/images/couplekissing.jpeg"
              alt="vendor detail images"
            />
          </div>
        </div>
      </section>
      <section className="py-10 lg:px-20 md:px-10 px-3 bg-[#FAF9F9] text-center ">
        <h2 className="md:text-6xl font-raleway text-3xl text-graywhite-600 font-semibold">
          Reviews
        </h2>
        <Review />
      </section>
      <section className="py-10 lg:px-20  md:px-10 px-3 flex flex-col md:flex-row bg-gradient-to-r from-[#D4B8C533] to-[#B6276933]">
        <div className="basis-1/2">
        <h2 className="md:text-6xl text-4xl font-semibold py-4 text-graywhite-600">
          Contact
        </h2>
          <div>
            <h3 className="font-raleway pt-6 pb-2 text-2xl text-gray-600 font-semibold">
              Address
            </h3>
            <p className="font-lato text-lg text-graywhite-600">17, John Wobo Street</p>
            <p className="font-lato text-lg text-graywhite-600">Ugwuachara, Lagos</p>
          </div>
          <div>
            <h3 className="font-raleway pt-6 pb-2 text-2xl text-gray-600 font-semibold">
              Contact Address
            </h3>
            <p className="font-lato text-lg text-graywhite-600">Phone: +234 908756443</p>
            <p className="font-lato text-lg text-graywhite-600">Email: ajeevents@gmail.com</p>
          </div>
          <div>
            <h3 className="font-raleway pt-6 pb-2 text-2xl text-gray-600 font-semibold">
              Follow Us
            </h3>
            <div className="bg-[#7D77771A] w-max flex gap-5 p-4 rounded-2xl">
              <a href="">
                <img src="/assets/icons/fb.svg" alt="facebook icon" />
              </a>
              <a href="">
                <img src="/assets/icons/insta.svg" alt="instagram icon" />
              </a>
              <a href="">
                <img src="/assets/icons/whatsapp.svg" alt="whatsapp icon" />
              </a>
            </div>
          </div>
        </div>
        <form className="w-full basis-1/2 px-6 py-10  max-md:my-5 mx-auto font-inter bg-white rounded-[40px]" action="">
        <h3 className="font-raleway text-center pb-10 text-xl md:text-3xl text-gray-600 font-semibold">
          Send us a Mail!
            </h3>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full">
              <label className="text-graywhite-400" htmlFor="name">
                Name:
              </label>{" "}
              <br />
              <input
                className="w-full border border-graywhite-400 rounded-md bg-transparent p-4 text-sm placeholder:text-graywhite-200"
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="w-full">
              <label className="text-graywhite-400" htmlFor="email">
                Email
              </label>{" "}
              <br />
              <input
                className="w-full border border-graywhite-400 rounded-md bg-transparent p-4 text-sm placeholder:text-graywhite-200"
                type="text"
                name="name"
                id="email"
                placeholder="Enter Your Email"
              />{" "}
            </div>
          </div>
          <div className="my-6">
            <label className="text-graywhite-400" htmlFor="message">
              Mesage
            </label>
            <textarea
              className="border border-graywhite-400 w-full rounded-md bg-transparent"
              name="message"
              id="message"
              cols="70"
              rows="8"
            ></textarea>
          </div>

          <WbButton className="w-full" text="Send" />
        </form>
      </section>
    </>
  );
};

export default VendorDetailPage;
