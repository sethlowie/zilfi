import { Auth } from "domain-auth";
import { AuthIO } from "domain-auth/src/io";
import { AuthService } from "domain-auth/src/service";

export const createApp = () => {
  const authIO = new AuthIO();
  const authService = new AuthService(authIO);
  const auth = new Auth(authService);

  const controllers = {
    auth,
  };

  return controllers;
};
