import { ReactElement, useState } from 'react';
import { Box, Typography, Stack, Backdrop, CircularProgress, SelectChangeEvent, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useGetAllPlayersQuery } from '../../gql-hooks/queries.generated';
import PlayersTable from './PlayersTable';
import { defaultPlayersFilter, PlayersFilter } from '../../model/filters';
import CreatePlayerModal from './CreatePlayerModal';

const PlayersPanel = (): ReactElement => {
  const [playersFilter, setPlayersFilter] = useState<PlayersFilter>(defaultPlayersFilter);
  const [createModalOpen, setCreateModalOpen] = useState<boolean>(false);

  const { data: playersData, loading } = useGetAllPlayersQuery();

  const handleAgeRangeChange = (event: Event, newValue: number | number[], activeThumb: number) => {
    if (!Array.isArray(newValue)) {
      return;
    }
    setPlayersFilter((prevState) => ({
      ...prevState,
      ageRange: newValue as number[]
    }));
  };

  const handleNationalityChange = (event: SelectChangeEvent): void => {
    const {
      target: { value }
    } = event;
    setPlayersFilter((prevState) => ({
      ...prevState,
      nationality: value
    }));
  };

  const handleOnCreateModalClose = (): void => {
    setCreateModalOpen(false);
  };

  return (
    <Box sx={{ p: 3 }}>
      {loading && (
        <Backdrop sx={{ color: '#fff' }} open={true}>
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
      <Stack spacing={2}>
        <Typography variant="h2">
          Players
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
        {/* <Stack direction="row" spacing={2}>
          <Slider
            sx={{ width: 200 }}
            getAriaLabel={() => 'Age range'}
            value={playersFilter.ageRange ?? []}
            onChange={handleAgeRangeChange}
            valueLabelDisplay="on"
            getAriaValueText={(value: number) => `${value} years`}
            step={2}
            marks={[
              { value: 0, label: '0yr' },
              { value: 100, label: '100yr' }
            ]}
            disableSwap
          />
          <FormControl>
            <InputLabel id="nationality-select-label">Nationality</InputLabel>
            <Select
              labelId="nationality-select-label"
              id="nationality-select"
              label="Nationality"
              value={playersFilter.nationality ?? ''}
              onChange={handleNationalityChange}
            >
              {nationalitiesData?.countryCodes?.map((country, index) => (
                <MenuItem key={index} value={country.alpha_2_code}>
                  {country.nationality}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button>Filter</Button>
        </Stack> */}
        <PlayersTable players={playersData?.players ?? []} />
      </Stack>
      <CreatePlayerModal open={createModalOpen} handleOnClose={handleOnCreateModalClose} />
    </Box>
  );
};

export default PlayersPanel;
