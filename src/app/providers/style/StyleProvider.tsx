import { type APIOptions, PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-dark-teal/theme.css";
import "primeicons/primeicons.css";
import "./index.css";

const styleConfig: Partial<APIOptions> = {
  ripple: true,
};

export function StyleProvider({ children }: Required<React.PropsWithChildren>) {
  return <PrimeReactProvider value={styleConfig}>{children}</PrimeReactProvider>;
}
