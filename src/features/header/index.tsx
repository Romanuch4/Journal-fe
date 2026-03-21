import { useRef, useState } from "react";

import { useRouter } from "@tanstack/react-router";
import { Button } from "primereact/button";
import { Menu } from "primereact/menu";
import { Sidebar } from "primereact/sidebar";
import { Toast } from "primereact/toast";

import Logo from "src/assets/logo.svg?react";
import { authClient } from "src/shared/api";

import styles from "./index.module.css";

export function Header() {
  const [visible, setVisible] = useState(false);
  const router = useRouter();

  const menuRight = useRef<Menu>(null);
  const toast = useRef(null);
  const items = [
    {
      items: [
        {
          label: "Log out",
          icon: "pi pi-user-minus",
          command: () => {
            authClient
              .signOut()
              .then(() => router.navigate({ to: "/login" }))
              .catch((err) => alert(err.message));
          },
        },
      ],
    },
  ];

  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <Logo />
        <h1 className={styles.title}>NPJ</h1>
      </div>
      <div className={styles.right}>
        <Toast ref={toast}></Toast>
        <Menu model={items} popup ref={menuRight} id="popup_menu_right" popupAlignment="right" />
        <Button
          onClick={(event) => menuRight.current?.toggle(event)}
          icon="pi pi-user"
          rounded
          text
          severity="secondary"
          aria-label="User"
          aria-controls="popup_menu_right"
          aria-haspopup
        />
        <Button
          onClick={() => setVisible(true)}
          icon="pi pi-align-justify"
          rounded
          text
          severity="secondary"
          aria-label="Menu"
        />
        <Sidebar visible={visible} onHide={() => setVisible(false)}>
          <h2>Цитата дня:</h2>
          <p>Чувствую запах дєнєг...</p>
        </Sidebar>
      </div>
    </div>
  );
}
