import iconFb from "../img/fb.png";
import iconDis from "../img/discord.png";

function Footer() {
  // useEffect(() => {

  // })
  return (
    <div className="bg-violet-200 footer">
      <div className="container px-44 grid grid-cols-2 mx-auto">
        <div className="text-gray text-[14px] mt-6 mb-3">
          <div className=" font-bold text-[16px] mb-1">Demo</div>
          <div>
            <img className="cursor-pointer h-6 w-6 ml-2" src={iconFb} alt="" />
            <img className="cursor-pointer h-10 w-10" src={iconDis} alt="" />
          </div>
        </div>
        <div className="text-gray text-[14px] mt-6 mb-3">
          <div className="mb-2 hover:text-violet-500 cursor-pointer">About</div>
          <div className="mb-2 hover:text-violet-500 cursor-pointer">
            Privacy Policy
          </div>
          <div className="mb-2 hover:text-violet-500 cursor-pointer">DMCA</div>
          <div className="mb-2 hover:text-violet-500 cursor-pointer">
            Contact
          </div>
        </div>
      </div>
      <div className="container px-44 mx-auto">
        <div className="border-b border-violet-400"></div>
        <div className="flex justify-between">
          <div className="text-[13px] mt-4 text-gray">Copyright ©</div>
          <div className="text-gray flex items-center border my-5 border-gray-500 bg-gray-200 rounded px-2">
            <span className="material-symbols-outlined mr-1 text-[15px]">
              public
            </span>
            <span>EN</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
