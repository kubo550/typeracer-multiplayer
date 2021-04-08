import { Button, Grid, Typography } from "@material-ui/core";
import { FC } from "react";
import { Link } from "react-router-dom";
import * as S from "./RaceSubNav.style";

interface RaceSubNavProps {
  ended: boolean;
  offline: boolean;
}

const RaceSubNav: FC<RaceSubNavProps> = ({ ended, offline }) => {
  return (
    <Grid container spacing={3}>
      <S.ButtonsContainer>
        {ended && <Typography>The race has ended.</Typography>}

        <Link to='/'>
          <Button variant='contained' color='secondary'>
            Back to Menu
          </Button>
        </Link>

        {ended && offline && (
          <Button variant='contained' color='primary' onClick={() => {}}>
            Try Again?
          </Button>
        )}
      </S.ButtonsContainer>
    </Grid>
  );
};

export default RaceSubNav;
