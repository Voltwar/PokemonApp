import * as React from 'react';
import { red, blue } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
    secondary: {
        main: blue[500]
    },
  },
});

export default theme;