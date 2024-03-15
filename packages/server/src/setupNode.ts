import { setupServer } from "msw/node";
import { handlers } from "./handlers";

export const setupNode = () => {
  return setupServer(...handlers);
};
