import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const Faq = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const faqs = [
    {
      question: "What is BlazeHire?",
      answer:
        "BlazeHire is a job board where companies post jobs and you can apply to them.",
    },
    {
      question: "How do I apply for a job?",
      answer:
        "Just click on a job card,see the details, and hit the apply button.",
    },
    {
      question: "Can companies post jobs?",
      answer: "Yes, companies can go to the Post Job page and add their jobs.",
    },
    {
      question: "What if I don't find a job I like?",
      answer:
        "Try using the search bar to find jobs by title, company, or location. Or check back later for new jobs.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="mt-24 px-4 sm:px-6">
      <div className="w-full">
        <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4 sm:mb-6">
          FAQ - Frequently Asked Questions
        </h2>
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border rounded-lg transition-all duration-200 ${
                openFaq === index
                  ? "border-primary bg-red-50"
                  : "border-gray-200"
              }`}
            >
              <button
                className="w-full text-left p-3 sm:p-4"
                onClick={() => toggleFaq(index)}
              >
                <div className="flex justify-between items-center">
                  <p className="text-sm sm:text-xl font-semibold text-primary-dark">
                    {faq.question}
                  </p>
                  {openFaq === index ? (
                    <FiChevronUp className="w-5 h-5 text-primary-dark" />
                  ) : (
                    <FiChevronDown className="w-5 h-5 text-primary-dark" />
                  )}
                </div>
              </button>
              {openFaq === index && (
                <div className="px-3 pb-3 pt-1 sm:px-4 sm:pb-4 sm:pt-2 text-sm sm:text-base text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
