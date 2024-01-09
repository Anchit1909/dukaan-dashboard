import { Button } from "@/components/ui/button";
import { links } from "@/data/Data";
import React from "react";

export default function SidebarLinks() {
  return (
    <ul className="mt-5 w-full">
      {links.map((element, index) => {
        return (
          <li key={index} className="my-2">
            <a href="#">
              <Button
                variant={"ghost"}
                size="sm"
                className={`flex flex-row justify-start text-white items-center gap-3 w-full hover:bg-[#353C53] hover:text-white 
                ${element.name === "Payments" && "bg-[#353C53] text-white"}`}
              >
                {element.icon}
                <p>{element.name}</p>
              </Button>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
