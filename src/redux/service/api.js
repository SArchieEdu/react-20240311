import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiService = createApi({
  reducerPath: "api",
  tagTypes: ["Review", "Product"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/" }),
  endpoints: (builder) => ({
    getHeadphones: builder.query({
      query: () => ({
        url: "products",
      }),
    }),
    getCodecs: builder.query({
      query: (productId) => ({
        url: "codecs",
        params: { productId },
      }),
    }),
    getReviews: builder.query({
      query: (productId) => ({
        url: "reviews",
        params: { productId },
      }),
      providesTags: (result, _, productId) =>
        result
          .map(({ id }) => ({ type: "Review", id }))
          .concat(
            { type: "Review", id: "All" },
            { type: "Product", id: productId }
          ),
    }),
    createReview: builder.mutation({
      query: ({ productId, newReview }) => ({
        url: `review/${productId}`,
        method: "POST",
        body: newReview,
      }),
      invalidatesTags: (result, _, { productId }) => [
        { type: "Product", id: productId },
      ],
    }),
    updateReview: builder.mutation({
      query: ({ review }) => ({
        url: `review/${review.id}`,
        method: "PATCH",
        body: review,
      }),
      invalidatesTags: (result, _, { review }) => [
        { type: "Review", id: review.id },
      ],
    }),
  }),
});

export const {
  useGetHeadphonesQuery,
  useGetCodecsQuery,
  useGetReviewsQuery,
  useCreateReviewMutation,
  useUpdateReviewMutation,
} = apiService;
