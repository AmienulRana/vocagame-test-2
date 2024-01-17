import Image from "next/image";

export default function OvalVector(){
    return (
        <Image
          src={"/svg/oval.svg"}
          width={300}
          height={300}
          alt="oval svg right"
          className="absolute top-0 left-0"
        />
    )
}