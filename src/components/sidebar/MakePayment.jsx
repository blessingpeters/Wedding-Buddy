/* eslint-disable react/prop-types */
import { useState } from "react";
import WbButton from "../common/WbButton";

const MakePayment = ({ isOpen, closeSidebar, onComplete }) => {
  const [currentStep, setCurrentStep] = useState(1);

  const handlePaymentCompletion = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
      setCurrentStep(1)
    }
  };



  return (
    <div
      className={`fixed right-0 top-0 h-full bg-[#F5F8FA] text-left shadow-lg z-50 transition-transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } w-96 max-sm:w-full p-4 px-8`}
    >
      {currentStep === 1 && (
        <>
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-graywhite-600">
              Order Summary
            </h2>
            <button
              onClick={closeSidebar}
              className="text-burgundy-100 font-light text-4xl px-2 bg-burgundy-100/10"
            >
              &times;
            </button>
          </div>
          <form className="my-8 font-lato" onSubmit={() => handlePaymentCompletion()}>
            <label className="my-8 w-full flex justify-between">
              <span className="font-bold">
                Select preferred payment Currency
              </span>
              <select
                className="border border-[#AFABAB] text-[#AFABAB] bg-inherit rounded"

              >
                <option value="$">$</option>
                <option value="$">$</option>
                <option value="N">N</option>
              </select>
            </label>
            <div className="my-3 flex justify-between text-graywhite-400">
              <span>Charges</span>
              <p>N 100</p>
            </div>
            <div className="my-3 flex justify-between text-graywhite-400">
              <span>Subtotal</span>
              <p>N5100</p>
            </div>
            <div className="my-3 text-xl flex justify-between">
              <span>Total</span>
              <p>N5000</p>
            </div>
            <div className="block">
              <p className="my-3">Select your payment method</p>
              <label className="my-2 flex items-center space-x-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="card"
                  className="w-4 h-4 accent-burgundy-100 text-burgundy-100"
                />
                <span className="text-graywhite-600 checked:text-burgundy-100">
                  Pay via Card
                </span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="transfer"
                  className="w-4 h-4 accent-burgundy-100 text-burgundy-100 border-gray-300 focus:ring-burgundy-100"
                />
                <span className="text-graywhite-600">Pay via Transfer</span>
              </label>
            </div>

            <WbButton
              type="submit"
              size="small"
              className="py-4 text-lg w-full mt-24"
              text="Make Payment"
            />
          </form>
        </>
      )}
      {currentStep === 2 && (
        <>
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-graywhite-600">
              Complete Payment
            </h2>
            <button
              onClick={closeSidebar}
              className="text-burgundy-100 font-light text-4xl px-2 bg-burgundy-100/10"
            >
              &times;
            </button>
          </div>
          <p className="font-lato text-graywhite-400">
            Please follow the instructions below and do not refresh or leave
            this page.
          </p>
          <p className="font-lato text-burgundy-100">
            Payment confirmation may take up to 2 minutes
          </p>
          <div className="font-lato bg-white my-5 p-4">
            <h3 className="font-semibold text-lg my-3">
              Transfer to the following account
            </h3>
            <div className="text-graywhite-400">
              <p>Bank Name</p>
              <p>Moniepoint Microfinance Bank</p>
            </div>
            <div className="flex justify-between my-1 text-graywhite-400">
              <div>
                <p>Account Number</p>
                <p>989709875436</p>
              </div>
              <button className="bg-[#EFECEC] px-3 rounded text-burgundy-100">
                Copy
              </button>
            </div>
            <div className="text-graywhite-400">
              <p>Beneficiary Name</p>
              <p>LabTracka Payment</p>
            </div>
            <p className="mt-6 font-bold">
              Transfer exact amount to avoid failure
            </p>
            <div className="flex justify-between text-graywhite-400 my-4">
              <p>
                Amount to Pay <br />N 4025
              </p>

              <button className="bg-[#EFECEC] px-3 rounded text-burgundy-100">
                Copy
              </button>
            </div>
            <p className="font-bold my-6">
              We will update this screen after your payment is recieved
            </p>
          </div>

          <WbButton
            type="submit"
            size="small"
            className="py-4 text-lg w-full mt-24"
            text="Make Payment"
            onClick={() => handlePaymentCompletion()}
          />
        </>
      )}
      {currentStep === 3 && (
        <>
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-graywhite-600">
              Select a Payment Method
            </h2>
            <button
              onClick={closeSidebar}
              className="text-burgundy-100 font-light text-4xl px-2 bg-burgundy-100/10"
            >
              &times;
            </button>
          </div>
          <div className="flex flex-col my-6 font-lato">
            <p className="self-end text-black">Add card</p>
            <div className="p-4 bg-white mb-6">
              <label className="my-2 flex items-center space-x-2 justify-between">
                <span className="text-graywhite-400 checked:text-burgundy-100 flex items-center gap-1 rounded">
                  <img src="/assets/images/paypal.svg" alt="paypal" />
                  Paypal
                </span>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="card"
                  className="w-4 h-4 accent-burgundy-100 text-burgundy-100"
                />
              </label>
            </div>
            <hr />
            <div className="p-4 bg-white mt-6">
              <label className="my-2 flex items-center space-x-2 justify-between">
                <div className="text-graywhite-400 checked:text-burgundy-100 flex items-center gap-1 rounded">
                  <img src="/assets/images/mastercard.svg" alt="mastercard" />
                  <div>
                    <p>Mastercard XXXX-1275 </p>
                    <p className="text-sm">Exp: 11/24</p>
                  </div>
                </div>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="card"
                  className="w-4 h-4 accent-burgundy-100 text-burgundy-100"
                />
              </label>
            </div>
          </div>

          <WbButton
            type="submit"
            size="small"
            className="py-4 text-lg w-full mt-24"
            text="Continue"
            onClick={() => handlePaymentCompletion()}
          />
        </>
      )}
      {currentStep === 4 && (
        <>
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-graywhite-600">
              Add Card Details
            </h2>
            <button
              onClick={closeSidebar}
              className="text-burgundy-100 font-light text-4xl px-2 bg-burgundy-100/10"
            >
              &times;
            </button>
          </div>
          <form className="my-8 font-lato text-black" onSubmit={() => handlePaymentCompletion()}>
            <label className="block mb-3">
              <span>Name on Card</span>
              <input
                type="text"
                value=""
                className="bblock p-3 w-full mt-1 border border-[#AFABAB] text-graywhite-600 placeholder:text-[#AFABAB] bg-inherit rounded"
                placeholder="Enter Name"
              />
            </label>
            <label className="block mb-3">
              <span>Card number</span>
              <input
                type="text"
                value=""
                className="block p-3 w-full mt-1 border border-[#AFABAB] text-graywhite-600 placeholder:text-[#AFABAB] bg-inherit rounded"
                placeholder="Enter Card Number"
              />
            </label>
            <label className="block mb-3">
              <span>Expiry Date</span>
              <input
                type="text"
                value=""
                className="block p-3 w-full mt-1 border border-[#AFABAB] text-graywhite-600 placeholder:text-[#AFABAB] bg-inherit rounded"
                placeholder="10/25"
              />
            </label>
            <label className="block mb-3">
              <span>CVC/CVV</span>
              <input
                type="text"
                value=""
                className="block p-3 w-full mt-1 border border-[#AFABAB] text-graywhite-600 placeholder:text-[#AFABAB] bg-inherit rounded"
                placeholder="999"
              />
            </label>
            <label className="block mb-3">
              <span>Password</span>
              <div className="relative">
                <input
                  type="text"
                  value=""
                  className="block p-3 w-full mt-1 border border-[#AFABAB] text-graywhite-600 placeholder:text-[#AFABAB] bg-inherit rounded"
                  placeholder="Enter Password"
                />
                <img
                  className="absolute right-4 bottom-4 h-4 cursor-pointer"
                  src="/assets/icons/eyeslash.svg"
                  alt="eye slash icon"
                />
              </div>
            </label>
            <WbButton
              type="submit"
              size="small"
              className="py-4 text-lg w-full mt-24"
              text="Save"
            />
          </form>
        </>
      )}
      {currentStep === 5 && (
        <>
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-graywhite-600">
            Complete Payment
            </h2>
            <button
              onClick={closeSidebar}
              className="text-burgundy-100 font-light text-4xl px-2 bg-burgundy-100/10"
            >
              &times;
            </button>
          </div>
          <p className="my-4 text-graywhite-400 font-lato">We have sent a 4 digit OTP verification code to <span className="text-burgundy-100">+2349065835466</span>. check your phone and enter the code below.</p>
          <div className="flex gap-3 justify-center font-semibold">
            <input className="w-10 h-10 bg-[#EFECEC] text-xl text-center outline-none text-[#00004D]" type="number" name="code" id="code" value={2} />
            <input className="w-10 h-10 bg-[#EFECEC] text-xl text-center outline-none text-[#00004D]" type="number" name="code" id="code" value={4}/>
            <input className="w-10 h-10 bg-[#EFECEC] text-xl text-center outline-none text-[#00004D]" type="number" name="code" id="code" value={5}/>
            <input className="w-10 h-10 bg-[#EFECEC] text-xl text-center outline-none text-[#00004D]" type="number" name="code" id="code" />
          </div>


            <WbButton
              type="submit"
              size="small"
              className="py-4 text-lg w-full mt-24"
              text="Verify"
              onClick={() => handlePaymentCompletion()}
            />

        </>
      )}
    </div>
  );
};

export default MakePayment;
