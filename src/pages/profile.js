import Button from "@/components/commons/Button";
import Image from "next/image";
import { Fragment } from "react";
import { FaUser, FaUserCircle } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { BsPenFill } from "react-icons/bs";
import Input from "@/components/commons/Input";
import Footer from "@/components/commons/Footer";
import Typhography from "@/components/commons/Typhography";
import { useDispatch, useSelector } from "react-redux";

import { Controller, useForm } from "react-hook-form";
import { setUserData } from "@/lib/features/user/userSlice";

export default function Profile() {
  const userData = useSelector((state) => state.user.userData);
  const dispatch = useDispatch();


  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: userData?.name,
      phone: userData?.phone,
      password: userData?.password,
      newPassword: '',
    }
  });

  const onSubmit = (data) => {
    dispatch(setUserData({...data, password: data?.newPassword}));

  };

  return (
    <div className="dark:bg-darkblue">
      <div className="bg-lightgreen py-3 px-16">
        <div className="mx-auto max-w-[1400px] flex justify-between items-center">
          <Image src="/svg/logo-white.svg" width={50} height={50} alt="logo" />
          <FaUserCircle className="text-white text-3xl" />
        </div>
      </div>

      <div className="flex justify-center px-12 w-full">
        <div className="bg-lightgreen dark:bg-darkblue2 max-w-[1400px] w-full rounded-xl px-5 py-5 mt-10 text-white text-center">
          <h2 className="xl:text-5xl lg:text-3xl font-bold">
            Informasi Akun Saya
          </h2>
          <p className="mt-8 xl:w-[700px] mx-auto">
            Halaman ini berisi informasi tentang akun Anda, seperti username,
            password, email, dan data diri. Anda dapat mengubah informasi akun
            Anda di halaman ini. Halaman ini juga berisi informasi tentang
            pengaturan akun Anda.
          </p>
        </div>
      </div>
      <section className="px-12 max-w-[1400px] mx-auto mt-10">
        <div className="flex justify-between">
          <div className="flex gap-4 items-center">
            <FaUserCircle className="text-gray-500 text-5xl" />
            <Typhography variant={"p"} className="text-xl font-bold">
              {userData?.name}
            </Typhography>
          </div>
          <div className="w-[180px] min-w-max">
            <Button text={"✏ Edit Profile"} className={"!mt-0"} />
          </div>
        </div>
        <div className="md:flex gap-10 2xl:mt-16 md:mt-10">
          <div className="w-[20%] border-r pb-10 border-gray-300 flex md:flex-col justify-between">
            <div className="flex gap-4 items-center">
              <FaUserCircle className="text-gray-500 text-2xl" />
              <Typhography variant={"p"} className="text-lg">
                Profile
              </Typhography>
            </div>
            <div className="flex gap-4 text-red-500 items-center">
              <MdLogout className="text-2xl -rotate-180" />
              <p className="text-lg">Logout</p>
            </div>
          </div>
          <div className="flex-1 mb-16 shadow-[-3px_4px_20px_rgba(0,0,0,0.2)] rounded-lg py-8 px-10">
            <h2 className="text-2xl flex items-center gap-3 pb-6 border-b border-gray-400 dark:text-white">
              <BsPenFill />
              Edit Profile
            </h2>
            <div className="mt-10">
              <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                  name="name"
                  control={control}
                  rules={{ required: "Nama wajib diisi" }}
                  render={({ field }) => (
                    <Input
                      label="Name"
                      type="text"
                      {...field}
                      isError={errors?.name?.message}
                    />
                  )}
                />
                <Controller
                  name="phone"
                  control={control}
                  rules={{ required: "No Hanphone wajib diisi" }}
                  render={({ field }) => (
                    <Input
                      label="No Handphone"
                      type="text"
                      {...field}
                      isError={errors?.phone?.message}
                    />
                  )}
                />
                <Controller
                  name="password"
                  control={control}
                  rules={{ required: "Password wajib diisi" }}
                  render={({ field }) => (
                    <Input
                      label="Old Password"
                      type="text"
                      {...field}
                      isError={errors?.password?.message}
                    />
                  )}
                />
                <Controller
                  name="newPassword"
                  control={control}
                  rules={{ required: "New Password wajib diisi" }}
                  render={({ field }) => (
                    <Input
                      label="New Password"
                      type="text"
                      {...field}
                      isError={errors?.newPassword?.message}
                    />
                  )}
                />
                <div className="w-[180px] min-w-max">
                  <Button text={"Edit Profile →"} type="submit" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
