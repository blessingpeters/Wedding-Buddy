import { useState } from "react";
import WbButton from "../../components/common/WbButton"
import AddPlannigTips from "../../components/sidebar/AddPlanningTips";

const Tips = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [tips, setTips] = useState(planningTips);

  const addNewTips = (newItem) => {
    const newId = planningTips.length + 1;
    setTips([...tips, { ...newItem, id: newId }]);
  };

  return (
    <section className="lg:px-16 sm:px-8 px-3 py-10 font-raleway">
      <div className=" text-graywhite-600 flex justify-between items-center">
        <h1 className="md:text-4xl text-2xl my-2">Planning Tips</h1>
        <WbButton
          className="rounded-2xl font-semibold w-24" text="Add"
          size="small"
          onClick={() => setIsSidebarOpen(true)}
        />

      </div>
      <p className="font-lato text-lg text-graywhite-600 my-4">Here are a few planning tips to start with to ensure you have a hassle-free wedding, you can add more tips to tailor the tips to your specification</p>

      <div className="grid lg:grid-cols-2 gap-x-6 gap-y-3" >
        {tips.map((tip) => (
          <div key={tip.id} className="flex gap-4 p-6 bg-[#E1E0E080] rounded-2xl">
            <label htmlFor="checkbox">
            <input className="w-7 h-7 p mt-2 appearance-none border border-black  checked:bg-burgundy-100 checked:border-0 rounded" type="checkbox" name="checkbox" id="checkbox" />
            </label>
            <div className="basis-11/12">
              <p className="font-semibold text-xl tracking-wide">{tip.title}</p>
              <p className="text-[#635E5E] font-lato">{tip.desc}</p>
            </div>

          </div>
        ))

        }

      </div>
      <AddPlannigTips isOpen={isSidebarOpen} closeSidebar={() => setIsSidebarOpen(false)} addNewTips={addNewTips} />
    </section>
  )
}
const planningTips = [
  {
    id: 1,
    title: "Start Early",
    desc: "Begin planning as soon as possible to secure your preferred vendors and venues, especially if you have a specific date in mind."
  },
  {
    id: 2,
    title: "Set a Budget",
    desc: "Determine your budget early on and allocate funds to each aspect of the wedding, prioritizing what's most important to you as a couple."
  },
  {
    id: 3,
    title: "Create a Timeline",
    desc: " Develop a timeline outlining key milestones and deadlines leading up to the wedding day to help you stay organized and on track."
  }
  , {
    id: 4,
    title: "Choose the Right Venue",
    desc: "Select a venue that aligns with your vision, accommodates your guest list comfortably, and fits within your budget."
  }
  , {
    id: 5,
    title: "Delegate Tasks",
    desc: "Don't hesitate to delegate tasks to trusted friends and family members or consider hiring a wedding planner to help alleviate stress and ensure everything runs smoothly."
  }, {
    title: "Communicate Clearly",
    desc: " Keep open lines of communication with your partner, families, and vendors to ensure everyone is on the same page and working towards the same goal."
  },
]
export default Tips
