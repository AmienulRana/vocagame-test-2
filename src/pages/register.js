import Button from "@/components/commons/Button";
import Input from "@/components/commons/Input";
import OvalVector from "@/components/commons/OvalVector";
import ShapeVector from "@/components/commons/ShapeVector";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="flex-1 min-h-screen flex justify-center items-center overflow-hidden relative">
      <OvalVector />
      <Image src="/svg/logo.svg" width={100} height={100} alt="logo" className="absolute top-10 left-8" />
      <div className="px-16 max-w-[900px] w-1/2 mx-auto mt-10  flex flex-col items-center justify-center h-full">
        <h1 className="text-lightgreen xl:text-[64px] lg:text-[32px] font-bold">
          Daftarkan Akun
        </h1>
        <p className="mt-5 text-gray-400 mb-10">
          Daftar akun anda dengan mengisi form dibawah
        </p>
        <Input label="Name Anda" type={"text"} placeholder="Ketika nama anda disini..." />
        <Input label="Nomor Handphone" type={"text"} placeholder="Nomor handphone anda" />
        <Input
          label="Password"
          type={showPassword ? "text" : "password"}
          Icon={showPassword ? <FaEye className="bg-green-100 w-7 h-7 rounded-full p-1 text-2xl" /> : <FaEyeSlash className="bg-green-100 w-7 h-7 rounded-full p-1 text-2xl" />}
          placeholder="Password Anda..."
          onClickIcon={() => setShowPassword(showPassword ? false : true)}
        />
        <Input
          label="Konfirmasi Password"
          type={showConfirmPassword ? "text" : "password"}
          Icon={showConfirmPassword ? <FaEye className="bg-green-100 w-7 h-7 rounded-full p-1 text-2xl" /> : <FaEyeSlash className="bg-green-100 w-7 h-7 rounded-full p-1 text-2xl" />}
          placeholder="Password Anda..."
          onClickIcon={() => setShowConfirmPassword(showConfirmPassword ? false : true)}
        />
        <Button text={"Masuk Sekarang"} type={"submit"} />
        <p className="text-gray-400 mb-10">
          Sudah punya akun?{" "}
          <Link href="/" className="text-lightgreen font-bold">
            Login Sekarang
          </Link>
        </p>
      </div>
      <ShapeVector />
    </div>
  );
}
