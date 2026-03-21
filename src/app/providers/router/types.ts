import type { router } from "./RouterProvider";

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
