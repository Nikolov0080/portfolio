import React, { useEffect } from 'react';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Router from './app/routes';
import { BrowserRouter as PageRouter } from 'react-router-dom';
import { blue } from '@material-ui/core/colors';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#3366FF"
    },
    secondary: {
      main: "#000000"
    }
  },
  overrides: {
    MuiChip: {
      root: {
        margin: 10,
        fontSize: 17,
        padding: 10,
        "@media (max-width:780px)": {
          margin: 5,
        }
      },
      outlined: {
        border: "none",
        boxShadow: "1px 2px 4px 2px #B2B2B2"
      }
    },
    MuiDivider: {
      root: {
        backgroundColor: "#000000",
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
      'Josefin Sans',
      'sans-serif',
    ].join(','),
  }

});
function App() {
  useEffect(() => {
    firebase.initializeApp({
      apiKey: process.env.REACT_APP_API_KEY,
      authDomain: process.env.REACT_APP_AUTH_DOMAIN,
      databaseURL: process.env.REACT_APP_DATABASE_URL,
      projectId: process.env.REACT_APP_PROJECT_ID,
      storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
      messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
      appId: process.env.REACT_APP_APP_ID
    })
  }, [])

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
