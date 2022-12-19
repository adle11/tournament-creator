import React, { ReactElement, useState } from 'react';
import { Container, Box, Tabs, Tab } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import TournamentsPanel from './tournaments/TournamentsPanel';
import CreateTournamentPanel from './tournaments/CreateTournamentModal';
import TabPanel from './TabPanel';
import PlayersPanel from './players/PlayersPanel';
import TeamsPanel from './teams/TeamsPanel';
import EventsFeedPanel from './events-feed/EventsHistoryPanel';

const TabPanelContent = {
  PlayersTab: 0,
  TeamsTab: 1,
  TorunamentsTab: 2,
  EventsFeedTab: 3
} as const;

const MainView = (): ReactElement => {
  const [activeTab, setActiveTab] = useState<number>(TabPanelContent.PlayersTab);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const a11yProps = (index: number) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`
    };
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Container maxWidth="lg">
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={activeTab} onChange={handleTabChange} aria-label="basic tabs example">
            <Tab label="Players" {...a11yProps(0)} />
            <Tab label="Teams" {...a11yProps(1)} />
            <Tab label="Tournaments" {...a11yProps(2)} />
            <Tab label="Events Feed" {...a11yProps(3)} disabled />
          </Tabs>
        </Box>
        <TabPanel index={TabPanelContent.PlayersTab} value={activeTab}>
          <PlayersPanel />
        </TabPanel>
        <TabPanel index={TabPanelContent.TeamsTab} value={activeTab}>
          <TeamsPanel />
        </TabPanel>
        <TabPanel index={TabPanelContent.TorunamentsTab} value={activeTab}>
          <TournamentsPanel />
        </TabPanel>
        <TabPanel index={TabPanelContent.EventsFeedTab} value={activeTab}>
          <EventsFeedPanel />
        </TabPanel>
      </Container>
    </LocalizationProvider>
  );
};

export default MainView;
