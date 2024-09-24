import Button from "../../components/reUse/Button";

const Tokens = () => {
  return (
    <div
      id="token"
      className="w-full min-h-[80vh] pt-10 lg:pt-0 flex justify-center items-center bg-blue-600"
    >
      <div className="w-[80%] text-white flex flex-wrap lg:flex-nowrap gap-10">
        <div className="w-full lg:w-3/5">
          {" "}
          <h4 className="text-blue-400 text-[30px] font-semibold">TOKENS</h4>
          <h1 className="font-bold mb-5 text-[40px]">Pricing & Values</h1>
          <div className="w-full grid  md:grid-cols-2 gap-4 grid-rows-3">
            {Array.from({ length: 6 }, () => (
              <div className="bg-blue-800 shadow-lg p-3">
                <div className="capitalize text-blue-400 mb-3 text-[18px] font-semibold">
                  starting time
                </div>
                <div className="font-semibold text-[15px]">
                  APRIL 23, 2018 (MONDAY 9:00 AM)
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-2/5">
          <h4 className="text-blue-400 text-[30px] font-semibold">STARTS IN</h4>
          <h1 className="font-bold mb-5 text-[40px]">ICO Is On Live NOW!</h1>
          <div className="w-full  bg-blue-700 p-4 flex justify-center items-center">
            <div className="border w-full border-white p-2 py-10 flex justify-center items-center flex-col">
              <div className="grid grid-cols-4 gap-2">
                <div className="space-y-2 text-center">
                  <div className="p-5 border border-white flex items-center justify-center text-[20px] lg:text-[40px] font-bold">
                    00
                  </div>
                  <h4 className="text-[10px] lg:text-[17px] ">DAYS</h4>
                </div>
                <div className="space-y-2 text-center">
                  <div className="p-5 border border-white flex items-center justify-center text-[20px] lg:text-[40px] font-bold">
                    00
                  </div>
                  <h4 className="text-[10px] lg:text-[17px] ">HOURS</h4>
                </div>
                <div className="space-y-2 text-center">
                  <div className="p-5 border border-white flex items-center justify-center text-[20px] lg:text-[40px] font-bold">
                    00
                  </div>
                  <h4 className="text-[10px] lg:text-[17px] ">MINUTES</h4>
                </div>
                <div className="space-y-2 text-center">
                  <div className="p-5 border border-white flex items-center justify-center text-[20px] lg:text-[40px] font-bold">
                    00
                  </div>
                  <h4 className="text-[10px] lg:text-[17px] ">SECONDS</h4>
                </div>
              </div>
              <div className="w-full flex justify-center mt-6">
                <Button text="Buy Token Now" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokens;
