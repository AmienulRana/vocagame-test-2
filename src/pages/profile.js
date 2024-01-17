import Button from "@/components/commons/Button";
import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";
import Footer from "@/components/commons/Footer";
import Typhography from "@/components/commons/Typhography";
import { useSelector } from "react-redux";

import {FormEditProfile, AccountInformation, SidebarProfile } from "@/components/profile";

export default function Profile() {
  const userData = useSelector((state) => state.user.userData);

  return (
    <div className="dark:bg-darkblue">
      <div className="bg-lightgreen py-3 px-16">
        <div className="mx-auto max-w-[1400px] flex justify-between items-center">
          <Image src="/svg/logo-white.svg" width={50} height={50} alt="logo" />
          <FaUserCircle className="text-white text-3xl" />
        </div>
      </div>

      <AccountInformation />
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
          <SidebarProfile />
          <FormEditProfile userData={userData} />
        </div>
      </section>
      <Footer />
    </div>
  );
}
