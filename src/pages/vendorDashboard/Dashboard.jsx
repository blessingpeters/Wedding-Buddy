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
    <section className="lg:px-16 sm:px-8 px-3 py-10 font-raleway">
      <div className="flex justify-between items-center gap-4">
        <div className=" text-graywhite-600">
          <h1 className="md:text-4xl text-2xl">Hi, Vendor.</h1>
          <p className="font-lato md:text-2xl text-lg">Here’s what’s happening with your wedding venue business today.</p>
        </div>
        <p className="font-lato text-lg flex items-center">
          <input className="mr-2 h-6 w-6 checked:text-burgundy-200 checkbox" type="checkbox" name="checkbox" id="checkbox" />
          Availability status</p>
      </div>
      <div className=" my-10 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 place-items-center">
        <div className="text-center text-xl bg-white shadow-2xl pt-4 w-full">
            <h2 className="font-bold md:text-7xl text-4xl">6</h2>
            <p className="font-semibold my-4">Listed Services</p>
            <button className="font-semibold w-full bg-burgundy-100 text-white p-2">View All</button>
        </div>
        <div className="text-center text-xl bg-white shadow-2xl pt-4 w-full">
            <h2 className="font-bold md:text-7xl text-4xl">9</h2>
            <p className="font-semibold my-4">Sub Vendors</p>
            <button className="font-semibold w-full bg-burgundy-100 text-white p-2">View All</button>
        </div>
        <div className="text-center text-xl bg-white shadow-2xl pt-4 w-full">
            <h2 className="font-bold md:text-7xl text-4xl">24</h2>
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
