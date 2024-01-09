"use client";

import { useEffect, useState } from "react";
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
import TableLoader from "../Preloader/TableLoader";

interface TransactionData {
  ID: string;
  Date: string;
  OrderAmount: string;
  TransactionFees: string;
}

export const TransactionTable = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<TransactionData[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate API call delay to show loading
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setData(transactionData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="mx-6 min-w-[300px] rounded bg-white p-2 mb-4">
      <TableOperations />
      <Table>
        <TableHeader>
          <TableRow className="bg-stone-100 font-medium text-[#4D4D4D]">
            <TableHead>Order ID</TableHead>
            <TableHead>Order Date</TableHead>
            <TableHead className="text-center">Order Amount</TableHead>
            <TableHead className="text-right">
              Transaction fees
              <Info
                className="mb-[2px] ml-1 inline text-sm text-[#808080]"
                size="14px"
              />
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {loading ? (
            <>
              {Array(15)
                .fill(0)
                .map((_, index) => (
                  <TableLoader key={index} />
                ))}
            </>
          ) : (
            <>
              {data.map((row: TransactionData, index: number) => (
                <TableRow key={index}>
                  <TableCell className="font-medium text-[#146EB4]">
                    {row.ID}
                  </TableCell>
                  <TableCell className="text-[#1A181E]">{row.Date}</TableCell>
                  <TableCell className="text-center text-[#1A181E]">
                    {row.OrderAmount}
                  </TableCell>
                  <TableCell className="text-right text-[#1A181E]">
                    {row.TransactionFees}
                  </TableCell>
                </TableRow>
              ))}
            </>
          )}
        </TableBody>
      </Table>
      <TablePaginator />
    </div>
  );
};
