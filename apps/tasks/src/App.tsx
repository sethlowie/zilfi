import { useAuthStatus } from "~/hooks";
import { LoginForm } from "./components";
import { Benchmark } from "./Benchmark";

function App() {
  const authStatus = useAuthStatus();

  return (
    <div className="flex flex-col">
      <header className="font-bold">
        <p>Auth Status: {authStatus}</p>
        <LoginForm />
      </header>
      <Benchmark />
    </div>
  );
}

export default App;
