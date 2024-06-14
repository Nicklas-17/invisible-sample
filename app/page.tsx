"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Rive from "@rive-app/react-canvas";
import Menu from "@/Components/Menu";

export default function Home() {
  return (
    <main className={styles.main}>
      <Menu />
      {/* <Rive
        src="https://cdn.rive.app/animations/vehicles.riv"
        stateMachines="bumpy"
      /> */}
    </main>
  );
}
