import { FC } from "react";
import { Player as PlayerType } from "../../../../../helper/player";
import Player from "./Player/Player";

interface PlayersProps {
  players: PlayerType[];
  socket: string;
  progress: number;
  wps: number;
}

const Players: FC<PlayersProps> = ({ players, socket, progress, wps }) => {
  return (
    <>
      {players.map(player => (
        <Player
          key={player.id}
          player={player}
          socket={socket}
          progress={progress}
          wps={wps}
        />
      ))}
    </>
  );
};

export default Players;
