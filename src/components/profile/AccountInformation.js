export default function AccountInformation() {
  return (
    <div className="flex justify-center px-12 w-full">
      <div className="bg-lightgreen dark:bg-darkblue2 max-w-[1400px] w-full rounded-xl px-5 py-5 mt-10 text-white text-center">
        <h2 className="xl:text-5xl lg:text-3xl text-[28px] font-bold">
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
  );
}
