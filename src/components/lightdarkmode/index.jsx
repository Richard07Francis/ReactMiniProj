import UseLocalStorage from "./useLocalStorage";
import "./theme.css";

export default function LightDarkMode(){

    const [theme,setTheme] = UseLocalStorage("theme","dark");

    function handleToggleTheme(){
        setTheme(theme === "light" ? "dark" : "light");
    }

    return <div className="light-dark-mode" data-theme={theme}>
        <div className="container">
            <p>Hello World!</p>
            <button onClick={handleToggleTheme}>Change Theme</button>
        </div>
    </div>
}