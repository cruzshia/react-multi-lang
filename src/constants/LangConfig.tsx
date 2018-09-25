import * as uuid from 'uuid/v4';

export const Langs = [
    {
        idx: uuid(),
        value: 'zh-TW',
        title: '繁體中文'
    },
    {
        idx: uuid(),
        value: 'en-US',
        title: 'English'
    }
];

export const LangRegex = (() => Langs.map(lang => lang.value).join('|'))();