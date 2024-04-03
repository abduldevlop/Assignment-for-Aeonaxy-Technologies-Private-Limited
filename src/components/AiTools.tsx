import AICard from "./AICard";
import { cards } from "../data";

const AiTools = () => {
  return (
    <section className="  bg-gradient-to-b from-[#f0f2f3] via-[#DBEDF9] to-[#fefefe] flex items-center justify-center flex-col py-6 px-14 md:py-10">
      <div className="text-center">
        <h1 className=" text-xl xl:text-4xl md:text-4xl font-bold  ">
          Creativity-Enabling AI Tools
        </h1>
        <p className="font-medium mt-4 text-[14px] md:text-base w-[280px] xl:w-[600px] ">
          Use AI to enhance - not replace - your creative process. Dramatically
          increase your storyboarding capacity so you can handle more projects
          and create your best work.
        </p>
      </div>

      <div className="flex flex-col gap-6 md:flex-row md:gap-10 mt-6 md:mt-10">
        {cards.map((card) => (
          <AICard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default AiTools;
