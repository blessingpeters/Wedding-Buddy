

const ServiceCards = () => {
  return (
    <section className="pt-10 flex flex-col font-raleway bg-[#0000000D]">
      <h2 className="pb-14 text-center md:text-5xl text-2xl font-bold text-graywhite-600">
        Our Services
      </h2>
      <div className="">
        {ourServices.map((service, index) =>(
            <div key={index} className="flex flex-col sm:flex-row gap-5 mb-24 sm:p-12 p-4 text-gold-100 even:text-burgundy-100 bg-white even:bg-gold-100/20 sm:even:flex-row-reverse">
                <div className=" basis-1/2">
                    <h3 className="lg:text-5xl text-3xl md:my-10 my-5 font-semibold">{service.heading}</h3>
                    <p className="text-graywhite-400 lg:text-3xl text-xl font-medium">{service.text}</p>
                </div>
                <div className="md:h-[590px] basis-1/2">
                    <img className="h-full w-full object-cover rounded-2xl" src={service.image} alt="service image" />
                </div>

            </div>
        ))}
      </div>

    </section>
  );
};
const ourServices =[
    {
        image: "/assets/images/weddinggown.png",
        heading: "Bridal Wear",
        text: "Discover your dream wedding attire with our curated collection of bridal gowns and groom's suits, each designed to reflect your unique style and vision. Our personalized service ensures a memorable shopping experience, with expert stylists guiding you every step of the way. Complete your look with our stunning bridal accessories, and book your appointment today to begin your journey to wedding day perfection."
    },
    {
        image: "/assets/images/weddingcake.png",
        heading: "Cakes",
        text: "Discover your dream wedding attire with our curated collection of bridal gowns and groom's suits, each designed to reflect your unique style and vision. Our personalized service ensures a memorable shopping experience, with expert stylists guiding you every step of the way. Complete your look with our stunning bridal accessories, and book your appointment today to begin your journey to wedding day perfection."
    },
    {
        image: "/assets/images/photographer.png",
        heading: "Event Coverage",
        text: "Let us immortalize your special moments with our professional event coverage services, capturing the essence and excitement of your occasion. Our experienced team ensures every detail is documented, from candid interactions to the grand highlights, creating timeless memories you'll cherish forever. "
    },
    {
        image: "/assets/images/weddingvenue.png",
        heading: "Wedding Venues",
        text: "Discover the perfect setting for your special day at our enchanting wedding venue, where timeless elegance meets modern luxury. Our dedicated team is committed to exceeding your expectations, ensuring every detail is tailored to your unique vision"
    },
    {
        image: "/assets/images/weddingplanner.png",
        heading: "Wedding Planners",
        text: "Embark on your wedding journey stress-free with our expert planning services, tailored to bring your dream celebration to life. Our experienced team handles every detail with precision and care, ensuring a seamless and unforgettable experience for you and your guests. Let us turn your vision into reality, leaving you free to enjoy every moment of your special day."
    },
    {
        image: "/assets/images/catering.png",
        heading: "Catering",
        text: "Indulge your guests with our delectable culinary creations, meticulously crafted to tantalize taste buds and elevate your event to new heights. From elegant weddings to corporate gatherings, our experienced team is dedicated to delivering impeccable service and exquisite cuisine that leaves a lasting impression."
    },
    {
        image: "/assets/images/groomsuit.png",
        heading: "Grooms Wear",
        text: "Discover sophistication and refinement in our collection of groom's wear, tailored to perfection for your special day. From classic tuxedos to modern suits, our expertly curated selection ensures every groom looks his best as he walks down the aisle"
    }

]
export default ServiceCards;
