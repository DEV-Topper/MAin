import { useState } from "react";
import { BiQuestionMark } from "react-icons/bi";
import { BsDash, BsPlus } from "react-icons/bs";

const FAQS = () => {
  const [state, setState] = useState({ index: 0, val: true });

  const data = [
    {
      q: "What is cryptocurrency?",
      id: 0,
      ans: " Cryptocurrency is a form of payment that can be exchanged online for goods and services. Many companies have issued their own currencies, often called tokens, and these can be traded specifically for the good or service that the company provides. Think of them as you would arcade tokens or casino chips. You’ll need to exchange real currency for the cryptocurrency to access the good or service.",
    },
    {
      q: "Which crytocurrency is best to buy today?",
      id: 1,
      ans: "Cryptocurrency is a form of payment that can be exchanged online for goods and services. Many companies have issued their own currencies, often called tokens, and these can be traded specifically for the good or service that the company provides. Think of them as you would arcade tokens or casino chips. You’ll need to exchange real currency for the cryptocurrency to access the good or service.",
    },
    {
      q: "How about day trading crypto?",
      id: 2,
      ans: "While profits are possible trading cryptocurrencies, so are losses. My first year involved me spending hundreds of hours trading Bitcoin with a result of losing over $5,000 with nothing to show for it. Simply trading digital currencies is very similar to gambling because no one really knows what is going to happen next although anyone can guess! While I was lucky to do nothing expect lose money when I started, the worst thing that can happen is to get lucky right away and get a big ego about what an amazing cryptocurrency trader we are.",
    },
    {
      q: "When to sell a cryptocurrency",
      id: 3,
      ans: "Before Steem I was all in an another altcoin and really excited about it. When I first bought the price was low and made payments to me every week just for holding it. As I tried to participate in the community over the next several months, I was consistently met with a mix of excitement and hostility. When I began talking openly about this, the negative emotions won over in the community and in me. Originally I had invested and been happy to hold no matter what the price which quickly went up after I bought it.",
    },
  ];

  return (
    <div
      id="faq"
      className="w-full py-[15vh] lg:py-0 min-h-[120vh] lg:min-h-[80vh] bg-blue-600 flex justify-center items-center"
    >
      <div className="w-[80%] lg:w-[50%] ">
        <div className="text-center mb-10">
          <h4 className="text-blue-300 text-[18px] font-semibold">FAQS</h4>
          <h1 className="text-white my-3 capitalize text-[35px] font-bold">
            Frequently asked questions
          </h1>
          <p className="text-[17px] text-white ">
            Frequently asked questions (FAQ) or Questions and Answers (Q&A), are
            listed questions and answers, all supposed to be commonly asked in
            some context
          </p>
        </div>
        <div className="space-y-5">
          {data.map((el, i: number) => (
            <div
              onClick={() => {
                if (!document.startViewTransition) {
                  setState({ index: i, val: true });
                } else {
                  document.startViewTransition(() => {
                    setState({ index: i, val: true });
                  });
                }
              }}
              className="w-full rounded-md py-2 px-3 text-white bg-blue-800 shadow-md items-center"
            >
              <div className="w-full flex justify-between">
                <div className="flex items-center gap-4">
                  {state.index === i ? (
                    <BsDash size={30} />
                  ) : (
                    <BsPlus size={30} />
                  )}
                  <p className="font-semibold text-[17px]">{el.q}</p>
                </div>
                <BiQuestionMark size={24} />
              </div>
              {state.index === i && el.id === i ? (
                <p className="text-[18px] mt-2">{el.ans}</p>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQS;
