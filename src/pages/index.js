import OvalVector from "@/components/commons/OvalVector";
import ShapeVector from "@/components/commons/ShapeVector";
import Image from "next/image";
import Link from "next/link";
import Typhography from "@/components/commons/Typhography";
import FormRegister from "@/components/FormRegister";

export default function Register() {
  return (
    <div className="flex-1 min-h-screen flex justify-center items-center overflow-hidden relative dark:bg-darkblue">
      <OvalVector />
      <Image
        src="/svg/logo.svg"
        width={100}
        height={100}
        alt="logo"
        className="absolute md:top-10 md:left-8 top-5 left-6 md:w-24 w-16"
      />
      <div className="px-8 max-w-[900px] lg:w-1/2 md:w-[70%] w-full md:mx-auto mt-10  flex flex-col items-center justify-center h-full">
        <Typhography variant={"h1"}>Daftarkan Akun</Typhography>
        <Typhography variant={"p"} className="mt-5 text-gray-400 mb-10">
          Daftar akun anda dengan mengisi form dibawah
        </Typhography>

        <FormRegister />

        <Typhography variant={"p"} className="mb-10 z-50">
          Sudah punya akun?{" "}
          <Link href="/login" className="text-lightgreen font-bold">
            Login Sekarang
          </Link>
        </Typhography>
      </div>
      <ShapeVector />
    </div>
  );
}
