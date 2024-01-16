import Image from "next/image";
import SideMenu from "./SideMenu";

export default function Layout({ children }){
    return (
    <section className="flex mx-auto max-w-[1900px] justify-between min-h-screen">
        <SideMenu />
        {children}
    </section>

    )
}