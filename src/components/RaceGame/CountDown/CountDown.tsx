import { FC } from "react";
import { Typography } from "@material-ui/core";
import * as S from "./CountDown.style";

interface CountDownProps {
  time: string | number | null;
}

const CountDown: FC<CountDownProps> = ({ time }) => {
  return (
    <S.CounterWrapper>
      <Typography variant='h4' color='primary'>
        Game Starts in {Math.abs(Number(time))}
      </Typography>
    </S.CounterWrapper>
  );
};

export default CountDown;
