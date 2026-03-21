import { LoginForm } from "src/features/auth";

import styles from "./index.module.css";

export function Login() {
  return (
    <div className={styles.login}>
      <LoginForm />
    </div>
  );
}
