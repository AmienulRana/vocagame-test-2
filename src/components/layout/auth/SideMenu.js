import Swipper from "@/components/swipper/Swipper";
import Image from "next/image";

export default function SideMenu(){
    return (
        <div className="flex relative flex-col justify-center items-center min-h-screen bg-white shadow-xl w-[55%]">
        <Image
          src={"/svg/oval.svg"}
          width={300}
          height={300}
          alt="oval svg right"
          className="absolute top-0 left-0"
        />
        <Image
          src={"/images/thumbnail.png"}
          width={300}
          height={300}
          alt="oval svg right"
          className="w-[80%] h-[350px] rounded-lg border-4 border-lightgreen object-cover"
        />
        <Swipper />
      </div>
    )
}