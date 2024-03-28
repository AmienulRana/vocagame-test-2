import { Inter } from "next/font/google";
import { LayoutAuth } from "@/components/layout/auth";
import Link from "next/link";
import Typhography from "@/components/commons/Typhography";
import FormLogin from "@/components/FormLogin";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <LayoutAuth>
      <div className="flex-1">
        <div className="md:px-16 px-8 flex flex-col items-center justify-center h-full md:dark:bg-darkblue2 dark:bg-darkblue bg-gray-50">
          <Typhography variant={"h1"}>Silahkan Login</Typhography>
          <Typhography className={"!mt-5 mb-10"} variant={"p"}>
            Masukkan Username dan password anda untuk masuk
          </Typhography>
          <FormLogin />

          <Typhography variant={"p"}>
            Belum punya akun?{" "}
            <Link href="/" className="text-lightgreen font-bold">
              Daftar Sekarang
            </Link>
          </Typhography>
        </div>
      </div>
    </LayoutAuth>
  );
}
