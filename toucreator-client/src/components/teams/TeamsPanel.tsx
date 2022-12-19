import React, { useState } from 'react';
import { Box, Typography, Stack, Grid, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import TeamCard from './TeamCard';
import { graphql } from '../../gql-std';
import { useQuery } from '@apollo/client';
import CreateTeamModal from './CreateTeamModal';

const getAllTeamsGql = graphql(`
  query GetAllTeams {
    teams {
      id
      losses
      name
      players {
        nationality
        age
        firstName
        id
        lastName
      }
    }
  }
`);

const TeamsPanel = (): React.ReactElement => {
  const [createModalOpen, setCreateModalOpen] = useState<boolean>(false);

  const { data } = useQuery(getAllTeamsGql);

  const handleOnCreateModalClose = (): void => {
    setCreateModalOpen(false);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Stack spacing={2}>
        <Typography variant={'h2'}>
          Teams
          <Fab
            sx={{ position: 'relative', top: 0, right: -10 }}
            variant="extended"
            color="primary"
            aria-label="add"
            size="medium"
            onClick={() => setCreateModalOpen(true)}
          >
            <AddIcon /> Create
          </Fab>
        </Typography>
        <Grid container spacing={2}>
          {data?.teams?.map((team) => (
            <Grid item xs={4}>
              <TeamCard name={team.name ?? ''} players={team.players ?? []} />
            </Grid>
          ))}
        </Grid>
      </Stack>
      <CreateTeamModal open={createModalOpen} handleOnClose={handleOnCreateModalClose} />
    </Box>
  );
};

export default TeamsPanel;
