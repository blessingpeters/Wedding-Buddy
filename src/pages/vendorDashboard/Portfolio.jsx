import WbButton from "../../components/common/WbButton";

const Portfolio = () => {
  return (
    <section className="lg:px-16 sm:px-8 px-3 py-10 font-raleway text-graywhite-600">
      <div className="">
        <h1 className="md:text-4xl text-2xl my-2">Past Work</h1>
        <p className="text-xl">See all past work</p>
      </div>
      <div className="text-center mt-10">
        <h1 className="md:text-4xl text-2xl my-2">OUR WEDDING GALLERY</h1>
        <div className="columns-3 gap-0">
          <img
            className="w-full aspect-square object-cover"
            src="/assets/images/Wedding-chandelier.png"
            alt="gallery photo"
          />
          <img
            className="w-full aspect-video object-cover"
            src="/assets/images/gallery-image4.png"
            alt="gallery photo"
          />
          <img
            className="w-full aspect-video object-cover"
            src="/assets/images/gallery-image7.png"
            alt="gallery photo"
          />
          <img
            className="w-full aspect-square object-cover"
            src="/assets/images/Wedding-table 1.png"
            alt="gallery photo"
          />

          <img
            className="w-full object-cover aspect-square"
            src="/assets/images/galleryimage2.png"
            alt="gallery photo"
          />
          <img
            className="w-full object-cover"
            src="/assets/images/gallery-image5.png"
            alt="gallery photo"
          />
          <div className=" h-[487px] sm:p-4 p-2 ">
            <img
              className="aspect-square  w-full h-full object-cover rounded-md"
              src="/assets/images/gallery-image9.png"
              alt="gallery photo"
            />
          </div>

          <img
            className="w-full object-cover aspect-square"
            src="/assets/images/gallery-image3.png"
            alt="gallery photo"
          />

          <img
            className="w-full object-cover aspect-auto"
            src="/assets/images/gallery-image6.png"
            alt="gallery photo"
          />

          <img
            className="w-full object-cover"
            src="/assets/images/couple-on-stairs.png"
            alt="gallery photo"
          />
        </div>
        <img
          className="mb-10 w-full"
          src="/assets/images/bridesmaid.png"
          alt="brides maid"
        />
        <WbButton className="sm:w-1/2 w-full" text="Add New Image" />
      </div>
    </section>
  );
};

export default Portfolio;
