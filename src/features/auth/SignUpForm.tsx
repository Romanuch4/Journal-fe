import type { SubmitEventHandler } from "react";

import { useRouter } from "@tanstack/react-router";

import { authClient } from "src/shared/api";
import { useAppForm } from "src/shared/lib/form";

import { AuthContainer } from "./common/AuthContainer";
import styles from "./common/index.module.css";
import { signUpSchema, type SignUpFormValues } from "./common/validationSchemas";

const defaultValues: SignUpFormValues = {
  name: "",
  email: "",
  password: "",
};

export function SignUpForm() {
  const router = useRouter();

  const form = useAppForm({
    defaultValues,
    validators: {
      onChange: signUpSchema,
    },
    onSubmit: ({ value }) => {
      const { email, password, name } = value;
      void authClient.signUp.email(
        {
          name,
          email,
          password,
        },
        {
          onSuccess: () => {
            router.navigate({ to: "/dashboard" }).catch(() => {});
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
    <AuthContainer title="Create an account" buttonLabel="Sign Up" handleSubmit={handleSubmit}>
      <div className={styles.field}>
        <form.AppField name="name">
          {(field) => <field.TextField label="Name" placeholder="Your no pasaran nickname" />}
        </form.AppField>
      </div>

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
