import {GET_ARTICLE_SUCCESS, GET_COMMENTS_SUCCESS} from "../actions/article";

const initialState = {
    article: {},
    comments: {}
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_ARTICLE_SUCCESS: {
            const { data } = action.payload;
            return {
                ...state,
                article: data
            };
        }
        case GET_COMMENTS_SUCCESS: {
            const { data } = action.payload;
            return {
                ...state,
                comments: data,
            };
        }
        default: {
            return state;
        }
    }
}

