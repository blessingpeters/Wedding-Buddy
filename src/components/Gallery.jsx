const Gallery = () => {
  return (
    <section className="py-10 pb-16 lg:px-20 md:px-10 px-3 flex flex-col">
      <div className="pb-10 text-center">
        <h2 className="md:text-4xl text-2xl font-raleway font-semibold text-graywhite-600">
          Our Featured Wedding Photos/Gallery
        </h2>
        <p className="sm:w-[80%] mt-5 mx-auto md:text-xl text-lg font-lato text-graywhite-400">
          Allow yourself to be enveloped by the timeless elegance of eternal
          love: immerse your senses in our carefully curated collection of
          exquisite featured wedding photos and galleries, where each and every
          moment intricately weaves a captivating narrative.
        </p>
      </div>
      <div className="columns-3 w-full h-full">
        <img
          className="w-full object-cover aspect-video"
          src="/assets/images/wedding-image2.png"
          alt="gallery photo"
        />
        <img
          className="w-full object-cover mt-3 aspect-square"
          src="/assets/images/Laila-and-Kaz-Wedding.png"
          alt="gallery photo"
        />
        <img
          className="w-full object-cover aspect-square"
          src="/assets/images/Jema-Photography.png"
          alt="gallery photo"
        />
        <img
          className="w-full object-cover aspect-video mt-3"
          src="/assets/images/renaissance.png"
          alt="gallery photo"
        />
        <img
          className="w-full object-cover aspect-auto"
          src="/assets/images/OmaStyle-Bride.png"
          alt="gallery photo"
        />
        <img
          className="w-full mt-3 object-cover"
          src="/assets/images/wdd.png"
          alt="gallery photo"
        />
      </div>
    </section>
  );
};

//   const galleryImages = [
//     {
//         src: '/assets/images/wedding-image2.png',
//         alt: 'Gallery image'
//     },
//     {
//         src: 'assets/images/Jema-Photography.png',
//         alt: 'Gallery image'
//     },
//     {
//         src: '/assets/images/OmaStyle-Bride.png',
//         alt: 'Gallery image'
//     },
//     {
//         src: '/assets/images/Laila-and-Kaz-Wedding.png',
//         alt: 'Gallery image'
//     },
//     {
//         src: '/assets/images/renaissance.png',
//         alt: 'Gallery image'
//     },
//     {
//         src: '/assets/images/wdd.png',
//         alt: 'Gallery image'
//     },

//   ];

export default Gallery;
