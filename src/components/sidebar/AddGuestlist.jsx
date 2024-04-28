/* eslint-disable react/prop-types */
import { useState } from 'react';
import WbButton from '../common/WbButton';

const AddGuestlist = ({ isOpen, closeSidebar, addNewGuest }) => {
  const [guestName, setGuestName] = useState('');
  const [email, setEmail] = useState('');
  const [group, setGroup] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewGuest({
      guestName,
      email,
      group,
      status
    })
    closeSidebar();
    setGuestName('');
    setEmail('');
    setGroup('');
    setStatus('');
  };

  return (
    <div className={`fixed right-0 top-0 h-full bg-[#F5F8FA] shadow-lg z-50 transition-transform overflow-auto ${isOpen ? 'translate-x-0' : 'translate-x-full'} w-96 max-sm:w-full p-4 px-8`}>
      <div className='flex justify-between items-center'>
        <h2 className="text-xl font-semibold text-graywhite-600">Add New Guest</h2>
        <button onClick={closeSidebar} className="text-burgundy-100 font-light text-4xl px-2 bg-burgundy-100/10">&times;</button>
      </div>

      <form onSubmit={handleSubmit} className='my-8'>

        <label className="block mb-3">
          <span>Guest Name</span>
          <input type="text" value={guestName} onChange={(e) => setGuestName(e.target.value)} className="bblock p-3 w-full mt-1 border border-[#AFABAB] text-graywhite-600 placeholder:text-[#AFABAB] bg-inherit rounded" placeholder='Enter Task Title'/>
        </label>
        <label className="block mb-3">
          <span>Email</span>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="block p-3 w-full mt-1 border border-[#AFABAB] text-graywhite-600 placeholder:text-[#AFABAB] bg-inherit rounded" placeholder='Enter Task Note'/>
        </label>
        <label className="block mb-5">
          <span>Group</span>
          <select className="block p-3 w-full mt-1 border border-[#AFABAB] text-graywhite-600 placeholder:text-[#AFABAB] bg-inherit rounded" value={group} onChange={(e) => setGroup(e.target.value)}>
            <option value="">Enter category</option>
            <option value="Groom’s Family">Groom’s Family</option>
            <option value="Bride’s Family">Bride’s Family</option>
            <option value="Friends">Friends</option>
            <option value="Other">Other</option>
          </select>
          <label className="block mb-5">
          <span>Status:</span>
          <select className="block p-3 w-full mt-1 border border-[#AFABAB] text-graywhite-600 placeholder:text-[#AFABAB] bg-inherit rounded" value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="">choose status</option>
            <option value="Pending">Pending</option>
            <option value="Completed">Confirmed</option>

          </select>
        </label>
        </label>


        <WbButton type="submit" size='small' className="py-4 text-lg w-full mt-24" text="Save"/>

      </form>
    </div>
  );
};

export default AddGuestlist;
