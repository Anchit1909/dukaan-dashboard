import { Button } from "../ui/button";
import { ArrowDownUp, Download, Search } from "lucide-react";

export const TableOperations = () => {
  return (
    <div className="mx-1 my-3 flex flex-row items-center justify-between">
      <div className="relative flex flex-row items-center gap-1">
        <Search size="18px" className="absolute left-3 text-muted-foreground" />
        <input
          type="text"
          className="h-10 w-full rounded-sm border border-input bg-background pl-9 pr-3 text-[14px] text-[#808080] ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Search by Order ID..."
        />
      </div>
      <div className="ml-2 flex flex-row justify-center gap-1 text-[#808080] sm:gap-3">
        <Button variant={"outline"}>
          Sort &nbsp;
          <ArrowDownUp size="20px" />
        </Button>
        <Button variant={"outline"}>
          <Download size="20px" />
        </Button>
      </div>
    </div>
  );
};
