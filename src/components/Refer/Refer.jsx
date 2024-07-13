import background from "../../../public/18512590-ai (1) 1.png";
import { BsPersonFillAdd } from "react-icons/bs";
import { PiNotePencilBold } from "react-icons/pi";
import { FaBookBookmark } from "react-icons/fa6";

const Refer = () => {
    return (
        <section className="relative bg-lightblue-100 py-16">
        <div className="container mx-auto text-center relative">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            How Do I <span className="text-blue-500">Refer?</span>
          </h2>
          <div className="relative flex justify-center items-center">
            <img src={background} alt="Refer Background" className="w-full h-auto" />
            
            <div className="absolute top-1/2 left-1/4 pe-24 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <span><BsPersonFillAdd size={60} className="text-blue-600"/></span>
              <p className="mt-4 text-gray-700 ">
                Submit referrals easily via <br /> our website's referral <br /> section.
              </p>
            </div>
            <div className="absolute top-1/2 left-1/2 pe-5 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <PiNotePencilBold size={60} className="text-blue-600"/>
              <p className="mt-4 text-gray-700">
                Earn rewards once your referral <br /> joins an Accredian <br /> program.
              </p>
            </div>
            <div className="absolute top-1/2 left-3/4 ps-16 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <FaBookBookmark size={60} className="text-blue-600"/>
              <p className="mt-4 text-gray-700">
                Both parties receive a <br /> bonus 30 days after <br /> program enrollment.
              </p>
            </div>
          </div>
          <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-500 transition">
            Refer Now
          </button>
        </div>
      </section>
    );
};

export default Refer;