import { createContext } from "react";
import { createApp } from "@zilfi/app";

export const ControllerContext = createContext<ReturnType<
  typeof createApp
> | null>(null);

export const ControllerProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const controllers = createApp();
  return (
    <ControllerContext.Provider value={controllers}>
      {children}
    </ControllerContext.Provider>
  );
};
