import { createAuthClient } from "better-auth/react";
import ky from "ky";

const baseUrl = "http://localhost:3000";

export const API_URL = {
  baseUrl,
  accounts: `${baseUrl}/accounts`,
} as const;

interface BaseApiContext {
  signal: AbortSignal;
}

interface GetAccounts {
  (params: BaseApiContext): Promise<string>;
}

interface Api {
  accounts: GetAccounts;
}

export const authClient = createAuthClient({
  baseURL: API_URL.baseUrl, // The base URL of your auth server
});

export const api: Api = {
  accounts({ signal }) {
    return ky.get(API_URL.accounts, { signal, credentials: "include" }).text();
  },
};
