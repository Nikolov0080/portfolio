import React from 'react';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Router from './app/routes';
import { BrowserRouter as PageRouter } from 'react-router-dom';
const customTheme = createTheme({

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
