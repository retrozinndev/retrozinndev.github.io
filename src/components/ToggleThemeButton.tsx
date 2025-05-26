import { useState, type ReactElement } from "react"
import { getStoredTheme, getTheme, toggleTheme } from "../scripts/theme";
import { RiMoonLine, RiSunLine } from "react-icons/ri";
import { IconContext } from "react-icons";

export default function(props: { initialTheme?: "dark" | "light" }): ReactElement {
    const [stateTheme, setStateTheme] = useState(props.initialTheme ?? getStoredTheme()) as [
        ("dark" | "light"), React.Dispatch<React.SetStateAction<"dark" | "light">>
    ];

    return (<div className="theme-toggle" onClick={() => {
        toggleTheme();
        setStateTheme(getTheme() as ("dark" | "light"));
    }} onLoad={() => 
        getStoredTheme() !== stateTheme &&
            setStateTheme(getStoredTheme() as ("dark" | "light"))
    } style={{
        cursor: "pointer"
    }}> 
        <IconContext.Provider value={{
            className: "icon",
            size: "16",
            style: {
                marginTop: 2
            }
        }}> {
            stateTheme === "dark" ? 
                <RiMoonLine />
            : <RiSunLine />
        } </IconContext.Provider>
    </div>);
}
