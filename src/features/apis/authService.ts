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
  })
})

export const { 
  useLoginMutation, 
  // useRegisterMutation 
} = authService;