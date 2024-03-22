import { RoutesService } from "./RoutesService";
import { Route } from "./types";

export class RoutesController {
  constructor(private readonly routesService: RoutesService) { }

  getCurrentRoute() {
    return this.routesService.getCurrentRoute();
  }

  changeRoute(path: string) {
    this.routesService.changeRoute(path);
  }

  gotoRoute(path: Route["page"]) {
    this.routesService.gotoRoute(path);
  }
}
