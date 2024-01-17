import Button from "@/components/commons/Button";
import Image from "next/image";
import { Fragment } from "react";
import { FaUser, FaUserCircle } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { BsPenFill } from "react-icons/bs";
import Input from "@/components/commons/Input";
import Footer from "@/components/commons/Footer";

export default function Profile() {
  return (
    <Fragment>
      <div className="bg-lightgreen py-3 px-16">
        <div className="mx-auto max-w-[1400px] flex justify-between items-center">
          <Image src="/svg/logo-white.svg" width={50} height={50} alt="logo" />
          <FaUserCircle className="text-white text-3xl" />
        </div>
      </div>

      <div className="flex justify-center px-12 w-full">
        <div className="bg-lightgreen max-w-[1400px] w-full rounded-xl px-5 py-5 mt-10 text-white text-center">
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
            <p className="text-xl font-bold">No Name</p>
          </div>
          <div className="w-[180px] min-w-max">
            <Button text={"✏ Edit Profile"} />
          </div>
        </div>
        <div className="md:flex gap-10 2xl:mt-16 md:mt-10">
          <div className="w-[20%] border-r pb-10 border-gray-300 flex md:flex-col justify-between">
            <div className="flex gap-4 items-center">
              <FaUserCircle className="text-gray-500 text-2xl" />
              <p className="text-lg">Profile</p>
            </div>
            <div className="flex gap-4 text-red-500 items-center">
              <MdLogout className="text-2xl -rotate-180" />
              <p className="text-lg">Logout</p>
            </div>
          </div>
          <div className="flex-1 mb-16 shadow-[-3px_4px_20px_rgba(0,0,0,0.2)] rounded-lg py-8 px-10">
            <h2 className="text-2xl flex items-center gap-3 pb-6 border-b border-gray-400">
              <BsPenFill />
              Edit Profile
            </h2>
            <div className="mt-10">
              <Input label="Name" type={"text"} />
              <Input label="No Handphone" type={"text"} />
              <Input label="Old Password" />
              <Input label="New Password" />
              <div className="w-[180px] min-w-max">
                <Button text={"Edit Profile →"} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
}
