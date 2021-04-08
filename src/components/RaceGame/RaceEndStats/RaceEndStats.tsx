import { Button, Grid, Typography } from "@material-ui/core";
import { FC } from "react";
import { SongApiObject } from "../../../../../routes/texts";
import { Bordered, COLORS } from "../../../layout";

interface RaceEndStatsProps {
  newGame: () => void;
  wps: number;
  time: number | null;
  details: SongApiObject;
}

const RaceEndStats: FC<RaceEndStatsProps> = ({
  newGame,
  wps,
  time,
  details,
}) => {
  return (
    <Bordered color={COLORS.orange}>
      Speed: {wps}
      <br />
      Time: {time}
      <br />
      Autor: {details.author}
      <br />
      {details.title}
    </Bordered>
  );
};

export default RaceEndStats;
