import React from 'react';
import { Card, CardHeader, Avatar, IconButton, CardContent, List, ListItem, ListItemAvatar, ListItemText, Menu, MenuItem } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Player } from '../../gql-hooks/types.generated';

interface TeamCardProps {
  name: string;
  players: Player[];
}

const TeamCard = ({ name, players }: TeamCardProps): React.ReactElement => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const getPlayerFullname = (player: Player): string => {
    return `${player.lastName}, ${player.firstName}`;
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <IconButton aria-label="settings" onClick={handleClick}>
            <MoreVertIcon />
          </IconButton>
        }
        title={name}
        // subheader="September 14, 2016"
      />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button'
        }}
      >
        <MenuItem onClick={handleMenuClose}>Edit</MenuItem>
        <MenuItem onClick={handleMenuClose}>Delete</MenuItem>
      </Menu>
      <CardContent>
        {/* <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if
          you like.
        </Typography> */}
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          {players.map((player) => (
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <AccountCircleIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={getPlayerFullname(player)} secondary={`Age: ${player.age}`} />
            </ListItem>
          ))}
        </List>
      </CardContent>
      {/* <CardActions disableSpacing>
        <Button size="small" variant="outlined">
          Edit
        </Button>
        <Button size="small" variant="contained" color="error">
          Delete
        </Button>
      </CardActions> */}
    </Card>
  );
};

export default TeamCard;
