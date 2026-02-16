import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import {
  IGetVacancyParams,
  IGetVacancyResponse,
  // ISubmitVacancyFormData,
  ISubmitVacancyResponse
} from 'types/requests';

export const vacancyApi = createApi({
  reducerPath: 'vacancyApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_REACT_APP_API_URL}`
  }),
  endpoints: (builder) => ({
    getVacancy: builder.query<IGetVacancyResponse, IGetVacancyParams>({
      query: () => ({
        url: 'tender/vacanci/'
      })
    }),
    // submitVacancyForm: builder.mutation<ISubmitVacancyResponse, ISubmitVacancyFormData>({
    //   query: (formData) => ({
    //     url: 'tender/create/application/vacanci/',
    //     method: 'POST',
    //     body: formData
    //   })
    // })
    submitVacancyForm: builder.mutation<ISubmitVacancyResponse, FormData>({
      query: (formData) => ({
        url: 'tender/create/application/vacanci/',
        method: 'POST',
        body: formData
      })
    })
  })
});

export const {
  useGetVacancyQuery,
  useSubmitVacancyFormMutation
} = vacancyApi;

