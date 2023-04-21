import { Inter } from "next/font/google";
import styles from "./page.module.css";
import {Button , TypoGraphy} from "@/components"
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <TypoGraphy />
      <Button />
    </main>
  );
}
