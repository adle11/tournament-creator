import React, { ReactElement, useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogTitle,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import { PLAYERS_MOCK } from '../../model/mocks';
import { graphql } from '../../gql-std';
import { useMutation } from '@apollo/client';

const createTeamGql = graphql(`
  mutation CreateTeam($name: String!, $players: [String!]!) {
    createTeam(name: $name, players: $players)
  }
`);

interface CreateTeamModalProps {
  open: boolean;
  handleOnClose: () => void;
}

const CreateTeamModal = ({ open, handleOnClose }: CreateTeamModalProps): ReactElement => {
  const [teamName, setTeamName] = useState<string>('');
  const [selectedPlayers, setSelectedPlayers] = useState<string[]>([]);

  const [createTeam, { data, loading, error }] = useMutation(createTeamGql);

  const handleTeamNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTeamName(event.target.value);
  };

  const handlePlayersSelectChange = (event: SelectChangeEvent<typeof selectedPlayers>): void => {
    const {
      target: { value }
    } = event;
    setSelectedPlayers(typeof value === 'string' ? value.split(',') : value);
  };

  const handleCreateNewTeam = (): void => {
    createTeam({
      variables: {
        name: teamName,
        players: selectedPlayers
      }
    }).then(handleOnClose);
  };

  return (
    <Dialog onClose={handleOnClose} open={open}>
      <DialogTitle>Create new player</DialogTitle>
      <Box sx={{ p: 3 }}>
        <Typography variant="h2">New new team</Typography>
        <Stack spacing={2}>
          <TextField required id="outlined-required" label="Team Name" value={teamName} onChange={handleTeamNameChange} />
          <FormControl>
            <InputLabel id="players-select-label">Players</InputLabel>
            <Select
              labelId="players-select-label"
              id="players-select"
              multiple
              value={selectedPlayers}
              onChange={handlePlayersSelectChange}
              input={<OutlinedInput label="Teams" />}
              renderValue={(selected: any) =>
                PLAYERS_MOCK.filter((player) => selected.indexOf(player.id) > -1)
                  .map((player) => player.name)
                  .join(', ')
              }
            >
              {PLAYERS_MOCK.map((player, index) => (
                <MenuItem key={index} value={player.id}>
                  <Checkbox checked={selectedPlayers.indexOf(player.id) > -1} />
                  <ListItemText primary={player.name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button variant="contained" onClick={handleCreateNewTeam}>
            Create New Team
          </Button>
          <Button variant="text" onClick={handleOnClose}>
            Cancel
          </Button>
        </Stack>
      </Box>
    </Dialog>
  );
};

export default CreateTeamModal;
