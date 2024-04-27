import { useState } from "react";
import WbButton from "../../components/common/WbButton"
import AddBudget from "../../components/sidebar/AddBudget";
import {Tabs, Tab} from '../../components/VendorTab';


const Budget = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [couplesBudget, setCouplesBudget] = useState(CoupleBudget)
  const [budgetDetails, setBudgetDetails] = useState(BudgetDetails)

  const handleDelete = (id) => {
    setBudgetDetails(budgetDetails.filter(detail => detail.id !== id));
  };
  const addNewBudgetItem = (newItem) => {
    const newId = budgetDetails.length + 1; // Simplistic approach to generate a new ID
    setCouplesBudget([...couplesBudget, { ...newItem, id: newId }]);
    setBudgetDetails([...budgetDetails, { ...newItem, id: newId }]);
  };



  return (
    <section className="lg:px-16 sm:px-8 px-3 py-10 font-raleway">
      <div className="flex flex-col">
        <div className=" text-graywhite-600">
          <h1 className="md:text-4xl text-2xl my-2">Budget</h1>
          <p className="font-lato md:text-2xl text-lg">
          Embark on Your Wedding Journey with Confidence and Clarity: Plan Your Dream Day with a Specified Budget.
          </p>
        </div>
        <WbButton
          className="rounded-2xl w-max self-end mt-6"
          text="Add Budget Category"
          size="small"
          onClick={() => setIsSidebarOpen(true)}
        />
      </div>
      <Tabs className="gap-8 text-graywhite-400">
        <Tab label="Budget">
        <div className="grid grid-cols-5 gap-2 py-5 shadow text-center bg-[#E1E0E01A] text-pretty font-lato max-sm:text-xs">
            <p>Wedding Event</p>
            <p>Estimate</p>
            <p>Actual</p>
            <p>Paid</p>
            <p>Status</p>

        </div>
        {couplesBudget.map((budget) => (
          <div key={budget.id} className="max-sm:text-xs text-graywhite-400 font-lato py-5 border grid grid-cols-5 gap-2 text-center">
            <p>{budget.event}</p>
            <p>N {budget.estimate}</p>
            <p>N {budget.actual}</p>
            <p>N {budget.paid}</p>
            <p>{budget.status}</p>
          </div>
        ))}
        </Tab>
        <Tab label="Budget Details" className=" start-0">
        <div className="grid grid-cols-6 gap-2 py-5 shadow text-center max-sm:text-xs bg-[#ECECEC80] text-pretty font-lato">
            <p>Wedding Event</p>
            <p>Estimate</p>
            <p>Actual</p>
            <p>Paid</p>
            <p>Status</p>
            <p>Action</p>
        </div>
        {budgetDetails.map((detail) => (
          <div key={detail.id} className="max-sm:text-xs text-graywhite-400 font-lato py-5 border grid grid-cols-6 gap-2 text-center">
          <p>{detail.event}</p>
          <p>N {detail.estimate}</p>
          <p>N {detail.actual}</p>
          <p>N {detail.paid}</p>
          <p>{detail.status}</p>
          <p>
          <button onClick={() => handleDelete(detail.id)}  className="cursor-pointer text-burgundy-100 border border-burgundy-100 sm:py-1 sm:px-2 rounded">Delete</button>
          </p>
        </div>
        ))}
        </Tab>

      </Tabs>
      <AddBudget isOpen={isSidebarOpen} closeSidebar={() => setIsSidebarOpen(false)} addNewBudgetItem={addNewBudgetItem} />
    </section>
  )
}
const CoupleBudget = [
  {
    id:1,
    event: "Venue",
    estimate: "300,000",
    actual: "400,000",
    paid: "0",
    status: "Pending"

  },
  {
    id:2,
    event: "Venue",
    estimate: "300,000",
    actual: "400,000",
    paid: "0",
    status: "Pending"

  },
  {
    id:3,
    event: "Venue",
    estimate: "300,000",
    actual: "300,000",
    paid: "300,000",
    status: "Completed"

  },

];
const BudgetDetails = [
  {
    id:1,
    event: "Venue",
    estimate: "300,000",
    actual: "400,000",
    paid: "0",
    status: "Pending"

  },
  {
    id:2,
    event: "Venue",
    estimate: "300,000",
    actual: "400,000",
    paid: "0",
    status: "Pending"

  },


];

export default Budget
