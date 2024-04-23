// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import WbButton from "../../components/common/WbButton";

const CoupleProfile = () => {
    // const [formData, setFormData] = useState({
    //     groomName: '',
    //     brideName: '',
    //     email: '',
    //     password: '',
    //     Bridedob: '',
    //     Groomdob: '',
    //     weddingDate: '',
    //     weddingLocation: '',
    //     budget: '',
    //     weddingPreference: '',
    //     relationshipStatus: '',
    //     role: ''
    //   });
    return (
        <section className="lg:px-16 sm:px-8 px-3 font-raleway">
            <div className=" text-graywhite-600  py-10 border-b border-[#AFABAB]">
                <h1 className="md:text-4xl text-2xl my-2">My Profile</h1>
                <p>Change your profile image and information edit and save.</p>
            </div>

            <form className="font-lato my-10" action="">
                <div className="py-4 border mb-6 px-3 rounded-lg flex gap-2 items-center">
                    <p className="relative text-sm font-light font-lato text-burgundy-100 rounded-full w-12 h-12 bg-[#00004D21] flex items-center justify-center">
                        FD
                        <img
                            className="absolute right-1 bottom-1"
                            src="/assets/icons/tiny-camera.svg"
                            alt=" camera"
                        />
                    </p>
                    <div>
                        <p className="font-bold">Arevo Events</p>
                        <p className="text-[#73797F] font-lato text-xs">Owner</p>
                    </div>
                </div>
                <div className="p-4 my-4 rounded-lg bg-[#F7F7F7] items-center ">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-graywhite-600 text-xl">Couple Information</h2>
                        <WbButton className="" size="small" text="save" />
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                        <div className="flex flex-col md:flex-row gap-6 my-6">
                            <div className="w-full ">
                                <label className="text-graywhite-400" htmlFor="groomName">
                                    Bride’s Name
                                </label>
                                <input
                                    className="mt-1 w-full border border-[#777777E5] rounded bg-transparent p-4 text-sm  placeholder:[#767373]"
                                    type="text"
                                    name="brideName"
                                    id="brideName"
                                    // value={formData.brideName}
                                    placeholder="Enter bride’s name"
                                // onChange={handleInputChange}
                                />
                            </div>
                            <div className="w-full ">
                                <label className="text-graywhite-400" htmlFor="groomName">
                                    Bride’s Middle Name
                                </label>
                                <input
                                    className="mt-1 w-full border border-[#777777E5] rounded bg-transparent p-4 text-sm  placeholder:[#767373]"
                                    type="text"
                                    name="brideMName"
                                    id="brideMName"
                                    // value={formData.brideName}
                                    placeholder="Bride’s middle name"
                                // onChange={handleInputChange}
                                />
                            </div>
                            <div className="w-full ">
                                <label className="text-graywhite-400" htmlFor="brideLName">
                                    Bride’s Last Name
                                </label>
                                <input
                                    className="mt-1 w-full border border-[#777777E5] rounded bg-transparent p-4 text-sm  placeholder:[#767373]"
                                    type="text"
                                    name="brideLName"
                                    id="brideLName"
                                    // value={formData.brideLName}
                                    placeholder="Bride’s last name"
                                // onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-6 my-6">
                            <div className="w-full ">
                                <label className="text-graywhite-400" htmlFor="groomName">
                                    Groom’s Name
                                </label>
                                <input
                                    className="mt-1 w-full border border-[#777777E5] rounded bg-transparent p-4 text-sm  placeholder:[#767373]"
                                    type="text"
                                    name="groomName"
                                    id="groomName"
                                    // value={formData.groomName}
                                    placeholder="Enter Groom’s full name"
                                // onChange={handleInputChange}
                                />
                            </div>
                            <div className="w-full ">
                                <label className="text-graywhite-400" htmlFor="groomMName">
                                    Groom’s Middle Name
                                </label>
                                <input
                                    className="mt-1 w-full border border-[#777777E5] rounded bg-transparent p-4 text-sm  placeholder:[#767373]"
                                    type="text"
                                    name="groomMName"
                                    id="groomMName"
                                    // value={formData.groomName}
                                    placeholder="Enter Groom’s full name"
                                // onChange={handleInputChange}
                                />
                            </div>
                            <div className="w-full ">
                                <label className="text-graywhite-400" htmlFor="groomLName">
                                    Groom’s Last Name
                                </label>
                                <input
                                    className="mt-1 w-full border border-[#777777E5] rounded bg-transparent p-4 text-sm  placeholder:[#767373]"
                                    type="text"
                                    name="groomLName"
                                    id="groomLName"
                                    // value={formData.groomName}
                                    placeholder="Enter Groom’s full name"
                                // onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-6 my-6">
                            <div className="w-full ">
                                <label className="text-graywhite-400" htmlFor="Groomdob">
                                    Groom’s DOB
                                </label>
                                <input
                                    className="mt-1 w-full border border-[#777777E5] rounded bg-transparent p-4 text-sm  text-[#767373]"
                                    type="date"
                                    name="Groomdob"
                                    id="Groomdob"
                                    placeholder="Enter bride’s date of birth"
                                // value={formData.Bridedob}
                                // onChange={handleInputChange}
                                />
                            </div>
                            <div className="w-full ">
                                <label className="text-graywhite-400" htmlFor="groomName">
                                    Bride’s DOB
                                </label>
                                <input
                                    className="mt-1 w-full border border-[#777777E5] rounded bg-transparent p-4 text-sm  text-[#767373]"
                                    type="date"
                                    name="Bridedob"
                                    id="Bridedob"
                                    placeholder="Enter bride’s date of birth"
                                // value={formData.Bridedob}
                                // onChange={handleInputChange}
                                />
                            </div>
                            <div className="w-full ">
                                <label className="text-graywhite-400" htmlFor="groomName">
                                    Wedding Date
                                </label>
                                <input
                                    className="mt-1 w-full border border-[#777777E5] rounded bg-transparent p-4 text-sm  text-[#767373]"
                                    type="date"
                                    name="weddingDate"
                                    id="weddingDate"
                                    placeholder="Enter scheduled wedding date"
                                // value={formData.weddingDate}
                                // onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-6 my-6">
                            <div className="w-full ">
                                <label className="text-graywhite-400" htmlFor="weddingLocation">
                                    Wedding Location
                                </label>
                                <input
                                    className="mt-1 w-full border border-[#777777E5] rounded bg-transparent p-4 text-sm  placeholder:[#767373]"
                                    type="text"
                                    name="weddingLocation"
                                    id="weddingLocation"
                                    placeholder="Enter wedding location"
                                // value={formData.weddingLocation}
                                // onChange={handleInputChange}
                                />
                            </div>
                            <div className="w-full ">
                                <label className="text-graywhite-400" htmlFor="weddingLocation">
                                    Wedding Budget
                                </label>
                                <input
                                    className="mt-1 w-full border border-[#777777E5] rounded bg-transparent p-4 text-sm  placeholder:[#767373]"
                                    type="text"
                                    name="weddingLocation"
                                    id="weddingLocation"
                                    placeholder="Enter wedding location"
                                // value={formData.weddingLocation}
                                // onChange={handleInputChange}
                                />
                            </div>
                            <div className="w-full ">
                                <label className="text-graywhite-400" htmlFor="weddingLocation">
                                    Wedding Prefrence
                                </label>
                                <input
                                    className="mt-1 w-full border border-[#777777E5] rounded bg-transparent p-4 text-sm  placeholder:[#767373]"
                                    type="text"
                                    name="weddingPreference"
                                    id="weddingPreference"
                                    placeholder="Describe wedding preference e.g theme, style, color."
                                // value={formData.weddingPreference}
                                // onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-6 my-6">
                            <div className="w-full">
                                <label
                                    className="text-graywhite-400"
                                    htmlFor="relationshipStatus"
                                >
                                    Relationship Status
                                </label>

                                <select
                                    className="mt-1 w-full border border-[#777777E5] rounded bg-transparent p-4 text-sm  placeholder:[#767373] text-[#767373]"
                                    name="relationshipStatus"
                                    id="relationshipStatus"
                                //   value={formData.relationshipStatus}
                                //   onChange={handleInputChange}
                                >
                                    <option value="nigeria">
                                        Select wedding status, e.g Engaged, Married
                                    </option>
                                    <option value="phography">Engaged</option>
                                    <option value="planner">Married</option>
                                </select>
                            </div>
                            <div className="w-full">
                                <label className="text-graywhite-400" htmlFor="name">
                                    Email Address:
                                </label>{" "}
                                <br />
                                <input
                                    className="mt-1 w-full border border-[#777777E5] rounded bg-transparent p-4 text-sm placeholder:[#767373]"
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="peaceewor@gmail.com"
                                />
                            </div>
                            <div className="w-full">
                                <label className="text-graywhite-400" htmlFor="email">
                                    Phone Number
                                </label>{" "}
                                <br />
                                <input
                                    className="mt-1 w-full border border-[#777777E5] rounded bg-transparent p-4 text-sm  placeholder:[#767373]"
                                    type="text"
                                    name="name"
                                    id="email"
                                    placeholder="Enter Phone Number"
                                />{" "}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-4 bg-[#F7F7F7]  my-10 rounded-lg items-center ">
                    <div className="flex justify-between items-center mb-4 ">
                        <h2 className="text-graywhite-600 text-xl">Security</h2>
                        <WbButton className="" size="small" text="save" />
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 bg-white p-4 rounded-lg">
                        <div className="w-full">
                            <label className="text-[#121212]" htmlFor="name">
                                Enter New Password
                            </label>{" "}
                            <br />
                            <input
                                className="mt-1 w-full border border-[#777777E5] rounded bg-transparent p-4 text-sm placeholder:[#767373]"
                                type="text"
                                name="name"
                                id="name"
                            />
                        </div>
                        <div className="w-full">
                            <label className="text-[#121212]" htmlFor="email">
                                Re-enter new password
                            </label>{" "}
                            <br />
                            <input
                                className="mt-1 w-full border border-[#777777E5] rounded bg-transparent p-4 text-sm  placeholder:[#767373]"
                                type="text"
                                name="name"
                                id="email"
                            />{" "}
                        </div>
                    </div>
                </div>
                <div className="p-4 bg-[#F7F7F7]  my-10 rounded-lg items-center ">
                    <div className="flex justify-between items-center text-graywhite-600 mb-4">
                        <h2 className="text-xl">Others</h2>
                        <WbButton className="" size="small" text="save" />
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 bg-white p-4 rounded-lg">
                        <div className="w-full">
                            <label className="text-[#121212]" htmlFor="name">
                                Enter New Password
                            </label>{" "}
                            <br />
                            <input
                                className="mt-1 w-full border border-[#777777E5] rounded bg-transparent p-4 text-sm placeholder:[#767373]"
                                type="text"
                                name="name"
                                id="name"
                            />
                        </div>
                        <div className="w-full">
                            <label className="text-[#121212]" htmlFor="email">
                                Re-enter new password
                            </label>{" "}
                            <br />
                            <input
                                className="mt-1 w-full border border-[#777777E5] rounded bg-transparent p-4 text-sm  placeholder:[#767373]"
                                type="text"
                                name="name"
                                id="email"
                            />{" "}
                        </div>
                    </div>
                </div>
            </form>
        </section>
    );
};

export default CoupleProfile;
