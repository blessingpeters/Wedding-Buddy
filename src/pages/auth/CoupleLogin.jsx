import Login from "../../components/auth/Login.jsx"

const CoupleLogin = () => {
    return (
        <section className="auth-bg h-screen flex flex-col items-start justify-center">
            <a href="/" className="lg:pl-36 md:pl-10 pl-3">
            <img
                className="h-28 w-24 py-4 "
                src="/assets/images/wblogoedit.png"
                alt=""
            />
            </a>

            <div className=" lg:w-3/5 sm:w-9/12  w-11/12 mx-auto font-inter bg-[#DDCCCC] rounded-2xl shadow-2.5xl shadow-[#00000026] sm:px-6 px-3 py-16" >
                <h2 className="text-center font-raleway text-2xl text-burgundy-100 font-semibold mb-14">Login to book vendors and their services</h2>

                <Login userType="couple" />

                <p className="text-center font-lato text-sm text-graywhite-400">Don’t have an account? <a className="text-burgundy-100" href="/auth/coupleSignup">Sign up</a> </p>


            </div>
        </section>
    )
}

export default CoupleLogin
