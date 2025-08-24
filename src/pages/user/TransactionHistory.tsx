/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTransactionHistoryQuery } from "@/redux/features/transaction/transaction.api";
import { toast } from "sonner";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Filter } from "lucide-react";

interface FilterForm {
  type: string;
  startDate: string;
  endDate: string;
}

export default function TransactionHistory() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [filters, setFilters] = useState<Record<string, string>>({});

  const { control, register, handleSubmit } = useForm<FilterForm>({
    defaultValues: {
      type: "all",
      startDate: "",
      endDate: "",
    },
  });

  const { data, isLoading, error } = useTransactionHistoryQuery({
    ...filters,
    page: page.toString(),
    limit: limit.toString(),
  });

  const transactionData = data?.data;

  console.log(data);

  const onSubmit = (values: FilterForm) => {
    const payload: Record<string, string> = {};
    if (values.type && values.type !== "all") payload.type = values.type;
    if (values.startDate) payload.startDate = values.startDate;
    if (values.endDate) payload.endDate = values.endDate;

    setFilters(payload);
    setPage(1); // reset page to 1 after filtering
  };

  useEffect(() => {
    if (error) {
      toast.error("Failed to fetch transactions");
    }
  }, [error]);

  useEffect(() => {
    const menuItem = document.getElementById("translate-page");
    if (menuItem) {
      // do something with it
    }
  }, []);

  const totalTransactions = data?.meta?.total || 0;
  const totalPage = Math.ceil(totalTransactions / limit) || 1;

  const handlePrevious = () => setPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () => setPage((prev) => Math.min(prev + 1, totalPage));

  return (
    <div className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
        Transactions
      </h2>

      {/* Filter Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-6 gap-3 items-center bg-gray-100 dark:bg-gray-800 p-4 rounded-xl mb-6 shadow-sm"
      >
        {/* Type Select */}
        <Controller
          control={control}
          name="type"
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger>
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="send_money">Send Money</SelectItem>
                <SelectItem value="cash_in">Cash In</SelectItem>
                <SelectItem value="cash_out">Cash Out</SelectItem>
                <SelectItem value="withdraw">Withdraw</SelectItem>
                <SelectItem value="add_money">Add Money</SelectItem>
              </SelectContent>
            </Select>
          )}
        />

        {/* Start Date */}
        <Input
          {...register("startDate")}
          type="date"
          placeholder="Start Date"
          className="w-full"
        />

        {/* End Date */}
        <Input
          {...register("endDate")}
          type="date"
          placeholder="End Date"
          className="w-full"
        />

        {/* Filter Button */}
        <Button
          type="submit"
          className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white"
        >
          <Filter size={18} /> Filter
        </Button>
      </form>

      {/* Transactions Table */}
      <div className="overflow-x-auto min-h-[400px]">
        <table className="w-full border-collapse border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white">
          <thead className="bg-gray-100 dark:bg-gray-800">
            <tr>
              <th className="border p-2">From</th>
              <th className="border p-2">To</th>
              <th className="border p-2">Amount</th>
              <th className="border p-2">Fee</th>
              <th className="border p-2">Type</th>
              <th className="border p-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={6} className="text-center p-4">
                  Loading...
                </td>
              </tr>
            ) : transactionData?.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center p-4">
                  No transactions found.
                </td>
              </tr>
            ) : (
              transactionData?.map((tx: any) => (
                <tr
                  key={tx._id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  <td className="border p-2">{tx.from}</td>
                  <td className="border p-2">{tx.to}</td>
                  <td className="border p-2">{tx.amount}</td>
                  <td className="border p-2">{tx.fee}</td>
                  <td className="border p-2 capitalize">
                    {tx.type.replace("_", " ")}
                  </td>
                  <td className="border p-2">
                    {new Date(tx.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePrevious();
                }}
                className={page <= 1 ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>

            {[...Array(totalPage)].map((_, i) => {
              const pageNumber = i + 1;
              return (
                <PaginationItem key={pageNumber}>
                  <PaginationLink
                    href="#"
                    isActive={page === pageNumber}
                    onClick={(e) => {
                      e.preventDefault();
                      setPage(pageNumber);
                    }}
                  >
                    {pageNumber}
                  </PaginationLink>
                </PaginationItem>
              );
            })}

            {totalPage > 5 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}

            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleNext();
                }}
                className={
                  page >= totalPage ? "pointer-events-none opacity-50" : ""
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
