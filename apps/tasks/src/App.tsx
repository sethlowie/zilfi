import {
  useAuthInitialized,
  useAuthStatus,
  useControllers,
  useCurrentRoute,
} from "~/hooks";
import { LoginForm } from "./components";
import { Benchmark } from "./Benchmark";
import { useEffect } from "react";

function Route() {
  const currentRoute = useCurrentRoute();

  switch (currentRoute.page) {
    case "Home":
      return (
        <div className="flex flex-col text-blue-300">
          <header className="font-bod">
            <p> Home</p>
          </header>
        </div>
      );
    case "Login":
      return (
        <div className="flex flex-col">
          <header className="font-bold">
            <LoginForm />
          </header>
        </div>
      );
    case "Benchmark":
      return <Benchmark />;
  }
}

function App() {
  const authStatus = useAuthStatus();
  const authInitialized = useAuthInitialized();
  const ctrls = useControllers();

  useEffect(() => {
    if (authInitialized && authStatus === "guest") {
      ctrls.routes.gotoRoute("Login");
    }
  }, [authStatus]);

  return (
    <div className="flex flex-col">
      <header className="font-bold">
        <p>Auth Status: {authStatus}</p>
      </header>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/benchmark">Benchmark</a>
          </li>
        </ul>
      </nav>
      <Route />
    </div>
  );
}

export default App;
