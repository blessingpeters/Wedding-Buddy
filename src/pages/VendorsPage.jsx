import VendorsHeader from '../components/header/VendorsHeader'
import VendorsCategory from '../components/VendorsCategory';

const VendorsPage = () => {
  return (
    <>
      <VendorsHeader />
      <VendorsCategory />
      <section className="bg-gradient-to-br from-burgundy-100 to-burgundy-200 text-gold-100 font-raleway pt-14 pb-24 lg:px-20 md:px-10 px-3">
        <div className="pb-10 text-center px-3">
          <h3 className="md:text-4xl text-2xl font-semibold">
            All Wedding Vendors Categories
          </h3>
          <p className="lg:text-2xl">
            Find all the wedding experts you need, Select from the categories below
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-sm:text-center ">
          {
            allcategories.map((category, index) => (
              <div key={index} className='py-8 px-4 text-xl font-semibold shadow-2.5xl shadow-black/15 mx-8'>
                <p>{category.category}</p>
              </div>
            ))
          }

        </div>
      </section>
      <section className="relative h-[130px] bg-gradient-to-b from-[#581332] to-[#BE3071]">

      </section>

    </>
  )
}
const allcategories = [
  {
    category: "Wedding Planners"
  },
  {
    category: "Caterers"
  },
  {
    category: "Transportation"
  },
  {
    category: "Bridal Salon"
  },
  {
    category: "Favours + Gifts"
  },
  {
    category: "Rentals"
  },
  {
    category: "Decoration"
  },
  {
    category: "Jewelers"
  },
  {
    category: "Photography/Videographer"
  },
  {
    category: "Florist"
  },
  {
    category: "Venue"
  },
  {
    category: "Reception Venues"
  },
  {
    category: "Beauty"
  },
  {
    category: "Hotel Bookings"
  },
  {
    category: "Travel Specialist"
  },

]
export default VendorsPage;
