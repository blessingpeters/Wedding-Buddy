/* eslint-disable react/prop-types */
import { useState } from 'react';
import WbButton from '../common/WbButton';

const AddChecklist = ({ isOpen, closeSidebar, addNewChecklist, category }) => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskNote, setTaskNote] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewChecklist({
      taskTitle,
      taskNote,
    });
    closeSidebar();

    setTaskTitle('');
    setTaskNote("");
  };

  return (
    <div className={`fixed right-0 top-0 h-full bg-[#F5F8FA] shadow-lg z-50 transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} w-96 max-sm:w-full p-4 px-8`}>
      <div className='flex justify-between items-center'>
        <h2 className="text-xl font-semibold text-graywhite-600">{category} Checklist</h2>
        <button onClick={closeSidebar} className="text-burgundy-100 font-light text-4xl px-2 bg-burgundy-100/10">&times;</button>
      </div>
      <p>Enter a wedding checklist that suits your desired wedding expenses</p>
      <form onSubmit={handleSubmit} className='my-8'>

        <label className="block mb-3">
          <span>Task Title</span>
          <input type="text" value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} className="bblock p-3 w-full mt-1 border border-[#AFABAB] text-graywhite-600 placeholder:text-[#AFABAB] bg-inherit rounded" placeholder='Enter Task Title'/>
        </label>
        <label className="block mb-3">
          <span>Task Note</span>
          <input type="text" value={taskNote} onChange={(e) => setTaskNote(e.target.value)} className="block p-3 w-full mt-1 border border-[#AFABAB] text-graywhite-600 placeholder:text-[#AFABAB] bg-inherit rounded" placeholder='Enter Task Note'/>
        </label>


        <WbButton type="submit" size='small' className="py-4 text-lg w-full mt-32" text="Save"/>

      </form>
    </div>
  );
};

export default AddChecklist;
