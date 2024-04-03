import { useState } from "react";
import { planse } from "../data";
import PricieCard from "./PricieCard";

const Pricing = () => {
  const [monthyPricing, setMonthlyPricing] = useState(true);

  const currency = [
    { id: 1, title: "eru" },
    { id: 2, title: "gbp" },
    { id: 3, title: "usd" },
  ];
  return (
    <section className="bg-[#FEEACE] mt-20 py-10 px-5">
      <div className="flex items-center justify-center flex-col">
        <h1 className="text-2xl xl:text-4xl font-bold text-center">
          The Shortcut to Effective Storyboards
        </h1>
        <p className="font-medium text-center w-[300px] xl:w-[600px] mt-5">
          Get the modern storyboarding tool loved by video professionals. All
          plans come with a risk-free 30-day money-back guarantee.
        </p>
      </div>

      <div className="flex justify-between w-full  ">
        <div className="w-3/4 flex  mt-10  justify-between ">
          <div className="w-full mx-2 xl:mx-0">
            <div
              className="flex items-center gap-3 justify-center xl:ml-[210px]
             "
            >
              <span className="text-[12px] text-[#B9AC95] ">Monthly</span>
              <button
                onClick={() => setMonthlyPricing((prev) => !prev)}
                className={`  relative w-12 h-6 flex items-center justify-center rounded-full focus:outline-none ${
                  monthyPricing ? "bg-[#EEAA81]" : "bg-gray-300"
                }  `}
              >
                <span
                  className={`absolute bg-white w-5 h-5 rounded-full transform transition-transform ${
                    monthyPricing ? "right-1 " : "left-1"
                  }`}
                ></span>
              </button>
              <p className=" hidden xl:flex text-[12px] text-[#c8b696] ">
                Anual
                <span className="text-[10px] text-[#dbc094] "> (save 20%)</span>
              </p>
            </div>
          </div>
          <div className="flex items-center uppercase border-2 border-gray-400  rounded-md bg-gray-50 font-medium text-gray-500 ">
            {currency.map((cur) => (
              <span
                className={`ml-1 px-2 cursor-pointer text-[10px] xl:text-sm  ${
                  cur.id == 3
                    ? "rounded-tr-md rounded-br-md border-2 border-black text-black"
                    : ""
                } ${cur.id == 1 ? "border-r-2 border-gray-400 " : ""} `}
                key={cur.id}
              >
                {cur.title}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex overflow-x-scroll items-center justify-between  mt-10  gap-5 bg-white rounded-xl h-[650px] px-5 xl:mx-20  ">
        {planse.map((plane) => (
          <PricieCard key={plane.id} {...plane} />
        ))}
      </div>
    </section>
  );
};

export default Pricing;
