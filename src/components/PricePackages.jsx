/* eslint-disable react/prop-types */
import { useState } from 'react';
import WbButton from "../components/common/WbButton";
import MakePayment from "./sidebar/MakePayment";
import PaymentSuccesModal from "./modals/PaymentSuccessModal";

const PricePackages = ({onComplete}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const handlePaymentComplete = () => {
        setIsSidebarOpen(false); // Close sidebar
        setShowSuccessModal(true); // Show payment success modal
    };
    const closeSuccessModal = () => {
        setShowSuccessModal(false);
        onComplete();
      };


  return (
    <section className=" p-10 my-10 font-raleway bg-[#FFF2CC] text-burgundy-100 text-center rounded-3xl">
      <h2 className="text-2xl font-semibold">Pricing Packages</h2>
      <p className="font-lato text-lg leading-relaxed my-4">
        Each package offers increasing levels of service and customization,
        allowing couples to choose the option that best fits their budget and
        needs. Additional services can be added à la carte or through
        customization options based on the couple’s preferences.
      </p>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        <div className="bg-burgundy-100 text-gold-100 p-6 rounded-3xl flex flex-col justify-between">
          <h3 className="text-xl font-semibold font-lato">
            Essential Package <br />N 2,500
          </h3>
          <ul className=" list-disc list-inside">
            <li>Initial Consultation and Concept Planning</li>
            <li>Venue Selection Assistance</li>
            <li>Budget Planning and Management</li>
            <li>Vendor Recommendations and Coordination (Up to 3 Vendors)</li>
            <li>Day-of Coordination</li>
          </ul>
          <WbButton className="bg-gold-100" text="Proceed to Pay" onClick={() => setIsSidebarOpen(true)}/>
        </div>
        <div className="bg-[#E37DAC]  p-6 rounded-3xl flex flex-col justify-between">
          <h3 className="text-xl font-semibold">
          Classic Package <br /> N5,000
          </h3>
          <ul className=" list-disc list-inside font-lato">
            <li> Everything in the Essential Package, plus:</li>
            <li>Detailed Event Design and Theme Development</li>
            <li>Additional Vendor Recommendations and Coordination (Up to 5 Vendors)</li>
            <li>Timeline Creation and Management</li>
            <li>RSVP Management</li>
          </ul>
          <WbButton text="Proceed to Pay" onClick={() => setIsSidebarOpen(true)}/>
        </div>
        <div className="bg-gold-100 p-6 rounded-3xl flex flex-col justify-between">
          <h3 className="text-xl font-semibold">
          Premium Package  <br />N10,000
          </h3>
          <ul className=" list-disc list-inside font-lato">
            <li>Everything in the Classic Package, plus:</li>
            <li>Full-service Event Planning and Execution</li>
            <li>Unlimited Vendor Recommendations and Coordination</li>
            <li>Customized Floor Plan and Seating Arrangement</li>
            <li>Guest Concierge Services</li>
            <li>Emergency Planning and Support</li>
          </ul>
          <WbButton text="Proceed to Pay" onClick={() => setIsSidebarOpen(true)}/>
        </div>
      </div>
      <MakePayment isOpen={isSidebarOpen} closeSidebar={() => setIsSidebarOpen(false)} onComplete={handlePaymentComplete}  />
      {showSuccessModal && (
        <PaymentSuccesModal onClose={closeSuccessModal} />
      )}
    </section>
  );
};

export default PricePackages;
