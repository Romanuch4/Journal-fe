import { useQuery } from "@tanstack/react-query";
import { ProgressSpinner } from "primereact/progressspinner";

import { queryConfig } from "src/shared/lib/query";

export function Accounts() {
  const { data, error, isPending } = useQuery(queryConfig.getAccounts());

  if (isPending) {
    return <ProgressSpinner />;
  }

  if (error) {
    return error.message;
  }

  return data;
}
