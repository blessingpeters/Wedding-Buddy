/* eslint-disable react/prop-types */

import WbButton from "./common/WbButton";

const VendorCard = ({
  vendor,
  price,
  onRemove,
  onActionButtonClick,
  actionButtonText,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-2xl overflow-hidden mb-10 p-6">
      <div className="flex justify-between">
        <div className="flex gap-6">
          <img
            className="h-32 w-44 object-cover"
            src={vendor.image}
            alt={vendor.name}
          />
          <div>
            <div className="flex gap-4">
              <img
                className="h-10 w-10 rounded-full object-cover"
                src={vendor.image2}
                alt="check circle"
              />
              <div>
                <h3 className="font-semibold text-lg">{vendor.name}</h3>
                <p className="text-gray-800">{vendor.email}</p>
                <p className="text-gray-500 flex gap-1">
                  <img src="/assets/icons/location-icon.svg" alt="" />
                  {vendor.location}
                </p>
              </div>{" "}
            </div>
            <div className="bg-[#ECFDF5] my-4 text-xs font-semibold flex items-center rounded w-max gap-3 px-3 py-2">
              <img src="/assets/icons/greentick.svg" alt="check icon" />
              <span className="text-[#064E3B]">Verified Vendor</span>
            </div>
          </div>
        </div>
        <button
          onClick={() => onRemove(vendor.id)}
          className="text-burgundy-100 text-sm hover:text-burgundy-200 self-start"
        >
          Remove
        </button>
      </div>

      <div className="font-lato">
        <p className="my-1 text-graywhite-600 text-lg">{vendor.description}</p>

        <div className="flex justify-around items-center text-sm text-center my-6">
          <div className="my-3">
            <p className="text-[#64748B]">Reviews</p>
            <p>120</p>
          </div>
          <div className="my-3">
            <p className="text-[#64748B]">Clients</p>
            <p>200</p>
          </div>
          <div className="my-3">
            <p className="text-[#64748B]">Couples</p>
            <p className="">50</p>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-[#64748B] text-xs">{price}</span>
          <WbButton
            className="font-bold"
            size="small"
            onClick={() => onActionButtonClick(vendor.id)}
            text={actionButtonText}
          />
        </div>
      </div>
    </div>
  );
};

export default VendorCard;
