import {
  CHANGE_STATE_PAPAN_KLASEMEN,
  SUCCESS_GET_PAPAN_KLASEMEN
} from "../../ActionTypes";
import { _axios } from "../../config/variables";

export const fetchPapanKlasemen = (id, callbackErr) => {
  return dispatch => {
    dispatch({
      type: CHANGE_STATE_PAPAN_KLASEMEN,
      payload: {
        key: "load",
        value: true
      }
    });
    _axios
      .get(`competitions/${id}/leagueTable`)
      .then(({ data }) => {
        dispatch({ type: SUCCESS_GET_PAPAN_KLASEMEN, payload: data });
      })
      .catch(e => {
        callbackErr(e.response.data.error);
        dispatch({
          type: CHANGE_STATE_PAPAN_KLASEMEN,
          payload: {
            key: "load",
            value: false
          }
        });
      });
  };
};
