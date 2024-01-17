import Image from "next/image";

export default function ShapeVector(){
    return (
        <Image
          src={"/svg/shape.svg"}
          width={300}
          height={300}
          alt="shape"
          className="absolute -bottom-4 -right-4"
        />

    )
}