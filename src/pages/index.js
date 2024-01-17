import Image from "next/image";
import { Inter } from "next/font/google";

import { useEffect, useState } from "react";
import { LayoutAuth } from "@/components/layout/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Link from "next/link";
import Input from "@/components/commons/Input";
import Button from "@/components/commons/Button";
import { useSelector } from "react-redux";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { decryptData, encryptData } from "@/utils/crypto";
import { useRouter } from "next/router";
import Typhography from "@/components/commons/Typhography";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [showPassword, setShowPassword] = useState(false);
  const userData = useSelector((state) => state.user.userData);

  const router = useRouter();

  const {
    handleSubmit,
    register,
    control,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (!userData?.name) {
      toast.error("Mohon Register Terlebih dahulu");
    } else if (
      data?.name !== userData?.name ||
      data?.password !== userData?.password
    ) {
      toast.error("Oops! Username atau password salah ");
    } else {
      toast.success("Login Berhasil");
      Cookies.set("userSession", encryptData(data), { expires: 1 / 1440 });
      router.push('/profile');
    }
  };
  return (
    <LayoutAuth>
      <div className="flex-1">
        <div className="md:px-16 px-8 flex flex-col items-center justify-center h-full md:dark:bg-darkblue2 dark:bg-darkblue bg-gray-50">
          <h1 className="text-lightgreen xl:text-[64px] md:text-[32px] text-[28px] font-bold">
            Silahkan Login
          </h1>
          <Typhography className={"!mt-5 mb-10"} variant={'p'}>
            Masukkan Username dan password anda untuk masuk
          </Typhography>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <Controller
              name="name"
              control={control}
              rules={{ required: "Nama wajib diisi" }}
              render={({ field }) => (
                <Input
                  label="Username"
                  type={"text"}
                  placeholder="Username Anda..."
                  {...field}
                  isError={errors?.name?.message}
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              rules={{
                required: "Password wajib diisi",
                minLength: {
                  value: 6,
                  message: "Password harus lebih dari 6 karakter",
                },
              }}
              render={({ field }) => (
                <Input
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  Icon={showPassword ? <FaEye /> : <FaEyeSlash />}
                  placeholder="Password Anda..."
                  onClickIcon={() =>
                    setShowPassword(showPassword ? false : true)
                  }
                  isError={errors?.password?.message}
                  {...field}
                />
              )}
            />
            <Button text={"Masuk Sekarang"} type={"submit"} />
          </form>
          <Typhography variant={'p'}>
            Belum punya akun?{" "}
            <Link href="/register" className="text-lightgreen font-bold">
              Daftar Sekarang
            </Link>
          </Typhography>
        </div>
      </div>
    </LayoutAuth>
  );
}
