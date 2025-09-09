import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const goodsApi = createApi({
  reducePatch: "goodsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:3001" }),
  endpoints: (builder) => ({
    getGoods: builder.query({
      query: () => "/goods",
    }),
  }),
});


export const { useGetGoodsQuery } = goodsApi;
