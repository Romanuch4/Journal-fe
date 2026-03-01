import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type React from "react";

// Create a client
const queryClient = new QueryClient();

type Props = {
  children: React.ReactNode;
};

export function QueryProvider({ children }: Props) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
