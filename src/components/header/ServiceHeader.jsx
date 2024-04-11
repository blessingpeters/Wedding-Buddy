
import Navbar from "../navs/Navbar";

const ServiceHeader = () => {
    return (
        <section className="service-hero h-full  font-raleway w-full">
            <Navbar />
            <div className="py-28 max-w-screen-2xl mx-auto">


                <div className="w-11/12 lg:my-10 mx-auto rounded-2xl flex flex-col items-center text-center text-white">
                    <h1 className="lg:text-7xl text-4xl font-bold lg:px-10">
                        Want to plan a wedding and not sure how?
                    </h1>
                    <p className="my-10 lg:text-4xl text-xl">
                        Explore our various services
                    </p>
                    <div className="bg-burgundy-100/40 relative flex items-center rounded-2xl w-full md:w-[572px]">
                        <input className="bg-transparent outline-none sm:text-lg text-sm font-lato p-4 w-full" type="text" name="search" id="email" placeholder="Search for Wedding Services needed" />

                        <img className=" pr-4 absolute right-0" src="/assets/icons/search.svg" alt="search icon" />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ServiceHeader;
