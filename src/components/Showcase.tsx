import { FaArrowRight } from "react-icons/fa";
import {
  profile,
  profile2,
  showcase1,
  showcase2,
  showcase3,
  showcase4,
} from "../assets";
import { FcProcess } from "react-icons/fc";

const Showcase = () => {
  return (
    <section className="mt-10 xl:px-40 ">
      <div className="bg-gradient-to-b from-[#FEEACE] via-[#FEEACE] to-[#E3EDEF] text-center p-5 flex flex-col justify-center items-center py-10 ">
        <p className=" w-[300px] xl:w-[600px] font-medium text-sm ">
          "Our studio runs on Boords. We can quickly draw up ideas, add in a
          script. receive real-time feedback and rapidly iterate changes.
          Everything is one place so there's no need to email files back and
          forth. It's really a game changer.
        </p>
        <div className="flex flex-col xl:grid-flow-row items-center gap-4 justify-center mt-5 mb-10">
          <img
            src={profile2}
            alt="profile"
            className="xl:w-20 xl:h-20 w-10 h-10 rounded-full"
          />
          <p className="font-bold text-sm ">
            <span>Kelly Messori </span>
            <span className="text-[#91857D] font-normal  ">
              Producer at CatCow
            </span>
          </p>
        </div>
        <button className="bg-gradient-to-r from-[#E58695] to-[#F3B86A] px-6 py-3 font-bold rounded-md text-[16px] text-sm">
          Try Boords free
        </button>
        <p className="my-2 font-medium text-sm ">
          <span className="text-[#E27E9A] text-sm">4,961</span> video
          professionals
        </p>
        <p className="text-[#867661] font-medium text-sm  ">
          joined Boords in the last 7 days
        </p>
      </div>

      <div className="container  mt-20 mx-auto px-10">
        <div className="flex flex-col xl:flex-row justify-between ">
          <div className=" w-full xl:w-[50%] flex items-center justify-center">
            <div className=" w-full xl:w-[330px] flex flex-col gap-5">
              <button className="flex items-center gap-2 border px-3 py-1 font-medium  rounded-md w-fit ">
                <span className="text-[#e8b9ca] text-sm ">
                  <FcProcess size={20} />
                </span>
                Iterate
              </button>
              <h1 className="text-xl md:text-4xl font-bold">
                Fewer Client Curveballs...
              </h1>
              <p className="font-medium">
                Quickly make changes to your storyboards for faster sign-off
                with animatics, versioning, frame statuses and more. Ensure
                everyone is on the same page and avoid unexpected (and costly)
                changes in production. Learn More 4
              </p>
              <a
                href=""
                className="flex items-center gap-2 font-bold underline text-sm"
              >
                Learn more
                <span>
                  <FaArrowRight />
                </span>
              </a>
            </div>
          </div>

          <div className="w-full xl:w-[250px] h-full pt-5 rounded-xl pr-5 items-center bg-gradient-to-br from-[#F7F8F2] to-[#CADAE3] shadow-2xl  ">
            <img
              src={showcase1}
              alt=""
              className="w-[250px] h-[400px] shadow-md rounded-xl"
            />
          </div>
        </div>

        <div className="flex flex-row-reverse mt-20 justify-between ">
          <div className=" w-full xl:w-[300px] flex  justify-end  items-center ">
            <div
              className="w-[330px] flex flex-col gap-5 ml-5
            "
            >
              <button className="flex items-center gap-2 border px-3 py-1 font-medium  rounded-md w-fit ">
                <span className="text-[#eeb5ca] ">
                  <FaArrowRight />
                </span>
                <span className="text-sm "> Export</span>
              </button>
              <h1 className="text-xl xl:text-4xl font-bold">
                Move Seamlessly Into Production
              </h1>
              <p className="font-medium">
                Move seamlessly from storyboard to production with multiple
                export options, including presentation links, customizable PDF,
                MP4 animatics, and more. Learn More 4
              </p>
              <a
                href=""
                className="flex items-center gap-2 font-bold underline "
              >
                Learn more
                <span>
                  <FaArrowRight />
                </span>
              </a>
            </div>
          </div>
          <div className="w-[300px] h-[400px]  flex justify-center items-center ml-[100px] bg-gradient-to-br from-[#F7F8F2] to-[#CADAE3] shadow-sm rounded-xl ">
            <img
              src={showcase2}
              alt=""
              className="w-[250px] h-[250px] shadow-md"
            />
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-[#FEEACE] via-[#FEEACE] to-[#E3EDEF] text-center p-5 flex flex-col justify-center items-center py-10 mt-20">
        <p className="max-w-[600px] w-full px-4 md:px-8 lg:px-16 font-medium">
          "Boords helps us create a consistent look and feel for all our boards,
          and saves our art directors from wasting time futzing with layouts. It
          helps us spend time on the creative, not the formatting. It's every
          creative's dream."
        </p>
        <div className="flex flex-col md:flex-row items-center gap-4 justify-center mt-5 mb-10">
          <img src={profile} alt="profile" className="w-10 h-10 rounded-full" />
          <div className="text-center md:text-left">
            <p className="font-bold text-sm my-2 ">
              <span>Lewis Darby </span>
              <span className="text-[#91857D] font-normal">
                Founder, Yard B
              </span>
            </p>
            <button className="bg-gradient-to-r from-[#E58695] to-[#F3B86A] px-4 md:px-6 py-2 md:py-3 font-bold rounded-md text-[14px] md:text-[16px] ">
              Try Boords free
            </button>
          </div>
        </div>
        <p className="my-2 font-medium text-sm">
          <span className="text-[#E27E9A]">4,961</span> video professionals
        </p>
        <p className="text-[#867661] font-medium text-sm">
          joined Boords in the last 7 days
        </p>
      </div>

      <div className="mt-20 flex flex-col items-center px-5">
        <h1 className="text-2xl xl:text-4xl font-bold text-center">
          Secure, Private, Professional
        </h1>
        <p className="font-medium text-center w-[300px] xl:w-[600px] mt-5 text-sm ">
          We know controlling who sees what - be it teammates or clients - is
          crucial. Boords helps you keep storyboards private with password
          protection, project-level access control, and custom workspace URLs.
        </p>

        <div className="flex h-[400px] justify-center items-center mx-70 border-2 border-black  mt-10 rounded-md ">
          <div className=" w-full xl:w-[50%] px-10  xl:px-20 ">
            <h2 className="text-2xl font-bold">
              Share with <br className="hidden xl:block" /> Confidence
            </h2>
            <p className="mt-5 font-medium ">
              Never share something you don't want clients to see. Share links
              to specific storyboard versions, with or without comments.
            </p>
          </div>
          <div className=" hidden xl:flex w-[50%] h-full  bg-gradient-to-br from-customPink to-customYellow  items-center justify-center">
            <img
              src={showcase3}
              alt=""
              className="w-[330px] h-[250px] rounded-md border border-black "
            />
          </div>
        </div>

        <div className="flex h-[400px] flex-row-reverse justify-center items-center mx-70 border-2 border-black  mt-10 rounded-md ">
          <div className=" w-full xl:w-[50%]  px-10  xl:px-20">
            <h2 className="text-2xl font-bold">
              Completely <br className="hidden xl:block" /> Confidential
            </h2>
            <p className="mt-5 font-medium">
              All content you upload to or create within Boords is completely
              hidden from everyone, including the Boords team, unless you choose
              to share it.
            </p>
          </div>
          <div className=" hidden xl:flex w-[50%] h-full  bg-gradient-to-br from-customPink to-customYellow  items-center justify-center">
            <img
              src={showcase4}
              alt=""
              className="w-[330px] h-[250px] rounded-md border border-black "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
