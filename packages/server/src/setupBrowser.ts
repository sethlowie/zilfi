import { setupWorker } from "msw/browser";
import { handlers } from "./handlers";

export const setupBrowser = () => {
  return setupWorker(...handlers);
};
