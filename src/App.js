import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyAppBar from '../src/components/AppBar';
import Home from '../src/containers/Home';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import CssBaseline from '@material-ui/core/CssBaseline';
import store from './store';
import { Provider,connect } from 'react-redux'; 
const theme = createMuiTheme({
  palette: {
    primary: {
      light: purple[300],
      main: purple[500],
      dark: purple[700],
    },
    secondary: {
      light: green[300],
      main: green[500],
      dark: green[700],
    },
  },
  typography: {
    useNextVariants: true,
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
    <div className="App">
      <CssBaseline />
      <MyAppBar/>
      <Provider store={store}>
         <Home/>
       </Provider>
    </div>
    </MuiThemeProvider>
  );
}

export default App;
