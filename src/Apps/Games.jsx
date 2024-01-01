import dataApp from "./orders";
import dataGame from "./orderGames";
import { useNavigate } from "react-router-dom";

function Games() {
  const navigate = useNavigate();
  function goDetail(e) {
    console.log("ok", e);
    navigate("/games/details");
  }
  // useEffect(() => {

  // })
  return (
    <div className="mt-24 container mx-auto px-44">
      <div className="nav-item flex gap-3">
        <span className="cursor-pointer px-3 text-[14px] py-1 rounded-full border border-gray-300 bg-violet-200 text-violet-500 font-semibold">
          New
        </span>
        <span className="cursor-pointer px-3 text-[14px] py-1 rounded-full border border-gray-300 text-gray hover:bg-gray-200 font-semibold">
          Racing
        </span>
        <span className="cursor-pointer px-3 text-[14px] py-1 rounded-full border border-gray-300 text-gray hover:bg-gray-200 font-semibold">
          Board
        </span>
        <span className="cursor-pointer px-3 text-[14px] py-1 rounded-full border border-gray-300 text-gray hover:bg-gray-200 font-semibold">
          Puzzles
        </span>
        <span className="cursor-pointer px-3 text-[14px] py-1 rounded-full border border-gray-300 text-gray hover:bg-gray-200 font-semibold">
          Trivia
        </span>
        <span className="cursor-pointer px-3 text-[14px] py-1 rounded-full border border-gray-300 text-gray hover:bg-gray-200 font-semibold">
          Action
        </span>
        <span className="cursor-pointer px-3 text-[14px] py-1 rounded-full border border-gray-300 text-gray hover:bg-gray-200 font-semibold">
          Sports
        </span>
      </div>

      <div className="banner h-96 items-end rounded-lg w-full mt-8 flex banner bg-no-repeat bg-cover">
        <span className=" bg-violet-300 m-4 px-4 rounded-sm cursor-pointer font-semibold text-gray py-1">
          Demo
        </span>
      </div>

      <div className="content mt-9 font-semibold mb-12">
        <div className="text-[18px] mb-5">Popular</div>
        <div className="grid grid-cols-3 gap-x-8 gap-y-4">
          {dataApp.map((item, i) => (
            <div
              key={i}
              className="h-20 bg-violet-400 rounded-lg flex items-center hover:scale-110 duration-300 cursor-pointer"
            >
              <img className="h-16 w-16 ml-2 mr-3" src={item.url} alt="" />

              <div className="flex flex-col justify-center">
                <span className="text-white font-bold mb-2">
                  {item.appName}
                </span>
                <div className="flex items-center">
                  <span className="text-[13px] mr-2 font-medium">
                    {item.tag}
                  </span>
                  |
                  <span className="text-[13px] ml-2 font-medium">
                    {item.version}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <div className="flex justify-between">
          <div className="text-[18px] mb-5 font-semibold">Latest Games</div>
          <div className="text-[16px] mb-5 font-semibold pl-4 pr-2 py-1 bg-violet-200 rounded-full cursor-pointer hover:bg-green-100">
            <div className="flex items-center">
              <span> All Games</span>
              <span className="material-symbols-outlined">chevron_right</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-6 gap-5">
          {dataGame.map((itemGame, i) => (
            <div
              onClick={() => goDetail(itemGame)}
              key={i}
              className="w-full min-h-72 rounded-xl px-4 py-5 cursor-pointer border border-gray-200 shadow-md hover:text-violet-300 hover:bg-gray-100 hover:scale-105 duration-300 flex flex-col justify-between"
            >
              <div className="flex justify-center">
                <img className=" w-36 h-36" src="#" alt="" />
              </div>
              <div className="mt-4">
                <span className="mb-3 font-medium">{itemGame.gameName}</span>
                <p className="text-[13px] text-gray-400 mb-5">
                  {itemGame.tagGame}
                </p>
              </div>
              <span className="material-symbols-outlined">star</span>
            </div>
          ))}
        </div>
      </div>

      <div className="">
        <div className="flex justify-between">
          <div className="text-[18px] mb-5 font-semibold">Latest Programs</div>
          <div className="text-[16px] mb-5 font-semibold pl-4 pr-2 py-1 bg-violet-200 rounded-full cursor-pointer hover:bg-green-100">
            <div className="flex items-center">
              <span>All Programs</span>
              <span className="material-symbols-outlined">chevron_right</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-6 gap-5">
          {dataGame.map((itemGame, i) => (
            <div
              key={i}
              className="w-full min-h-72 rounded-xl px-4 py-5 cursor-pointer border border-gray-200 shadow-md hover:text-violet-300 hover:bg-gray-100 hover:scale-105 duration-300 flex flex-col justify-between"
            >
              <div className="flex justify-center">
                <img className=" w-36 h-36" src="#" alt="" />
              </div>
              <div className="mt-4">
                <span className="mb-3 font-medium">{itemGame.gameName}</span>
                <p className="text-[13px] text-gray-400 mb-5">
                  {itemGame.tagGame}
                </p>
              </div>
              <span className="material-symbols-outlined">star</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Games;
