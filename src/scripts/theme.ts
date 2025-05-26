
export const themes: Array<string> = [ "dark", "light" ];
var theme: string = getStoredTheme() || themes[0];

export function getTheme(): string {
    return theme;
}

export function getThemes(): Array<string> {
    return themes;
}

export function getStoredTheme(): (string|undefined) {
    if(typeof localStorage !== "undefined")
        return localStorage.getItem("theme")?.toString() ?? getThemes()[0];

    return getThemes()[0];
}

export function toggleTheme(): void {
    switch (getTheme()) {
        case "dark":
            applyTheme("light");
        break;

        case "light":
            applyTheme("dark");
        break;
        
        default:
            applyTheme(themes[0]);
        break;
    }
}

export function applyTheme(themeToApply: string): void {
    for(let i = 0; i < themes.length; i++) {
        if(themeToApply === themes[i]) {
            theme = themeToApply;
            if(document !== undefined) {
                document.body.className = themeToApply;
                document.body.style.colorScheme = themeToApply;
            }

            break;
        } else if(i === getThemes().length) {
            console.error("Color Scheme(theme.ts): couldn't find provided theme " + themeToApply + " inside themes")
        }
    }

    // Set theme on localStorage
    localStorage.setItem("theme", getTheme());
}
