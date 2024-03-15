import { afterAll, afterEach, beforeAll } from "vitest";
import { setupNode } from "server/src/setupNode";
import { resetServerData } from "server/src/handlers";

const server = setupNode();

beforeAll(() => {
  try {
    server.listen();
  } catch (error) {
    console.error("Failed to start the server:", error);
  }
});

afterEach(() => {
  server.resetHandlers();
  resetServerData();
});

afterAll(() => {
  server.close();
});
