import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/MainReUse/Input";
import logo from "../../assets/CryptoKing.png";
import Button from "../../components/MainReUse/Button";
import { useState } from "react";
import { verifyUser } from "../api/userAPI";
import toast, { Toaster } from "react-hot-toast";
import { ClipLoader } from "react-spinners";

const Token = () => {
  const [token, setToken] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    setLoading(true);

    verifyUser(token).then((res: any) => {
      if (res?.status === 201) {
        toast.success(res?.message);
        setLoading(false);

        navigate("/auth/login");
      } else if (res?.status !== 201) {
        toast.error(res?.data?.message);
        setLoading(false);
      }
    });
  };

  return (
    <div className="w-full h-[91vh] flex flex-col justify-center items-center">
      <Toaster position="top-center" />
      <div className="mb-10 text-center flex items-center w-full flex-col">
        <Link to="/">
        <a className="btn btn-ghost text-[25px]">CoinTradeX </a>
        </Link>
        <div className="text-[26px] font-bold mb-3">Verify Your Account</div>
        <div className="text-[14px] -mt-4"></div>
      </div>
      <div className="rounded-md bg-white min-h-[200px] w-[80%] md:w-[500px] border p-4">
        <Input
          placeholder="Token"
          className="w-[97%]"
          type="token"
          value={token}
          onChange={(e: any) => {
            setToken(e.target.value);
          }}
        />

        <div className="flex flex-col">
          <Button
            name="Verify"
            className="w-[97%] bg-blue-900 text-white h-14 hover:bg-blue-800 transition-all duration-300 font-semibold"
            icon={loading && <ClipLoader color="white" size={18} />}
            onClick={handleSubmit}
          />
        </div>
      </div>
      <div className="mt-5 text-[13px]">
        Didn't see the token?{" "}
        <span className="font-bold text-blue-900">
          <Link to="/auth">Resend token</Link>
        </span>
      </div>
    </div>
  );
};

export default Token;
