import WbButton from "../components/common/WbButton";
import Gallery from "../components/Gallery";
import Header from "../components/header/Header";
import Offers from "../components/Offers";
import Review from "../components/Review"
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate()
  return (
    <>
      <Header />
      <Offers />
      <Gallery />
      <section className="bg-[#50112E1A] text-xl font-semibold font-raleway grid grid-cols-2 md:grid-cols-4 gap-10 py-14 pb-48">
        <div className="flex flex-col items-center text-burgundy-100">
          <img src="/assets/icons/house-icon.svg" alt="" />
          <p>50</p>
          <p>Vendors</p>
        </div>
        <div className="flex flex-col items-center text-burgundy-100">
          <img
            src="/assets/icons/emojione-monotone_couple-with-heart-man-man.svg"
            alt=""
          />
          <p>200</p>
          <p>Happy Couple</p>
        </div>
        <div className="flex flex-col items-center text-burgundy-100">
          <img src="/assets/icons/wpf_wedding-cake.svg" alt="" />
          <p>200</p>
          <p>Bridesmaid</p>
        </div>
        <div className="flex flex-col items-center text-burgundy-100">
          <img src="/assets/icons/fontisto_photograph.svg" alt="" />
          <p>189</p>
          <p>Photographers</p>
        </div>
      </section>
      <section className="book relative font-lato">
        <img
          className="absolute md:-top-16 top-20"
          src="/assets/images/rosette-left.svg"
          alt=""
        />
        <img
          className="absolute right-0 md:-top-16 top-20"
          src="/assets/images/rosette-right.svg"
          alt=""
        />
        <div className=" w-full md:w-[642px] mx-auto relative -top-32 bg-burgundy-100 text-white p-10 text-center">
          <h4 className="font-bold text-xl">LETS MEET</h4>
          <button className="border border-white px-8 py-4 rounded-md my-10" onClick={()=> navigate("/vendors")}>
            Book a Vendor
          </button>

          <p>
            Should you have any enquiries about wdding Buddy, please fill out
            the form below
          </p>
        </div>
      </section>
      <section className="bg-[#FAF9F9] py-12 px-3">
        <form className="w-full md:w-3/5 mx-auto font-inter" action="">
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
              <label className="text-graywhite-400" htmlFor="email">Email</label> <br />
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
            <label className="text-graywhite-400" htmlFor="message">Mesage</label>
            <textarea className="border border-graywhite-400 w-full rounded-md bg-transparent" name="message" id="message" cols="70" rows="8"></textarea>
          </div>

          <WbButton className='w-full' text='Send' />
        </form>
      </section>
      <section className="pt-16 lg:px-20 md:px-10 px-3 ">
        <Review />
      </section>

    </>
  );
}

export default HomePage;
