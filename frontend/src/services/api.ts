import axios, { AxiosResponse } from "axios";

interface UserLogin {
  email: string;
  password: string;
}

let api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export function setAuthToken(token: string) {
  api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export function login(userData: UserLogin): Promise<AxiosResponse> {
  return api.post("/auth", userData);
}

export function signUp({ name, email, password }): Promise<AxiosResponse> {
  return api.post("/users", { name, email, password });
}

export function sendTransactionsFile(file: File): Promise<AxiosResponse> {
  const formData = new FormData();

  formData.append("document", file);

  return api.post("/transactions", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}

export function getStoreList(name: string): Promise<AxiosResponse> {
  return api.get(`store/${name}`);
}

export function getTransactions(storeID: string): Promise<AxiosResponse> {
  return api.get(`/transactions/${storeID}`);
}
