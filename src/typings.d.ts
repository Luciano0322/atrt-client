interface UserResponse {
  access_token: string;
  refresh_token: string;
}

interface LoginRequest {
  email: string;
  password: string;
}