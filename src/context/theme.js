import { createContext,useContext} from 'react'
export const ThemeContext=createContext({
    thememode:"light",
    darktheme:()=>{},
    lighttheme:()=>{},
})
export const Themeprovider=ThemeContext.Provider

export default function Usetheme(){
    return useContext(ThemeContext)
}
