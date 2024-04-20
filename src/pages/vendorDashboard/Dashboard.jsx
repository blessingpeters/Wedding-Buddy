import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Clients', 'Sub Vendors', 'Bookings'],
  datasets: [
    {
      id: 1,
      label: 'Percentage',
      data: [40, 25, 15],
      backgroundColor: [
        '#50112E',
        '#CC9900',
        '#DA5391',
      ],
      borderColor: ['#ffffff'],
    },
  ],

}
const options = {
  plugins: {
  legend: {
    display: true,
    responsive: true,
    position: "right",
    labels: {
      boxWidth: 20,
      padding: 40,
      font: {
        size: 18
      },
    },
    align: "center",
  },
}}


const VendorDashboard = () => {
  return (
    <section className="lg:px-16 sm:px-8 px-3 py-6 font-raleway">
      <div className="flex justify-between items-center">
        <div className=" text-graywhite-600">
          <h1 className="md:text-4xl text-2xl">Hi, Vendor.</h1>
          <p className="font-lato md:text-2xl text-lg">Here’s what’s happening with your wedding venue business today.</p>
        </div>
        <p className="font-lato text-lg">
          <input className="mr-2" type="checkbox" name="checkbox" id="checkbox" />
          Availability status</p>
      </div>
      <div className="flex justify-between gap-6 my-10 flex-wrap items-center">
        <div className="text-center text-xl bg-white shadow-2xl pt-4 w-72 mx-auto">
            <h2 className="font-bold text-7xl">6</h2>
            <p className="font-semibold my-4">Listed Services</p>
            <button className="font-semibold w-full bg-burgundy-100 text-white p-2">View All</button>
        </div>
        <div className="text-center text-xl bg-white shadow-xl pt-4 w-72 mx-auto">
            <h2 className="font-bold text-7xl">9</h2>
            <p className="font-semibold my-4">Sub Vendors</p>
            <button className="font-semibold w-full bg-burgundy-100 text-white p-2">View All</button>
        </div> <div className="text-center text-xl bg-white shadow-xl pt-4 w-72 mx-auto">
            <h2 className="font-bold text-7xl">24</h2>
            <p className="font-semibold my-4">Clients</p>
            <button className="font-semibold w-full bg-burgundy-100 text-white p-2">View All</button>
        </div>
      </div>
      <div className="max-w-[500px] h-[500px]">
    <Doughnut datasetIdKey='id' data={data} options={options}/>
      </div>

    </section>
  )
}
export default VendorDashboard
