import { baseApi } from "@/redux/baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSingleUser: builder.query({
      query: (id) => ({
        url: `/user/${id}`,
        method: "GET",
      }),
      providesTags: ["User"],
    }),

    getAllUsers: builder.query({
      query: () => ({
        url: "/user/all-users",
        method: "GET",
      }),
      providesTags: ["User"],
    }),

    updateProfile: builder.mutation({
      query: (userInfo) => ({
        url: "/user/update-me",
        method: "PATCH",
        data: userInfo,
      }),
      invalidatesTags: ["User"],
    }),

    updateStatus: builder.mutation({
      query: ({ id, statusInfo }) => ({
        url: `/user/status-update/${id}`,
        method: "PATCH",
        data: statusInfo,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useGetSingleUserQuery,
  useGetAllUsersQuery,
  useUpdateProfileMutation,
  useUpdateStatusMutation,
} = userApi;
