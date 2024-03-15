import { useContext } from "react";
import { ControllerContext } from "~/ControlllerContext";

export const useControllers = () => {
  const controllers = useContext(ControllerContext);
  if (!controllers) {
    throw new Error("useControllers must be used within a ControllerProvider");
  }
  return controllers;
};
