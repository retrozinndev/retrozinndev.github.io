
import type { i18nStruct } from "./struct.ts";
import { languages, i18n, defaultLang } from "./ui.ts";

export function getLanguageFromURL(url: (URL|string)): (string) {
    const splittedURL: string[] = (typeof url === "string") ? 
        url.split('/')
    : url.pathname.split("/");

    return splittedURL[1].length !== 2 ?
        defaultLang
    : splittedURL[1];
}

export function useTranslations(lang: string): Function {
    return function tr(key: string): string {
        const keys = key.split(".");
        let translation: (object|string) = i18n[lang as keyof typeof i18n] as i18nStruct, 
            defaultTranslation: (object|string) = i18n[defaultLang as keyof typeof i18n] as i18nStruct;

        keys.forEach(key => {
            translation = translation[key as keyof typeof translation];
            defaultTranslation = defaultTranslation[key as never];
        });

        if(typeof translation !== "string")
            return (typeof defaultTranslation === "string") ? 
                defaultTranslation
            : (() => {
                console.error(`i18n: no string found for \`${key}\`, or key is not of type \`string\``);
                return "no_tr_key_error";
            })();

        return translation;
    }
}

export function getLanguages(): string[] {
    return languages;
}
