import { useState, type ReactElement } from "react"
import { getStoredTheme, getTheme, toggleTheme, type Theme } from "../scripts/theme";
import { RiMoonLine, RiSunLine } from "react-icons/ri";
import { IconContext } from "react-icons";


export default function(props: { initialTheme?: Theme }): ReactElement {
    const [stateTheme, setStateTheme] = useState(props.initialTheme ?? getStoredTheme());

    return <div className="theme-toggle" style={{ cursor: "pointer" }}
      onClick={() => {
          toggleTheme();
          setStateTheme(getTheme());
      }} onLoad={() => {
          setStateTheme(getStoredTheme())
      }}> 
          <IconContext.Provider value={{
              className: "icon",
              size: "16",
              style: {
                  marginTop: 2
              }
          }}>
              {
                stateTheme === "dark" ?
                    <RiMoonLine />
                : <RiSunLine />
              }
          </IconContext.Provider>
    </div>;
}
