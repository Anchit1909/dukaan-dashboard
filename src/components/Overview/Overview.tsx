import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { overviewValues as values } from "@/data/Data";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export const Overview = () => {
  return (
    <div className="max-w-screen-2xl p-6">
      <div className="mb-5 flex flex-row items-center justify-between">
        <h2 className="text-lg font-medium text-[#1A181E]">Overview</h2>
        <Select>
          <SelectTrigger className="w-[137px] border-[#D9D9D9] text-sm text-[#4D4D4D]">
            <SelectValue placeholder="Last Month" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="LastMonth">Last Month</SelectItem>
              <SelectItem value="ThisMonth">This Month</SelectItem>
              <SelectItem value="Last3Months">Last 3 Months</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-row items-center justify-center gap-4">
        <Card className="h-[140px] w-full -space-y-2 rounded border-none bg-white sm:h-full">
          <CardHeader>
            <CardTitle className="text-base text-[#4D4D4D] antialiased">
              Online Orders
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-[32px] font-medium">{values.orders}</p>
          </CardContent>
        </Card>
        <Card className="h-[140px] w-full -space-y-2 rounded border-none bg-white sm:h-full">
          <CardHeader>
            <CardTitle className="text-base text-[#4D4D4D] antialiased">
              Amount Received
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-[32px] font-medium">{values.amount}</p>
          </CardContent>
        </Card>
      </div>
      <h2 className="mt-6 text-[20px]">Transactions | This Month</h2>
    </div>
  );
};
