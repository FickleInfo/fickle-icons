import {
    UPDATE_SEARCH_RESULTS,
} from "../constants/FontawesomeConstants";

import WebIcon from './data/fontawesome/fontawesome-web.json';
import FormIcon from './data/fontawesome/fontawesome-form.json';
import SocialMediaIcon from './data/fontawesome/fontawesome-social.json';
import GeneralIcon from './data/fontawesome/fontawesome-general.json';
import ChartsIcon from './data/fontawesome/fontawesome-charts.json';
import CurrancyIcon from './data/fontawesome/fontawesome-currency.json';
import FileTypeIcon from './data/fontawesome/fontawesome-filetype.json';
import PaymentIcon from './data/fontawesome/fontawesome-payment.json';
import VideoPlayerIcon from './data/fontawesome/fontawesome-video-player.json';

const initialUserState = {
    WebIcon: WebIcon 
};

export default function fontawesomeReducer(state = initialUserState, action) {
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
