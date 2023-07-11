"use client";
import styles from "./page.module.css";
import TopCards from "../../components/topCards";
import TopSoccerGames from "../../components/topSoccerGames";
import SelectedContextProvider from "../../context/SelectedContext";
import { Container } from "@mui/material";

export default function Home() {
  return (
    <SelectedContextProvider>
      <main className={styles.main}>
        <Container maxWidth="xl">
          <TopCards />
          <TopSoccerGames />
        </Container>
      </main>
    </SelectedContextProvider>
  );
}
