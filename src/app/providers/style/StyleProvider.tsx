import { PrimeReactProvider, type APIOptions } from "primereact/api";
import "primereact/resources/themes/lara-dark-teal/theme.css";
import "primeicons/primeicons.css";
import "./index.css";

type Props = {
  children: React.ReactNode;
};

const styleConfig: Partial<APIOptions> = {
  ripple: true,
};

export function StyleProvider({ children }: Props) {
  return <PrimeReactProvider value={styleConfig}>{children}</PrimeReactProvider>;
}
