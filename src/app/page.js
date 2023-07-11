"use client";
import styles from "./page.module.css";
import TopCards from "../../components/topCards";
import TopSoccerGames from "../../components/topSoccerGames";

export default function Home() {
  return (
    <main className={styles.main}>
      <TopCards />
      <TopSoccerGames />
    </main>
  );
}
