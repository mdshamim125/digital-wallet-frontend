import { baseApi } from "@/redux/baseApi";

export const transactionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    //user transaction
    //Send money to another user
    sendMoneyByUser: builder.mutation({
      query: (amountInfo) => ({
        url: "transaction/send-money",
        method: "POST",
        data: amountInfo,
      }),
      invalidatesTags: ["Transaction", "TransactionOverview"],
    }),

    //Deposit money (via agent cash-in simulation)
    addMoneyByUser: builder.mutation({
      query: (amountInfo) => ({
        url: "/transaction/add-money",
        method: "POST",
        data: amountInfo,
      }),
      invalidatesTags: ["Transaction", "TransactionOverview"],
    }),

    //Withdraw money
    withdrawMoneyByUser: builder.mutation({
      query: (amountInfo) => ({
        url: "/transaction/withdraw",
        method: "POST",
        data: amountInfo,
      }),
      invalidatesTags: ["Transaction", "TransactionOverview"],
    }),

    //agent transaction
    //Add money to a user’s wallet
    cashIn: builder.mutation({
      query: (amountInfo) => ({
        url: "/transaction/cash-in",
        method: "POST",
        data: amountInfo,
      }),
      invalidatesTags: ["Transaction", "TransactionOverview"],
    }),

    //Withdraw money from a user’s wallet
    cashOut: builder.mutation({
      query: (amountInfo) => ({
        url: "/transaction/cash-out",
        method: "POST",
        data: amountInfo,
      }),
      invalidatesTags: ["Transaction", "TransactionOverview"],
    }),

    //Transaction history
    // Transaction history (for a single user, but with filters/pagination support)
    transactionHistory: builder.query({
      query: (params: Record<string, string>) => ({
        url: "/transaction/transactions",
        method: "GET",
        params,
      }),
      providesTags: ["Transaction"],
    }),

    //admin api
    //Get all transactions
    AllTransactionHistory: builder.query({
      query: (params: Record<string, string>) => ({
        url: "/transaction/all-transactions",
        method: "GET",
        params,
      }),
      providesTags: ["Transaction"],
    }),
  }),
});

export const {
  useSendMoneyByUserMutation,
  useAddMoneyByUserMutation,
  useWithdrawMoneyByUserMutation,
  useCashInMutation,
  useCashOutMutation,
  useTransactionHistoryQuery,
  useAllTransactionHistoryQuery,
} = transactionApi;
