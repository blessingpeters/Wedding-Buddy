import VendorListingsHeader from "../components/header/VendorListingsHeader";
import { Link } from "react-router-dom";

const VendorListingsPage = () => {
  return (
    <>
      <VendorListingsHeader />
      <section className="pt-10 lg:px-20 md:px-10 px-3 flex flex-col bg-[#0000000D]">
        <div className="pb-10 font-raleway font-semibold text-graywhite-600">
          <h2 className="md:text-4xl text-2xl ">
            Find the Best Caterer for your wedding
          </h2>
          <p className="md:text-xl">Select from this list of  unique event planners to give your event the desired quality and colors</p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 text-left pb-10 w-full gap-8">
          {listings.map((vendor, index) => (
            <div
              className={`relative bg-white w-full md:p-5 p-10 font-raleway flex flex-col justify-between cursor-pointer shadow-xl`}
              key={index}
            >
              <div>
                <div className="flex gap-4 mb-2">
                  <img
                    className="h-10 w-10 rounded-full object-cover"
                    src={vendor.img}
                    alt="check circle"
                  />
                  <div>
                    <h2 className="font-semibold ">{vendor.name}</h2>
                    <p className="text-[#64748B] text-sm">{vendor.email}</p>
                  </div>
                </div>
                <div className="ml-14 mb-6 flex justify-between">
                  <img src="/assets/images/starr-group.svg" alt="star rating" />
                  <p className="text-gold-100 text-xs">See all reviews</p>
                </div>
                <div className="bg-[#ECFDF5] my-4 text-xs font-semibold flex items-center rounded w-max gap-3 px-3 py-2">
                  <img src="/assets/icons/greentick.svg" alt="check icon" />
                  <span className="text-[#064E3B]">Verified Vendor</span>
                </div>

                <p className="text-sm text-graywhite-600">{vendor.desc}</p>
                <div className="flex justify-around items-center text-sm text-center my-6">
                  <div className="my-3">
                    <p className="text-[#64748B]">Reviews</p>
                    <p>{vendor.reviews}</p>
                  </div>
                  <div className="my-3">
                    <p className="text-[#64748B]">Clients</p>
                    <p>{vendor.clients}</p>
                  </div>
                  <div className="my-3">
                    <p className="text-[#64748B]">Couples</p>
                    <p className="">{vendor.couples}</p>
                  </div>
                </div>
                <div className="mb-4 flex justify-between items-center text-sm">
                  <p className="text-[#64748B]">Joined {vendor.dateJoined}</p>
                  <button className="text-burgundy-100">Add to Favorite</button>
                </div>
              </div>
              <Link to={vendor.name}>
                <button
                  className={`mt-3 bg-burgundy-100 text-white w-full mb-4 py-3 rounded-lg`}>
                  See More
                </button>
                </Link>

            </div>
          ))}
        </div>
      </section>
    </>
  );
};

const listings = [
  {
    img: "/assets/images/OmaStyle-Bride.png",
    name: "Ajevo Event Services",
    email: "contact@ajevo.com",
    desc: "Ajevo’s Events services gives your a sophiscated and satisfying wedding services, with the right vendors available to give you a memorable wedding.",
    reviews: 120,
    clients: 50,
    couples: 20,
    dateJoined: "Dec 2024",
  },
  {
    img: "/assets/images/OmaStyle-Bride.png",
    name: "Ajevo Event Services",
    email: "contact@ajevo.com",
    desc: "Ajevo’s Events services gives your a sophiscated and satisfying wedding services, with the right vendors available to give you a memorable wedding.",
    reviews: 120,
    clients: 50,
    couples: 20,
    dateJoined: "Dec 2024",
  },
  {
    img: "/assets/images/OmaStyle-Bride.png",
    name: "Ajevo Event Services",
    email: "contact@ajevo.com",
    desc: "Ajevo’s Events services gives your a sophiscated and satisfying wedding services, with the right vendors available to give you a memorable wedding.",
    reviews: 120,
    clients: 50,
    couples: 20,
    dateJoined: "Dec 2024",
  },
  {
    img: "/assets/images/OmaStyle-Bride.png",
    name: "Ajevo Event Services",
    email: "contact@ajevo.com",
    desc: "Ajevo’s Events services gives your a sophiscated and satisfying wedding services, with the right vendors available to give you a memorable wedding.",
    reviews: 120,
    clients: 50,
    couples: 20,
    dateJoined: "Dec 2024",
  },
  {
    img: "/assets/images/OmaStyle-Bride.png",
    name: "Ajevo Event Services",
    email: "contact@ajevo.com",
    desc: "Ajevo’s Events services gives your a sophiscated and satisfying wedding services, with the right vendors available to give you a memorable wedding.",
    reviews: 120,
    clients: 50,
    couples: 20,
    dateJoined: "Dec 2024",
  },
  {
    img: "/assets/images/OmaStyle-Bride.png",
    name: "Ajevo Event Services",
    email: "contact@ajevo.com",
    desc: "Ajevo’s Events services gives your a sophiscated and satisfying wedding services, with the right vendors available to give you a memorable wedding.",
    reviews: 120,
    clients: 50,
    couples: 20,
    dateJoined: "Dec 2024",
  },
  {
    img: "/assets/images/OmaStyle-Bride.png",
    name: "Ajevo Event Services",
    email: "contact@ajevo.com",
    desc: "Ajevo’s Events services gives your a sophiscated and satisfying wedding services, with the right vendors available to give you a memorable wedding.",
    reviews: 120,
    clients: 50,
    couples: 20,
    dateJoined: "Dec 2024",
  },
  {
    img: "/assets/images/OmaStyle-Bride.png",
    name: "Ajevo Event Services",
    email: "contact@ajevo.com",
    desc: "Ajevo’s Events services gives your a sophiscated and satisfying wedding services, with the right vendors available to give you a memorable wedding.",
    reviews: 120,
    clients: 50,
    couples: 20,
    dateJoined: "Dec 2024",
  },
  {
    img: "/assets/images/OmaStyle-Bride.png",
    name: "Ajevo Event Services",
    email: "contact@ajevo.com",
    desc: "Ajevo’s Events services gives your a sophiscated and satisfying wedding services, with the right vendors available to give you a memorable wedding.",
    reviews: 120,
    clients: 50,
    couples: 20,
    dateJoined: "Dec 2024",
  },

];

export default VendorListingsPage;
