import { Atom, createAtom } from "@zilfi/core";
import { Route } from "./types";

export class RoutesService {
  #currentRoute: Atom<Route>;
  constructor(
    initialRoute?: string,
    private readonly pushstate?: (path: string) => void,
  ) {
    this.#currentRoute = createAtom(this.parseRoute(initialRoute || "/"));
  }

  getCurrentRoute() {
    return this.#currentRoute;
  }

  changeRoute(route: string) {
    const parsedRoute = this.parseRoute(route);
    if (parsedRoute.page !== this.#currentRoute.value.page) {
      this.#currentRoute.set(parsedRoute);
    }
  }

  gotoRoute(page: Route["page"]) {
    const path = this.routeToPath(page);
    this.changeRoute(path);
    if (this.pushstate) {
      this.pushstate(path);
    }
  }

  private routeToPath(route: Route["page"]) {
    if (route === "Home") {
      return "/";
    }
    if (route === "Benchmark") {
      return "/benchmark";
    }
    if (route === "Login") {
      return "/login";
    }
    return "/";
  }

  private parseRoute(route: string): Route {
    if (route === "/benchmark") {
      return {
        page: "Benchmark",
      };
    }
    if (route === "/login") {
      return {
        page: "Login",
      };
    }
    return {
      page: "Home",
    };
  }
}
