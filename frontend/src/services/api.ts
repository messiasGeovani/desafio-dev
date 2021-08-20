import axios, { AxiosResponse } from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export function sendTransactionsFile(file: File): Promise<AxiosResponse> {
  console.log("here", process.env.API_URL);
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
