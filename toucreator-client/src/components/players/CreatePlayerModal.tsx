import React, { ReactElement, useState } from 'react';
import { Box, Button, Dialog, DialogTitle, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Stack, TextField } from '@mui/material';
import { useGetNationalitiesQuery } from '../../gql-hooks/queries.generated';
import { useCreatePlayerMutation } from '../../gql-hooks/mutations.generated';

interface CreatePlayerModalProps {
  open: boolean;
  handleOnClose: () => void;
}

const CreatePlayerModal = ({ open, handleOnClose }: CreatePlayerModalProps): ReactElement => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [nationality, setNationality] = useState<string>('');
  const [age, setAge] = useState<number>(18);

  const { data: { countryCodes } = {} } = useGetNationalitiesQuery();

  const [createPlayer, { data, loading, error }] = useCreatePlayerMutation();

  const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setLastName(event.target.value);
  };

  const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setAge(+event.target.value);
  };

  const handlePlayerNationalityChange = (event: SelectChangeEvent<typeof nationality>): void => {
    const {
      target: { value }
    } = event;
    setNationality(value);
  };

  const handleCreateNewPlayer = (): void => {
    createPlayer({
      variables: {
        firstName,
        lastName,
        nationality,
        age
      }
    }).then(handleOnClose);
  };

  return (
    <Dialog onClose={handleOnClose} open={open}>
      <DialogTitle>Create new player</DialogTitle>
      <Box sx={{ p: 3 }}>
        <Stack spacing={2}>
          <TextField required id="outlined-required" label="First Name" value={firstName} onChange={handleFirstNameChange} />
          <TextField required id="outlined-required" label="Last Name" value={lastName} onChange={handleLastNameChange} />
          <TextField required id="outlined-required" label="Age" type="number" value={age} onChange={handleAgeChange} />
          <FormControl>
            <InputLabel id="nationality-select-label">Nationality</InputLabel>
            <Select labelId="nationality-select-label" id="nationality-select" label="Nationality" value={nationality} onChange={handlePlayerNationalityChange}>
              {countryCodes?.map(
                (country, index) =>
                  country.alpha_2_code && (
                    <MenuItem key={index} value={country.alpha_2_code}>
                      {country.nationality}
                    </MenuItem>
                  )
              )}
            </Select>
          </FormControl>
          <Button variant="contained" onClick={handleCreateNewPlayer}>
            Create New Player
          </Button>
          <Button variant="text" onClick={handleOnClose}>
            Cancel
          </Button>
        </Stack>
      </Box>
    </Dialog>
  );
};

export default CreatePlayerModal;
