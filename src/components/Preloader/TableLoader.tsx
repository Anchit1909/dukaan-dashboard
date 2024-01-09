import React from "react";
import { Skeleton } from "../ui/skeleton";
import { TableCell, TableRow } from "../ui/table";

const TableLoader = () => {
  return (
    <TableRow>
      <TableCell className="">
        <Skeleton className="w-full h-4" />
      </TableCell>
      <TableCell className="">
        <Skeleton className="w-full h-4" />
      </TableCell>
      <TableCell className="">
        <Skeleton className="w-full h-4" />
      </TableCell>
      <TableCell className="">
        <Skeleton className="w-full h-4" />
      </TableCell>
    </TableRow>
  );
};

export default TableLoader;
