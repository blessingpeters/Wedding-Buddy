/* eslint-disable react/prop-types */
import { useState } from 'react';
import WbButton from '../common/WbButton';

const AddGuestlist = ({ isOpen, closeSidebar, addNewTips }) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    addNewTips({
      title,
      desc,
    });
    closeSidebar();

    setTitle('');
    setDesc("");
  };

  return (
    <div className={`fixed right-0 top-0 h-full bg-[#F5F8FA] shadow-lg z-50 transition-transform overflow-auto ${isOpen ? 'translate-x-0' : 'translate-x-full'} w-96 max-sm:w-full p-4 px-8`}>
      <div className='flex justify-between items-center'>
        <h2 className="text-xl font-semibold text-graywhite-600">Planning Tips</h2>
        <button onClick={closeSidebar} className="text-burgundy-100 font-light text-4xl px-2 bg-burgundy-100/10">&times;</button>
      </div>

      <form onSubmit={handleSubmit} className='my-8'>

        <label className="block mb-3">
          <span>Title</span>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="block p-3 w-full mt-1 border border-[#AFABAB] text-graywhite-600 placeholder:text-[#AFABAB] bg-inherit rounded" placeholder='Enter Title'/>
        </label>
        <label className="block mb-3">
          <span>Description</span>
          <textarea type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="block p-3 w-full mt-1 border border-[#AFABAB] text-graywhite-600 placeholder:text-[#AFABAB] bg-inherit rounded" placeholder='Enter Description' rows={4}>

          </textarea>

        </label>


        <WbButton type="submit" size='small' className="py-4 text-lg w-full mt-24" text="Save"/>

      </form>
    </div>
  );
};

export default AddGuestlist;
