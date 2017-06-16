import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import { Base } from './navigators/index';
import { addNavigationHelpers } from 'react-navigation';
import configureStore from './store';

const AppWithNavigationState = ({ dispatch, nav }) => (
  <Base navigation={
    addNavigationHelpers(
      {
        dispatch: dispatch,
        state: nav,
      }
    )
  } />
);

const mapStateToProps = (state) => ({
  nav: state.baseNavigation,
});

const AppRoot = connect(mapStateToProps)(AppWithNavigationState);

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppRoot />
      </Provider>
    );
  }
}

export default App;
