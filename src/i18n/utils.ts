
import type { i18nStruct } from "./struct.ts";
import { languages, i18n, defaultLang } from "./ui.ts";

export function getLanguageFromURL(url: URL): (string|undefined) {
    const splitPath = url.pathname.split('/', 2);

    return (splitPath[1] ?? false) && splitPath[1].length <= 5 ?
        splitPath[1]
    : undefined;
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


/** format a string in the C-style. (use this to replace items in i18n strings.
  * supports %s for strings, %d/%i/%f/%u for numbers and %n for HTML Elements */
export function format(input: string, ...values: Array<any>): string {
    values.forEach(val => {
        let expr: RegExp = /\%s/;
        const isHTML = typeof val === "object" && (
            val instanceof Node || val instanceof HTMLElement
        );

        if(typeof val === "number")
            expr = /\%[dfui]/;

        if(isHTML)
            expr = /\%n/;

        input = input.replace(expr, String(val));
    });

    return input;
}

