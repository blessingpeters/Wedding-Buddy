/* eslint-disable react/prop-types */
import WbButton from '../common/WbButton'

const PaymentSuccessModal = ({onClose}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white py-6 px-10 rounded-lg mx-3 lg:w-2/5 sm:w-3/5 w-4/5 ">
      <h2 className="text-[#606062] text-lg font-semibold w-[80%] my-4 mx-auto text-center">Payment Successful</h2>
      <img className='mx-auto' src="/assets/images/check-sucess.svg" alt="check mark" />
      <div className="flex justify-end space-x-4 my-8">
        <WbButton className='w-full' text="Back" onClick={onClose}/>

      </div>
    </div>
  </div>
  )
}

export default PaymentSuccessModal
