import DOMPurify from "dompurify";
import { createRoot } from "react-dom/client";

import { App } from "./app";

if (window.trustedTypes && window.trustedTypes.createPolicy && DOMPurify) {
  window.trustedTypes.createPolicy("default", {
    createHTML: (string: string) => DOMPurify.sanitize(string),
    createScriptURL: (string: string) => string,
    createScript: (string: string) => string,
  });
}

createRoot(document.getElementById("root")!).render(<App />);
