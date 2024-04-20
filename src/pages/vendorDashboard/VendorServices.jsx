import { useState } from "react";
import WbButton from "../../components/common/WbButton";
import DeleteModal from "../../components/modals/DeleteModal";

const VendorServices = () => {
  const [clients, setClients] = useState(clientsData);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);

  const handleDeleteClick = (client) => {
    setSelectedClient(client);
    setShowDeleteModal(true);
  };
  return (
    <section className="lg:px-16 sm:px-8 px-3 py-10 font-raleway">
      <div className="flex flex-col">
        <div className=" text-graywhite-600">
          <h1 className="md:text-4xl text-2xl my-2">Services</h1>
          <p className="font-lato md:text-2xl text-lg">
            Here are all our services tailored for your satisfaction
          </p>
        </div>
        <WbButton
          className="rounded-2xl w-max py-3 px-6 text-[16px] self-end my-6"
          text="Add New Service"
          size="small"
        />
      </div>

      <div className="text-graywhite-400 font-lato font-medium sm:text-lg tex-sm sm:gap-4 gap-1 w-full">
        {clients.map((client) => (
          <div key={client.id} className="grid md:grid-cols-5 grid-cols-3 my-4 shadow text-center gap-4">
            <p className="py-10 bg-[#7777771A]">{client.img}</p>
            <div className="py-10 text-left">
              <p>{client.name}</p>
              <p className="sm:text-sm text-xs text-[#979191] font-normal">{client.address}</p>
            </div>

            <p className="py-10">{client.price}</p>
            <p className="py-10 sm:text-right text-green-800">Edit</p>
            <p className="py-10 text-[#F90303] cursor-pointer"
              onClick={() => handleDeleteClick(client)}>
              Delete
            </p>
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
    </section>
  );
};
const clientsData = [
  {
    img: "166px X 100px",
    name: "Wedding Venue Hall",
    address: "20 Ukah Street, Lagos Nigeria",
    price: "N 250,000",

  },
  {
    img: "166px X 100px",
    name: "Photography",
    address: "20 Ukah Street, Lagos Nigeria",
    price: "N 150,000",

  },
  {
    img: "166px X 100px",
    name: "Photography",
    address: "20 Ukah Street, Lagos Nigeria",
    price: "N 150,000",

  },
  {
    img: "166px X 100px",
    name: "Catering",
    address: "20 Ukah Street, Lagos Nigeria",
    price: "N 250,000",

  },
  {
    img: "166px X 100px",
    name: "Catering",
    address: "20 Ukah Street, Lagos Nigeria",
    price: "N 250,000",

  },
];

export default VendorServices;
