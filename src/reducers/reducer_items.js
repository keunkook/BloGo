import { SEARCH_ITEMS } from '../actions/index';

export default function (state = [], action) {
    switch(action.type) {
        case SEARCH_ITEMS:
            return [action.payload]; //axios data 받을것!!
        default:
            return state;
    }
}