import { useState } from "react";
import { Tabs, Tab } from "../../components/VendorTab";
import VendorCard from "../../components/VendorCard";
import DropReview from "../../components/sidebar/DropReview";
import WbButton from "../../components/common/WbButton";
import PricePackages from "../../components/PricePackages";

const BookedVendors = () => {
  const [favoriteVendors, setFavoriteVendors] = useState(favoriteVendorsData);
  const [contactedVendors, setContactedVendors] =
    useState(contactedVendorsData);
  const [completedVendors, setCompletedVendors] =
    useState(completedVendorsData);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showPricePackage, setShowPricePackage] = useState(false);

  const handleRemoveVendor = (vendorListSetter, vendorId) => {
    vendorListSetter((prevVendors) =>
      prevVendors.filter((vendor) => vendor.id !== vendorId)
    );
  };

  const handleActionButtonClick = (vendorId) => {
    setShowPricePackage(true);
    console.log("Action button clicked for vendor:", vendorId);
  };
   const closePricePackage = () => {
        setShowPricePackage(false);
      };

  return (
    <section className="lg:px-16 sm:px-8 px-3 py-6 font-raleway">
      <Tabs className="justify-between text-burgundy-100">
        <Tab label="Vendors on Favorite List">
          {!showPricePackage ? (
            <>
              <div className="flex justify-end">
                <WbButton
                  className="my-4"
                  text="See all Vendors"
                  size="small"
                />
              </div>
              {favoriteVendors.map((vendor) => (
                <VendorCard
                  key={vendor.id}
                  price={vendor.price}
                  vendor={vendor}
                  onRemove={() =>
                    handleRemoveVendor(setFavoriteVendors, vendor.id)
                  }
                  onActionButtonClick={handleActionButtonClick}
                  actionButtonText="Request Pricing"
                />
              ))}
            </>
          ) : (
            <PricePackages onComplete={closePricePackage} />
          )}
        </Tab>
        <Tab label="Contacted Vendors">
          <div className="flex justify-end">
            <WbButton className="my-4" text="See all Vendors" size="small" />
          </div>
          {contactedVendors.map((vendor) => (
            <VendorCard
              key={vendor.id}
              price="Was the service satisfactory?"
              vendor={vendor}
              onRemove={() =>
                handleRemoveVendor(setContactedVendors, vendor.id)
              }
              onActionButtonClick={handleActionButtonClick}
              actionButtonText="Track Progress"
            />
          ))}
        </Tab>
        <Tab label="Completed">
          <div className="flex justify-end">
            <WbButton className="my-4" text="See all Vendors" size="small" />
          </div>
          {completedVendors.map((vendor) => (
            <VendorCard
              key={vendor.id}
              price="Was the service satisfactory?"
              vendor={vendor}
              onRemove={() =>
                handleRemoveVendor(setCompletedVendors, vendor.id)
              }
              onActionButtonClick={() => setIsSidebarOpen(true)}
              actionButtonText="Drop a Review"
            />
          ))}
        </Tab>
      </Tabs>
      <DropReview
        isOpen={isSidebarOpen}
        closeSidebar={() => setIsSidebarOpen(false)}
      />
    </section>
  );
};

const favoriteVendorsData = [
  {
    id: 1,
    name: "Ajevo Event Services",
    email: "contact@ajevoservices.com",
    location: "Port Harcourt, Nigeria",
    image: "/assets/images/couple-in-veil.jpeg",
    image2: "/assets/images/OmaStyle-Bride.png",
    description:
      "Ajevo’s Events services gives you a sophisticated and satisfying wedding services, with the right vendors available to give you a memorable wedding.",
    price: "$4,000 - $5,000",
  },
  {
    id: 2,
    name: "Ajevo Event Services",
    email: "contact@ajevoservices.com",
    location: "Port Harcourt, Nigeria",
    image: "/assets/images/couple-in-veil.jpeg",
    image2: "/assets/images/OmaStyle-Bride.png",
    description:
      "Ajevo’s Events services gives you a sophisticated and satisfying wedding services, with the right vendors available to give you a memorable wedding.",
    price: "$4,000 - $5,000",
  },
];
const contactedVendorsData = [
  {
    id: 3,
    name: "Ajevo Event Services",
    email: "contact@ajevoservices.com",
    location: "Port Harcourt, Nigeria",
    image: "/assets/images/couple-in-veil.jpeg",
    image2: "/assets/images/OmaStyle-Bride.png",
    description:
      "Ajevo’s Events services gives you a sophisticated and satisfying wedding services, with the right vendors available to give you a memorable wedding.",
    price: "$4,000 - $5,000",
  },
  {
    id: 4,
    name: "Ajevo Event Services",
    email: "contact@ajevoservices.com",
    location: "Port Harcourt, Nigeria",
    image: "/assets/images/couple-in-veil.jpeg",
    image2: "/assets/images/OmaStyle-Bride.png",
    description:
      "Ajevo’s Events services gives you a sophisticated and satisfying wedding services, with the right vendors available to give you a memorable wedding.",
    price: "$4,000 - $5,000",
  },
];
const completedVendorsData = [
  {
    id: 5,
    name: "Ajevo Event Services",
    email: "contact@ajevoservices.com",
    location: "Port Harcourt, Nigeria",
    image: "/assets/images/couple-in-veil.jpeg",
    image2: "/assets/images/OmaStyle-Bride.png",
    description:
      "Ajevo’s Events services gives you a sophisticated and satisfying wedding services, with the right vendors available to give you a memorable wedding.",
    price: "$4,000 - $5,000",
  },
  {
    id: 6,
    name: "Ajevo Event Services",
    email: "contact@ajevoservices.com",
    location: "Port Harcourt, Nigeria",
    image: "/assets/images/couple-in-veil.jpeg",
    image2: "/assets/images/OmaStyle-Bride.png",
    description:
      "Ajevo’s Events services gives you a sophisticated and satisfying wedding services, with the right vendors available to give you a memorable wedding.",
    price: "$4,000 - $5,000",
  },
];

export default BookedVendors;
