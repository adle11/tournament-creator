import React, { useState } from 'react';
import { Card, CardHeader, IconButton, CardContent, CardActions, Collapse, Button, IconButtonProps, styled } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ROUNDS_MOCK } from '../../model/mocks';
import { Bracket } from 'react-brackets';
import { Tournament, TournamentStatus } from '../../gql-std/graphql';
import { lightFormat, parseISO } from 'date-fns';
import TournamentStatusLabel from './TournamentStatusLabel';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest
  })
}));

interface TournamentCardProps {
  tournament: Partial<Tournament> | null;
}

const TournamentCard = ({ tournament }: TournamentCardProps): React.ReactElement => {
  const [currentRound, setCurrentRound] = useState<number>(0);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleNextRoundClick = (): void => {
    setCurrentRound((prev) => prev + 1);
  };

  const parseDate = (dateString: string | null | undefined) => {
    return dateString ? lightFormat(parseISO(dateString), 'yyyy-MM-dd') : '';
  };

  return tournament ? (
    <Card>
      <CardHeader
        title={tournament?.name}
        subheader={`from: ${parseDate(tournament?.startDate)} to: ${parseDate(tournament?.endDate)}`}
        action={<TournamentStatusLabel tournamentStatus={tournament?.status} />}
      />
      {tournament?.status === TournamentStatus.InProgress && (
        <CardActions>
          <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
            <ExpandMoreIcon />
          </ExpandMore>
          <Button size="small" variant="outlined" onClick={handleNextRoundClick}>
            Next round
          </Button>
          <Button size="small" variant="contained">
            Edit
          </Button>
          <Button size="small" variant="contained" color="error">
            Delete
          </Button>
        </CardActions>
      )}
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Bracket rounds={ROUNDS_MOCK.slice(0, currentRound + 1)} />
        </CardContent>
      </Collapse>
    </Card>
  ) : (
    <></>
  );
};

export default TournamentCard;
