import { useEffect, useState } from "react";
import Refer_Form from "../Refer_Form/Refer_Form";

const Refer_Benefits = () => {
  const [benefits, setBenefits] = useState([]);
  const [allProgram, setAllProgram] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const getBenefits = () => {
    fetch("/refer_benefits.json")
      .then((res) => res.json())
      .then((data) => setBenefits(data));
  };

  const getAllProgram = () => {
    fetch("/all_program.json")
      .then((res) => res.json())
      .then((data) => setAllProgram(data));
  };

  useEffect(() => {
    getBenefits();
    getAllProgram();
  }, []);

  return (
    <section className="container mt-24 px-4 mx-auto">
      <h2 className="font-medium text-2xl text-center">
        What Are The <span className="text-blue-600">Referral Benefits?</span>
      </h2>

      {/* Toggle button */}
      <div className="flex justify-end my-4">
        <label
          htmlFor="Toggle1"
          className="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-800"
        >
          <span>Enrolled</span>
          <span className="relative">
            <input id="Toggle1" type="checkbox" className="hidden peer" />
            <div className="w-10 h-6 rounded-full shadow-inner dark:bg-gray-600 peer-checked:dark:bg-violet-600"></div>
            <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-gray-100"></div>
          </span>
        </label>
      </div>

      {/* Tables section */}
      <div className="flex flex-col lg:flex-row lg:space-x-4 mt-6">
        <div className="lg:w-1/4 overflow-x-auto mb-6 lg:mb-0 w-full">
          <table className="min-w-full bg-white">
            <thead className="bg-blue-600 rounded-t-lg">
              <tr>
                <th
                  scope="col"
                  className="py-3.5 px-4  text-white font-semibold text-left"
                >
                  All Programs
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {allProgram.map((program, idx) => (
                <tr key={idx}>
                  <td className="px-4 py-4 text-sm font-medium ">
                    {program.short_name}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="lg:flex-1 overflow-x-auto w-full">
          <table className="min-w-full bg-white">
            <thead className="bg-blue-300 text-blue-800">
              <tr className="divide-x divide-gray-700">
                <th scope="col" className="py-3.5 px-4 font-semibold text-left">
                  Programs
                </th>
                <th scope="col" className="py-3.5 px-4 font-semibold text-left">
                  Referrer Bonus
                </th>
                <th scope="col" className="py-3.5 px-4 font-semibold text-left">
                  Referral Bonus
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {benefits.map((benefit, idx) => (
                <tr key={idx} className="divide-x divide-gray-700">
                  <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                    {benefit.Program}
                  </td>
                  <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                    {benefit.ReferrerBonus}
                  </td>
                  <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                    {benefit.ReferralBonus}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Dropdown */}
      <div className="relative flex justify-end my-4">
        <button
          onClick={toggleDropdown}
          className="relative flex items-center p-2 text-sm text-gray-600 bg-white border border-transparent rounded-md shadow focus:border-blue-500 focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring focus:outline-none"
        >
          <span className="mx-1">Show More</span>
          <svg
            className={`w-5 h-5 mx-1 ${isOpen ? "transform rotate-180" : ""}`}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z"
              fill="currentColor"
            ></path>
          </svg>
        </button>
        {isOpen && (
          <div
            className="absolute right-0 z-20 w-56 py-2 mt-2 overflow-hidden origin-top-right bg-blue-400 rounded-md shadow-xl"
            style={{ top: "100%" }}
          >
            <a
              className="flex items-center p-3 text-sm transition-colors duration-300 transform"
              href="#"
            >
              Program
            </a>
            <a
              className="flex items-center p-3 text-sm transition-colors duration-300 transform"
              href="#"
            >
              Program
            </a>
            <a
              className="flex items-center p-3 text-sm transition-colors duration-300 transform"
              href="#"
            >
              Program
            </a>
          </div>
        )}
      </div>

      {/* Refer button */}
      <div className="flex justify-center">
        <button
          onClick={openModal}
          className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-500 transition"
        >
          Refer Now
        </button>
        <Refer_Form
          isOpen={isModalOpen}
          onRequestClose={closeModal}
        ></Refer_Form>
      </div>
    </section>
  );
};

export default Refer_Benefits;
