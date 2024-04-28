import { useState } from "react";
import WbButton from "../../components/common/WbButton";
const Payment = () => {
    const [withdrawal, setWithdrawal] = useState(withdrawalInfo);
    const handleDelete = (id) => {
        setWithdrawal(withdrawal.filter((budget) => budget.id !== id));
      };
  return (
    <section className="lg:px-16 sm:px-8 px-3 py-10 font-raleway">
      <div className=" my-10 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
        <div className="font-semibold  bg-[#E1CAF1] shadow-2xl py-1 px-4 flex flex-col justify-between h-36">
          <h2 className="text-6xl">220</h2>
          <p className="font-lato font-bold">Guests</p>
        </div>
        <div className="font-semibold  bg-[#CFEDAD] shadow-2xl py-1 px-4 flex flex-col justify-between h-36">
          <h2 className="text-6xl">140</h2>
          <p className="font-lato font-bold">Accepted</p>
        </div>
        <div className="font-semibold  bg-[#FFF4BF] shadow-2xl py-1 px-4 flex flex-col justify-between h-36">
          <h2 className="text-6xl">40</h2>
          <p className="font-lato font-bold">Pending</p>
        </div>
        <div className="font-semibold  bg-[#FFD5BB] shadow-2xl py-1 px-4 flex flex-col justify-between h-36">
          <h2 className="text-6xl">40</h2>
          <p className="font-lato font-bold">Declined</p>
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
          <div key={info.id} className="max-sm:text-xs text-graywhite-400 font-lato p-5 border grid grid-cols-6 gap-2 bg-[#F9F9F9]">
            <div>
            <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name={info.name}
                  value={info.name}
                  className="w-4 h-4 accent-burgundy-100"
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
                <p>{info.time}</p>
            </div>
          </div>
        ))}
 </div>



      <WbButton
       className="rounded-2xl font-lato w-max self-end mt-36"
       text="Request Withdrawal"
       size="small"
     />
      </div>
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
      time: "2:45PM"
    },

    {
        id: 100013,
        name: "Faith and Edward",
        amount: "5,000",
        charges: "0.00",
        payment: "5,000",
        date: "31/08/2023",
        time: "2:45PM"
      },
  ];

export default Payment;
