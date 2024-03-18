import { Auth } from "domain-auth";
import { AuthIO } from "domain-auth/src/io";
import { AuthService } from "domain-auth/src/service";
import { Benchmark } from "domain-benchmark/src/benchmark";

export const createApp = () => {
  const authIO = new AuthIO();
  const authService = new AuthService(authIO);
  const auth = new Auth(authService);

  const benchmark = new Benchmark();

  const controllers = {
    auth,
    benchmark,
  };

  return controllers;
};
