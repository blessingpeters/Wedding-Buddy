import Navbar from "../navs/Navbar";

const AboutHeader = () => {
  return (
    <section className="about-hero relative h-[95vh] font-raleway">
      <Navbar />
        <div className="pt-48">

            <div className="absolute left-4 sm:left-20 sm:bottom-20 sm:w-max w-11/12 p-10 sm:p-16 rounded-2xl text-left backdrop-blur-0 bg-burgundy-100/50 text-white">

                <h1 className="lg:text-6xl text-4xl font-bold leading-relaxed">
                    WELCOME TO <br /> WEDDING BUDDY
                </h1>
            </div>
      </div>
    </section>
  );
};

export default AboutHeader;
