import { createForm, createFormValue } from "@zilfi/core";
import { Button, TextField } from "@zilfi/ui";
import { z } from "zod";
import { useControllers } from "~/hooks";

const EmailSchema = z.string().email();
const PasswordSchema = z
  .string()
  .min(8)
  .max(100)
  .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  .regex(/[a-z]/, "Password must contain at least one lowercase letter")
  .regex(/[0-9]/, "Password must contain at least one number")
  .regex(
    /[^A-Za-z0-9]/,
    "Password must contain at least one special character",
  );

export const LoginForm = () => {
  const ctrls = useControllers();

  const { email, password } = createForm({
    email: createFormValue("", EmailSchema),
    password: createFormValue("", PasswordSchema),
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
