import React, { ReactElement, useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
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
import { DesktopDatePicker } from '@mui/x-date-pickers';
import { TEAMS_MOCK } from '../../model/mocks';

const CreateTournamentPanel = (): ReactElement => {
  const [tournamentName, setTournamentName] = useState<string>('');
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [selectedTeams, setSelectedTeams] = useState<string[]>([]);

  const handleTournamentNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTournamentName(event.target.value);
  };

  const handleStartDateChange = (value: Date | null, keyboardInputValue?: string | undefined): void => {
    setStartDate(value);
  };

  const handleEndDateChange = (value: Date | null, keyboardInputValue?: string | undefined): void => {
    setEndDate(value);
  };

  const handleTeamsSelectChange = (event: SelectChangeEvent<typeof selectedTeams>): void => {
    const {
      target: { value }
    } = event;
    setSelectedTeams(typeof value === 'string' ? value.split(',') : value);
  };

  const handleCreateNewTorunament = (): void => {
    console.log({
      tournamentName,
      tournamentStartDate: startDate,
      torunamentEndDate: endDate,
      selectedTeams
    });
  };

  return (
    <Box sx={{ p: 3 }} component="form" noValidate autoComplete="off">
      <Typography variant="h2">New tournament</Typography>
      <Stack spacing={2}>
        <TextField required id="outlined-required" label="Tournament Name" value={tournamentName} onChange={handleTournamentNameChange} />
        <DesktopDatePicker label="Start Date" value={startDate} onChange={handleStartDateChange} renderInput={(params) => <TextField {...params} />} />
        <DesktopDatePicker label="End Date" value={endDate} onChange={handleEndDateChange} renderInput={(params) => <TextField {...params} />} />
        <FormControl>
          <InputLabel id="teams-select-label">Teams</InputLabel>
          <Select
            labelId="teams-select-label"
            id="teams-select"
            multiple
            value={selectedTeams}
            onChange={handleTeamsSelectChange}
            input={<OutlinedInput label="Teams" />}
            renderValue={(selected: any) => selected.join(', ')}
            // MenuProps={MenuProps}
          >
            {TEAMS_MOCK.map((team) => (
              <MenuItem key={team.id} value={team.name}>
                <Checkbox checked={selectedTeams.indexOf(team.name) > -1} />
                <ListItemText primary={team.name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button onClick={handleCreateNewTorunament}>Create New Tournament</Button>
      </Stack>
    </Box>
  );
};

export default CreateTournamentPanel;
