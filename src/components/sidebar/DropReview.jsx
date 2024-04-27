/* eslint-disable react/prop-types */
import { useState } from 'react';
import WbButton from '../common/WbButton';

const DropReview = ({ isOpen, closeSidebar }) => {
    const [couplesName, setcouplesName] = useState('');
    const [review, setReview] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ couplesName, review});
    closeSidebar();
  };

  return (
    <div className={`fixed right-0 top-0 h-full bg-[#F5F8FA] shadow-lg z-50 transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} w-96 max-sm:w-full p-4 px-8`}>
      <div className='flex justify-between items-center'>
        <h2 className="text-xl font-semibold text-graywhite-600">Drop a Review</h2>
        <button onClick={closeSidebar} className="text-burgundy-100 font-light text-4xl px-2 bg-burgundy-100/10">&times;</button>
      </div>
      <form onSubmit={handleSubmit} className='my-8'>
        <label className="block mb-3">
          <span>Couples Name</span>
          <input type="text" value={couplesName} onChange={(e) => setcouplesName(e.target.value)} className="bblock p-3 w-full mt-1 border border-[#AFABAB] text-[#AFABAB] bg-inherit rounded" placeholder='Enter Location'/>
        </label>
        <label className="block mb-3">
          <span>Review</span>
          <textarea type="text" value={review} onChange={(e) => setReview(e.target.value)} className="block p-3 w-full mt-1 border border-[#AFABAB] text-[#AFABAB] bg-inherit rounded" placeholder='Drop a Review comment' rows="4">

          </textarea>
        </label>
        <div className='my-6'>


        <p className='text-2xl text-graywhite-400 text-center '>Rate</p>
        <div className='flex gap-1'>
            <img src="/assets/icons/unfilledstar.svg" alt="unfilled star" />
            <img src="/assets/icons/unfilledstar.svg" alt="unfilled star" />
            <img src="/assets/icons/unfilledstar.svg" alt="unfilled star" />
            <img src="/assets/icons/unfilledstar.svg" alt="unfilled star" />
            <img src="/assets/icons/unfilledstar.svg" alt="unfilled star" />
        </div>
</div>

        <WbButton type="submit" size='small' className="py-4 text-lg w-full mt-24" text="Send"/>

      </form>
    </div>
  );
};

export default DropReview;
