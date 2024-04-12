import Navbar from "../navs/Navbar";
import WbButton from "../common/WbButton";

const VendorsHeader = () => {
    return (
        <section className="bg-[url(/assets/images/3003events.png)] bg-cover h-full  font-raleway w-full">
            <Navbar />
            <div className="py-28">


                <div className="md:w-max w-11/12 lg:my-10 mx-auto px-4  py-12 md:px-16 rounded-2xl  text-burgundy-100 backdrop-blur-0 bg-white/20 tracking-wider">
                    <h1 className=" text-center my-5 lg:text-7xl text-4xl font-bold">
                        Find top-rated vendors <br className="hidden md:block" />  for every vibe
                    </h1>
                    <p className="text-center my-5 lg:text-4xl text-xl">
                        Discover the Pros  for any budget,<br className="hidden md:block" /> background and style
                    </p>
                    <div className="my-4 flex  gap-4 w-full justify-center font-lato">
                        <div className="w-full border border-burgundy-100 rounded-2xl px-3 relative">
                            <label className="absolute left-5 top-1 text-[#AFABAB] text-xs" htmlFor="budget">budget</label>
                            <select
                                name="budget"
                                id="buget"
                                className=" bg-transparent outline-none w-full h-full pt-6 pb-3 text-graywhite-600"
                            >
                                <option value="petit">La Petit</option>
                            </select>
                        </div>

                        <div className="w-full border border-burgundy-100 rounded-2xl px-3 relative">
                            <label className="absolute left-5 top-1 text-[#AFABAB] text-xs" htmlFor="location">Country, City</label>
                            <select
                                name="location"
                                id="location"
                                className=" bg-transparent outline-none w-full h-full pt-6 pb-3 text-graywhite-600"
                            >
                                <option value="nigeria">Lagos, Nigeria</option>
                            </select>
                        </div>



                    </div>
                    <div className="my-10 ">

                        <WbButton className="w-full" text="Search" size="normal" />
                    </div>
                    <p className="font-semibold text-center">Search by Vendor Name</p>
                </div>

            </div>
        </section>
    );
};

export default VendorsHeader;
