import { QueryClient, queryOptions } from "@tanstack/react-query";

import { api, API_URL } from "../api";

export const queryClient = new QueryClient();

export const queryConfig = {
  getAccounts: () =>
    queryOptions({
      queryKey: [API_URL.accounts],
      queryFn: api.accounts,
    }),
};
