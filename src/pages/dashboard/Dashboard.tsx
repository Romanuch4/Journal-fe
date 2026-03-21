import { Accounts } from "src/features/accounts";
import { Header } from "src/features/header";

import styles from "./index.module.css";

export function Dashboard() {
  return (
    <div>
      <Header />

      <div className={styles.content}>
        <Accounts />
      </div>
    </div>
  );
}
