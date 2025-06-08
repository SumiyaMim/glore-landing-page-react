import { PiHeadsetBold } from "react-icons/pi";
import { RiExchangeFundsFill } from "react-icons/ri";
import { MdVerified } from "react-icons/md";

const Policy = () => {
  return (
    <div className='bg-[#fcd4de] px-6 lg:px-28 py-12'>
      <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-0 items-center text-center">
        <div className="flex flex-col items-center">
            <RiExchangeFundsFill className="text-5xl mb-5"/>
            <h3 className="font-semibold">Easy Exchange Policy</h3>
            <h3>We Offer hassle free exchange policy</h3>
        </div>
        <div className="flex flex-col items-center">
            <MdVerified className="text-5xl mb-5"/>
            <h3 className="font-semibold">3 Days Return Policy</h3>
            <h3>We provide 3 days free return policy</h3>
        </div>
        <div className="flex flex-col items-center">
            <PiHeadsetBold className="text-5xl mb-5"/>
            <h3 className="font-semibold">Best Customer Support</h3>
            <h3>we provide 24/7 customer support</h3>
        </div>
      </div>
    </div>
  )
}

export default Policy
