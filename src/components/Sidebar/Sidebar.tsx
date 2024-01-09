import { Button } from "@/components/ui/button";
import Image from "next/image";
import SidebarLinks from "./SidebarLinks";
import { ChevronDown, Wallet } from "lucide-react";

export function Sidebar() {
  return (
    <nav className="sticky top-0 hidden h-screen w-[300px] flex-col items-center justify-between bg-[#1E2640] p-3 align-middle md:flex">
      <div className="w-full">
        <div className="flex w-full flex-row items-center justify-between">
          <div className="flex flex-row gap-3">
            <Image src={"/Logo.png"} alt="Logo" width={40} height={40} />
            <div className="flex flex-col items-start justify-start gap-1">
              <p className="text-base font-bold text-white">Nishyan</p>
              <a href="#" className="text-xs text-white/80 underline">
                Visit Store
              </a>
            </div>
          </div>
          <Button
            variant={"ghost"}
            size={"icon"}
            className="bg-black/10 hover:bg-black/30"
          >
            <ChevronDown />
          </Button>
        </div>
        <SidebarLinks />
      </div>
      <div className="flex w-full flex-row items-center justify-center gap-4 rounded bg-[#353C53] px-1 py-2">
        <Button
          variant={"ghost"}
          className="bg-black/10 text-white hover:bg-black/30"
          size={"icon"}
        >
          <Wallet className="h-5 w-5 text-white" />
        </Button>
        <div className="flex flex-col">
          <p className="text-sm text-white">Available Credits</p>
        </div>
      </div>
    </nav>
  );
}
