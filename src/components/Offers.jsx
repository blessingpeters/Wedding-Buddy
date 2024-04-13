const Offers = () => {
  return (
    <section className="pt-10 lg:px-20  md:px-10 px-3 flex flex-col">
      <div className="pb-10 text-center">
        <h2 className="md:text-4xl text-2xl font-raleway font-semibold text-graywhite-600">
          Fuss-free destination wedding planning starts here
        </h2>
        <p className="md:w-[80%] mt-5 mx-auto md:text-xl text-lg font-lato text-graywhite-400">
          Simple wedding planning to help you stay on track and plan that dream
          wedding <br /> Discover your destination wedding vendors, everything from
          your wedding venue, photographers & videographers, wedding planners to
          music & entertainment.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 text-left pb-10 w-full gap-8">
        {offers.map((offer, index) => (
          <div
            className={`h-96 relative rounded-2xl shadow-sm border`}
            key={index}
          >
            <img
              className="h-[65%] w-full object-cover rounded-t-2xl"
              src={offer.img}
              alt="check circle"
            />
            <div className="w-full justify-between py-3 px-5">
              <h2 className="text-lg text-[#454545]">{offer.title}</h2>
              <h3 className="text-sm text-[#777777] mb-2 mt-1">
                {offer.desc}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
const offers = [
  {
    title: "Bridal Wear",
    desc: "Discover talented seamstresses and boutique stores that have your perfect wedding gown.",
    img: "/assets/images/wedding-gown.png",
  },
  {
    title: "Cake Makers",
    desc: "Choose designed award-winning wedding cakes, creative custom cakes, or cupcakes, choose your wedding cake.",
    img: "/assets/images/wedding-cake.png",
  },
  {
    title: "Wedding Planners & Organizers",
    desc: "Have a stress-free destination wedding by engaging a wedding planner who knows the wedding scene at your destination.",
    img: "/assets/images/calendar.png",
  },
  {
    title: "Wedding Photographers & Videographers",
    desc: "Find specialized and successful wedding photographers who are ready to capture all the fun & love of your wedding day and evening and ready to travel to you.",
    img: "/assets/images/camera.png",
  },
  {
    title: "Wedding Venues",
    desc: "Discover the best destination wedding venues, churches, beachfronts, vineyards, rural estates with indoor & outdoor ceremonies and receptions.",
    img: "/assets/images/wedding-hall.png",
  },
  {
    title: "Grooms Wear",
    desc: "Grooms wear can be start from a well tailored suit but can include a complete tuxedo including vest, bow tie and tails.",
    img: "/assets/images/suit-tie.png",
  },
];

export default Offers;
