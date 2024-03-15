import { useAuthStatus } from "~/hooks";
import { LoginForm } from "./components";

function App() {
  const authStatus = useAuthStatus();

  return (
    <div className="flex">
      <header className="font-bold">
        <p>Auth Status: {authStatus}</p>
        <LoginForm />
      </header>
    </div>
  );
}

export default App;
