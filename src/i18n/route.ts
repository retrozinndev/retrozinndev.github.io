import { languages } from "./ui";


export const getStaticPaths = () => 
    languages.map(lang => ({ params: { lang } }));
