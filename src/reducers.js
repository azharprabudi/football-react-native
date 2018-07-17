import { AsyncStorage } from "react-native";
import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { NavigationActions } from "react-navigation";
import ReduxThunk from "redux-thunk";
import { persistStore, persistReducer, createTransform } from "redux-persist";
import immutableTransform from "redux-persist-transform-immutable";
// App Navigator
import { AppNavigator } from "./navigators/AppNavigator";
//list reducers
import HalamanUtamaReducer from "./screens/HalamanUtama/HalamanUtamaReducer";
import PapanKlasemenReducer from "./screens/PapanKlasemen/PapanKlasemenReducer";
import JadwalPertandinganReducer from "./screens/JadwalPertandingan/JadwalPertandinganReducer";

// Start with two routes: The Main screen, with the Login screen on top.
const initialNavState = AppNavigator.router.getStateForAction(
  AppNavigator.router.getActionForPathAndParams("App")
);

function nav(state = initialNavState, action) {
  let nextState;
  switch (action.type) {
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }
  return nextState || state;
}
//reducers
const reducers = combineReducers({
  halamanUtama: HalamanUtamaReducer,
  papanKlasemen: PapanKlasemenReducer,
  jadwalPertandingan: JadwalPertandinganReducer,
  nav
});
//app reducers
const AppReducer = persistReducer(
  {
    key: "root",
    storage: AsyncStorage,
    transforms: [
      immutableTransform({
        whitelist: ["halamanUtama", "papanKlasemen"],
        blacklist: ["nav"]
      })
    ]
  },
  reducers
);
//store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(ReduxThunk))
);
//persistor
export const persistor = persistStore(store);
