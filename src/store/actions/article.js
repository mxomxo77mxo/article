export const GET_ARTICLE_REQUEST = 'GET_ARTICLE_REQUEST';
export const GET_ARTICLE_SUCCESS = 'GET_ARTICLE_SUCCESS';
export const GET_ARTICLE_FAIL = 'GET_ARTICLE_FAIL';

export function getArticle() {
    return {
        type: GET_ARTICLE_REQUEST,
        payload: {},
    };
}

export const GET_COMMENTS_REQUEST = 'GET_COMMENTS_REQUEST';
export const GET_COMMENTS_SUCCESS = 'GET_COMMENTS_SUCCESS';
export const GET_COMMENTS_FAIL = 'GET_COMMENTS_FAIL';

export function getComments() {
    return {
        type: GET_COMMENTS_REQUEST,
        payload: {},
    };
}
