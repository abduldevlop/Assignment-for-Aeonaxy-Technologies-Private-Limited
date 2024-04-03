import { Tcard } from "../types";

const AICard = ({ id, img, icon, title, desc }: Tcard) => {
  return (
    <div className="flex flex-col gap-5 w-64">
      <div className="w-64 h-64 bg-gradient-to-br from-customPink to-customYellow p-4 rounded-xl flex items-center justify-center">
        {id === 1 || id === 2 ? (
          <img
            src={img}
            alt=""
            className="h-[230px] w-[300px] rounded-xl shadow-xl "
          />
        ) : (
          <img
            src={img}
            alt=""
            className="h-[150px] w-[300px] rounded-xl shadow-xl"
          />
        )}
      </div>
      <span className="text-[#8BC0DF]">{icon}</span>
      <h1 className="text-xl font-bold">{title} </h1>
      <p className="font-medium text-[17px] "> {desc} </p>
    </div>
  );
};

export default AICard;
