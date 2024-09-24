const Dash = () => {
    return (
      <div className="w-full min-h-screen grid">
        <div className=" bg-green-500 grid grid-cols-3 gap-3">
          <div className=" col-span-2 bg-gray-500"></div>
          <div className=""></div>
        </div>
        <div className=" bg-gray-500 grid grid-cols-3 gap-4">
          <div className="bg-black"></div>
          <div className="bg-red-500"></div>
          <div className="bg-red-500"></div>
        </div>
      </div>
    );
  };
  export default Dash;