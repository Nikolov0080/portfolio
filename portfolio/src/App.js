import React from 'react';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Router from './app/routes';
import { BrowserRouter as PageRouter } from 'react-router-dom';
import { blue, common } from '@material-ui/core/colors';

const customTheme = createTheme({
  palette: {
    secondary: {
      main: "#000000"
    }
  },

  overrides: {
    MuiChip: {
      root: {
        margin: 10,
        fontSize: 17
      }
    },
    MuiDivider: {
      root: {
        backgroundColor: "#000000",
        margin: 5
      }
    },
    MuiAppBar: {
      root: {
        boxShadow: "none",
      }
    },
    MuiTabs: {
      indicator: {
        color: blue
      }
    },
    MuiTab: {
      root: {
        padding: '1rem 0',
        textTransform: 'none',
        fontSize: 13,
        border: "2px solid transparent",
        transition: "0.8s",
        '&:hover': {
          border: "2px solid gray",
        },
        '&$selected': {
          border: "2px solid transparent",
          color: blue
        },
      },
    }
  },
  typography: {
    fontFamily: [
      'Chilanka',
      'cursive',
    ].join(','),
  }

});

function App() {
  return (
    <PageRouter>
      <Provider store={store}>
        <ThemeProvider theme={customTheme}>
          <Router />
        </ThemeProvider>
      </Provider>
    </PageRouter >

  );
}

export default App;
