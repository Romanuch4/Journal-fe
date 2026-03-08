import { createRoot } from "react-dom/client";

import { App } from "./app";

if (window.trustedTypes && window.trustedTypes.createPolicy) {
  window.trustedTypes.createPolicy("default", {
    createHTML: (string: string) => {
      // we will cover it later
      // return DOMPurify.sanitize(string)
      return string;
    },
    createScriptURL: (string: string) => string,
    createScript: (string: string) => string,
  });
}

createRoot(document.getElementById("root")!).render(<App />);
