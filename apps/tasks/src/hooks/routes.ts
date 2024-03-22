import { useReadValue } from "@zilfi/react";
import { useControllers } from "./controller";

export const useCurrentRoute = () => {
  const ctrls = useControllers();
  return useReadValue(ctrls.routes.getCurrentRoute());
};
