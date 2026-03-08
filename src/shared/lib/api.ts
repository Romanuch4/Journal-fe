import ky from "ky";

import type { QueryFunction } from "@tanstack/react-query";

const baseUrl = "http://localhost:3000";

export const API_URL = {
  baseUrl,
  accounts: `${baseUrl}/accounts`,
} as const;

type Api = {
  getAccounts: QueryFunction<string>;
};

export const api: Api = {
  async getAccounts({ signal }) {
    return ky.get(API_URL.accounts, { signal, credentials: "include" }).text();
  },
};
