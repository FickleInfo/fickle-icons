import {
    UPDATE_SEARCH_RESULTS,
} from "../constants/FontawesomeConstants";

import SimpleLineIcon from './data/simpleline/simplelineicon.json';

const initialUserState = {
    SimpleLineIconList: SimpleLineIcon 
};

export default function simplelineReducer(state = initialUserState, action) {
    switch (action.type) {
         case UPDATE_SEARCH_RESULTS:
         console.log(action, 'safasf')
            return Object.assign({}, state, {
               WebIcon: []
            });     

        default:
            return state;
    }
}
