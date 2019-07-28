import {
    UPDATE_SEARCH_RESULTS,
    UPDATE_SEARCHED_QUERY
} from "../constants/FontawesomeConstants";

import SimpleLineIcon from './data/simpleline/simplelineicon.json';

const initialUserState = {
    SimpleLineIconList: SimpleLineIcon,
    searchedQuery : ''
};

export default function iconsReducer(state = initialUserState, action) {
    switch (action.type) {
         case UPDATE_SEARCH_RESULTS:
         console.log(action, '>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
            return Object.assign({}, state, {
               // SimpleLineIconList: action.searchResult
            }); 

        case UPDATE_SEARCHED_QUERY:
            return Object.assign({}, state, {
               searchedQuery: action.searchValue
            }); 
        default:
            return state;
    }
}
