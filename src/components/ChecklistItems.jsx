/* eslint-disable react/prop-types */
import WbButton from "./common/WbButton"

const ChecklistItems = ({ setIsSidebarOpen, checklists, addNewChecklist, category }) => {
    return (
        <>
            {checklists.length > 0 ? (
                <>
                    <div className="text-graywhite-600 flex justify-between items-center my-8">
                        <h2 className="lg:text-4xl text-2xl">Your {category} Checklist</h2>
                        <WbButton
                            className="rounded-2xl font-semibold w-24" size="small" text="Add"
                            onClick={setIsSidebarOpen}
                        />
                    </div>
                    <div className="grid lg:grid-cols-2 gap-x-6 gap-y-3">
                        {checklists.map((list) => (
                            <div key={list.id} className="flex gap-4 p-6 bg-[#E1E0E080] rounded-2xl">
                                <label htmlFor={`checkbox-${list.id}`}>
                                    <input className="w-7 h-7 mt-2 appearance-none border border-black checked:bg-burgundy-100 checked:border-0 rounded" type="checkbox" id={`checkbox-${list.id}`} />
                                </label>
                                <div className="flex-1">
                                    <p className="font-semibold text-2xl leading-relaxed tracking-wide">{list.taskTitle}</p>
                                    <p className="text-[#635E5E] font-lato text-xl">{list.taskNote}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <div className="text-center py-16">
                    <h2 className="text-graywhite-600 lg:text-5xl text-2xl">Your {category} Checklist</h2>
                    <p className="lg:text-2xl text-xl my-6">Customize your Checklist with titles and notes to keep track of required activities. You have no personal checklist yet, all Checklist will appear here.</p>
                    <WbButton className="mt-4 w-3/4" text="Create" onClick={setIsSidebarOpen} />
                </div>
            )}
        </>
    );
}

export default ChecklistItems;
