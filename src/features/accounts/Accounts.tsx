import { useQuery } from "@tanstack/react-query";
import { ProgressSpinner } from "primereact/progressspinner";

import { API_URL } from "src/shared/lib/api";

export function Accounts() {
  const { data, error, isPending } = useQuery({
    queryKey: [API_URL.accounts],
    queryFn: async () => {
      const res = await fetch(API_URL.accounts, {
        method: "GET",
        headers: {
          "Content-Type": "text/plain",
        },
        credentials: "include",
      });

      return await res.text();
    },
  });

  if (isPending) {
    return <ProgressSpinner />;
  }

  if (error) {
    return error.message;
  }

  return data;
}
