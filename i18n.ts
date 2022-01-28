import i18next from "https://deno.land/x/i18next/index.js";
import Backend from "https://deno.land/x/i18next_fs_backend/index.js";
// import enTranslation from "./locales/en/translation.json" assert {
//   type: "json",
// };
// import deTranslation from "./locales/de/translation.json" assert {
//   type: "json",
// };

const systemLocale = Intl.DateTimeFormat().resolvedOptions().locale;

i18next
  .use(Backend)
  .init({
    // debug: true,
    initImmediate: false, // setting initImediate to false, will load the resources synchronously
    fallbackLng: "en",
    preload: ['en', 'de'],
    backend: {
      loadPath: "locales/{{lng}}/{{ns}}.json",
    },
    // resources: {
    //   en: {
    //     translation: enTranslation,
    //   },
    //   de: {
    //     translation: deTranslation,
    //   },
    // },
  });

export default (lng: string | undefined | null) =>
  i18next.getFixedT(lng || systemLocale);
