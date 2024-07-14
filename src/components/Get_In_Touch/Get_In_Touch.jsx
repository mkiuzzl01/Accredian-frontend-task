import { FaHeadset } from "react-icons/fa";


const Get_In_Touch = () => {
    return (
        <div className="mt-10">
            <div className="bg-[#1A73E8] flex flex-col gap-4 lg:flex-row justify-between items-center  p-10 rounded-lg">
                <div className="flex items-center space-x-4">
                    <div className="bg-white rounded-lg p-2 ">
                    <FaHeadset className="text-6xl" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold text-white">Want to delve deeper into the program?</h2>
                        <p className="text-sm text-white">Share your details to receive expert insights from our program team!</p>
                    </div>
                </div>
                <div>
                    <button className="p-2 py-4 rounded-lg text-blue-700 font-semibold bg-white">Get in touch</button>
                </div>
            </div>
        </div>
    );
};

export default Get_In_Touch;