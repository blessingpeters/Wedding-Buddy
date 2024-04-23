import WbButton from "../../components/common/WbButton";

const VendorProfile = () => {
  return (
    <section className="lg:px-16 sm:px-8 px-3 font-raleway">
      <div className=" text-graywhite-600  py-10 border-b border-[#AFABAB]">
        <h1 className="md:text-4xl text-2xl my-2">My Profile</h1>
        <p>Change your profile image and information edit and save.</p>
      </div>

      <form className="font-lato my-10" action="">
        <div className="py-4 border mb-6 px-3 rounded-lg flex gap-2 items-center">
          <p className="relative text-sm font-light font-lato text-burgundy-100 rounded-full w-12 h-12 bg-[#00004D21] flex items-center justify-center">
            AE
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
        <div className="py-4 border my-4 px-3 rounded-lg items-center ">
          <h2 className="my-4 text-xl">Personal Information</h2>

          <div className="flex flex-col md:flex-row gap-6 my-6">
            <div className="w-full">
              <label className="text-[#121212]" htmlFor="name">
                Vendor Name:
              </label>{" "}
              <br />
              <input
                className="mt-1 w-full border border-[#777777E5] rounded bg-transparent p-4 text-sm placeholder:[#767373]"
                type="text"
                name="name"
                id="name"
                placeholder="Enter First Name"
              />
            </div>
            <div className="w-full">
              <label className="text-[#121212]" htmlFor="email">
                Last Name
              </label>{" "}
              <br />
              <input
                className="mt-1 w-full border border-[#777777E5] rounded bg-transparent p-4 text-sm  placeholder:[#767373]"
                type="text"
                name="name"
                id="email"
                placeholder="Enter Last Name"
              />{" "}
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 my-6">
            <div className="w-full">
              <label className="text-[#121212]" htmlFor="name">
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
              <label className="text-[#121212]" htmlFor="email">
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
          <div className="my-6">
            <label className="text-[#121212]" htmlFor="message">
              Mesage
            </label>
            <textarea
              className="mt-1 border border-[#777777E5] w-full rounded bg-transparent"
              name="message"
              id="message"
              cols="70"
              rows="4"
            ></textarea>
          </div>
        </div>

        <div className="py-4 border my-10 px-3 rounded-lg items-center ">
          <h2 className="my-4 text-xl">Social Media</h2>

          <div className="flex flex-col md:flex-row gap-6 my-6">
            <div className="w-full">
              <label className="text-[#121212]" htmlFor="name">
                Facebook
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
                Twitter
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
          <div className="flex flex-col md:flex-row gap-6 my-6">
            <div className="w-full">
              <label className="text-[#121212]" htmlFor="name">
                Instagram
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
                Youtube
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

        <div className="py-4 border my-10 px-3 rounded-lg items-center ">
          <h2 className="my-4 text-xl">Security</h2>

          <div className="flex flex-col md:flex-row gap-6 my-6">
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

        <WbButton className="w-full lg:w-3/4" text="Save Changes" />
      </form>
    </section>
  );
};

export default VendorProfile;
