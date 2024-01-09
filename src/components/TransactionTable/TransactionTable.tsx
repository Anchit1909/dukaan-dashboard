"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TableOperations } from "./TableOperations";
import { TablePaginator } from "./TablePaginator";
import { Info } from "lucide-react";

interface TransactionData {
  ID: string;
  Date: string;
  Amount1: string;
  Amount2: string;
}

export const TransactionTable = () => {
  const [data, setData] = useState<TransactionData[]>([
    {
      ID: "#271209",
      Date: "7 July, 2023",
      Amount1: "₹1,278.23",
      Amount2: "₹22",
    },
    {
      ID: "#281209",
      Date: "7 July, 2023",
      Amount1: "₹1,278.23",
      Amount2: "₹22",
    },
    {
      ID: "#281209",
      Date: "7 July, 2023",
      Amount1: "₹1,278.23",
      Amount2: "₹22",
    },
    {
      ID: "#281209",
      Date: "7 July, 2023",
      Amount1: "₹1,278.23",
      Amount2: "₹22",
    },
    {
      ID: "#281209",
      Date: "7 July, 2023",
      Amount1: "₹1,278.23",
      Amount2: "₹22",
    },
    {
      ID: "#281209",
      Date: "7 July, 2023",
      Amount1: "₹1,278.23",
      Amount2: "₹22",
    },
    {
      ID: "#281209",
      Date: "7 July, 2023",
      Amount1: "₹1,278.23",
      Amount2: "₹22",
    },
    {
      ID: "#281209",
      Date: "7 July, 2023",
      Amount1: "₹1,278.23",
      Amount2: "₹22",
    },
    {
      ID: "#281209",
      Date: "7 July, 2023",
      Amount1: "₹1,278.23",
      Amount2: "₹22",
    },
    {
      ID: "#281209",
      Date: "7 July, 2023",
      Amount1: "₹1,278.23",
      Amount2: "₹22",
    },
    {
      ID: "#281209",
      Date: "7 July, 2023",
      Amount1: "₹1,278.23",
      Amount2: "₹22",
    },
    {
      ID: "#281209",
      Date: "7 July, 2023",
      Amount1: "₹1,278.23",
      Amount2: "₹22",
    },
    {
      ID: "#281209",
      Date: "7 July, 2023",
      Amount1: "₹1,278.23",
      Amount2: "₹22",
    },
    {
      ID: "#281209",
      Date: "7 July, 2023",
      Amount1: "₹1,278.23",
      Amount2: "₹22",
    },
    {
      ID: "#281209",
      Date: "7 July, 2023",
      Amount1: "₹1,278.23",
      Amount2: "₹22",
    },
  ]);

  return (
    <div className="payment-table mx-6 min-w-[300px] rounded bg-white p-2">
      <TableOperations />
      <Table>
        <TableHeader>
          <TableRow className="bg-stone-100 text-gray-600">
            <TableHead>Order ID</TableHead>
            <TableHead>Order Date</TableHead>
            <TableHead className="text-center">Order Amount</TableHead>
            <TableHead className="text-right">
              Transaction fees
              <Info className="ml-1 inline text-sm text-[#808080]" />
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row: TransactionData, index: number) => (
            <TableRow key={index}>
              <TableCell className="font-medium text-blue-700">
                {row.ID}
              </TableCell>
              <TableCell>{row.Date}</TableCell>
              <TableCell className="text-center">{row.Amount1}</TableCell>
              <TableCell className="text-right">{row.Amount2}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePaginator />
    </div>
  );
};
