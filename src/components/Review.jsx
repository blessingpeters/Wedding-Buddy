import { useState, useEffect, useRef } from "react";

const Review = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(
    window.innerWidth < 1024 ? 1 : 2
  );
  const carouselContainerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 1024 ? 1 : 2);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const updateScrollPosition = () => {
      if (carouselContainerRef.current) {
        const containerWidth = carouselContainerRef.current.offsetWidth;
        carouselContainerRef.current.scrollLeft = containerWidth * currentIndex;
      }
    };

    updateScrollPosition();
  }, [currentIndex, itemsPerPage]);

  const numOfSlides = Math.ceil(Reviews.length / itemsPerPage);

  const scrollToIndex = (index) => {
    setCurrentIndex(index);
  };

  return (

      <section className="bg-[#FAF9F9] py-10 text-center flex flex-col items-center">
        <h1 className="text-center font-raleway pb-6 text-2xl md:text-4xl text-gray-600 font-semibold">
          What our Clients are Saying
        </h1>
        <div className="flex justify-between items-center w-full h-max">
          <button
            onClick={() =>
              scrollToIndex((currentIndex - 1 + numOfSlides) % numOfSlides)
            }
            className="bg-[#FFFFFFE5] py-2 px-4 rounded-full mx-2"
          >
            ❮
          </button>

          <div
            ref={carouselContainerRef}
            className="overflow-x-auto no-scrollbar scroll-smooth flex snap-x snap-mandatory gap-4"
          >
            {Reviews.map((item, index) => (
              <div
                className={`snap-start min-w-full ${itemsPerPage === 2 ? "lg:min-w-[50%]" : ""}`}
                key={index}
              >
                <div className="h-max sm:h-[239px] my-4 w-full flex flex-col sm:flex-row font-normal p-1 bg-[#FFFFFFE5] shadow-3xl">
                  <img
                    className="sm:h-full sm:w-52 h-40 w-full object-cover"
                    src={item.image}
                    alt="couple image"
                  />
                  <div className="flex flex-col justify-between py-3 sm:ml-4">
                    <div className="flex gap-1 text-left">
                      <img src="/assets/images/star.svg" alt="star image" />
                      <img src="/assets/images/star.svg" alt="star image" />
                      <img src="/assets/images/star.svg" alt="star image" />
                      <img src="/assets/images/star.svg" alt="star image" />
                      <img src="/assets/images/star.svg" alt="star image" />
                    </div>
                    <h2 className="text-graywhite-400 text-sm lg:text-lg my-3 text-left">
                      {item.reviewText}
                    </h2>
                    <div className="text-burgundy-100 text-sm text-left">
                      <p>{item.reviewName}</p>
                      <p className="text-xs">{item.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scrollToIndex((currentIndex + 1) % numOfSlides)}
            className="bg-[#FFFFFFE5] py-2 px-4 rounded-full mx-2"
          >
            ❯
          </button>
        </div>
        <div className="flex justify-center gap-2 mt-6 p-2 rounded-xl  bg-[#FFFFFFE5]">
          {Array.from({ length: numOfSlides }).map((_, i) => (
            <button
              key={i}
              className={`h-2 w-2 rounded-full ${(i === currentIndex )? "bg-black" : "bg-[#D0D5DD]"}`}
              onClick={() => scrollToIndex(i)}
              aria-label={`Slide ${i + 1}`}
            ></button>
))}
        </div>

    </section>
  );
};

const Reviews = [
  {
    star: "star",
    image: "/assets/images/weddingcouple.png",
    reviewText:
      "We love Wedding Buddy, It made our wedding Planning so smooth and hassle-free, It is a great platform for intending Couple ",
    reviewName: "Mr/Mrs Reuben Lawson",
    location: "Nigeria",
  },
  {
    star: "star",
    image: "/assets/images/hoodiecouple.png",
    reviewText:
      "We love Wedding Buddy, It made our wedding Planning so smooth and hassle-free, It is a great platform for intending Couple ",
    reviewName: "Mr/Mrs Fiifi Appiah",
    location: "Nigeria",
  },
  {
    star: "star",
    image: "/assets/images/renaissance.png",
    reviewText:
      "We love Wedding Buddy, It made our wedding Planning so smooth and hassle-free, It is a great platform for intending Couple ",
    reviewName: "Mr/Mrs Reuben Lawson",
    location: "Nigeria",
  },
  {
    star: "star",
    image: "/assets/images/hoodiecouple.png",
    reviewText:
      "We love Wedding Buddy, It made our wedding Planning so smooth and hassle-free, It is a great platform for intending Couple ",
    reviewName: "Mr/Mrs Fiifi Appiah",
    location: "Nigeria",
  },
  {
    star: "star",
    image: "/assets/images/weddingcouple.png",
    reviewText:
      "We love Wedding Buddy, It made our wedding Planning so smooth and hassle-free, It is a great platform for intending Couple ",
    reviewName: "Mr/Mrs Reuben Lawson",
    location: "Nigeria",
  },
  {
    star: "star",
    image: "/assets/images/hoodiecouple.png",
    reviewText:
      "We love Wedding Buddy, It made our wedding Planning so smooth and hassle-free, It is a great platform for intending Couple ",
    reviewName: "Mr/Mrs Fiifi Appiah",
    location: "Nigeria",
  },
  {
    star: "star",
    image: "/assets/images/weddingcouple.png",
    reviewText:
      "We love Wedding Buddy, It made our wedding Planning so smooth and hassle-free, It is a great platform for intending Couple ",
    reviewName: "Mr/Mrs Reuben Lawson",
    location: "Nigeria",
  },
  {
    star: "star",
    image: "/assets/images/hoodiecouple.png",
    reviewText:
      "We love Wedding Buddy, It made our wedding Planning so smooth and hassle-free, It is a great platform for intending Couple ",
    reviewName: "Mr/Mrs Fiifi Appiah",
    location: "Nigeria",
  },
];

export default Review;
