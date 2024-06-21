import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

// import { Disclosure } from "@headlessui/react";
import cn from "classnames";

import { LogOutIcon } from "lucide-react";
import { resetLogin } from "@/redux/slice/user-slice";


function Sidebar({ className = "" }: { className: string }) {
  const path = useLocation();
  const pathname = path.pathname;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <nav
      className={cn(
        className,
        "flex  bg-blue-600  shadow-sidebar h-full flex-col justify-between  py-5 pr-2 overflow-auto"
      )}
    >
      <div className="text-slate-100  flex flex-col items-start  gap-10 mb-4 text-sm font-medium">
        <p className="text-white font-semibold text-lg px-4">Welcome, Admin</p>
        <div className="flex flex-col gap-3 w-full">
          {/* <Link
            to="/"
            className={cn("px-4 py-3 font-medium  w-full", {
              "bg-white text-blue-500 shadow-md rounded-r-md ":
                pathname === "/",
            })}
          >
            Dashboard
          </Link> */}
          <Link
            to="/product"
            className={cn("px-4 py-3 font-medium  w-full", {
              "bg-white shadow-md  text-blue-500 rounded-r-md ":
                pathname.includes("/product"),
            })}
          >
            Product
          </Link>
        </div>
      </div>

      <button
        onClick={() => {
          dispatch(resetLogin());
          navigate("/login");
        }}
        className="text-white hover:text-red-500  hover:bg-slate-100 flex items-center w-full gap-2 px-5 py-2 mb-10 text-sm font-medium align-bottom rounded-lg"
        type="button"
      >
        <LogOutIcon size={18} />
        <p className="">Logout</p>
      </button>
    </nav>
  );
}
export default Sidebar;
