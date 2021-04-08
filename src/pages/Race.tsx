import { useState } from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { Stats, RaceGame } from "../components";

const Race = () => {
  const initialArr = (localStorage.getItem("stats") || "")
    .split(",")
    .filter(Number)
    .map(Number);
  const [statsWPS, setStatsWPS] = useState<number[]>(initialArr);

  const addToStats = (wps: number): void => {
    setStatsWPS(prev => {
      const newStats = [...prev, wps];
      localStorage.setItem("stats", newStats.toString());

      return newStats;
    });
  };

  console.log(statsWPS);

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={8}>
          <RaceGame addToStats={addToStats} />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          {/* <p>
            Launguage:{" "}
            <a href='##' title='Change language'>
              English
            </a>
          </p> */}
          <Stats stats={statsWPS} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Race;
