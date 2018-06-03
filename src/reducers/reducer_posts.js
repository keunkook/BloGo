import { 
    FETCH_CATEGORIES,
    FETCH_CARDSLISTS,
    FETCH_CARD
} from '../actions/index';

export default function (state = {}, action) {
    switch(action.type) {
        case FETCH_CATEGORIES:
            return { ...state, categories: [...action.payload.data] };
        case FETCH_CARDSLISTS:
            return { ...state, cards: [...action.payload.data] };
        case FETCH_CARD:
            return { ...state, card: action.payload.data };
        default:
            return state;
    }
}