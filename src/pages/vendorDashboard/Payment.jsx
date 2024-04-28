import { useState } from "react";
import WbButton from "../../components/common/WbButton";
import WithdrawalSuccessModal from "../../components/modals/WithdrawalSuccessModal";
const Payment = () => {
    const [withdrawal, setWithdrawal] = useState(withdrawalInfo);
    const [selectedWithdrawals, setSelectedWithdrawals] = useState([]);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
  
    const handleToggleWithdrawal = (id) => {
      const newSelectedWithdrawals = selectedWithdrawals.includes(id)
        ? selectedWithdrawals.filter(item => item !== id)
        : [...selectedWithdrawals, id];
      setSelectedWithdrawals(newSelectedWithdrawals);
    };
  
    const handleDeleteSelected = () => {
      setWithdrawal(withdrawal.filter(info => !selectedWithdrawals.includes(info.id)));
      setShowSuccessModal(true);
      setSelectedWithdrawals([]);
    };
  return (
    <section className="lg:px-16 sm:px-8 px-3 py-10 font-raleway">
      <div className=" my-10 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
        <div className="text-xs font-openSans bg-[#E1E0E0] shadow-2xl p-6 h-32 rounded-2xl">
          <p>Wallet Balance</p>
          <div className="flex justify-between mt-5">
            <h2 className="text-2xl font-semibold ">N100K</h2>
            <p className="flex items-center gap-1">
              +11.02%
              <img src="/assets/icons/ArrowRise.svg" alt="" />
            </p>
          </div>
        </div>
        <div className="text-xs font-openSans bg-[#FFF2CC] shadow-2xl p-6 h-32 rounded-2xl">
          <p>Total Approved Withdrawal</p>
          <div className="flex justify-between mt-5">
            <h2 className="text-2xl font-semibold ">N100K</h2>
            <p className="flex items-center gap-1">
              +11.02%
              <img src="/assets/icons/ArrowRise.svg" alt="" />
            </p>
          </div>
          <p className="text-center mt-2">See all</p>
        </div>
        <div className="text-xs font-openSans bg-[#E1E0E0] shadow-2xl p-6 h-32 rounded-2xl">
          <p>Total Pending Withdrawal</p>
          <div className="flex justify-between mt-5">
            <h2 className="text-2xl font-semibold ">N100K</h2>
            <p className="flex items-center gap-1">
              +11.02%
              <img src="/assets/icons/ArrowRise.svg" alt="" />
            </p>
          </div>
          <p className="text-center mt-2">See all</p>
        </div>
        <div className="text-xs font-openSans bg-[#ECA7C7] shadow-2xl  p-6 h-32 rounded-2xl">
          <p>Total Rejected Withdrawal</p>
          <div className="flex justify-between mt-5">
            <h2 className="text-2xl font-semibold ">N100K</h2>
            <p className="flex items-center gap-1">
              +11.02%
              <img src="/assets/icons/ArrowRise.svg" alt="" />
            </p>
          </div>
          <p className="text-center mt-2">See all</p>
        </div>
      </div>

      <div className="flex flex-col justify-between">
        <div>
          <div className="grid grid-cols-6 gap-2 p-5 shadow  bg-[#B4A3F824] text-pretty font-lato max-sm:text-xs">
            <p>Couple ID</p>
            <p>Couple Name</p>
            <p>Amount</p>
            <p>Charges</p>
            <p>Payment</p>
            <p>Date</p>
          </div>
          {withdrawal.map((info) => (
            <div
              key={info.id}
              className="max-sm:text-xs text-graywhite-400 text-sm font-lato p-5 border grid grid-cols-6 gap-2 bg-[#F9F9F9]"
            >
              <div>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name={info.name}
                    value={info.name}
                    className="w-4 h-4 accent-burgundy-100"
                    onChange={() => handleToggleWithdrawal(info.id)}
                  />
                  <span className="text-graywhite-400">FD {info.id}</span>
                </label>
              </div>

              <p>{info.name}</p>
              <p>N {info.amount}</p>
              <p>N {info.charges}</p>
              <p>N {info.payment}</p>
              <div>
                <p>{info.date}</p>
                <p className="text-[#77777777] text-xs">{info.time}</p>
              </div>
            </div>
          ))}
        </div>

        <WbButton
          className="rounded-2xl font-lato w-max self-end mt-36"
          text="Request Withdrawal"
          size="small"
          onClick={handleDeleteSelected}
        />
      </div>
      {showSuccessModal && (
        <WithdrawalSuccessModal onClose={()=> setShowSuccessModal(false)} />
      )}
    </section>
  );
};

const withdrawalInfo = [
  {
    id: 100012,
    name: "Faith and Edward",
    amount: "5,000",
    charges: "0.00",
    payment: "5,000",
    date: "31/08/2023",
    time: "2:45PM",
  },

  {
    id: 100013,
    name: "Faith and Edward",
    amount: "5,000",
    charges: "0.00",
    payment: "5,000",
    date: "31/08/2023",
    time: "2:45PM",
  },
];

export default Payment;
