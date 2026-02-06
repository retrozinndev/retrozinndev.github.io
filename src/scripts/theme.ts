export type Theme = "dark"|"light";
let theme: Theme = getStoredTheme() || "dark";

export function getTheme(): Theme {
    return theme;
}

export function isValidTheme(str: string): str is Theme {
    return str === "light" || str === "dark";
}

export function getStoredTheme(): Theme {
    let theme: Theme = "dark";

    if(typeof localStorage === "object" && typeof localStorage.getItem === "function") {
        const stored = localStorage.getItem("theme");

        if(stored != null && isValidTheme(stored))
            theme = stored;
    }

    return theme;
}

export function toggleTheme(): void {
    if(theme === "light") {
        applyTheme("dark");
        return;
    }

    applyTheme("light");
}

/** @returns whether the theme was successfully applied */
export function applyTheme(themeToApply: Theme): boolean {
    if(document == null || typeof document !== "object" || typeof document.body !== "object") 
        return false;

    theme = themeToApply;
    document.body.className = themeToApply;
    document.body.style.colorScheme = themeToApply;

    // Set theme on localStorage
    localStorage.setItem("theme", getTheme());

    return true;
}
