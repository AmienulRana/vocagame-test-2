import OvalVector from "@/components/commons/OvalVector";
import ShapeVector from "@/components/commons/ShapeVector";
import Swipper from "@/components/swipper/Swipper";
import Image from "next/image";

export default function SideMenu() {
  return (
    <div className="hidden md:flex dark:bg-darkblue relative overflow-hidden flex-col justify-center items-center min-h-screen bg-white shadow-xl w-[55%]">
      <OvalVector />
      <Image
        src={"/images/thumbnail.png"}
        width={300}
        height={300}
        alt="cover thumbnail"
        className="w-[334px] h-[350px]  z-10 rounded-lg border-4 border-lightgreen object-cover"
      />
      <Swipper />
      {/* <div className="overflow-hidden relative"> */}
      <ShapeVector />
      {/* </div> */}
    </div>
  );
}
