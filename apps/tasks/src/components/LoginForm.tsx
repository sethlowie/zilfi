import { createForm } from "@zilfi/core";
import { Button, TextField } from "@zilfi/ui";
import { useControllers } from "~/hooks";

export const LoginForm = () => {
  const ctrls = useControllers();

  const { email, password } = createForm({
    email: "",
    password: "",
  });

  const signIn = () => {
    ctrls.auth.login({
      email: email.atom.value,
      password: password.atom.value,
    });
  };

  return (
    <div className="flex flex-col space-y-4">
      <TextField label="Email" type="email" value={email} />
      <TextField label="Password" type="password" value={password} />
      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
};
