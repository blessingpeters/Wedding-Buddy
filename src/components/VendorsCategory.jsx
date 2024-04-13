import { Link } from "react-router-dom";
import WbButton from "./common/WbButton";

const VendorsCategory = () => {

  return (
    <section className="pt-10 lg:px-20 md:px-10 px-3 flex flex-col">
      <div className="pb-10 flex justify-between items-center ">

        <h2 className="md:text-4xl text-2xl font-raleway font-semibold text-graywhite-600">
          Top wedding vendors categories
        </h2>
        <WbButton className="max-md:text-sm max-md:p-3" text="View all Categories" />
      </div>


      <div className="grid md:grid-cols-2 lg:grid-cols-3 text-left pb-10 w-full gap-8">
        {offers.map((offer, index) => (
          <Link to={offer.title}
            className={`h-max relative shadow-sm border`}
            key={index}>

            <img
              className="h-[239px] w-full object-cover"
              src={offer.img}
              alt="check circle"
            />

            <h2 className="px-4 pr-20 rounded-tr-2xl backdrop-blur bg-white/20 absolute bottom-0 text-lg text-white">{offer.title}</h2>
           </Link>
        ))}
      </div>
    </section>
  );
};
const offers = [
  {
    title: "Wedding Venues",
    img: "/assets/images/wedding-hall.png",
    link:"WeddingVenues"
  },
  {
    title: "Grooms Wear",
    img: "/assets/images/suit-tie.png",
    link:"GroomsWear"

  },
  {
    title: "Photography/Videography",
    img: "/assets/images/camera.png",
    link: "PhotographyandVideography",
  },
  {
    title: "Wedding Planners & Organizers",
    img: "/assets/images/calendar.png",
    link: "WeddingPlanners&Organizers",
  },
  {
    title: "Bridal Wear",
    img: "/assets/images/wedding-gown.png",
    link: "BridalWear",
  },
  {
    title: "Cake Makers",
    img: "/assets/images/wedding-cake.png",
    link: "CakeMakers",
  },


];

export default VendorsCategory;
