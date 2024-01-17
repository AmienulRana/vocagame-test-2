import Button from "@/components/commons/Button";
import Input from "@/components/commons/Input";
import { setUserData } from "@/lib/features/user/userSlice";
import { useRouter } from "next/router";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { encryptData } from "@/utils/crypto";
import toast from "react-hot-toast";

export default function FormRegister() {
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();

  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newUserData = {
      name: data?.name,
      phone: data?.phone,
      password: data?.password,
    };
    dispatch(setUserData(newUserData));
    toast.success("Register Berhasil!");

    Cookies.set("userData", encryptData(newUserData), { expires: 120 / 1440 });
    router.push("/login");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <Controller
        name="name"
        control={control}
        rules={{ required: "Nama wajib diisi" }}
        render={({ field }) => (
          <Input
            label="Nama Anda"
            type="text"
            placeholder="Ketika nama anda disini..."
            isError={errors?.name?.message}
            {...field}
          />
        )}
      />

      <Controller
        name="phone"
        control={control}
        rules={{
          required: "Nomor handphone wajib diisi",
          pattern: {
            value: /^62\d{10,}$/,
            message:
              "Nomor handphone harus dimulai dari 62 dan lebih dari 10 angka",
          },
        }}
        render={({ field }) => (
          <Input
            label="Nomor Handphone"
            type="text"
            placeholder="Nomor handphone anda"
            isError={errors?.phone?.message}
            {...field}
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
            Icon={
              showPassword ? (
                <FaEye className="bg-green-100 w-7 h-7 rounded-full p-1 text-2xl" />
              ) : (
                <FaEyeSlash className="bg-green-100 w-7 h-7 rounded-full p-1 text-2xl" />
              )
            }
            placeholder="Password Anda..."
            onClickIcon={() => setShowPassword(!showPassword)}
            isError={errors?.password?.message}
            {...field}
          />
        )}
      />

      <Controller
        name="confirmPassword"
        control={control}
        rules={{
          required: "Konfirmasi Password wajib diisi",
          minLength: {
            value: 6,
            message: "Password harus lebih dari 6 karakter",
          },
          validate: (value) =>
            value === watch("password") ||
            "Konfirmasi Password harus sama dengan Password",
        }}
        render={({ field }) => (
          <Input
            label="Konfirmasi Password"
            type={showPassword ? "text" : "password"}
            Icon={
              showPassword ? (
                <FaEye className="bg-green-100 w-7 h-7 rounded-full p-1 text-2xl" />
              ) : (
                <FaEyeSlash className="bg-green-100 w-7 h-7 rounded-full p-1 text-2xl" />
              )
            }
            placeholder="Password Anda..."
            onClickIcon={() => setShowPassword(!showPassword)}
            isError={errors?.confirmPassword?.message}
            {...field}
          />
        )}
      />
      <Button text="Masuk Sekarang" type="submit" />
    </form>
  );
}
