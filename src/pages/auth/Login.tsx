import { LoginForm } from "src/features/auth";

import styles from "./index.module.css";

export default function Login() {
  return (
    <div className={styles.login}>
      <LoginForm />
    </div>
  );
}
