import { fetchBaseQuery, retry, createApi } from '@reduxjs/toolkit/query/react'
import { RootState } from '../store'

const BASE_URL = 'http://localhost:3333/'
// 預處理帶 token 的做法
const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers
  },
})
const baseQueryWithRetry = retry(baseQuery, { maxRetries: 1 })

export const rootApi = createApi({
  reducerPath: 'rootApi',
  // baseQuery: baseQueryWithRetry,
  baseQuery,
  tagTypes: ['AuthService'],
  endpoints: () => ({}),
})