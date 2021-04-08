import { COLORS } from "../../../../layout";

interface RaceWordProps {
  currentWordToType: string;
  userWord: string;
  isCurrentWord: boolean;
  setError: (isErr: boolean) => void;
}

const RaceWords: React.FC<RaceWordProps> = ({
  currentWordToType,
  userWord,
  isCurrentWord,
  setError,
}) => (
  <>
    {[...currentWordToType].map((letter, i) => {
      if (isCurrentWord) {
        const isError =
          userWord !== currentWordToType.slice(0, userWord.length);
        setError(isError);
      }
      const isLetterTyppedAlready = userWord.length > i;
      const isCorrectLetter = userWord[i] === letter;

      const color = isCurrentWord
        ? isLetterTyppedAlready
          ? isCorrectLetter
            ? COLORS.correct
            : COLORS.error
          : COLORS.primaryText
        : COLORS.inherit;

      return (
        <span key={i} style={{ color }}>
          {letter}
        </span>
      );
    })}
  </>
);

export default RaceWords;
