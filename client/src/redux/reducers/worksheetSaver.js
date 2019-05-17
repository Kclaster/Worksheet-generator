import { WORKSHEET_SAVER } from '../actions/types';
import moment from 'moment';

export default function saveWorksheet(state = [], action) {
  console.log('answer', action.payload);
  switch (action.type) {
    case WORKSHEET_SAVER:
      const newArr = action.payload.equations.map(cur => {
        cur.userName = action.payload.username[0];
        const date = new moment().format('lll');
        console.log(date);
        cur.date = date;
        console.log('aaaaaaaaamerica======', cur);
        return cur;
      });
      return [...state, ...newArr];
    default:
      return state;
  }
}
