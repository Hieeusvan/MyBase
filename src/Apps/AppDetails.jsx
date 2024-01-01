function AppDetails() {
  // useEffect(() => {

  // })
  return (
    <div className="mt-24 container mx-auto px-44 flex gap-5">
      <div className="left w-[70%] bg-black h-full">
        <div className="bannerApp bg-cover bg-no-repeat w-full h-96 flex items-end">
          <div className="p-3 bg-gradient-to-r from-blue-500 to-transparent">
            <button className="cursor-pointer font-semibold text-white px-3 py-1 rounded-lg bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
              Download Apk
            </button>
            <p className="mt-2 text-[16px] font-semibold text-white">
              2.0.7 Mod APK Unlimited Money
            </p>
            <p className="mt-1 text-sm text-white">Dec 27, 2023</p>
          </div>
        </div>
      </div>
      <div className="right w-[30%] bg-violet-300 h-96"></div>
    </div>
  );
}

export default AppDetails;
