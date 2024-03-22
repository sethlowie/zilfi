import { AuthIO } from "./io";
import { Atom, createAtom } from "@zilfi/core";

interface GuestUser {
  status: "guest";
}

interface AuthenticatedUser {
  status: "authenticated";
  email: string;
}

type AuthStatus = GuestUser | AuthenticatedUser;

export class AuthService {
  #authStatus: Atom<AuthStatus>;
  #initialized: Atom<boolean>;
  constructor(private readonly io: AuthIO) {
    this.#initialized = createAtom(false);
    this.#authStatus = createAtom({
      status: "guest",
    } as AuthStatus);
  }

  setInitialized() {
    this.#initialized;
  }

  getInitialized() {
    return this.#initialized;
  }

  getAuthStatus() {
    return this.#authStatus;
  }

  async checkExistingUser() {
    const [, op] = await this.io.checkExistingUser();
    console.log("op", op);
    if (op.isOk) {
      console.log("setting auth status");
      this.#authStatus.set({ status: "authenticated", email: "" });
    }
  }

  isGuest() {
    return this.#authStatus.value.status === "guest";
  }

  #pendingCreateUser = new Set<string>();
  async createUser({ email, password }: { email: string; password: string }) {
    if (this.#pendingCreateUser.has(email)) {
      return;
    }
    this.#pendingCreateUser.add(email);
    const results = await this.io.createUser({ email, password });
    this.#pendingCreateUser.delete(email);
    return results;
  }

  async login({ email, password }: { email: string; password: string }) {
    const results = await this.io.login({ email, password });
    if (results.status === 200) {
      this.#authStatus.set({ status: "authenticated", email });
    }
    return results;
  }
}
