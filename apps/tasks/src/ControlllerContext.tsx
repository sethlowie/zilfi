import { createContext, useEffect } from "react";
import { createApp } from "@zilfi/app";

export const ControllerContext = createContext<ReturnType<
  typeof createApp
> | null>(null);

const clickListen =
  (handleRouteChange: (path: string) => void) => (event: MouseEvent) => {
    // Find the closest <a> element from the click event target
    let target = event.target as HTMLElement;

    // Proceed if a link was clicked
    if (target) {
      const href = target.getAttribute("href");

      // Check if the URL is internal
      if (href && isInternalUrl(href)) {
        event.preventDefault(); // Prevent the default link behavior

        // Here, use your routing logic to change the view
        // For example, using history.pushState and then rendering the new route
        history.pushState({}, "", href);

        // Call your function to handle the route change
        handleRouteChange(href); // Implement this function based on your routing logic
      }
    }
  };

function isInternalUrl(url: string) {
  // Assume all relative URLs are internal
  return url.startsWith("/") || url.startsWith("#");
}

export const ControllerProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const controllers = createApp({
    initialRoute: window.location.pathname,
    pushstate: (path: string) => {
      history.pushState({}, "", path);
    },
  });

  const handleRouteChange = (path: string) => {
    controllers.routes.changeRoute(path);
  };

  const handlePopState = () => {
    console.log("popstate");
    console.log("window.location.pathname", window.location.pathname);
    controllers.routes.changeRoute(window.location.pathname);
  };

  useEffect(() => {
    window.addEventListener("popstate", handlePopState);
    document.addEventListener("click", clickListen(handleRouteChange));
    return () => {
      window.removeEventListener("popstate", handlePopState);
      document.removeEventListener("click", clickListen(handleRouteChange));
    };
  }, []);
  return (
    <ControllerContext.Provider value={controllers}>
      {children}
    </ControllerContext.Provider>
  );
};
