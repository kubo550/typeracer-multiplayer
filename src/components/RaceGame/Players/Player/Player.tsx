import { useMemo } from "react";
import { FC } from "react";
import { Player as PlayerType } from "../../../../../../helper/player";
import car from "../../../../assets/car.svg";
import speedMeter from "../../../../assets/speed.svg";

import { map } from "./Player.helper";
import * as S from "./Player.style";

interface PlayerProps {
  player: PlayerType;
  socket: string;
  progress: number;
  wps: number;
}

const Player: FC<PlayerProps> = ({ player, socket, progress, wps }) => {
  const myMargin = useMemo(() => map(progress, 0, 100, 0, 89) + "%", [
    progress,
  ]);
  const rivalMargin = useMemo(() => map(player.progress, 0, 100, 0, 89) + "%", [
    player.progress,
  ]);

  const ryvalNick = player?.name?.substr(0, 6);
  const label = socket === player.id ? "You" : ryvalNick;

  wps = socket === player.id ? wps : player.wps;

  return (
    <div>
      <span
        style={{
          display: "flex",
          alignItems: "center",
          marginLeft: socket === player.id ? myMargin : rivalMargin,
        }}
      >
        {label}
        <img src={car} alt={label} title={player.name} width='60' />
      </span>
      <S.Road>
        <div>
          <img src={speedMeter} alt='Speed meter' width='25' />
          <span> {wps.toFixed(2)} </span>
        </div>
      </S.Road>
    </div>
  );
};

export default Player;
