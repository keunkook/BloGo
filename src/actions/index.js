// import axios from 'axios'; // 나중에 할거

export const SEARCH_ITEMS = 'SEARCH_ITEMS';
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const FETCH_CARDSLISTS = 'FETCH_CARDSLISTS';
export const FETCH_CARD = 'FETCH_CARD';
export const NEW_CARD = 'NEW_CARD';


const category = {"data" : [
    {"title":"react", "idx":"0", "favorite":"10", "cards":"7"},
    {"title":"angular", "idx":"1", "favorite":"14", "cards":"5"},
    {"title":"veu", "idx":"2", "favorite":"5", "cards":"2"},
    {"title":"javascript", "idx":"3", "favorite":"23", "cards":"3"},
    {"title":"css", "idx":"4", "favorite":"2", "cards":"4"}
]}

const cards = {"data" : [
    {"title":"redux", "idx":"0", "ctid":"0"},
    {"title":"r", "idx":"1", "ctid":"0"},
    {"title":"re", "idx":"2", "ctid":"0"},
    {"title":"rea", "idx":"3", "ctid":"0"},
    {"title":"reac", "idx":"4", "ctid":"0"},
    {"title":"react", "idx":"5", "ctid":"0"},
    {"title":"react_redux", "idx":"6", "ctid":"0"},
    {"title":"angular_page", "idx":"7", "ctid":"1"},
]}

export function searchItems (content) {
    // 검색한 내용을 찾아서 쓸것
    const request = {"data" : content};
    console.log(content);
    return {
        type: SEARCH_ITEMS,
        payload: request
    };
}

export function fetchCategories () {
    const request = category;

    return {
        type: FETCH_CATEGORIES,
        payload: request
    };
}

export function fetchCardsLists () {
    // const link = document.location.href;
    // const param = document.location.href.split("?");
    // console.log(param[1].split('=')[1]);
    const request = cards; // axios.get(`/api?${param[1]}`)

    return {
        type: FETCH_CARDSLISTS,
        payload: request
    };
}

export function fetchCard (idx) {
    // idx search result
    const request = {"data" : {
        "idx":"0",
        "title":"how to react",
        "contents":"just do it",
        "date":"2018-05-14"
    }}

    return {
        type: FETCH_CARD,
        payload: request
    };
}

export function createCard (values, callback) {
    // axios.post(, values)
    // .then(() => callback())

    const request = 'true';
    callback();
    return {
        type: NEW_CARD,
        payload: request
    };
}