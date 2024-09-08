import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CategoriesApiResponse } from "..";


const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const categoriesApi = createApi({
    // keepUnusedDataFor: 0, //чтоб не кешировались запросы
    reducerPath: "categoriesApi",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        
        getCategoriesNews: builder.query<CategoriesApiResponse, null>({
            query: () => {
                return {
                    url: "available/categories",
                    params: {
                        apiKey: API_KEY,
                    },
                };
            },
        }),
    }),
});

export const {
    useGetCategoriesNewsQuery,
} = categoriesApi;
