import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MiddleView from './componets/MiddleView';


const theme = createTheme();

export default function SignIn() {


  return (
    <ThemeProvider theme={theme}>
        <MiddleView/>
    </ThemeProvider>
  );
}