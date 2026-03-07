import type React from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export function QueryProvider({ children }: Required<React.PropsWithChildren>) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
