import { useControllers } from "~/hooks";
import { useDerivedValue, useReadValue } from "@zilfi/react";

export const useAuthStatus = () => {
  const ctrls = useControllers();

  return useDerivedValue(ctrls.auth.getAuthStatus(), (auth) => {
    return auth.status;
  });
};

export const useAuthInitialized = () => {
  const ctrls = useControllers();

  return useReadValue(ctrls.auth.getInitialized());
};
