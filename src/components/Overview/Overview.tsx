import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { overviewValues as values } from "@/data/Data";

export const Overview = () => {
  return (
    <div className="max-w-screen-2xl p-6">
      <div className="mb-5 flex flex-row items-center justify-between">
        <h2 className="text-lg">Overview</h2>
        <select className="rounded-lg border border-none border-gray-300 bg-white px-3 py-3 text-sm">
          <option>This Month</option>
          <option>Last Month</option>
          <option>Last 3 Months</option>
        </select>
      </div>
      <div className="flex flex-row items-center justify-center gap-4">
        <Card className="h-[140px] w-full rounded border-none bg-white sm:h-full">
          <CardHeader>
            <CardTitle className="text-md font-medium text-stone-500 antialiased">
              Online Orders
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl">{values.orders}</p>
          </CardContent>
        </Card>
        <Card className="h-[140px] w-full rounded border-none bg-white sm:h-full">
          <CardHeader>
            <CardTitle className="text-md font-medium text-stone-500 antialiased">
              Amount Received
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl">{values.amount}</p>
          </CardContent>
        </Card>
      </div>
      <h2 className="mt-6 text-[20px]">Transactions | This Month</h2>
    </div>
  );
};
