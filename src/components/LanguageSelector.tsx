import { i18n, languages } from "../i18n/ui";

type Props = {
    visible?: boolean;
    defaultLanguage?: string;
};

export default function(props: Props) {
    return <select name="Language" style={{
        display: props.visible ? "initial" : "none"
    }} value={props.defaultLanguage} onChange={(e) => {
        const htmlSelect = e.target as HTMLSelectElement;
        const splitPath: Array<string> = window.location.pathname.split('/');

        window.location.pathname = `${htmlSelect.value}/${splitPath.splice(
            2, splitPath.length-1
        ).join('/')}`;
    }}> {
        languages.map((lang, i) => 
            <option value={lang} key={i}>
                { i18n[lang as keyof typeof i18n].language }
            </option>
        )
    } </select>
}
