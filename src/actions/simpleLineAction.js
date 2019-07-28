import {
    UPDATE_SEARCH_RESULTS,
    UPDATE_SEARCHED_QUERY
} from "../constants/FontawesomeConstants";


export function changeSearchedQuery(searchValue){
    return {type: UPDATE_SEARCHED_QUERY, searchValue}
}

export function updateSearchResult(searchResult){
    return {type: UPDATE_SEARCH_RESULTS, searchResult}
}

