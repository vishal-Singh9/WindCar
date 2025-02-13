"use client";
import { useState } from "react";

const faqs = [
  {
    id: "collapseOne",
    question: "How do I make a reservation on your website?",
    answer:
      "Provide a step-by-step guide on how users can browse and book travel services on your platform. Include information on searching for destinations, selecting dates, choosing accommodation, and completing the booking process.",
  },
  {
    id: "collapseTwo",
    question: "What documents do I need for my trip, and how do I obtain them?",
    answer:
      "Provide a step-by-step guide on how users can browse and book travel services on your platform. Include information on searching for destinations, selecting dates, choosing accommodation, and completing the booking process.",
  },
  {
    id: "collapseThree",
    question:
      "In the event that I need to modify or cancel my reservation, what are the policies in place?",
    answer:
      "Provide a step-by-step guide on how users can browse and book travel services on your platform. Include information on searching for destinations, selecting dates, choosing accommodation, and completing the booking process.",
  },
  {
    id: "collapseFour",
    question:
      "Can you specify the types of credit/debit cards, digital wallets, or other online payment methods accepted?",
    answer:
      "Provide a step-by-step guide on how users can browse and book travel services on your platform. Include information on searching for destinations, selecting dates, choosing accommodation, and completing the booking process.",
  },
  {
    id: "collapseFive",
    question:
      "What are the working hours, and what can I expect in terms of response times?",
    answer:
      "Provide a step-by-step guide on how users can browse and book travel services on your platform. Include information on searching for destinations, selecting dates, choosing accommodation, and completing the booking process.",
  },
];

export default function OurSupport() {
  const [activeIndex, setActiveIndex] = useState();

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div  style={{ backgroundImage: `url('https://i.pinimg.com/736x/4c/25/ab/4c25ab264539ced3ff06d09775ba52db.jpg')` , backgroundSize: 'cover', backgroundPosition: 'center' ,backgroundAttachment: 'fixed'}}>


    <div className="max-w-4xl mx-auto p-8">
      {/* Header */}
      <div className="text-center">
        <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
          Our Support
        </span>
        <h3 className="text-4xl font-bold text-white mt-4">
          Frequently Asked Questions
        </h3>
      </div>  

      {/* FAQ List */}
      <div className="mt-8 space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={faq.id}
            className="border border-gray-300 rounded-xl overflow-hidden shadow-md transition-all hover:shadow-xl bg-white"
          >
            {/* Question */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between px-6 py-4 text-left text-gray-900 font-medium text-lg bg-white hover:bg-gray-50 transition-all"
            >
              <span className="flex items-center gap-4">
                <span className="text-blue-600 font-bold text-xl">{index + 1}</span>
                {faq.question}
              </span>
              <span className="text-blue-500 text-2xl font-bold">
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>

            {/* Answer */}
            {activeIndex === index && (
              <div className="px-6 py-4 bg-gray-50 text-gray-700 text-base border-t border-gray-200 animate-fadeIn">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footer Links */}
      <div className="mt-8 flex justify-center gap-4">
        <a
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition"
          href="/"
        >
          Contact Us
        </a>
        <a
          className="bg-gray-100 text-gray-800 px-6 py-3 rounded-lg font-semibold text-lg hover:bg-gray-200 transition"
          href="/"
        >
          Help Center
        </a>
      </div>
    </div>
    </div>
  );
}
