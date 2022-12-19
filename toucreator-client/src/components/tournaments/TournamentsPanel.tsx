import { ReactElement } from 'react';
import { Backdrop, Box, CircularProgress, Fab, Stack, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import TournamentCard from './TorunamentCard';
import { graphql } from '../../gql-std';
import { useQuery } from '@apollo/client';

const getAllTournaments = graphql(`
  query GetAllTournaments {
    tournaments {
      name
      startDate
      endDate
      id
      status
      players {
        id
        firstName
        lastName
        nationality
        age
      }
      currentRound
      rounds {
        id
        name
        games {
          id
          datetime
          teams {
            id
            name
          }
        }
      }
    }
  }
`);

const TournamentsPanel = (): ReactElement => {
  // const tournamentsMock: Tournament[] = [
  //   {
  //     name: 'December torunament',
  //     startDate: '2022-12-01',
  //     endDate: '2022-12-30',
  //     currentRound: null,
  //     rounds: []
  //   }
  // ];

  // const roundsMock: IRoundProps = ROUNDS_MOCK;

  const { data: tournamentsData, loading } = useQuery(getAllTournaments);

  return (
    <Box sx={{ p: 3 }}>
      {loading && (
        <Backdrop sx={{ color: '#fff' }} open={true}>
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
      <Stack spacing={2}>
        <Typography variant="h2">
          Tournaments
          <Fab sx={{ position: 'relative', top: 0, right: -10 }} variant="extended" color="primary" aria-label="add" size="medium">
            <AddIcon /> Create
          </Fab>
        </Typography>
        {tournamentsData?.tournaments?.map((tournament) => (
          <TournamentCard tournament={tournament} />
        ))}
      </Stack>
    </Box>
  );
};

export default TournamentsPanel;
