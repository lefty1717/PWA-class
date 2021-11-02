import React from 'react';
//import {Link} from 'react-router-dom';
import { Box } from '@mui/material';
import AppMenu from './AppMenu';
import { useHistory } from 'react-router';

export default function Main() {
const history = useHistory();
const handleClick = function(link){
  history.push(link);
}

  return (
    <Box>
      <AppMenu/>
    </Box>
  )
}