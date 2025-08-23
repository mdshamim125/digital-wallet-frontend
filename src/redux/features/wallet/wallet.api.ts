import { baseApi } from "@/redux/baseApi";

export const walletApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getWallets: builder.query({
      query: () => ({
        url: "wallet/get-wallets",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetWalletsQuery } = walletApi;
