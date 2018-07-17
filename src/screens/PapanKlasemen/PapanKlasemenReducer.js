import { Map, List } from "immutable";
import {
  CHANGE_STATE_PAPAN_KLASEMEN,
  SUCCESS_GET_PAPAN_KLASEMEN
} from "../../ActionTypes";

const INITIAL_STATE = Map({
  load: false,
  data: Map()
});

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_STATE_PAPAN_KLASEMEN:
      return state.set(action.payload.key, action.payload.value);
    case SUCCESS_GET_PAPAN_KLASEMEN:
      return state.merge({
        load: false,
        data: Map(action.payload)
      });
    default:
      return state;
  }
}
