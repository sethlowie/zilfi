import { Auth } from "domain-auth";
import { AuthIO } from "domain-auth/src/io";
import { AuthService } from "domain-auth/src/service";
import { Benchmark } from "domain-benchmark/src/benchmark";
import { createRoutesController } from "domain-routes";

export const createApp = ({
  initialRoute,
  pushstate,
}: {
  initialRoute?: string;
  pushstate?: (path: string) => void;
} = {}) => {
  const authIO = new AuthIO();
  const authService = new AuthService(authIO);
  const auth = new Auth(authService);

  const benchmark = new Benchmark();

  const routes = createRoutesController(initialRoute, pushstate);

  const controllers = {
    auth,
    benchmark,
    routes,
  };

  return controllers;
};
