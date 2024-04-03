import { BsChatDots, BsStars } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import { pipeline1, pipeline2, users } from "../assets";
import { MdOutlineStarPurple500 } from "react-icons/md";

const ProductionPipeline = () => {
  return (
    <div className="bg-[#FCFDFF]  mt-10 container mx-auto px-12 md:px-8 lg:px-20">
      <div className="flex flex-col justify-center items-center gap-5">
        <h1 className="text-xl md:text-4xl text-center font-bold">
          10x Your Pre-Production Pipeline
        </h1>
        <p className="text-center font-medium w-full text-[14px]  md:w-3/4 lg:w-[600px]">
          Boords helps you achieve a fast, hassle-free pre-production process so
          you can spend more time being creative. You'll wonder how you lived
          without it...
        </p>
      </div>

      <div className="flex flex-col md:flex-row mt-10 md:mt-20 justify-center md:justify-between px-5">
        <div className="w-full md:w-[350px] flex flex-col gap-5">
          <button className="flex items-center gap-2 border px-3 py-1 font-medium rounded-md w-fit">
            <span className="text-[#e8b9ca] text-sm ">
              <BsStars size={20} />
            </span>
            Create
          </button>
          <h1 className="text-xl md:text-4xl font-bold">
            Easy-to-Use, Professional Power...
          </h1>
          <p className="font-medium">
            Boords makes it easy for anyone in your organization to create
            client-ready storyboards with a simple drag-and-drop interface,
            image & script generation, and a vast stock illustration and photo
            library.
          </p>
          <a href="#" className="flex items-center gap-2 font-bold underline">
            Learn More
            <span>
              <FaArrowRight />
            </span>
          </a>
        </div>
        <div className="w-full md:w-[350px] h-[250px] md:h-[500px] flex justify-center items-center bg-gradient-to-br from-[#F7F8F2] to-[#CADAE3] shadow-sm rounded-xl mt-6 md:mt-0">
          <img
            src={pipeline1}
            alt=""
            className="w-[200px] md:w-[250px] h-[250px] md:h-[500px] shadow-md"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row mt-10 md:mt-20 justify-center md:justify-between px-5">
        <div className="w-full md:w-[350px] flex flex-col gap-5">
          <button className="flex items-center gap-2 border px-3 py-1 font-medium rounded-md w-fit">
            <span className="text-[#eeb5ca] text-sm ">
              <BsChatDots size={20} />
            </span>
            Collaborate
          </button>
          <h1 className="text-xl md:text-4xl font-bold">
            Centralize Team Communication...
          </h1>
          <p className="font-medium">
            Boords helps you establish clear communication between creatives and
            clients with commenting, approvals, real-time updates, and more. Say
            goodbye to confusing email threads and missing feedback.
          </p>
          <a href="#" className="flex items-center gap-2 font-bold underline">
            Learn More
            <span>
              <FaArrowRight />
            </span>
          </a>
        </div>
        <div className="w-full md:w-[350px] h-[250px] md:h-[500px] flex justify-center items-center bg-gradient-to-br from-[#F7F8F2] to-[#CADAE3] shadow-sm rounded-xl mt-6 md:mt-0">
          <img
            src={pipeline2}
            alt=""
            className="w-[200px] md:w-[250px] h-[250px] md:h-[500px] shadow-md"
          />
        </div>
      </div>

      <div className="flex items-center justify-center mt-10 md:mt-20 px-5 ">
        <div className="flex items-center gap-2 bg-[#F5F6EF] p-3 rounded-full">
          <div className="flex items-center gap-1 text-yellow-500 w-[80px] ">
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
          </div>
          <p className="font-medium text-[10px] ">
            Rated 4.5/5 by video Professionals
          </p>
          <img src={users} alt="" className=" hidden xl:flex w-[100px]" />
        </div>
      </div>
    </div>
  );
};

export default ProductionPipeline;
