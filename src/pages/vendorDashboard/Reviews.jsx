import { useState } from "react";
const Reviews = () => {
  const [expandedReview, setExpandedReview] = useState(null);

  const toggleDetails = (id) => {
    if (expandedReview === id) {
      setExpandedReview(null); // Close the accordion if it's already open
    } else {
      setExpandedReview(id); // Open the accordion for the clicked review
    }
  };

  return (
    <section className="lg:px-16 sm:px-8 px-3 pb-10 font-raleway">
      <div className=" text-graywhite-600 font-semibold  py-10 border-b border-[#AFABAB]">
        <h1 className="md:text-4xl text-2xl my-2">Reviews</h1>
        <p>Check your latest reviews</p>
      </div>
      <div className="flex my-6 font-lato gap-4">
        <div className="bg-white shadow-2xl lg:p-6 px-3 basis-2/5">
          <p>Average Ratings</p>
          <div className="mb-2 my-4">
            <p className="text-4xl">4.8</p>
            <p>Reviews</p>
          </div>
          <div className="flex w-full flex-wrap lg:gap-1">
            <img src="/assets/icons/filledstar.svg" alt="filled star" />
            <img src="/assets/icons/filledstar.svg" alt="filled star" />
            <img src="/assets/icons/filledstar.svg" alt="filled star" />
            <img src="/assets/icons/filledstar.svg" alt="filled star" />
            <img src="/assets/icons/filled-halfstar.svg" alt="filled star" />
          </div>
          <p className="text-graywhite-400">4.8 average based on 5 ratings</p>
        </div>
        <div className="bg-white shadow-2xl lg:p-6 p-3 basis-3/5 ">
          <p>Review Summary</p>
          <div className="flex items-center justify-center lg:mx-2 my-4 lg:gap-4">
            <p className="basis-2/5">Quality Service</p>
            <div className="w-full bg-[#E1E0E0] rounded-full h-3.5 ">
              <div className="bg-[#FFBF00] h-3.5 rounded-full w-[85%]"></div>
            </div>
            <p>86%</p>
          </div>
          <div className="flex items-center justify-center lg:mx-2 my-4 lg:gap-4">
            <p className="basis-2/5">Facilities</p>
            <div className="w-full bg-[#E1E0E0] rounded-full h-3.5 ">
              <div className="bg-[#FFBF00] h-3.5 rounded-full w-[35%]"></div>
            </div>
            <p>35%</p>
          </div>
          <div className="flex items-center justify-center lg:mx-2 my-4 lg:gap-4">
            <p className="basis-2/5">Staff</p>
            <div className="w-full bg-[#E1E0E0] rounded-full h-3.5 ">
              <div className="bg-[#FFBF00] h-3.5 rounded-full w-[7%]"></div>
            </div>
            <p>7%</p>
          </div>
          <div className="flex items-center justify-center lg:mx-2 my-4 lg:gap-4">
            <p className="basis-2/5">Flexibility</p>
            <div className="w-full bg-[#E1E0E0] rounded-full h-3.5 ">
              <div className="bg-[#FFBF00] h-3.5 rounded-full w-[5%]"></div>
            </div>
            <p>5%</p>
          </div>
          <div className="flex items-center justify-center lg:mx-2 my-4 lg:gap-4">
            <p className="basis-2/5">Quality Service</p>
            <div className="w-full bg-[#E1E0E0] rounded-full h-3.5 ">
              <div className="bg-[#FFBF00] h-3.5 rounded-full w-[10%]"></div>
            </div>
            <p>10%</p>
          </div>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-5 gap-2 p-5 shadow  bg-[#B4A3F824] text-pretty font-lato max-sm:text-xs">
          <p>Name</p>
          <p>Ratings</p>
          <p>Email</p>
          <p>Time </p>
          <p className="text-center">Action</p>
        </div>
        {reviewInfo.map((info) => (
          <div
            key={info.id}
            className="max-sm:text-xs text-graywhite-400 text-sm font-lato p-5 border-b border-gray-200 grid grid-cols-5 gap-2 bg-[#F9F9F9]"
          >
            <p>{info.name}</p>
            <div className="flex w-full flex-wrap lg:gap-1">
              <img
                className="w-5 h-5"
                src="/assets/icons/filledstar.svg"
                alt="filled star"
              />
              <img
                className="w-5 h-5"
                src="/assets/icons/filledstar.svg"
                alt="filled star"
              />
              <img
                className="w-5 h-5"
                src="/assets/icons/filledstar.svg"
                alt="filled star"
              />
              <img
                className="w-5 h-5"
                src="/assets/icons/filledstar.svg"
                alt="filled star"
              />
              <img
                className="w-5 h-5"
                src="/assets/icons/filled-halfstar.svg"
                alt="filled star"
              />
            </div>
            <p className=" break-words">{info.email}</p>
            <p>{info.time}</p>

            <button className="cursor-pointer text-center w-max h-max mx-auto text-burgundy-100 border border-burgundy-200 px-2 rounded"
              onClick={() => toggleDetails(info.id)}>
              {expandedReview === info.id ? "Close" : "Details"}
            </button>
            {expandedReview === info.id && (
              <div className="col-span-5 mt-2 p-2 rounded-lg">
                <div className="flex flex-wrap gap-4">
                  <img src={info.image} alt="Review" className="h-24 w-28 mb-2" />
                  <div>
                    <p>{info.name}</p>
                    <div className="flex gap-1 my-2">
                      {Array.from({ length: info.star }, (_, i) => (
                        <img key={i} className="w-5 h-5" src="/assets/icons/filledstar.svg" alt="filled star" />
                      ))}
                    </div>
                    <p>{info.desc}</p>
                  </div>
                </div>
                <p>{info.desc}</p>
                <div className="my-2 flex flex-col gap-2 lg:w-2/6">
                  <div className="flex items-center justify-between gap-4">
                    <p className="">Quality Service</p>
                    <div className="flex gap-1">
                      {Array.from({ length: info.star }, (_, i) => (
                        <img key={i} className="w-5 h-5" src="/assets/icons/filledstar.svg" alt="filled star" />
                      ))}
                    </div>

                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <p className="">Facilities</p>
                    <div className="flex gap-1">
                      {Array.from({ length: info.star }, (_, i) => (
                        <img key={i} className="w-5 h-5" src="/assets/icons/filledstar.svg" alt="filled star" />
                      ))}
                    </div>

                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <p className="">Staff</p>
                    <div className="flex gap-1">
                      {Array.from({ length: info.star }, (_, i) => (
                        <img key={i} className="w-5 h-5" src="/assets/icons/filledstar.svg" alt="filled star" />
                      ))}
                    </div>

                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <p className="">Flexibility</p>
                    <div className="flex gap-1">
                      {Array.from({ length: info.star }, (_, i) => (
                        <img key={i} className="w-5 h-5" src="/assets/icons/filledstar.svg" alt="filled star" />
                      ))}
                    </div>

                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <p className="">Value of Money</p>
                    <div className="flex gap-1">
                      {Array.from({ length: info.star }, (_, i) => (
                        <img key={i} className="w-5 h-5" src="/assets/icons/filledstar.svg" alt="filled star" />
                      ))}
                    </div>

                  </div>



                </div>
              </div>
            )}

          </div>
        ))}
      </div>
    </section>
  );
};

const reviewInfo = [
  {
    id: 1,
    image: "/assets/images/review-img.png",
    name: "Peace & Edward",
    email: "pedward@gmail.com",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    star: 5,
    time: "5 hours ago",
  },

  {
    id: 2,
    image: "/assets/images/review-img.png",
    name: "Ugo & Daniel",
    email: "pedward@gmail.com",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    star: 3,
    time: "5 hours ago",
  },
  {
    id: 3,
    image: "/assets/images/review-img.png",
    name: "Blessing & Peter",
    email: "pedward@gmail.com",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    star: 5,
    time: "5 hours ago",
  },
  {
    id: 4,
    image: "/assets/images/review-img.png",
    name: "Kofi & Nana",
    email: "pedward@gmail.com",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    star: 4,
    time: "5 hours ago",
  },
];

export default Reviews;
