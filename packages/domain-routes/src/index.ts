import { RoutesController } from "./RoutesController";
import { RoutesService } from "./RoutesService";

export const createRoutesController = (
  initialRoute?: string,
  pushstate?: (path: string) => void,
) => {
  const srvc = new RoutesService(initialRoute, pushstate);

  return new RoutesController(srvc);
};
