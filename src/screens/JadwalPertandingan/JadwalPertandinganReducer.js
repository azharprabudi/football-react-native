import { Map, List } from "immutable";
import {
  CHANGE_STATE_JADWAL_PERTANDINGAN,
  SUCCESS_GET_JADWAL_PERTANDINGAN
} from "../../ActionTypes";

const INITIAL_STATE = Map({
  load: false,
  data: List()
});

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_STATE_JADWAL_PERTANDINGAN:
      return state.set(action.payload.key, action.payload.value);
    case SUCCESS_GET_JADWAL_PERTANDINGAN:
      return state.merge({
        load: false,
        data: List(action.payload)
      });
    default:
      return state;
  }
}
