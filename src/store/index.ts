import {
  IAppState,
  rootReducer,
  deimmutify,
  reimmutify
} from './store';
import * as Redux from 'redux';
import {dev} from '../configuration';
import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import {createEpicMiddleware} from 'redux-observable';
import {rootEpic} from '../epics/index';

type RetypedCompose = (func: Function, ...funcs: Function[]) => Function;

const createLogger = require('redux-logger');
const persistState = require('redux-localstorage');

let middleware = [];
let enhancers = [
  persistState(
    '',
    {
      key: 'ng2-dnd',
      serialize: store => JSON.stringify(deimmutify(store)),
      deserialize: state => reimmutify(JSON.parse(state)),
    })
];

if (dev) {
  middleware.push(
    createLogger({
      level: 'info',
      collapsed: true,
      stateTransformer: deimmutify,
    }));

  const environment: any = window || this;
  if (environment.devToolsExtension) {
    enhancers.push(environment.devToolsExtension());
  }
}

middleware.push(createEpicMiddleware(rootEpic));

const reTypedCompose = compose as RetypedCompose;
const finalCreateStore = <Redux.StoreEnhancerStoreCreator<IAppState>>
  reTypedCompose(
    applyMiddleware(...middleware),
    ...enhancers
  )(createStore);

export const store = finalCreateStore(rootReducer, {});
export {IAppState} from './store';
