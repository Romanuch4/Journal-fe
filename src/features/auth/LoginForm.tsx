import type { SubmitEventHandler } from "react";

import { useRouter } from "@tanstack/react-router";

import { authClient } from "src/shared/lib/auth";
import { useAppForm } from "src/shared/lib/form";

import { AuthContainer } from "./common/AuthContainer";
import styles from "./common/index.module.css";
import { loginSchema } from "./common/validationSchemas";

export function LoginForm() {
  const router = useRouter();
  const form = useAppForm({
    defaultValues: {
      email: "",
      password: "",
    },
    validators: {
      onChange: loginSchema,
    },
    onSubmit: ({ value }) => {
      const { email, password } = value;
      void authClient.signIn.email(
        {
          email,
          password,
        },
        {
          onSuccess: () => {
            void router.navigate({ to: "/dashboard" });
          },
          onError: (ctx) => {
            // display the error message
            alert(ctx.error.message);
          },
        },
      );
    },
  });

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault();
    evt.stopPropagation();
    form.handleSubmit().catch((err) => alert(err.message));
  };

  return (
    <AuthContainer title="Welcome Back" buttonLabel="Sign In" handleSubmit={handleSubmit}>
      <div className={styles.field}>
        <form.AppField name="email">
          {(field) => <field.TextField label="Email" placeholder="Email address" />}
        </form.AppField>
      </div>

      <div className={styles.field}>
        <form.AppField name="password">
          {(field) => <field.TextField label="Password" placeholder="Password" autoComplete="on" />}
        </form.AppField>
      </div>
    </AuthContainer>
  );
}
