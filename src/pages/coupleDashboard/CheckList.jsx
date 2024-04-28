import { useState } from "react";
import AddChecklist from "../../components/sidebar/AddChecklist";
import { Tabs, Tab } from '../../components/VendorTab';
import ChecklistItems from "../../components/ChecklistItems";

const CheckList = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [checklists, setChecklists] = useState(initialChecklists);
    const [activeCategory, setActiveCategory] = useState('');

    const addNewChecklist = (category, newItem) => {
        const newId = checklists[category].length + 1 + Math.random();
        setChecklists({
            ...checklists,
            [category]: [...checklists[category], { ...newItem, id: newId }]
        });
    };

    return (
        <section className="lg:px-16 sm:px-8 px-3 py-10 font-raleway">
            <Tabs className="gap-10 text-white text-center py-4 px-10 flex-wrap tracking-wide" activeTabStyle="bg-burgundy-100 rounded-md py-2 px-6" inactiveTabStyle="bg-[#979191] rounded-md py-2 px-6 ">
                {Object.keys(checklists).map(category => (
                    <Tab key={category} label={category}>
                        <ChecklistItems
                            category={category}
                            setIsSidebarOpen={() => { setIsSidebarOpen(true); setActiveCategory(category); }}
                            checklists={checklists[category]}
                            addNewChecklist={addNewChecklist}
                        />
                    </Tab>
                ))}
            </Tabs>
            <AddChecklist isOpen={isSidebarOpen} closeSidebar={() => setIsSidebarOpen(false)} addNewChecklist ={(newItem) => addNewChecklist (activeCategory, newItem)} category={activeCategory} />
        </section>
    );
}

export default CheckList;
const initialChecklists = {
  Personal: [
      {
        id: 1,
        taskTitle: "Call Vendor",
        taskNote: "Ensure to close deal with vendor"
      },
      {
        id: 2,
        taskTitle: "Call Vendor",
        taskNote: "Ensure to close deal with vendor"
      },
      {
        id: 3,
        taskTitle: "Call Vendor",
        taskNote: "Ensure to close deal with vendor"
      },
      {
        id: 4,
        taskTitle: "Call Vendor",
        taskNote: "Ensure to close deal with vendor"
      },
      {
        id: 5,
        taskTitle: "Call Vendor",
        taskNote: "Ensure to close deal with vendor"
      },
      {
        id: 6,
        taskTitle: "Call Vendor",
        taskNote: "Ensure to close deal with vendor"
      },
  ],
  Budget: [
      { id: 7,
        // taskTitle: "Call Vendor",
        taskNote: "Determine budget and decide who is contributing what"
      },
      { id: 8,
        // taskTitle: "Call Vendor",
        taskNote: "Establish your top priority from highest to owest"
      },
      { id: 9,
        taskNote: "Pay for major expenses first (venue, catering, etc"
      },
      { id: 10,

        taskNote: "Define where you could potentially save money by asking your friends and family for help"
      },
      { id: 11,

        taskNote: "Figure out tips and final payments for vendors"
      },
      { id: 12,

        taskNote: "Track your spending as you go to have an accurate overview"
      }
  ],
  Venue: [],
  Bachelorette: [],
  Invitations: [],
  Day_Of_Wedding: [],
  Food_And_Drinks: [],
  Honeymoon: []
};
