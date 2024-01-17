import Button from "@/components/commons/Button";
import { BsPenFill } from "react-icons/bs";
import Input from "@/components/commons/Input";
import { useDispatch } from "react-redux";

import { Controller, useForm } from "react-hook-form";
import { setUserData } from "@/lib/features/user/userSlice";
import toast from "react-hot-toast";

export default function FormEditProfile({ userData }){
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
      toast.success('Berhasil mengubah data profile!')
  
    };
    return (
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
    )
}