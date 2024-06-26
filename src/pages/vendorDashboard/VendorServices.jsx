import { useState } from "react";
import WbButton from "../../components/common/WbButton";
import DeleteModal from "../../components/modals/DeleteModal";
import AddNewService from "../../components/sidebar/AddNewService";

const VendorServices = () => {
  const [clients, setClients] = useState(clientsData);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleDeleteClick = (client) => {
    setSelectedClient(client);
    setShowDeleteModal(true);
  };
  const addNewService = (newItem) => {
    const newId = clients.length + 1;
    setClients([...clients, { ...newItem, id: newId }]);
  };
  return (
    <section className="lg:px-16 px-3 py-10 font-raleway">
      <div className="flex flex-col">
        <div className=" text-graywhite-600">
          <h1 className="md:text-4xl text-2xl mb-2">Services</h1>
          <p className="font-lato md:text-2xl text-lg">
            Here are all our services tailored for your satisfaction
          </p>
        </div>
        <WbButton
          className="rounded-2xl w-max py-3 px-6 text-[16px] self-end mt-6"
          text="Add New Service"
          size="small"
          onClick={() => setIsSidebarOpen(true)}
        />
      </div>

      <div className="text-graywhite-400 font-lato font-medium sm:text-lg tex-sm sm:gap-4 gap-1 w-full">
        {clients.map((client) => (
          <div key={client.id} className="h-[105px] grid grid-cols-5 gap-2  my-4 shadow text-center">

            <img className="grid place-items-center bg-[#7777771A] max-sm:text-xs" src={client.image} alt="166px X 100px" />

            <div className="h-full lg:w-3/4 mx-auto flex flex-col justify-center text-left col-span-2">
              <p className="max-sm:text-xs ">{client.category}</p>
              <p className="sm:text-sm text-xs text-[#979191] font-normal">{client.location}</p>
            </div>

            <p className="max-sm:text-xs flex items-center">N {client.price}</p>
            <div className="max-sm:text-xs flex items-center gap-2 lg:gap-10 flex-wrap">

            <p className=" sm:text-right text-green-800">Edit</p>
            <p className=" text-[#F90303] cursor-pointer"
              onClick={() => handleDeleteClick(client)}>
              Delete
            </p> </div>
          </div>
        ))}
      </div>

      {showDeleteModal && (
        <DeleteModal
          client={selectedClient}
          onClose={() => setShowDeleteModal(false)}
          onDelete={() => {
            setClients(clients.filter((c) => c.id !== selectedClient.id));
            setShowDeleteModal(false);
          }}
        />
      )}
            <AddNewService isOpen={isSidebarOpen} closeSidebar={() => setIsSidebarOpen(false)} addNewService={addNewService}/>
    </section>
  );
};
const clientsData = [
  {
    id:1,
    image: "/assets/images/broken.png",
    category: "Wedding Venue Hall",
    location: "20 Ukah Street, Lagos Nigeria",
    price: "250,000",

  },
   {
    id:2,
    image: "/assets/images/broken.png",
    category: "Photography",
    location: "20 Ukah Street, Lagos Nigeria",
    price: "150,000",

  },
  {
    id:3,
    image: "/assets/images/broken.png",
    category: "Photography",
    location: "20 Ukah Street, Lagos Nigeria",
    price: "150,000",

  },
  {
    id:4,
    image: "/assets/images/broken.png",
    category: "Catering",
    location: "20 Ukah Street, Lagos Nigeria",
    price: "250,000",

  },
  {
    id:5,
    image: "/assets/images/broken.png",
    category: "Catering",
    location: "20 Ukah Street, Lagos Nigeria",
    price: "250,000",

  },
];

export default VendorServices;
