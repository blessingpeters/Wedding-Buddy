import ClientsCards from "../components/ClientsCard";
import AboutHeader from "../components/header/AboutHeader";

function AboutPage() {
  return (
    <>
      <AboutHeader />
      <section className="py-10 lg:px-24 md:px-10 px-3 flex flex-col text-center max-w-screen-2xl mx-auto font-raleway">
        <h2 className="pb-8  md:text-5xl text-2xl font-bold text-graywhite-600">
          ABOUT US
        </h2>

        <div className="font-semibold text-xl lg:text-4xl text-graywhite-600 lg:pb-10">
          <p>
            {" "}
            Our platform is designed to simplify the wedding planning process
            and connect you with trusted local vendors who can bring your
            wedding dream to life. We are dedicated to creating a dream come
            true wedding experience for couples, planners, vendors, and
            bridesmaids in Nigeria and Ghana.
          </p>{" "}
          <br />
          <p>
            At Wedding Buddy, we understand the importance of finding the
            perfect vendors for your special day. Thats why we offer
            comprehensive vendor profiles, advanced search and filter options,
            and collaboration tools to streamline coordination and
            communication.
          </p>
          <br />
          <p>
            We believe that weddings should be a joyful celebration of love and
            unity, and our goal is to make your journey from planning to
            execution as seamless and magical as possible. Join us at Wedding
            buddy and let us help you create the wedding of your dreams.
          </p>
        </div>
      </section>
      <section className="md:bg-[url(/assets/images/glassesbg1.svg)] bg-no-repeat font-raleway">
        <img src="/assets/images/couple-hands.png" alt="" />

        <div className="py-10 lg:px-24 md:px-10 px-3 text-center about-bg3">
          <h2 className="pb-8  md:text-5xl text-2xl font-bold text-graywhite-600">
            OUR MISSION
          </h2>

          <div className="font-semibold text-xl lg:text-4xl text-graywhite-600 lg:pb-10">
            <p>
              {" "}
              Our platform is designed to simplify the wedding planning process
              and connect you with trusted local vendors who can bring your
              wedding dream to life. We are dedicated to creating a dream come
              true wedding experience for couples, planners, vendors, and
              bridesmaids in Nigeria and Ghana.
            </p>{" "}
            <br />
            <p>
              At Wedding Buddy, we understand the importance of finding the
              perfect vendors for your special day. Thats why we offer
              comprehensive vendor profiles, advanced search and filter options,
              and collaboration tools to streamline coordination and
              communication.
            </p>
            <br />
            <p>
              We believe that weddings should be a joyful celebration of love
              and unity, and our goal is to make your journey from planning to
              execution as seamless and magical as possible. Join us at Wedding
              buddy and let us help you create the wedding of your dreams.
            </p>
          </div>
        </div>
        <img className="" src="/assets/images/event-venue.png" alt="" />

        <div className="pt-10 lg:px-24 md:px-10 px-3 text-center">
          <h2 className="pb-8  md:text-5xl text-2xl font-bold text-graywhite-600">
            OUR VISION
          </h2>

          <div className="font-semibold text-xl lg:text-4xl text-graywhite-600 pb-14 lg:pb-20">
            <p>
              Our vision is to become the go-to destination for couples, wedding
              vendors, planners, and bridesmaids, offering a seamless and
              personalized journey towards creating unforgettable Pre wedding,
              wedding and post wedding celebrations.
            </p>
          </div>

          <h2 className="pb-8 md:text-5xl text-2xl font-bold text-graywhite-600">
            OUR PAST CLIENTS
          </h2>
        </div>
      </section>
      <ClientsCards />
      <section className="">
        <h2 className="pb-8 text-center  md:text-5xl text-2xl font-bold text-graywhite-600">
          OUR WEDDING GALLERY
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 w-full gallery bg-burgundy-100">
            <img className="" src="/assets/images/Wedding-chandelier.png" alt="gallery photo" />
            <img className="" src="assets/images/galleryimage2.png" alt="gallery photo" />
            <img className="" src="/assets/images/gallery-image3.png" alt="gallery photo" />
            <img className="" src="/assets/images/gallery-image4.png" alt="gallery photo" />
            <img className="" src="/assets/images/gallery-image5.png" alt="gallery photo" />
            <img className="" src="/assets/images/gallery-image6.png" alt="gallery photo" />
            <img className="" src="/assets/images/gallery-image7.png" alt="gallery photo" />
            <div className="p-4">
              <img className="roundec-md" src="/assets/images/gallery-image9.png" alt="gallery photo" />
            </div>
            <img className="" src="/assets/images/couple-on-stairs.png" alt="gallery photo" />
            <img className="" src="/assets/images/Wedding-table 1.png" alt="gallery photo" />
            <div className="bg-white h-max">
              <img className="" src="/assets/images/gallery-image8.png" alt="gallery photo" />
            </div>

        </div>
      </section>
      <img className="mb-24" src="/assets/images/bridesmaid.png" alt="brides maid" />

    </>
  );
}

export default AboutPage;
