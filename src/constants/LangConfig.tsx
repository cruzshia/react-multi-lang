export const Langs = [
    {
        value: 'zh-TW',
        title: '繁體中文'
    },
    {
        value: 'en-US',
        title: 'English'
    }
];

export const LangRegex = (() => Langs.map(lang => lang.value).join('|'))();