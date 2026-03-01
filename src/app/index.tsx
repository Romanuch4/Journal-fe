import { QueryProvider } from "./providers/query/QueryProvider";
import { RouterProvider } from "./providers/router/RouterProvider";
import { StyleProvider } from "./providers/style/StyleProvider";

export function App() {
  return (
    <QueryProvider>
      <StyleProvider>
        <RouterProvider />
      </StyleProvider>
    </QueryProvider>
  );
}
