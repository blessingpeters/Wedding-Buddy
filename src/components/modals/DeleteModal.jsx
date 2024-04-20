/* eslint-disable react/prop-types */

import WbButton from "../common/WbButton";


const DeleteModal = ({ client, onClose, onDelete }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white py-6 px-10 rounded-lg mx-3">
        <h2 className="text-[#606062] text-lg font-semibold w-[80%] mx-auto text-center">Are you sure you want to delete {client.name}?</h2>
        <div className="flex justify-end space-x-4 my-8">
            <WbButton className='w-full' text="Delete" variant="outline" onClick={onDelete}/>
            <WbButton className='w-full' text="Cancel" onClick={onClose}/>
          {/* <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={onDelete}>Delete</button>
          <button className="bg-gray-300 text-black px-4 py-2 rounded" onClick={onClose}>Cancel</button> */}
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;