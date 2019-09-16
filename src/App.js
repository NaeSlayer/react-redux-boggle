//IMPORT PACKAGE REFERENCES
import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import { Provider } from 'react-redux';
// import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

//IMPORT PROJECT REFERENCES
import AppWrapper from './components/Wrapper/AppWrapper';
import { AppRouter } from './routers/AppRouter';
import rootReducer from './state/reducers';

// const store = createStore(
//   rootReducer,
//   compose(composeWithDevTools(), applyMiddleware(thunk))
// );

const store = createStore(
  rootReducer,
  compose(window.devToolsExtension ? window.devToolsExtension() : f => f, applyMiddleware(thunk))
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