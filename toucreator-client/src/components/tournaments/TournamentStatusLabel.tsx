import { ReactElement } from 'react';
import { Chip } from '@mui/material';
import { TournamentStatus } from '../../gql-std/graphql';

interface TournamentStatusLabelProps {
  tournamentStatus: TournamentStatus | null | undefined;
}

const TournamentStatusLabel = ({ tournamentStatus }: TournamentStatusLabelProps): ReactElement => {
  if (tournamentStatus === TournamentStatus.NotStarted) {
    return <Chip label="Not Started" color="primary" />;
  }
  if (tournamentStatus === TournamentStatus.InProgress) {
    return <Chip label="In Progress" color="success" />;
  }
  if (tournamentStatus === TournamentStatus.Finished) {
    return <Chip label="Finished" color="info" />;
  }
  return <></>;
};

export default TournamentStatusLabel;
