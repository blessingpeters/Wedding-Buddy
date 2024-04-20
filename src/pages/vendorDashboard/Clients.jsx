import { useState } from 'react';
import DeleteModal from '../../components/modals/DeleteModal';

const Clients = () => {
  const [clients, setClients] = useState(clientsData);
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);

  const toggleFilterDropdown = () => {
    setShowFilterDropdown(!showFilterDropdown);
  };

  const handleDeleteClick = (client) => {
    setSelectedClient(client);
    setShowDeleteModal(true);
  };

  return (
    <section className="lg:px-16 sm:px-8 px-3 py-10">
      <table className="table-auto font-lato font-medium text-graywhite-400 text-lg shadow w-full rounded-t-3xl">
        <thead className="font-700 text-left border-b border-[#D7D7D8] rounded-t-2xl">
          <tr className="bg-[#ECECEC80]">
            <th className="pl-6 py-4">Couple Name</th>
            <th>Email Address</th>
            <th>Wedding Date</th>
            <th>Transaction Status</th>
            <th>Action</th>
            <th className="pr-4 cursor-pointer">
              <img src="/assets/icons/filter-icon.svg" alt="filter icon" onClick={toggleFilterDropdown} />
              {showFilterDropdown && (
                <div className="absolute font-normal right-10 bg-white shadow-md mt-2 rounded-lg my">
                  <ul className='my-4'>
                    <li className="px-6 py-3 hover:bg-gray-100">In Progress</li>
                    <li className="px-6 py-3 hover:bg-gray-100">Completed</li>
                  </ul>
                </div>
              )}
            </th>
          </tr>
        </thead>
        <tbody className="text-graywhite-400">
          {clients.map(client => (
            <tr key={client.id} className="border-b-2 border-[#D7D7D8]">
              <td className="px-6 py-7">{client.name}</td>
              <td>{client.email}</td>
              <td>{client.date}</td>
              <td>{client.status}</td>
              <td className="text-[#F90303] cursor-pointer" onClick={() => handleDeleteClick(client)}>Delete</td>
            </tr>
          ))}
        </tbody>
      </table>
      {showDeleteModal && (
        <DeleteModal
          client={selectedClient}
          onClose={() => setShowDeleteModal(false)}
          onDelete={() => {
            setClients(clients.filter(c => c.id !== selectedClient.id));
            setShowDeleteModal(false);
          }}
        />
      )}
    </section>
  );
};


const clientsData = [
  { id: 1, name: 'Kofi & Ada', email: 'obybo@gmail.com', date: '14/05/2024', status: 'In Progress' },
  { id: 1, name: 'Kofi & Ada', email: 'obybo@gmail.com', date: '14/05/2024', status: 'In Progress' },
  { id: 2, name: 'Obinna & Bolaji', email: 'obybo@gmail.com', date: '14/05/2024', status: 'Completed' },
  { id: 2, name: 'Obinna & Bolaji', email: 'obybo@gmail.com', date: '14/05/2024', status: 'Completed' }
];


export default Clients;
