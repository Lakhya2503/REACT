import { createContext,useContext } from "react"


export const ThemeContext = createContext({
    theameMode : "light",
    darkTheam: () => {},
    lightTheam: () => {},
})

export const ThemeProvider = ThemeContext.ThemeProvider


export default function useTheme() {
    return useContext(ThemeContext)
}

