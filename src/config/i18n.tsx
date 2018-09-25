import * as i18next from 'i18next';
import * as XHR from 'i18next-xhr-backend';

i18next
    .use(XHR)
    .init({
        fallbackLng: 'zh-TW',
        whitelist: ['zh-TW', 'en-US'],
        load: 'currentOnly',
        preload: ['zh-TW', 'en-US'],
        ns: ['app'],
        defaultNS: 'app',
        debug: false,
        interpolation: {
            escapeValue: false
        },
        react: {
            wait: true
        }
    });

export default i18next;