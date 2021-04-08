import { Typography } from "@material-ui/core";
import { FC } from "react";
import { SongApiObject } from "../../../../../routes/texts";
import { Bordered, COLORS } from "../../../layout";
import { displayTime } from "../RaceGame.helper";

import * as S from "./RaceEndStats.style";

import keyboard from "../../../assets/keyboard.png";
import check from "../../../assets/check.png";
import timer from "../../../assets/timer.png";

interface RaceStatProps {
  newGame: () => void;
  wps: number;
  time: number | null;
  details: SongApiObject;
}

const RaceEndStats: FC<RaceStatProps> = ({ newGame, wps, time, details }) => {
  return (
    <Bordered color={COLORS.orange}>
      <S.Header>
        <Typography variant='body1'>
          You just typed a quote from the song:
        </Typography>
      </S.Header>

      <S.Wrapper>
        <S.ImgContainer>
          <img src={details.image} alt={details.title} />
        </S.ImgContainer>

        <S.Details>
          <S.Author>
            <Typography variant='h5'>
              <a href={details.link}> {details.title} </a>
            </Typography>
            <Typography variant='h6'>By {details.author} </Typography>
          </S.Author>

          <S.StatsTable>
            <div>
              <div>
                <img src={keyboard} alt='Keyboard icon' /> Speed:
              </div>
              <div> {wps.toFixed(2)} </div>
            </div>

            <div>
              <div>
                <img src={timer} alt='Timer icon' />
                Time:
              </div>
              <div> {displayTime(time)} </div>
            </div>

            <div>
              <div>
                <img src={check} alt='Accuracy icon' /> Accuracy:
              </div>
              <div> 97.43 % </div>
            </div>
          </S.StatsTable>
        </S.Details>
      </S.Wrapper>
    </Bordered>
  );
};

export default RaceEndStats;
