import { useState, useEffect, useRef } from 'react';

const Review = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(window.innerWidth < 960 ? 1 : 2);
    const carouselRef = useRef(null);

    // Adjusts the number of items per page based on the window width
    useEffect(() => {
        const handleResize = () => {
            setItemsPerPage(window.innerWidth < 960 ? 1 : 2);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    

    const numOfSlides = Math.ceil(Reviews.length / itemsPerPage);

    // Function to go to the next slide
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % numOfSlides);
    };

    // Function to go to the previous slide
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + numOfSlides) % numOfSlides);
    };

    // Calculate the reviews to display based on the current index
    const displayReviews = Reviews.slice(currentIndex * itemsPerPage, currentIndex * itemsPerPage + itemsPerPage);

    const indicators = Array.from({ length: numOfSlides }, (_, i) => (
        <button
            key={i}
            className={`indicator ${i === currentIndex ? 'active' : ''}`}
            onClick={() => scrollToIndex(i)}
        >
            {i + 1}
        </button>
    ));
    const scrollToIndex = (index) => {
        if (carouselRef.current) {
            const slideWidth = carouselRef.current.scrollWidth / Reviews.length;
            const newScrollLeft = index * slideWidth * itemsPerPage;
            carouselRef.current.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth',
            });
        }
    };

    return (
        <section className="pt-20 md:px-10 px-3 flex flex-col">
            <div className="bg-[#FAF9F9] py-10 text-center">
                <h1 className="text-center font-raleway pb-6 text-2xl md:text-4xl text-graywhite-600 font-semibold">
                    What our Clients are Saying
                </h1>
                <div className="flex justify-center items-center">
                    <button className='btn-circle bg-[#FFFFFFE5] py-2 px-4 rounded-full mx-2' onClick={prevSlide}>❮</button>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
                        {displayReviews.map((item, index) => (
                            <div className="h-max md:h-[239px] w-full flex flex-col sm:flex-row font-normal p-1 bg-[#FFFFFFE5] shadow-xl" key={index}>
                                <img
                                    className="md:h-full md:w-52 h-52 w-full object-cover"
                                    src={item.image}
                                    alt="couple image"
                                />

                                <div className="flex flex-col justify-between py-3 text-sm md:ml-4">
                                    <div className="flex gap-1 text-left">
                                        <img src="/assets/images/star.svg" alt="star image" />
                                        <img src="/assets/images/star.svg" alt="star image" />
                                        <img src="/assets/images/star.svg" alt="star image" />
                                        <img src="/assets/images/star.svg" alt="star image" />
                                        <img src="/assets/images/star.svg" alt="star image" />
                                    </div>
                                    <h2 className="text-graywhite-400 my-3 text-left">{item.reviewText}</h2>
                                    <div className="text-burgundy-100 text-left">
                                        <p>{item.reviewName}</p>
                                        <p className="text-xs">{item.location}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className='btn-circle bg-[#FFFFFFE5] py-2 px-4 rounded-full mx-2' onClick={nextSlide}>❯</button>
                </div>
                <div className='mt-6'>{indicators}</div>
            </div>
        </section>
    );
};

const Reviews =[
    {
        star: "star",
        image: "/assets/images/weddingcouple.png",
        reviewText: "We love Wedding Buddy, It made our wedding Planning so smooth and hassle-free, It is a great platform for intending Couple ",
        reviewName: "Mr/Mrs Reuben Lawson",
        location: "Nigeria"
    },
    {
        star: "star",
        image: "/assets/images/hoodiecouple.png",
        reviewText: "We love Wedding Buddy, It made our wedding Planning so smooth and hassle-free, It is a great platform for intending Couple ",
        reviewName: "Mr/Mrs Fiifi Appiah",
        location: "Nigeria"
    },
    {
        star: "star",
        image: "/assets/images/renaissance.png",
        reviewText: "We love Wedding Buddy, It made our wedding Planning so smooth and hassle-free, It is a great platform for intending Couple ",
        reviewName: "Mr/Mrs Reuben Lawson",
        location: "Nigeria"
    },
    {
        star: "star",
        image: "/assets/images/hoodiecouple.png",
        reviewText: "We love Wedding Buddy, It made our wedding Planning so smooth and hassle-free, It is a great platform for intending Couple ",
        reviewName: "Mr/Mrs Fiifi Appiah",
        location: "Nigeria"
    },
    {
        star: "star",
        image: "/assets/images/hoodiecouple.png",
        reviewText: "We love Wedding Buddy, It made our wedding Planning so smooth and hassle-free, It is a great platform for intending Couple ",
        reviewName: "Mr/Mrs Reuben Lawson",
        location: "Nigeria"
    }, {
        star: "star",
        image: "/assets/images/hoodiecouple.png",
        reviewText: "We love Wedding Buddy, It made our wedding Planning so smooth and hassle-free, It is a great platform for intending Couple ",
        reviewName: "Mr/Mrs Fiifi Appiah",
        location: "Nigeria"
    }
]

export default Review;
