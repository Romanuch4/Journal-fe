import { StyleProvider } from "./providers/style/StyleProvider";
import { RouterProvider } from "./providers/router/RouterProvider";
import { QueryProvider } from "./providers/query/QueryProvider";

export function App() {
  return (
    <QueryProvider>
      <StyleProvider>
        <RouterProvider />
      </StyleProvider>
    </QueryProvider>
  );
}
