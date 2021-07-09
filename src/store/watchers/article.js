import {takeLatest, call, put} from 'redux-saga/effects';
import {
    GET_ARTICLE_FAIL,
    GET_ARTICLE_REQUEST,
    GET_ARTICLE_SUCCESS,
    GET_COMMENTS_FAIL,
    GET_COMMENTS_REQUEST,
    GET_COMMENTS_SUCCESS
} from "../actions/article";
import {articleAPI, commentsAPI} from "../utils";

export default function* watcher() {
    yield takeLatest(GET_ARTICLE_REQUEST, handleGetArticle);
    yield takeLatest(GET_COMMENTS_REQUEST, handleGetComments);
}

function* handleGetArticle() {
    try {
        const data = yield call(articleAPI.get);
        yield put({
            type: GET_ARTICLE_SUCCESS,
            payload: {data},
        });
    } catch (e) {
        console.warn(e);
        yield put({
            type: GET_ARTICLE_FAIL,
            message: e.message,
        });
    }
}

function* handleGetComments() {
    try {
        const data = yield call(commentsAPI.get);
        yield put({
            type: GET_COMMENTS_SUCCESS,
            payload: {data},
        });
    } catch (e) {
        console.warn(e);
        yield put({
            type: GET_COMMENTS_FAIL,
            message: e.message,
        });
    }
}
