import { ClipLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-[rgba(106,164,212,0.4)]">
      <ClipLoader size={50} />
    </div>
  );
};

export default Loading;
