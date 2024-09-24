import { BiMessageDetail, BiLogIn } from "react-icons/bi";
import { PiGoogleLogoLight, PiWebhooksLogoBold } from "react-icons/pi";
import { MdOutlineAttachEmail, MdManageHistory } from "react-icons/md";
import { FcBusinessman } from "react-icons/fc";

const Identity = () => {
  return (
    <div className="w-full my-4 min-h-[500px]  gap-3 grid grid-cols-1 lg:grid-cols-3">
      <div className=" md:col-span-2 grid grid-cols-1 md:grid-cols-2 bg-[#f8f8f8] rounded-xl">
        <div className=" py-4 px-3">
          <h1 className=" font-bold text-lg">2 Factor Authentication</h1>
          <p className=" font-normal text-sm">
            Two-factor authentication is an enchanced security measure. Once
            enabled, you'll be required to give two types of identification when
            you log into
          </p>
        </div>
        <div className="py-4 px-3 grid grid-row-3 gap-4">
          <div className=" flex gap-2">
            <div className="flex gap-2">
              <input
                type="checkbox"
                className="toggle toggle-success"
                checked
              />
              <PiGoogleLogoLight className="p-1 w-[23px] bg-white h-[23px] text-thin rounded" />
            </div>
            <div>
              <h1 className=" font-bold">Google Authenfication</h1>
              <p className=" font-normal text-sm">
                Used for withdrawal & security verification
              </p>
            </div>
          </div>
          <div className=" flex gap-2">
            <div className="flex gap-2">
              <input
                type="checkbox"
                className="toggle toggle-success"
                checked
              />
              <BiMessageDetail
                size={20}
                className=" w-[23px] p-1 bg-white h-[23px] text-thin rounded"
              />
            </div>
            <div>
              <h1 className=" font-bold">SMS Authenfication</h1>
              <p className=" font-normal text-sm">
                Used for withdrawal & security verification
              </p>
            </div>
          </div>
          <div className=" flex gap-2">
            <div className="flex gap-2">
              <input
                type="checkbox"
                className="toggle toggle-success"
                checked
              />
              <MdOutlineAttachEmail className="p-1 w-[23px] bg-white h-[23px] text-thin rounded" />
            </div>
            <div>
              <h1 className=" font-bold ">Email Authenfication</h1>
              <p className=" font-normal text-sm">
                Used for withdrawal & security verification
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="  grid grid-rows-3 gap-3">
        <div className="bg-[#f8f8f8] rounded-xl row-span-2 grid">
          <div className=" py-2 px-3">
            <div className=" flex justify-between">
              <div className=" flex gap-1">
                <MdManageHistory className="p-1 w-[23px] bg-white h-[23px] text-thin rounded" />
                <div>
                  <h1 className="font-bold">Device Management</h1>
                  <p className="font-normal text-sm">
                    Used for withdrawal & security verification
                  </p>
                </div>
              </div>
              <div>
                <button className=" border p-1 rounded-md">Manage</button>
              </div>
            </div>
            <div></div>
          </div>
          <div className=" py-2 px-3">
            <div className=" flex justify-between">
              <div className=" flex gap-1">
                <BiLogIn className="p-1 w-[23px] bg-white h-[23px] text-thin rounded" />
                <div>
                  <h1 className="font-bold">Login Password</h1>
                  <p className="font-normal text-sm">
                    Used for withdrawal & security verification
                  </p>
                </div>
              </div>
              <div>
                <button className=" border p-1 rounded-md">Reset</button>
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <div className="bg-[#f8f8f8]  rounded-xl">
          <div className=" py-2 px-3">
            <div className=" flex justify-between">
              <div className=" flex gap-1">
                <PiWebhooksLogoBold className="p-1 w-[23px] bg-white h-[23px] text-thin rounded" />
                <div>
                  <h1 className="font-bold">Address Management</h1>
                  <p className="font-normal text-sm">
                    Used for withdrawal & security verification
                  </p>
                </div>
              </div>
              <div>
                <button className=" border p-1 rounded-md">Reset</button>
              </div>
            </div>
            <div className=" flex gap-2 mt-2">
              <p className=" font-bold text-sm">Whitelisted On</p>
              <input
                type="checkbox"
                className="toggle toggle-success"
                checked
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" rounded-xl md:col-span-2 grid grid-rows-2 gap-4">
        <div>
          <div className="bg-[#f8f8f8] rounded-xl md:col-span-2 grid grid-cols-1 md:grid-cols-2">
            <div className=" pt-4 pb-10 px-3">
              <h1 className=" font-bold text-lg">Identify Authentication</h1>
              <p className=" font-normal text-sm">
                Identify Verification is enchanced security measure. Once
                enabled, you'll be required to give two types of identification
                when you log into
              </p>
            </div>
            <div className="py-4 px-3 grid grid-row-3 gap-2">
              <div className=" flex gap-2">
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    className="toggle toggle-success"
                    checked
                  />
                  <FcBusinessman className="p-1 w-[23px] bg-white h-[23px] text-thin rounded" />
                </div>
                <div>
                  <h1 className=" font-bold">Manage Identity Verification</h1>
                  <p className=" font-normal text-sm">
                    Used for withdrawal & security verification
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-[#f8f8f8] rounded-xl md:col-span-2 grid grid-cols-1 md:grid-cols-2">
            <div className=" pt-4 pb-10 px-3">
              <h1 className=" font-bold text-lg">Anti-phising Code</h1>
              <p className=" font-normal text-sm">
                Identify Verification is enchanced security measure. Once
                enabled, you'll be required to give two types of identification
                when you log into
              </p>
            </div>
            <div className="py-4 px-3 grid grid-row-3 gap-2">
              <div className=" flex gap-2">
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    className="toggle toggle-success"
                    checked
                  />
                  <BiMessageDetail className="p-1 w-[23px] bg-white h-[23px] text-thin rounded" />
                </div>
                <div>
                  <h1 className=" font-bold">Enable Anti-phising Code</h1>
                  <p className=" font-normal text-sm">
                    Enable Anti-phising Code & security verification
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-1 gap-4">
        <div className=" bg-[#f8f8f8] rounded-xl py-3 px-4 flex flex-col gap-2">
          <div className="flex justify-between">
            <div className="flex gap-1">
              <FcBusinessman className="p-1 w-[23px] bg-white h-[23px] text-thin rounded" />
              <div>
                <h1 className="font-bold">Account Activity</h1>
                <p className="font-normal text-sm">Last Signed in</p>
              </div>
            </div>
            <div>
              <button className=" border p-1 rounded-md">More</button>
            </div>
          </div>
          <div>
            <h1 className=" font-medium text-base">
              Supended Account Activity?
            </h1>
            <p className=" font-medium text-base text-red-500">
              Deactivated Account
            </p>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Identity;
