import { useControllers } from "~/hooks";
import { useDerivedValue } from "@zilfi/react";

export const useAuthStatus = () => {
  const ctrls = useControllers();

  return useDerivedValue(ctrls.auth.getAuthStatus(), (auth) => {
    return auth.status;
  });
};
