import { Button } from "primereact/button";
import styles from "./index.module.css";
import Logo from "src/assets/logo.svg?react";
import type { SubmitEventHandler } from "react";

type Props = {
  title: string;
  buttonLabel: string;
  handleSubmit: SubmitEventHandler<HTMLFormElement>;
  children: React.ReactNode;
};

export function AuthContainer({ title, buttonLabel, handleSubmit, children }: Props) {
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.logo}>
        <Logo />
        <h2 className={styles.formTitle}>{title}</h2>
      </div>

      <div className={styles.fieldContainer}>{children}</div>

      <Button type="submit" label={buttonLabel} icon="pi pi-user" />
    </form>
  );
}
