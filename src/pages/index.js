import Image from "next/image";
import { Inter } from "next/font/google";

import { useState } from "react";
import { LayoutAuth } from "@/components/layout/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Link from "next/link";
import Input from "@/components/commons/Input";
import Button from "@/components/commons/Button";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <LayoutAuth>
      <div className="flex-1">
        <div className="px-16 flex flex-col items-center justify-center h-full bg-gray-50">
          <h1 className="text-lightgreen xl:text-[64px] lg:text-[32px] font-bold">
            Silahkan Login
          </h1>
          <p className="mt-5 text-gray-400 mb-10">
            Masukkan Username dan password anda untuk masuk
          </p>
          <Input
            label="Username"
            type={"text"}
            placeholder="Username Anda..."
          />
          <Input
            label="Password"
            type={showPassword ? "text" : "password"}
            Icon={showPassword ? FaEye : FaEyeSlash}
            placeholder="Password Anda..."
            onClickIcon={() => setShowPassword(showPassword ? false : true)}
          />
          <Button text={'Masuk Sekarang'} type={'submit'} />
          <p className="text-gray-400">
            Belum punya akun?{" "}
            <Link href="/register" className="text-lightgreen font-bold">
              Daftar Sekarang
            </Link>
          </p>
        </div>
      </div>
    </LayoutAuth>
  );
}
