import { useState } from 'react';

const FaqAccordion = () => {
  const faqData = [
    {
      question: 'What is the total cost of attendance at this college?',
      answer: 'The total cost of attendance includes a tuition fee of 32,000 rs (38,000 rs for the even semester), a mess and hostel fee of 18,000 rs per semester..'
    },
    {
      question: 'Are there any scholarship opportunities available to students?',
      answer: 'Yes, there are several scholarships available, including those listed on the National Scholarship Portal, as well as merit-based scholarships.'
    },
    {
      question: 'How many seats are available per branch at this college?',
      answer: 'Approximately 70 seats are available per branch.'
    },
    {
      question: 'How is the distribution of seats among different branches decided?',
      answer: 'The distribution of seats among different branches is determined based on the ranking achieved in the JEE MAINS exam.'
    },
    {
      question: 'Is it possible to change your branch after admission if there are seats available?',
      answer: 'It is indeed possible to change your branch after the first year of admission, based on your academic performance during the first year.'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="max-w-2xl p-4   mx-auto">
      {faqData.map((item, index) => (
        <div
          key={index}
          className="border-gradient border-2  m-2 p-8 rounded-md py-4 transition duration-500 ease-in-out  bg-gray-200"
        >
          <button
            className="flex items-center justify-between w-full focus:outline-none"
            onClick={() => toggleAccordion(index)}
          >
            <span className="font-medium font-semibold text-xl text-gray-600  ">{item.question}</span>
            <svg
              className={`${
                activeIndex === index ? 'transform rotate-180' : ''
              } w-5 h-5 font-bold     `}
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M6.293 6.293a1 1 0 0 1 1.414 0L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div
            className={`${
              activeIndex === index ? 'block' : 'hidden'
            } mt-4 text-gray-700`}
          >
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion;
