import { FC, useMemo } from "react";
import { Bordered } from "../../layout";
import { countStats } from "./Stats.helper";
import { Grid, Typography } from "@material-ui/core";

interface StatsProps {
  stats: number[];
}

const Stats: FC<StatsProps> = ({ stats }) => {
  const [max, last, avg, last10avg] = useMemo(() => countStats(stats), [stats]);
  return (
    <Bordered color='#347FE6'>
      <Grid container spacing={2}>
        <StatElement title='Max (wps)' value={max} />
        <StatElement title='Last' value={last} />
        <StatElement title='Average' value={avg} />
        <StatElement title='Avg last 10' value={last10avg} />
      </Grid>
    </Bordered>
  );
};

export default Stats;

interface StatElementProps {
  title: string;
  value: string;
}

export const StatElement: FC<StatElementProps> = ({ title, value }) => (
  <Grid item md={6} xs={3}>
    <Typography variant='subtitle2' align='center'>
      {title}
    </Typography>
    <Typography variant='h6' align='center'>
      {value}
    </Typography>
  </Grid>
);
