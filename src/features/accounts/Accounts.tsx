import { useQuery } from "@tanstack/react-query";
import { API_URL } from "src/shared/lib/api";
import { ProgressSpinner } from "primereact/progressspinner";

export function Accounts() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["accounts"],
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

  if (isLoading) {
    return <ProgressSpinner />;
  }

  if (error) {
    return error.message;
  }

  return data;
}
