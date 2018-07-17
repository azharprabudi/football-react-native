import _ from "lodash";
import moment from "moment-timezone";
import {
  CHANGE_STATE_JADWAL_PERTANDINGAN,
  SUCCESS_GET_JADWAL_PERTANDINGAN
} from "../../ActionTypes";
import { _axios } from "../../config/variables";

export const fetchAllSchedule = (
  { idKejuaraan, currentMatchday },
  callbackErr
) => {
  return dispatch => {
    dispatch({
      type: CHANGE_STATE_JADWAL_PERTANDINGAN,
      payload: { key: "load", value: true }
    });
    _axios
      .get(`competitions/${idKejuaraan}/fixtures?matchday=${currentMatchday}`)
      .then(({ data }) => {
        let tmpIndex = -1;
        let tmpTime = "";
        let tmpData = [];
        _.orderBy(data.fixtures, ["matchday"], ["desc"]).forEach(value => {
          let _tmpTime = moment(value.date)
            .tz("Asia/Jakarta")
            .format("DD-MMMM-YYYY");
          if (_tmpTime !== tmpTime) {
            ++tmpIndex;
            tmpData[tmpIndex] = { data: [value], title: _tmpTime };
          } else {
            tmpData[tmpIndex].data = [...tmpData[tmpIndex].data, value];
          }
          tmpTime = _tmpTime;
        });
        dispatch({
          type: SUCCESS_GET_JADWAL_PERTANDINGAN,
          payload: tmpData
        });
      })
      .catch(e => {
        callbackErr(e.response.data.error);
        dispatch({
          type: CHANGE_STATE_JADWAL_PERTANDINGAN,
          payload: { key: "load", value: false }
        });
      });
  };
};
