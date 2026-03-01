import { SignUpForm } from "src/features/auth";
import styles from "./index.module.css";

export default function SignUp() {
  return (
    <div className={styles.login}>
      <SignUpForm />
    </div>
  );
}
