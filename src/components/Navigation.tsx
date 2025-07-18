import "../styles/components/Navigation.scss";

import { useEffect, useState, type ReactElement } from "react";
import { useTranslations } from "../i18n/utils";
import { defaultLang } from "../i18n/ui";

import ToggleThemeButton from "./ToggleThemeButton";
import LanguageSelector from "./LanguageSelector";


interface Props {
    lang?: string;
    showLanguageSelector?: boolean;
    showProfilePic?: boolean;
};

type Page = {
    name: string;
    href: string|URL;
    hasI18n?: boolean;
};

const pages: Array<Page> = [
    {
        name: "home",
        href: "/",
        hasI18n: true
    },
    {
        name: "about",
        href: "/#about",
        hasI18n: true
    },
    {
        name: "stack",
        href: "/stack",
        hasI18n: true
    },
    {
        name: "projects",
        href: "/projects",
        hasI18n: true
    }
];

export default function(props: Props): ReactElement {
    const showProfilePic = props.showProfilePic ?? true;
    const lang = props.lang ?? defaultLang;
    const tr = useTranslations(lang);

    const [scrolled, setScrolledState] = useState(false);

    useEffect(() => {
        function handleScroll() {
            if(window.scrollY >= 24) {
                setScrolledState(true);
                return;
            }

            setScrolledState(false);
        }

        window.addEventListener("scroll", handleScroll);
    });


    return <div className="navigation-bar">
        <nav className={`navigation ${scrolled ? "scrolled" : ""}`} id="navbar" 
             aria-label="Navigation Bar" onScroll={() => {
                if(window.scrollY >= 24 && !scrolled) {
                    setScrolledState(true);
                    return;
                }

                scrolled && setScrolledState(false);
            }}>

            <div className="left-side"> {
                showProfilePic ? <a rel="author" href="https://github.com/retrozinndev">
                    <img className="profile-pic" 
                      src="https://1.gravatar.com/avatar/093b64d2016ab8acce8a2fe73cb719f527790d4ecec7f5837db8d46519b38bf8?size=80"
                      width={32} height={32} alt={ tr("nav.home") } loading="lazy" 
                    />
                </a> : null
            } </div>

            <div className="items" > {
                    pages.map((page, i) => 
                        <div className={`item`} key={i} onLoadStart={e => {
                            const currentPage = (page.hasI18n ? 
                                window.location.pathname.replace(/^\/.*(\/)/, "/") 
                            : window.location.pathname).trimEnd().replace(/\/$/, "").concat(
                                window.location.hash.startsWith('#') ?
                                    window.location.hash
                                : window.location.hash.replace(/^./, "\#&")
                            ).trim();

                            if(currentPage === page.href.toString()) 
                                (e.target as HTMLDivElement).classList.add("current");
                        }}>
                            <a href={`${page.hasI18n ? `/${lang}` : ""}${page.href}`} target="_self" 
                              title={ tr(`nav.${page.name}_tooltip`) }> {
                                tr(`nav.${page.name}`)
                            } </a>
                        </div>
                    )
                }

                <div className="item" key={pages.length}>
                    <ToggleThemeButton />
                </div>
            </div>

            <div className="language-selector">
                <LanguageSelector visible={props.showLanguageSelector} defaultLanguage={props.lang} />
            </div>
        </nav>
    </div>;
}
