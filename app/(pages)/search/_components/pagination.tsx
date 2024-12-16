"use client"
import React, { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export function PaginationDemo() {
  const totalPages = 10;
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768); 
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial state

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderPaginationItems = () => {
    if (isSmallScreen) {
      return (
        <>
          <PaginationItem>
            <PaginationLink href="#" className="w-10">1</PaginationLink>
          </PaginationItem>
{/*          
          <PaginationItem>
            <PaginationLink href="#" className="w-10">{totalPages}</PaginationLink>
          </PaginationItem> */}
          <PaginationItem>
            <PaginationEllipsis className="w-10" />
          </PaginationItem>
        </>
      );
    } else {
      return Array.from({ length: totalPages }, (_, index) => (
        <PaginationItem key={index + 1}>
          <PaginationLink href="#" className="w-10" isActive={index + 1 === 1}>
            {index + 1}
          </PaginationLink>
        </PaginationItem>
      ));
    }
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        {renderPaginationItems()}
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
