
import Navbar from "../navs/Navbar";
import WbButton from "../common/WbButton";

const AboutHeader = () => {
  return (
    <section className="hero-section h-full  font-raleway w-full">
      <Navbar />
        <div className="md:py-44 py-28">


        <div className="sm:w-max w-11/12 lg:my-10 mx-auto px-4  py-12 md:p-10 rounded-2xl text-center text-white">
            <h1 className="mb-5 lg:text-6xl text-4xl font-bold">
            Plan The Perfect Wedding
            </h1>
            <p className="mb-5 lg:text-4xl text-xl">
            Connecting Couples to the right <br className="hidden md:block" /> Vendors
            </p>
            <WbButton text="Create New Item" size="normal" />

        </div>

      </div>
    </section>
  );
};

export default AboutHeader;
