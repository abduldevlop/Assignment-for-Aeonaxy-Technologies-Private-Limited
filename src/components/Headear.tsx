import {
  aardman,
  brandculture,
  framestore,
  grm,
  ideaMmatchin,
  movingBrands,
  partizan,
  planetNutshell,
  profile,
} from "../assets";

const Headear = () => {
  return (
    <header className=" bg-gradient-to-b from-[#FEFBF3] via-[#feeace] to-[#f0f2f3] mt-5 px-10">
      <div className="flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-2xl xl:text-6xl font-bold leading-tight">
          The Shortcut to <br />
          <span className="relative text-[#E27E9A]">
            Effective
            <span className="absolute inset-x-0 bottom-[-5px] h-2 bg-[#F9D1D3] transform -skew-y-2"></span>
          </span>
          <span className="ml-2"> Storyboards</span>
        </h1>
        <p className="my-4 text-sm xl:text-lg font-light w-full max-w-md">
          Boords is the modern storyboarding tool that helps video professionals
          create client-ready storyboards 10x faster.
        </p>

        <button className="bg-gradient-to-r from-[#E58695] to-[#F3B86A] px-6 py-3 font-bold rounded-md text-sm xl:text-lg mt-4">
          Get started for free
        </button>
        <p className="my-2 font-medium text-sm">
          <span className="text-[#E27E9A]">4,961</span> video professionals
        </p>
        <p className="text-[#867661] font-medium text-sm">
          joined Boords in the last 7 days
        </p>

        <div className="mt-8">
          <h3 className="text-[#867661] uppercase font-medium text-[10px]  xl:text-sm px-10 ">
            Boords is trusted by the world's leading video agencies
          </h3>

          <div className="flex flex-wrap justify-center items-center gap-5 xl:gap-10 mt-4">
            <img src={aardman} alt="" className="w-20  filter grayscale" />
            <img src={framestore} alt="" className="w-20  filter grayscale" />
            <img src={ideaMmatchin} alt="" className="w-2 0 filter grayscale" />
            <img src={partizan} alt="" className="w-20  filter grayscale" />
            <img src={grm} alt="" className="w-20 filter grayscale" />
            <img
              src={planetNutshell}
              alt=""
              className="w-20  filter grayscale"
            />
            <img src={brandculture} alt="" className="w-20  filter grayscale" />
            <img src={movingBrands} alt="" className="w-20  filter grayscale" />
          </div>
        </div>

        <div className="mt-8 mb-4">
          <p className=" text-sm  w-full max-w-[560px] font-medium xl:text-base px-4">
            "Without Boords storyboarding was the most painful part of the
            production process, with Boords it's the most painless. Super easy
            to use, brilliantly collaborative with both our teams and our
            clients, and speeds up the pre-production process immeasurably."
          </p>
          <div className="flex items-center justify-center mt-3">
            <img src={profile} alt="profile" className="w-8 h-8 rounded-full" />
            <p className="font-medium text-sm">
              <span className="ml-2"> Lewis Darby </span>
              <span className="text-[#91857D] font-normal">
                Founder, Yard B
              </span>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Headear;
