import { useEffect, useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
} from "../ui/pagination";

export const TablePaginator = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <>
      <Pagination className="collapse mt-5 flex flex-wrap items-center justify-center sm:visible">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" className="border" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="#"
              isActive
              className="bg-[#146EB4] text-white hover:bg-[#10558b] hover:text-white"
              size={"icon"}
            >
              10
            </PaginationLink>
          </PaginationItem>
          {[11, 12, 13, 14, 15, 16, 17, 18].map((item, index) => {
            return (
              <PaginationItem key={index}>
                <PaginationLink href="#">{item}</PaginationLink>
              </PaginationItem>
            );
          })}
          <PaginationItem>
            <PaginationNext href="#" className="border" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>

      {/* Mobile Pagination */}
      <Pagination className="mt-5 flex flex-wrap items-center justify-center sm:collapse">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" className="border" />
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="#"
              isActive
              className="bg-[#146EB4] text-white hover:bg-[#10558b] hover:text-white"
              size={"icon"}
            >
              10
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" className="border" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
};
