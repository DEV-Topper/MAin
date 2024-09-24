import { FaWallet } from "react-icons/fa";
import {
  MdDashboard,
  MdTransferWithinAStation,
  MdSettings,
  MdReport,
} from "react-icons/md";
import { NavLink } from "react-router-dom";
import { getAdminDetails } from "@/hooks/adminHook";

const navItems = [
  { path: "/admin/dashboard", label: "Dashboard", icon: <MdDashboard /> },
  {
    path: "/admin/manage-users",
    label: "Manage Users",
    icon: <MdTransferWithinAStation />,
  },
  {
    path: "/admin/manage-transactions",
    label: "Manage Transactions",
    icon: <FaWallet />,
  },

  { path: "/admin/complaints", label: "Complaints", icon: <MdReport /> },
  { path: "/admin/settings", label: "Settings", icon: <MdSettings /> },
];

const AdminSider = () => {
  const { data } = getAdminDetails();



  return (
    <div className="overflow-y-auto min-h-[100vh] w-full border-r bg-blue-950 text-white flex flex-col">
      <div className="w-full flex px-2 mt-6">
        <div className="w-16 h-16 object-cover flex border rounded-full items-center justify-center">
          <img
            className="w-full h-full object-cover rounded-full border"
            src={data?.admin?.avatar ? data?.admin?.avatar : "https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611704.jpg?w=1380&t=st=1724609221~exp=1724609821~hmac=c5445ba0a790922e5b571fa3ea98f619f88a4077b458c680775f3eb5797ef609"}
            alt="Admin Avatar"
          />
        </div>
        <div className="ml-2">
          <div className="break-words font-bold">Welcome, {data?.admin?.adminName}</div>
          <p className="break-words font-medium text-slate-400 text-[14px] mt-2">
            Admin Role
          </p>
        </div>
      </div>

      <div className="mt-10 px-2 flex flex-col h-[90%]">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              isActive
                ? "duration-500 transition-all p-2 rounded-sm bg-blue-200 text-black cursor-pointer font-medium my-[3px] flex items-center justify-between"
                : "duration-500 transition-all p-2 rounded-sm hover:bg-blue-200 hover:text-black cursor-pointer font-medium my-[3px] flex items-center justify-between"
            }
          >
            {item.label}
            {item.icon}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default AdminSider;
