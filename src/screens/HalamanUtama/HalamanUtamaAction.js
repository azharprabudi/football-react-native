import _ from "lodash";
import { Map } from "immutable";
import {
  CHANGE_STATE_HALAMAN_UTAMA,
  SUCCESS_GET_COMPETITIONS
} from "../../ActionTypes";
import { _axios } from "../../config/variables";

export const fetchAllCompetitions = callbackError => {
  return dispatch => {
    dispatch({
      type: CHANGE_STATE_HALAMAN_UTAMA,
      payload: { key: "load", value: true }
    });
    _axios
      .get("competitions")
      .then(({ data }) => {
        dispatch({
          type: SUCCESS_GET_COMPETITIONS,
          payload: { data, isSelected: _.find(data, { id: 445 }) }
        });
      })
      .catch(e => {
        callbackError(e.response.data.error);
        dispatch({
          type: CHANGE_STATE_HALAMAN_UTAMA,
          payload: { key: "load", value: false }
        });
      });
  };
};

export const changeCompetitions = data => ({
  type: CHANGE_STATE_HALAMAN_UTAMA,
  payload: { key: "isSelected", value: Map(data) }
});
