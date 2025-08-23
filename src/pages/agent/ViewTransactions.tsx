/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { format } from "date-fns";
import { useTransactionHistoryQuery } from "@/redux/features/transaction/transaction.api";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function ViewTransactions() {
  const [page, setPage] = useState(1);
  const limit = 10;

  // Fetch transactions with current page
  const { data } = useTransactionHistoryQuery({
    page: page.toString(),
    limit: limit.toString(),
  });

  const agentTransactions = data?.data;
  const meta = data?.meta;

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > meta?.totalPage) return;
    setPage(newPage);
  };

  const isFirstPage = page === 1;
  const isLastPage = page === meta?.totalPage;

  return (
    <>
      <div className="">
        <h1 className="text-2xl font-semibold py-4">Transaction History </h1>
        <Table className="min-h-[400px]">
          <TableHeader>
            <TableRow>
              <TableHead>From</TableHead>
              <TableHead>To</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Fee</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {agentTransactions?.map((tx: any) => (
              <TableRow key={tx._id}>
                <TableCell className="font-medium">{tx.from}</TableCell>
                <TableCell>{tx.to}</TableCell>
                <TableCell>{tx.amount}</TableCell>
                <TableCell>{tx.type}</TableCell>
                <TableCell>{tx.fee}</TableCell>
                <TableCell>
                  {format(new Date(tx.createdAt), "dd MMM yyyy, hh:mm a")}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Pagination */}
        {meta && meta.totalPage > 1 && (
          <Pagination className="mt-4 flex justify-center">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => !isFirstPage && handlePageChange(page - 1)}
                  className={
                    isFirstPage
                      ? "cursor-not-allowed opacity-50"
                      : "cursor-pointer"
                  }
                />
              </PaginationItem>

              {Array.from({ length: meta.totalPage }, (_, i) => i + 1).map(
                (p) => (
                  <PaginationItem key={p}>
                    <PaginationLink
                      isActive={p === page}
                      onClick={() => handlePageChange(p)}
                      className={
                        p === page ? "cursor-default" : "cursor-pointer"
                      }
                    >
                      {p}
                    </PaginationLink>
                  </PaginationItem>
                )
              )}

              <PaginationItem>
                <PaginationNext
                  onClick={() => !isLastPage && handlePageChange(page + 1)}
                  className={
                    isLastPage
                      ? "cursor-not-allowed opacity-50"
                      : "cursor-pointer"
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </div>
    </>
  );
}
