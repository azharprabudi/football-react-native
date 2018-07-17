import { Map, List } from "immutable";
import {
  CHANGE_STATE_HALAMAN_UTAMA,
  SUCCESS_GET_COMPETITIONS
} from "../../ActionTypes";

const INITIAL_STATE = Map({
  data: List([]),
  load: false,
  isSelected: Map({
    id: 445,
    caption: "Premier League 2017/18",
    currentMatchday: 21
  })
});

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_STATE_HALAMAN_UTAMA:
      return state.set(action.payload.key, action.payload.value);
    case SUCCESS_GET_COMPETITIONS:
      return state.merge({
        load: false,
        data: List(action.payload.data),
        isSelected: Map(action.payload.isSelected)
      });
    default:
      return state;
  }
}
