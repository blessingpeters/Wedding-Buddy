/* eslint-disable react/prop-types */
import { useState } from 'react';
import WbButton from '../common/WbButton';

const AddImage = ({ isOpen, closeSidebar, addNewImage }) => {

  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ image });
    addNewImage({image})
    closeSidebar();
    setImage(null)
  };

  return (
    <div className={`fixed right-0 top-0 h-full bg-[#F5F8FA] shadow-lg z-50 transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} w-96 max-sm:w-full p-4 px-8`}>
      <div className='flex justify-between items-center'>
        <h2 className="text-xl font-semibold text-graywhite-600">Add New Image</h2>
        <button onClick={closeSidebar} className="text-burgundy-100 font-light text-4xl px-2 bg-burgundy-100/10">&times;</button>
      </div>
      <form onSubmit={handleSubmit} className='my-8'>

        <label className="block mb-3 bg-white p-4 rounded">
          <div className='flex gap-2 mb-6'>
            <img src="/assets/icons/Back.svg" alt=" back icon" />
            <span>Upload Image</span>
          </div>
          <div className='flex flex-col items-center text-center border border-dashed border-[#AFABAB] rounded p-4'>
            <img src="/assets/icons/upload.svg" alt="cloud icon" />
            <p>Browse and chose the files you want to upload from your computer</p>
          <input type="file" onChange={(e) => setImage(e.target.files[0])} placeholder='+' className="block w-full mt-1 text-white bg-burgundy-100" />
          </div>
        </label>

        <WbButton type="submit" size='small' className="py-4 text-lg w-full mt-24" text="Save"/>

      </form>
    </div>
  );
};

export default AddImage;
