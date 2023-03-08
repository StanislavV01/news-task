import i18next from 'i18next';
import {initReactI18next} from 'react-i18next'

import translationUkranian from './Translations/Ukranian/tranislation.json'
import translationEnglish from './Translations/English/translation.json'

const resources = {
        en: {
            translation: translationEnglish,
        },
        ua: {
            translation: translationUkranian,
        },
    }

    i18next
    .use(initReactI18next)
    .init({
      resources,
      lng:"en", //default language
    });
    
    export default i18next;