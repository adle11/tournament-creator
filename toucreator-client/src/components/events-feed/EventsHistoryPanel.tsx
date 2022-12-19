import { ReactElement } from 'react';
import { Box, Fab, Stack, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const EventsFeedPanel = (): ReactElement => {
  return (
    <Box sx={{ p: 3 }}>
      <Stack spacing={2}>
        <Typography variant="h2">Events Feed</Typography>
      </Stack>
    </Box>
  );
};

export default EventsFeedPanel;
