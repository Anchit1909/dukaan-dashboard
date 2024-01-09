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
import { transactionData } from "@/data/Data";

interface TransactionData {
  ID: string;
  Date: string;
  OrderAmount: string;
  TransactionFees: string;
}

export const TransactionTable = () => {
  const [data, setData] = useState<TransactionData[]>(transactionData);

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
              <TableCell className="font-medium text-[#146EB4]">
                {row.ID}
              </TableCell>
              <TableCell>{row.Date}</TableCell>
              <TableCell className="text-center">{row.OrderAmount}</TableCell>
              <TableCell className="text-right">
                {row.TransactionFees}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePaginator />
    </div>
  );
};
