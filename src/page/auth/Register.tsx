import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/MainReUse/Button";

import { registerUser } from "../api/userAPI";
import toast, { Toaster } from "react-hot-toast";
import { ClipLoader } from "react-spinners";
import Input from "../../components/reUse/Input";
import { useState } from "react";

const Register = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const onHandleSubmit = () => {
    setLoading(true);

    registerUser({ userName, password, email }).then((res: any) => {
      if (res?.status === 201) {
        toast.success(res?.message);
        setLoading(false);

        navigate("register-message");
      } else {
        toast.error(res?.message);
        setLoading(false);
      }
      console.log(res);
    });
  };

  return (
    <div className="w-full h-[91vh] flex flex-col justify-center items-center">
      <Toaster position="top-center" />
      <div className="mb-10 text-center flex items-center w-full flex-col">
        <Link to="/">
          <a className="btn btn-ghost text-[25px]">CoinTradeX </a>
        </Link>
        <div className="text-[26px] font-bold mb-3">Create an Account</div>
        <div className="text-[14px] -mt-4"></div>
      </div>
      <div
        className="rounded-md bg-white min-h-[300px] w-[80%] md:w-[500px] border p-4"
        onSubmit={onHandleSubmit}
      >
        <Input
          placeholder="UserName"
          className="w-[97%]"
          type="name"
          value={userName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUserName(e.target.value)
          }
          required
        />
        <Input
          placeholder="Email"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          className="w-[97%]"
          type="email"
          required
        />

        <div>
          <Input
            placeholder="Password"
            className="w-[97%]"
            type="password"
            value={password}
            show
            required
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />
        </div>

        <div className="flex flex-col">
          <Button
            name="Register"
            className="w-[97%] bg-blue-900 text-white h-14 hover:bg-blue-800 transition-all duration-300 font-semibold"
            icon={loading && <ClipLoader color="white" size={18} />}
            onClick={onHandleSubmit}
          />
        </div>
      </div>
      <div className="mt-5 text-[13px]">
        Already have an account yet?{" "}
        <span className="font-bold text-blue-900">
          <Link to="/auth/login">Login here</Link>
        </span>
      </div>
    </div>
  );
};

export default Register;
