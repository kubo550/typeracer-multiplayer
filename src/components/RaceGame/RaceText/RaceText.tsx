import styled from "styled-components";
import { COLORS } from "../../../layout";

import RaceWord from "./RaceWords/RaceWord";

interface RaceTextProps {
  allWords: string[];
  index: number;
  currentUserWord: string;
  handleChangeError: (isErr: boolean) => void;
}

interface StyledWordProps {
  underline?: boolean;
  alreadyCorrect?: boolean;
}

const StyledWord = styled.span<StyledWordProps>`
  color: ${({ alreadyCorrect }) =>
    alreadyCorrect ? COLORS.correct : COLORS.primaryText};
  border-bottom: ${({ underline }) =>
    underline ? `2px solid ${COLORS.primaryText}` : "none"};
`;

const RaceText: React.FC<RaceTextProps> = ({
  allWords,
  index,
  currentUserWord,
  handleChangeError,
}) => (
  <p>
    {allWords.map((word, idx) => {
      const isCurrentWord = idx === index;
      return (
        <StyledWord
          key={idx}
          alreadyCorrect={idx < index}
          underline={isCurrentWord}
        >
          <RaceWord
            currentWordToType={word}
            userWord={currentUserWord}
            isCurrentWord={isCurrentWord}
            setError={handleChangeError}
          />
        </StyledWord>
      );
    })}
  </p>
);

export default RaceText;
