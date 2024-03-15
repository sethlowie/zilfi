import { withBaseUrl } from "server";

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
  async login({ email, password }: { email: string; password: string }) {
    return fetch(withBaseUrl("/login"), {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
