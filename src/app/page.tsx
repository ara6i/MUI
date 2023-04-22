import styles from "./page.module.css";
import { Button, TypoGraphy } from "@/components";

export default function Home() {
  return (
    <main className={styles.main}>
      <TypoGraphy />
      <Button />
    </main>
  );
}
