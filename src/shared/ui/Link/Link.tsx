import styles from "./index.module.css";

type Props = {
  to: string;
  children: React.ReactNode;
};

export function Link({ to, children }: Props) {
  return (
    <a className={styles.link} href={to}>
      {children}
    </a>
  );
}
