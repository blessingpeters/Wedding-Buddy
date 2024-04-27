import { useUser } from "../../context/UserContext";

const CoupleDashboard = () => {
  const {userData} = useUser()
  const usernames = `${userData.brideName} & ${userData.groomName}`;
  return (
    <section className="lg:px-16 sm:px-8 px-3 py-10 font-raleway">

        <div className=" text-graywhite-600">
          <h1 className="md:text-4xl text-2xl my-2">Hi {usernames}</h1>
          <p className="font-lato md:text-2xl text-lg">Welcome couple. You can check and manage your wishlist, checklist, budget and guestlist overview.</p>
        </div>

      <div className=" my-10 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 place-items-center">
        <div className="text-center text-xl bg-white shadow-2xl pt-4 w-full h-full flex flex-col justify-between">
            <h2 className="font-bold md:text-7xl text-4xl">10</h2>
            <p className="font-semibold my-4">Vendors Wish list</p>
            <button className="font-semibold w-full bg-burgundy-100 text-white p-2">View All</button>
        </div>
        <div className="text-center text-xl bg-white shadow-2xl pt-4 w-full h-full flex flex-col justify-between">
            <h2 className="font-bold md:text-7xl text-4xl">9</h2>
            <p className="font-semibold my-4">Guest List</p>
            <button className="font-semibold w-full bg-burgundy-100 text-white p-2">View All</button>
        </div>
        <div className="text-center text-xl bg-white shadow-2xl pt-4 w-full h-full flex flex-col justify-between">
            <h2 className="font-bold md:text-7xl text-4xl">8</h2>
            <p className="font-semibold my-4">Total to Do</p>
            <button className="font-semibold w-full bg-burgundy-100 text-white p-2">View All</button>
        </div>
        <div className="text-center text-xl bg-white shadow-2xl pt-4 w-full h-full flex flex-col justify-between">
            <p className="text-xs">Spent N 2,000,00 out of 5,000.00 yet</p>
            <h2 className="font-bold lg:text-5xl  text-4xl">N5,000,000</h2>
            <p className="font-semibold my-4">Budget</p>
            <button className="font-semibold w-full bg-burgundy-100 text-white p-2">View All</button>
        </div>
        <div className="text-center text-xl bg-white shadow-2xl pt-4 w-full h-full flex flex-col justify-between">
            <h2 className="font-bold md:text-7xl text-4xl">24</h2>
            <p className="font-semibold my-4">Clients</p>
            <button className="font-semibold w-full bg-burgundy-100 text-white p-2">View All</button>
        </div>
      </div>


    </section>
  )
}

export default CoupleDashboard
