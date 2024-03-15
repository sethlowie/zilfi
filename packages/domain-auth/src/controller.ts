import { AuthService } from "./service";

export class Auth {
  constructor(private readonly authService: AuthService) { }

  getAuthStatus() {
    return this.authService.getAuthStatus();
  }

  isGuest() {
    return this.authService.isGuest();
  }

  async createUser({ email, password }: { email: string; password: string }) {
    return this.authService.createUser({ email, password });
  }

  async login({ email, password }: { email: string; password: string }) {
    return this.authService.login({ email, password });
  }
}
