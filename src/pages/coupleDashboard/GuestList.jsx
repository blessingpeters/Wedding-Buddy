import { useState } from "react";
import WbButton from "../../components/common/WbButton";
import AddGuestlist from "../../components/sidebar/AddGuestlist";

const GuestList = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [guests, setGuests] = useState(guestList);

  const addNewGuest = (newItem) => {
    const newId = guests.length + 1;
    setGuests([...guests, { ...newItem, id: newId }]);
  };
  const handleDelete = (id) => {
    setGuests(guests.filter((budget) => budget.id !== id));
  };
  return (
    <section className="lg:px-16 sm:px-8 px-3 py-10 font-raleway">
      <div className="flex flex-col">
        <div className=" my-10 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
          <div className="font-semibold  bg-[#E1CAF1] shadow-2xl py-1 px-4 flex flex-col justify-between h-36">
            <h2 className="text-6xl">220</h2>
            <p className="font-lato font-bold">Guests</p>
          </div>
          <div className="font-semibold  bg-[#CFEDAD] shadow-2xl py-1 px-4 flex flex-col justify-between h-36">
            <h2 className="text-6xl">140</h2>
            <p className="font-lato font-bold">Accepted</p>
          </div>
          <div className="font-semibold  bg-[#FFF4BF] shadow-2xl py-1 px-4 flex flex-col justify-between h-36">
            <h2 className="text-6xl">40</h2>
            <p className="font-lato font-bold">Pending</p>
          </div>
          <div className="font-semibold  bg-[#FFD5BB] shadow-2xl py-1 px-4 flex flex-col justify-between h-36">
            <h2 className="text-6xl">40</h2>
            <p className="font-lato font-bold">Declined</p>
          </div>
        </div>
        <WbButton
          className="rounded-2xl font-lato w-max self-end mt-6"
          text="Add New Guest"
          size="small"
          onClick={() => setIsSidebarOpen(true)}
        />
      </div>
      <p className=" text-graywhite-400 font-lato lg:text-2xl my-2">
        My Guest List
      </p>
      <div className="grid grid-cols-6 gap-2 p-5 shadow  bg-[#E1E0E01A] text-pretty font-lato max-sm:text-xs">
        <p>Guest Name</p>
        <p>Group</p>
        <p>Email</p>
        <p className="text-center">Invite Sent</p>
        <p>Status</p>
        <p className="text-center">Action</p>
      </div>
      {guests.map((guest) => (
        <div
          key={guest.id}
          className="max-sm:text-xs text-graywhite-400 font-lato p-5 border grid grid-cols-6 gap-2"
        >
          <p>{guest.guestName}</p>
          <p>{guest.group}</p>
          <p className=" break-words">{guest.email}</p>
          <p>
            <div className="p-4 border rounded-full w-6 h-6 mx-auto"></div>
          </p>
          <p>{guest.status}</p>
          <p className="flex flex-wrap gap-1 justify-center">
            <button className="cursor-pointer text-burgundy-100 border border-burgundy-200 sm:px-2 rounded">
              View
            </button>
            <button
              onClick={() => handleDelete(guest.id)}
              className="cursor-pointer text-red-500 border border-red-500 sm:px-2 rounded"
            >
              Delete
            </button>
          </p>
        </div>
      ))}

      <AddGuestlist
        isOpen={isSidebarOpen}
        closeSidebar={() => setIsSidebarOpen(false)}
        addNewGuest={addNewGuest}
      />
    </section>
  );
};
const guestList = [
  {
    id: 1,
    guestName: "Deborah hanson",
    group: "Groom's Family",
    email: "hanson@gmail.com",
    status: "Confirmed",
  },
  {
    id: 2,
    guestName: "Deborah hanson",
    group: "Groom's Family",
    email: "hanson@gmail.com",
    status: "Confirmed",
  },
  {
    id: 3,
    guestName: "Deborah hanson",
    group: "Groom's Family",
    email: "hanson@gmail.com",
    status: "Confirmed",
  },
  {
    id: 4,
    guestName: "Blessing Peter",
    group: "Groom's Family",
    email: "hanson@gmail.com",
    status: "Confirmed",
  },
];

export default GuestList;
