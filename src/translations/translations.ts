import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import en from "./en";
import cz from "./cz";
import sk from "./sk";
import ua from "./ua";

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        compatibilityJSON: 'v3',
        resources: {
            en,
            cz,
            sk,
            ua,
        },
        lng: "en",
        fallbackLng: "en",

        interpolation: {
            escapeValue: false
        }
    });
