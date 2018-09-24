import { createStandardAction } from 'typesafe-actions';

const SET_LANG = 'lang/SET';

export const setLang = createStandardAction(SET_LANG).map(
    (payload: { lang: string }) => ({
        payload: {
            lang: payload.lang,
        }
    })
);