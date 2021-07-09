import {all, fork} from 'redux-saga/effects';
import article from './article';

export default function* watchers() {
    yield all([
        article
    ].map(fork));
}
