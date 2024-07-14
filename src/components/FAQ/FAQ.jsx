import React, { useState } from "react";

const FAQ = () => {
  const [selectedTab, setSelectedTab] = useState("Eligibility");

  const faqContent = {
    Eligibility: [
      {
        question:
          "Do I need to have prior Product Management and Project Management experience to enroll in the program?",
        answer:
          "No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work.",
      },
      {
        question: "What is the minimum system configuration required?",
        answer:
          "The minimum system configuration required is a modern computer with an internet connection.",
      },
    ],
    "How To Use?": [
      {
        question: "How do I start using the platform?",
        answer:
          "You can start by signing up and following the onboarding process.",
      },
    ],
    "Terms & Conditions": [
      {
        question: "What are the terms and conditions?",
        answer:
          "Please refer to our terms and conditions page for detailed information.",
      },
    ],
  };

  return (
    <section className="bg-white">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
          Frequently Asked <span className="text-blue-600">Questions</span>
        </h2>
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col space-y-4 mb-8 md:mb-0 md:mr-8">
            {Object.keys(faqContent).map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`px-4 py-2 rounded-lg border ${
                  selectedTab === tab
                    ? "text-blue-600 shadow"
                    : "bg-gray-100 border-gray-600 border-2 hover:bg-gray-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="flex-1">
            {faqContent[selectedTab].map((item, index) => (
              <details key={index} className="mb-4 group">
                <summary className="flex items-center py-2 text-lg font-medium cursor-pointer">
                  <svg
                    className="w-5 h-5 mr-2 text-gray-600 group-open:rotate-90 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                  {item.question}
                </summary>
                <div className="px-4 pb-4">
                  <p>{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
