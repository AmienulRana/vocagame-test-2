import Image from "next/image";

export default function Footer() {
  return (
    <div className="w-full mt-14 px-24 h-[338px] bg-lightgreen pt-5">
      <Image src="/svg/logo-white.svg" width={150} height={150} alt="logo" className="mt-5 block" />
    </div>
  );
}
