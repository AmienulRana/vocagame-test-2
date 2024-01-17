import { FaUserCircle } from "react-icons/fa";
import Typhography from "../commons/Typhography";
import { MdLogout } from "react-icons/md";

export default function SidebarProfile(){
    return (
        <div className="md:w-[20%] w-full md:border-r mt-5 md:mt-0 pb-10 border-gray-300 flex md:flex-col justify-between">
        <div className="flex gap-4 items-center">
          <FaUserCircle className="text-gray-500 text-2xl" />
          <Typhography variant={"p"} className="text-lg">
            Profile
          </Typhography>
        </div>
        <div className="flex gap-4 text-red-500 items-center">
          <MdLogout className="text-2xl -rotate-180" />
          <p className="text-lg">Logout</p>
        </div>
      </div>
    )
}