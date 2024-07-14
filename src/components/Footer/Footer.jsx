import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#282828] mt-24">
      <div className="container max-w-7xl mx-auto">
        <div className="flex flex-col items-center lg:flex-row justify-between py-4">
          <div className="px-6">
            <a href="#">
              <img className="w-auto " src="/Link.png" alt="Logo" />
            </a>
          </div>
          <div className="text-white">
            <button className="px-10 py-2 bg-blue-600 rounded-lg">
              Schedule 1-on-1 Call Now
            </button>
            <p className="text-center">Speak with our Learning Advisor</p>
          </div>
        </div>

        <hr className="h-px my-6 bg-gray-300 border-none dark:bg-gray-700" />

        <div className="flex flex-col px-5 lg:flex-row md:flex-row text-white justify-between">
          <div className="">
            <h4 className="text-2xl  pb-5 lg:ms-4">Program</h4>
            <div className="space-y-4">
              <div class="flex items-center justify-between focus:outline-none">
                <h1 class="mx-4 text-xl text-gray-700 dark:text-white">
                  Data Science & AI
                </h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="flex-shrink-0 w-6 h-6  text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
              <div class="flex justify-between items-center focus:outline-none">
                <h1 class="mx-4 text-xl text-gray-700 dark:text-white">
                  Product Management
                </h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="flex-shrink-0 w-6 h-6 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
              <div class="flex justify-between items-center focus:outline-none">
                <h1 class="mx-4 text-xl text-gray-700 dark:text-white">
                  Business Analytics
                </h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="flex-shrink-0 w-6 h-6 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
              <div class="flex justify-between items-center focus:outline-none">
                <h1 class="mx-4 text-xl text-gray-700 dark:text-white">
                  Digital Transformation
                </h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="flex-shrink-0 w-6 h-6 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
              <div class="flex justify-between items-center focus:outline-none">
                <h1 class="mx-4 text-xl text-gray-700 dark:text-white">
                  Business Management
                </h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="flex-shrink-0 w-6 h-6 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
              <div class="flex justify-between items-center focus:outline-none">
                <h1 class="mx-4 text-xl text-gray-700 dark:text-white">
                  Project Management
                </h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="flex-shrink-0 w-6 h-6 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
              <div class="flex justify-between items-center focus:outline-none">
                <h1 class="mx-4 text-xl text-gray-700 dark:text-white">
                  Strategy & Leadership
                </h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="flex-shrink-0 w-6 h-6 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
              <div class="flex justify-between items-center focus:outline-none">
                <h1 class="mx-4 text-xl text-gray-700 dark:text-white">
                  Senior Management
                </h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="flex-shrink-0 w-6 h-6 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
              <div class="flex justify-between items-center focus:outline-none">
                <h1 class="mx-4 text-xl text-gray-700 dark:text-white">
                  Fintech
                </h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="flex-shrink-0 w-6 h-6  text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <h4 className="text-2xl pb-5">Contact US</h4>
            <div>
              <p>
                Email us (For Data Science Queries): admissions@accredian.com
              </p>
              <p>Email us (For Product Management Queries):pm@accredian.com</p>
              <p>
                Data Science Admission Helpline:+91 9079653292 (9 AM - 7 PM)
              </p>
              <p>Product Management Admission Helpline:+91 9625811095</p>
              <p>Enrolled Student Helpline: +91 7969322507</p>
              <p>
                Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector
                18, Gurugram, Haryana 122015
              </p>
              <p>Why Accredian</p>
              <p>Follow Us</p>
              <div className="flex space-x-2">
                <FaLinkedin  size={25}/>
                <FaFacebook size={25} />
                <FaYoutube  size={25}/>
                <FaTwitter  size={25}/>
                <FaInstagram  size={25}/>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-2xl pb-5">Accredian</h4>
            <div className="flex flex-col space-y-2">
              <a href="#">About</a>
              <a href="#">Career</a>
              <a href="#">Blog</a>
              <a href="#">Admission Policy</a>
              <a href="#">Referral Policy</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms Of Service</a>
              <a href="#">Master FAQs</a>
            </div>
          </div>
        </div>
        <div className="py-10">
          <p className="text-center text-gray-800 dark:text-white">
          © 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
