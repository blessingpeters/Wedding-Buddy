

const ClientsCards = () => {
    return (
      <section className="flex flex-col max-w-screen-2xl mx-auto font-raleway ">
        <div className="">
          {ourServices.map((service, index) =>(
              <div key={index} className="flex flex-col justify-between sm:flex-row gap-5 sm:py-16  sm:px-12 p-4 sm:odd:pr-0 sm:even:pl-0 text-gold-100 even:text-burgundy-100 bg-white even:bg-gold-100/20 sm:even:flex-row-reverse">
                  <div className=" basis-1/2">
                      <h3 className="lg:text-5xl text-3xl md:my-10 my-5 font-semibold">{service.heading}</h3>
                      <p className="text-graywhite-400 lg:text-3xl text-xl font-medium">{service.text}</p>
                  </div>
                  <div className="md:h-[562px] basis-1/2  lg:basis-2/5 items-end">
                      <img className="h-full w-full object-cover rounded-2xl" src={service.image} alt="service image" />
                  </div>
  
              </div>
          ))}
        </div>
  
      </section>
    );
  };
  const ourServices =[
      {
          image: "/assets/images/kojo.png",
          heading: "Mr/Mrs Kojo",
          text: "Wedding planning can feel overwhelming, but Wedding Buddy made it a breeze! We're both tech-savvy and loved having all the vendor options at our fingertips. The detailed profiles and user reviews helped us narrow down our choices and find vendors who perfectly matched our vision. Plus, the built-in messaging system made communication with vendors seamless. Wedding Buddy saved us countless hours and tons of stress. We highly recommend it to any couple looking for a modern and efficient way to plan their dream wedding"
      },
      {
          image: "/assets/images/obinna.png",
          heading: "Obinna & Bolaji",
          text: "We were on a tight budget for our wedding, and Wedding Buddy was a lifesaver! The platform's advanced search filters allowed us to find vendors within our price range. We were also thrilled to discover several hidden gems - local vendors with amazing services and competitive pricing. Wedding Buddy helped us stay organized and avoid impulse decisions. Thanks to Wedding Buddy, we were able to plan a beautiful and memorable wedding without breaking the bank!"
      },
      {
          image: "/assets/images/nana.png",
          heading: "Nana & Kofi",
          text: "Planning a wedding felt like juggling a million balls! But Wedding Buddy came to our rescue. Their comprehensive vendor directory and helpful planning checklists guided us through the entire process, step-by-step. We especially loved the inspiration gallery, which provided tons of ideas for our wedding theme. Wedding Buddy kept us organized and on track, and we felt much more confident and prepared on our wedding day. We couldn't have done it without them"
      },
      {
          image: "/assets/images/oluchi.png",
          heading: "Adeola & Oluchi",
          text: "We always dreamed of a destination wedding, but planning from afar seemed impossible. Wedding Buddy proved us wrong! Their platform offered a vast selection of vendors specializing in destination weddings. We were able to connect with photographers, caterers, and even ceremony officiants all in one place. Wedding Buddy made communication with international vendors easy and efficient. Our island wedding was perfect, and Wedding Buddy played a huge role in making it happen."
      },
      {
          image: "/assets/images/adesua.png",
          heading: "Mr/Mrs Adesua",
          text: "We weren't your typical bride and groom. We wanted a wedding that reflected our quirky personalities. Wedding Buddy surprised us with their diverse vendor options. We found everything from vintage clothing rentals to a fire-dancing performance troupe! Wedding Buddy allowed us to explore unconventional ideas and connect with vendors who could bring our unique vision to life. Our wedding was a blast, and it wouldn't have been possible without the open-mindedness and variety offered by Wedding Buddy."
      },

  
  ]
  export default ClientsCards;
