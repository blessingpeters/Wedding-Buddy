import Login from "../../components/auth/Login.jsx"

const CoupleLogin = () => {
    return (
        <section className="auth-bg h-screen py-12 lg:px-24 md:px-10 px-3">
            <a href="/">
            <img
                className="h-28 w-24 py-4 "
                src="/assets/images/wblogoedit.png"
                alt=""
            />
            </a>

            <div className=" lg:w-3/5 sm:w-9/12 mt-10 w-11/12 mx-auto font-inter bg-[#DDCCCC] rounded-2xl shadow-2.5xl shadow-[#00000026] sm:px-6 px-3 py-20" >
                <h2 className="text-center font-raleway text-2xl text-burgundy-100 font-semibold mb-10">Login to book vendors and their services</h2>

                <Login userType="couple" />
                <p className="text-center font-lato text-sm text-graywhite-400">Don’t have an account? <a className="text-burgundy-100" href="/coupleSignup">Sign up</a> </p>


            </div>
        </section>
    )
}

export default CoupleLogin
