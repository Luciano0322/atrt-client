import { rootApi } from "./rootApi";

export const authService = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<UserResponse, LoginRequest>({
      query: (credentials) => ({
        url: "auth/local/signin",
        method: "POST",
        body: credentials
      }),
      invalidatesTags: [{type: "AuthService", id: "LOGIN"}]
    }),
    // register: builder.mutation<RegisterRes, RegisterReq>({
    //   query: (registerData) => ({
    //     url: "users",
    //     method: "POST",
    //     body: registerData
    //   }),
    //   invalidatesTags: [{type: "AuthService", id: "REGISTER"}]
    // })
    refresh: builder.mutation<UserResponse, string>({
      query: (rt) => ({
        url: "auth/refresh",
        headers: {"authorization": "Bearer " + rt },
        method: "Post"
      }),
      invalidatesTags: [{type: "AuthService", id: "REFRESH"}]
    }),
    logout: builder.mutation<any, void>({
      query: () => ({
        url: "auth/logout",
        method: "POST",
      }),
      invalidatesTags: [{type: "AuthService", id: "LOGOUT"}]
    }),
  })
})

export const { 
  useLoginMutation, 
  // useRegisterMutation 
  useLogoutMutation,
  useRefreshMutation
} = authService;