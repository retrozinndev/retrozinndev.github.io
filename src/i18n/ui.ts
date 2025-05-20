
export const i18n = { 
    en: (await import("./lang/en")).default,
    pt: (await import("./lang/pt")).default
};

export const languages: Array<string> = Object.keys(i18n);
export const defaultLang = languages[0];
