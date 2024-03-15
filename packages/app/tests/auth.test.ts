import { describe, expect, it } from "vitest";
import { createApp } from "../src/app";

describe("auth", () => {
  const payload = {
    email: "test@example.com",
    password: "password",
  };
  it("should start in a guest state", () => {
    const app = createApp();
    expect(app.auth.isGuest()).toBe(true);
  });

  it("should allow a user to sign up", async () => {
    expect.assertions(1);
    const app = createApp();
    const result = await app.auth.createUser(payload);
    expect(result?.status).toBe(200);
  });

  it("should allow a user to log in", async () => {
    const app = createApp();
    await app.auth.createUser(payload);
    const result = await app.auth.login(payload);
    expect(result.status).toBe(200);
    expect(app.auth.isGuest()).toBe(false);
  });

  it("should allow a user to subscribe to state changes", () =>
    new Promise((done) => {
      const app = createApp();
      const status = app.auth.getAuthStatus();
      status.subscribe((value) => {
        expect(value.status).toBe("authenticated");
        done(null);
      });

      app.auth.createUser(payload).then(() => {
        app.auth.login(payload);
      });

      app.auth.login(payload);
    }));
});
