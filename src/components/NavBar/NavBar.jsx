import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import AppleIcon from '@mui/icons-material/Apple';

import { Nav, Title } from './NavBarStyles';

export default function ButtonAppBar() {
  return (
    <Box>
      <Nav>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="light"
          >
            <AppleIcon />
          </IconButton>
          <Title color="light">
              iTunes Music Search
          </Title>
        </Toolbar>
      </Nav>
    </Box>
  );
}
