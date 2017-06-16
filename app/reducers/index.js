import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';
import { Base } from '../navigators/index';

const homeAction = NavigationActions.navigate({ routeName: 'Pre' });
const initialNavState = Base.router.getStateForAction(homeAction);

const baseNavigation = (state = initialNavState, action) => {
  let nextState;

  switch (action.type) {
    case 'Pre':
      nextState = Base.router.getStateForAction(
        NavigationActions.back(),
        state
      );
      break;
    case 'Tabs':
      nextState = Base.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Tabs' }),
        state
      );
      break;
    default:
      nextState = Base.router.getStateForAction(action, state);
      break;
  }

  return nextState || state;
};

const reducers = combineReducers({
  baseNavigation,
});

export default reducers;