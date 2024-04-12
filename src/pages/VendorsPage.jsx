import React from 'react'
import VendorsHeader from '../components/header/VendorsHeader'
import VendorsCategory from '../components/VendorsCategory';

const VendorsPage = () => {
  return (
    <>
      <VendorsHeader />
      <VendorsCategory />
      <section className=" bg-gradient-to-br from-burgundy-100 to-burgundy-200 text-white font-raleway pt-10 lg:px-24 md:px-10 px-3">
        <div className="pb-10 text-center px-3 lg:w-4/6 mx-auto">
          <h3 className="text-gold-100 md:text-4xl text-2xl font-semibold">
            Customized Packages
          </h3>
          <p className="lg:text-3xl text-lg">
            We have customized packages to ease your decision making process
            with very reliable vendors tailored to your needs.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">

        </div>
      </section>
      <section className="relative h-[130px] bg-gradient-to-b from-[#581332] to-[#BE3071]">
       
      </section>

    </>
  )
}

export default VendorsPage;
