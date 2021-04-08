import { useEffect, useState, useRef, FC } from "react";
import { useLocation } from "react-router-dom";
import querystring from "query-string";
import { io, Socket } from "socket.io-client";
import { Button, Container, Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { DefaultEventsMap } from "socket.io-client/build/typed-events";
import { Room } from "../../../../helper/room";
import { Player } from "../../../../helper/player";
import {
  countWordsPerSec,
  displayTime,
  getPlayableArray,
} from "./RaceGame.helper";
import { Bordered, COLORS } from "../../layout";
import * as S from "./RaceGame.style";
import RaceText from "./RaceText/RaceText";
import Players from "./Players/Players";
import CountDown from "./CountDown/CountDown";
import RaceEndStats from "./RaceEndStats/RaceEndStats";
import RaceSubNav from "./RaceSubNav/RaceSubNav";
import { SongApiObject } from "../../../../routes/texts";

enum GameState {
  BeforeStart = "BeforeStart",
  Playing = "Playing",
  Ended = "Ended",
  Watching = "Watching",
}
interface GameStateProps {
  addToStats: (wps: number) => void;
}

const URL = "http://localhost:5000/";
let socket: Socket<DefaultEventsMap, DefaultEventsMap>;
let timeInterval: NodeJS.Timeout;

const RaceGame: FC<GameStateProps> = ({ addToStats }) => {
  const mainInput = useRef<HTMLInputElement>(null);
  const [players, setPlayers] = useState<Player[]>([]);
  const [time, setTime] = useState<number | null>(null);
  const [gameState, setGameState] = useState<GameState>(GameState.BeforeStart);
  const [allWords, setAllWords] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentUserWord, setCurrentUserWord] = useState("");
  const [wps, setWps] = useState(0); // Words per Second
  const [textDetails, setTextDetails] = useState<SongApiObject>(
    {} as SongApiObject
  );

  const { name, room } = querystring.parse(useLocation().search);

  const practiseMode = !room;
  const progress = (currentIndex / allWords.length) * 100; // in %
  const currentCorrectWord = allWords[currentIndex];

  const startCount = (): void => {
    timeInterval = setInterval(() => {
      setTime(prev => Number(prev) + 1);
    }, 1000);
  };

  const stopCount = (): void => clearInterval(timeInterval);

  const gameOver = (): void => {
    stopCount();
    addToStats(wps);
    mainInput.current!.disabled = true;
    mainInput.current!.placeholder = "";
    mainInput.current!.style.backgroundColor = "grey"; // TODO
  };

  const newGame = (): void => {
    setTime(-6);
    setCurrentIndex(0);
    setWps(0);
    setGameState(GameState.BeforeStart);
    startCount();
  };

  const checkWord = (word: string): void => {
    const nextIdx = currentIndex + 1;
    if (word === currentCorrectWord) {
      const nextWord = allWords[nextIdx];
      setCurrentIndex(prev => ++prev);
      setCurrentUserWord("");

      if (nextWord) {
        mainInput.current!.placeholder = allWords[nextIdx];
      } else {
        gameOver();
      }
    }
  };

  const handleKeyPress = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCurrentUserWord(e.target.value);
    checkWord(e.target.value);
  };

  const handleChangeError = (isErr: boolean): void => {
    mainInput.current!.style.backgroundColor = isErr
      ? COLORS.error
      : COLORS.white;
  };

  useEffect(() => {
    socket = io(URL);

    socket.emit("joinRace", { name, room }, (data: Room) => {
      if (data.time >= 0) {
        setGameState(GameState.Watching);
      }
      setTime(data.time);
      setPlayers(data.players);

      startCount();
    });

    socket.on("otherJoin", player => {
      setPlayers(prev => [...prev, player]);
    });

    return () => {
      socket.disconnect();
      socket.off();
      stopCount();
    };
  }, []);

  useEffect(() => {
    if (time === 0) {
      mainInput.current!.disabled = false;
      mainInput.current!.focus();
      setGameState(GameState.Playing);
    }
    if (Number(time) >= 0) {
      const wps = countWordsPerSec(time, [...allWords].slice(0, currentIndex));
      setWps(wps);
    }
  }, [time]);

  useEffect(() => {
    if (progress === 100) {
      setGameState(GameState.Ended);
      stopCount();
    }

    const interval = setInterval(() => {
      socket.emit(
        "roomInfo",
        { roomId: room, id: socket.id, progress, wps },
        (data: Room) => {
          if (allWords.length === 0) {
            setAllWords(getPlayableArray(data.songDetails.text));
          }
          if (!textDetails.author) {
            setTextDetails(data.songDetails);
          }
          setPlayers(data.players);
        }
      );
    }, 500);

    return () => clearInterval(interval);
  }, [progress]);

  return (
    <div className=''>
      <Typography variant='h5' gutterBottom>
        {practiseMode ? "Practise Mode" : "Online Race"}
      </Typography>
      <Typography variant='h5'>Time {displayTime(time)}</Typography>
      <Players
        players={players}
        socket={socket?.id}
        progress={progress}
        wps={wps}
      />

      <Bordered bold justify color={COLORS.purple}>
        {allWords.length ? (
          <RaceText
            allWords={allWords}
            index={currentIndex}
            currentUserWord={currentUserWord}
            handleChangeError={handleChangeError}
          />
        ) : (
          "Loading..."
        )}
        <S.Input
          type='text'
          placeholder='Type the above text here when the race begins'
          disabled
          ref={mainInput}
          value={currentUserWord}
          onChange={handleKeyPress}
        />
      </Bordered>

      {gameState === GameState.BeforeStart && <CountDown time={time} />}

      {/* <RaceSubNav
        ended={gameState === GameState.Ended}
        offline={practiseMode}
      /> */}

      {gameState === GameState.Watching && (
        <div>
          <h4>You can't join this race! </h4>
          <Link to='/'>
            <button>Back to home</button>
          </Link>
        </div>
      )}

      {gameState === GameState.Ended && (
        <RaceEndStats
          newGame={newGame}
          wps={wps}
          time={time}
          details={textDetails}
        />
      )}

      {/* TODO create component */}
      {practiseMode && (
        <div>
          <h4>You are in Practise Mode </h4>
          <p>Your stats will not be updated</p>
          <Link to='/'>
            <button>Try Online Race</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default RaceGame;
