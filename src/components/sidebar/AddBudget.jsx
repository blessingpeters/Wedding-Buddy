/* eslint-disable react/prop-types */
import { useState } from 'react';
import WbButton from '../common/WbButton';

const AddBudget = ({ isOpen, closeSidebar, addNewBudgetItem }) => {
  const [event, setEvent] = useState('');
  const [estimate, setEstimate] = useState('');
  const [actual, setActual] = useState('');
  const [paid, setPaid] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewBudgetItem({
      event,
      estimate,
      actual,
      paid,
      status
    });
    closeSidebar();
    // Clear inputs after adding
    setEvent('');
    setEstimate('');
    setActual('');
    setPaid('');
    setStatus('')
  };

  return (
    <div className={`fixed right-0 top-0 h-full bg-[#F5F8FA] shadow-lg z-50 transition-transform overflow-auto ${isOpen ? 'translate-x-0' : 'translate-x-full'} w-96 max-sm:w-full p-4 px-8`}>
      <div className='flex justify-between items-center'>
        <h2 className="text-xl font-semibold text-graywhite-600">Create New Budget</h2>
        <button onClick={closeSidebar} className="text-burgundy-100 font-light text-4xl px-2 bg-burgundy-100/10">&times;</button>
      </div>
      <form onSubmit={handleSubmit} className='my-8'>
        <label className="block mb-5">
          <span>Wedding Event:</span>
          <select className="block p-3 w-full mt-1 border border-[#AFABAB] text-graywhite-600 placeholder:text-[#AFABAB] bg-inherit rounded" value={event} onChange={(e) => setEvent(e.target.value)}>
            <option value="">enter category</option>
            <option value="Venue">Venue</option>
            <option value="Photography">Photography</option>
            <option value="Catering">Catering</option>
            <option value="Wedding Planner">Wedding Planner</option>
            <option value="Cake Vendor">Cake Vendor</option>
            <option value="Decoration">Decoration</option>
            <option value="Bridal wear">Bridal wear</option>
            <option value="Grooms wear">Grooms wear</option>
            <option value="Venue">Venue</option>
            <option value="Beauty/Makeup">Beauty/Makeup</option>
          </select>
        </label>
        <label className="block mb-3">
          <span>Estimate</span>
          <input type="number" value={estimate} onChange={(e) => setEstimate(e.target.value)} className="block p-3 w-full mt-1 border border-[#AFABAB] text-graywhite-600 placeholder:text-[#AFABAB] bg-inherit rounded" placeholder='Enter Estimate' />
        </label>
        <label className="block mb-3">
          <span>Actual Price</span>
          <input type="number" value={actual} onChange={(e) => setActual(e.target.value)} className="block p-3 w-full mt-1 border border-[#AFABAB] text-graywhite-600 placeholder:text-[#AFABAB] bg-inherit rounded" placeholder='ActualPrice' />
        </label>
        <label className="block mb-3">
          <span>Paid</span>
          <input type="number" value={paid} onChange={(e) => setPaid(e.target.value)} className="block p-3 w-full mt-1 border border-[#AFABAB] text-graywhite-600 placeholder:text-[#AFABAB] bg-inherit rounded" placeholder='How much have you paid?' />
        </label>
        <label className="block mb-5">
          <span>Status:</span>
          <select className="block p-3 w-full mt-1 border border-[#AFABAB] text-graywhite-600 placeholder:text-[#AFABAB] bg-inherit rounded" value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="">choose status</option>
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>

          </select>
        </label>

        <WbButton type="submit" size='small' className="py-4 text-lg w-full mt-24" text="Create a Budget" />

      </form>
    </div>
  );
};

export default AddBudget;
