import ServiceCards from "../components/ServiceCards";
import ServiceHeader from "../components/header/ServiceHeader";

function Services() {
  return (
    <>
      <ServiceHeader />
      <ServiceCards />
      <section className=" bg-gradient-to-br from-burgundy-100 to-burgundy-200 text-white font-raleway pt-10 lg:px-24 md:px-10 px-3">
        <div className="pb-10 text-center px-3 lg:w-4/6 mx-auto">
          <h3 className="text-gold-100 md:text-4xl text-2xl font-semibold">
            Customized Packages
          </h3>
          <p className="lg:text-3xl text-lg">
            We have customized packages to ease your decision making process
            with very reliable vendors tailored to your needs.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
          {packages.map((item, index) => (
            <div
              key={index}
              className="text-gold-100 flex flex-col gap-2  items-center text-center"
            >
              <img className="h-16 w-14" src={item.icon} alt="package icon" />
              <h5 className="font-semibold text-xl lg:text-3xl">
                {item.title}
              </h5>
              <p className="font-medium text-sm lg:text-lg">{item.desc}</p>
              <button className="bg-gold-100 font-lato font-medium py-1 px-4 text-burgundy-100 rounded-lg">
                Explore
              </button>
            </div>
          ))}
        </div>
      </section>
      <section className="relative h-[130px] bg-gradient-to-b from-[#581332] to-[#BE3071]">
        <div className="absolute -bottom-5 sm:left-20 w-full sm:w-3/5 md:w-2/5 bg-burgundy-100 text-gold-100 text-center rounded-2xl px-8 py-4 font-lato">
          <h5 className="font-semibold text-lg lg:text-3xl">Upgrade to Premium Version</h5>
          <p className="font-medium lg:text-xl">
            This feature is only available on our premium package, please
            subscribe to access this.{" "}
          </p>
        </div>
      </section>
    </>
  );
}

const packages = [
  {
    icon: "/assets/icons/house-icon-gold.svg",
    title: "Simply Sweet",
    desc: "Our Petite Package",
  },
  {
    icon: "/assets/icons/glasses-icon-gold.svg",
    title: "Intimate Affair",
    desc: "A Cozy Celebration",
  },
  {
    icon: "/assets/icons/heart-icon-gold.svg",
    title: "Infinite Love",
    desc: "Our all exclusive package",
  },
  {
    icon: "/assets/icons/grand-gala-icon.svg",
    title: "Grand Gala",
    desc: "A Lavish Wedding Experience",
  },
];

export default Services;
