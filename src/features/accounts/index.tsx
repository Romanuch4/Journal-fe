import { useQuery } from "@tanstack/react-query";
import { ProgressSpinner } from "primereact/progressspinner";

import { api, API_URL } from "src/shared/lib/api";

export function Accounts() {
  const { data, error, isPending } = useQuery({
    queryKey: [API_URL.accounts],
    queryFn: api.getAccounts,
  });

  if (isPending) {
    return <ProgressSpinner />;
  }

  if (error) {
    return error.message;
  }

  return data;
}
