import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "x-rapidapi-key": "385c57f4d8msh733adc363b22fdbp1bd332jsn70091e858746",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

// count comes from cryptocurrencies.jsx variable to show 10 on mobile or 100 on desktop
export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
  }),
});

//useGetCryptoQuery is provided by redux, referencing the getCryptos above coming from cryptoApi also above

export const { useGetCryptosQuery } = cryptoApi;
