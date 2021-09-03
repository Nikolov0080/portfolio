import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Layout from './features/layout/Layout';

const customTheme = createTheme({
  palette: {
    secondary: {
      main: "#ddd",
    },
  }
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={customTheme}>
        <Layout>
          <App />
        </Layout>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
