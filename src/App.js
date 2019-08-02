//IMPORT PACKAGE REFERENCES
import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import { Provider } from 'react-redux';
import { composedWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';

//IMPORT PROJECT REFERENCES
import AppWrapper from './components/Wrapper/AppWrapper';
import { AppRouter } from './routers/AppRouter';
import rootReducer from './state/reducers';

const store = createStore(
  rootReducer,
  composedWithDevTools()
);

function App() {
  return (
    <Provider store={store}>
      <AppWrapper>
        <AppRouter />
      </AppWrapper>
    </Provider>
  )
}

export default App;