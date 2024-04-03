import { TiTick } from "react-icons/ti";
import { Plan } from "../types";

const PricieCard = ({ title, plane, features, id, type }: Plan) => {
  return (
    <div
      className={`w-full sm:w-[200px] h-full ${
        title == "Individual" ? "bg-[#F8D6D5] " : ""
      }  flex-1 p-5 cursor-pointer `}
    >
      <h2 className="text-xl sm:text-2xl font-medium">
        {title}
        {title == "Individual" ? (
          <span className="border border-red-400 px-2 text-red-400 rounded-full text-[12px] sm:text-[14px] ml-2 ">
            Popular
          </span>
        ) : (
          ""
        )}
      </h2>

      <hr className="mt-3 sm:mt-5" />
      <h1 className="mt-3 sm:mt-5 text-sm sm:text-2xl font-medium">
        $<span className="text-2xl sm:text-4xl">{plane}</span>
        <span className="text-[6px] sm:text-[12px] text-gray-400">
          {plane == "0"
            ? " No credit card required"
            : "/ month , billed yearly"}
        </span>
      </h1>
      <hr className="my-3 sm:my-5" />
      <button
        className={`${
          title == "Individual"
            ? "bg-gradient-to-r from-[#E58496] to-[#F2B56A]"
            : " bg-white border-2 border-black "
        } ${
          title == "Free" ? "bg-white border-[1px] border-gray-300 " : ""
        } w-full py-2 rounded-md text-[12px] sm:text-[16px] font-bold`}
      >
        Get Started
      </button>
      <hr className="my-3 sm:my-5" />
      <h3 className="font-bold text-[12px] sm:text-[18px] "> {type} </h3>

      <ul className="flex flex-col gap-2 my-3 sm:my-5">
        {features.map((fet) => (
          <li className="flex items-center gap-2 font-medium text-[12px] sm:text-[16px]">
            <span className="text-[#bbdbdf]">
              <TiTick />
            </span>
            {fet}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PricieCard;
