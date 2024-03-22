import { withBaseUrl } from "server";
import { okRemoteResult, createErrorRemoteResult } from "@zilfi/http";

export class AuthIO {
  async createUser({ email, password }: { email: string; password: string }) {
    return fetch(withBaseUrl("/user"), {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async checkExistingUser() {
    const token = localStorage.getItem("token");
    if (token) {
      return okRemoteResult({ token });
    }

    return createErrorRemoteResult(401, "Unauthorized");
  }

  async login(_opts: { email: string; password: string }) {
    localStorage.setItem("token", "token");

    return okRemoteResult({ token: "" });
  }
}
