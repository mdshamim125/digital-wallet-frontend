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
import { useAllTransactionHistoryQuery } from "@/redux/features/transaction/transaction.api";
import { toast } from "sonner";

interface FilterForm {
  searchTerm: string;
  type: string;
  status: string;
  minAmount: string;
  maxAmount: string;
}

export default function ViewTransactions() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [filters, setFilters] = useState<Record<string, string>>({});

  const { control, register, handleSubmit } = useForm<FilterForm>({
    defaultValues: {
      searchTerm: "",
      type: "all",
      status: "all",
      minAmount: "",
      maxAmount: "",
    },
  });

  const { data, isLoading, error } = useAllTransactionHistoryQuery({
    ...filters,
    page: page.toString(),
    limit: limit.toString(),
  });

  //   console.log(data?.data?.data)
  const transactionData = data?.data?.data;
  console.log(data?.data);

  const onSubmit = (values: FilterForm) => {
    const payload: Record<string, string | number> = {};

    if (values.searchTerm.trim() !== "")
      payload.searchTerm = values.searchTerm.trim();
    if (values.type && values.type !== "all") payload.type = values.type;
    if (values.status && values.status !== "all")
      payload.status = values.status;
    if (values.minAmount.trim() !== "")
      payload.minAmount = Number(values.minAmount.trim());
    if (values.maxAmount.trim() !== "")
      payload.maxAmount = Number(values.maxAmount.trim());

    setFilters(payload);
    setPage(1); // reset page to 1 after filtering
  };

  useEffect(() => {
    if (error) {
      toast.error("Failed to fetch transactions");
    }
  }, [error]);

  // Calculate total page dynamically
  const totalTransactions = data?.data?.meta?.total || 0;
  const totalPage = Math.ceil(totalTransactions / limit) || 1;

  // Pagination handlers
  const handlePrevious = () => setPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () => {
    if (!totalPage) return;
    setPage((prev) => Math.min(prev + 1, totalPage));
  };

  return (
    <div className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
        Transactions
      </h2>

      {/* Filter Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6"
      >
        <Input
          {...register("searchTerm")}
          placeholder="Search by ID, From, To..."
          className="col-span-1 md:col-span-2"
        />

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

        <div className="flex space-x-2 col-span-1 md:col-span-1">
          <Input
            {...register("minAmount")}
            placeholder="Min Amount"
            type="number"
            onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
          />
          <Input
            {...register("maxAmount")}
            placeholder="Max Amount"
            type="number"
            onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
          />
        </div>

        <Button
          type="submit"
          className="col-span-1 md:col-span-1 bg-blue-600 hover:bg-blue-700 text-white"
        >
          Filter
        </Button>
      </form>

      {/* Transactions Table */}
      <div className="overflow-x-auto">
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
                <td colSpan={8} className="text-center p-4">
                  Loading...
                </td>
              </tr>
            ) : transactionData?.length === 0 ? (
              <tr>
                <td colSpan={8} className="text-center p-4">
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
      <div className="flex justify-between items-center mt-4">
        <span>
          Page {page} of {totalPage ?? "..."}
        </span>
        <Button disabled={page <= 1 || !totalPage} onClick={handlePrevious}>
          Previous
        </Button>
        <Button disabled={!totalPage || page >= totalPage} onClick={handleNext}>
          Next
        </Button>
      </div>
    </div>
  );
}
