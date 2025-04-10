import { createContext, ReactNode, useContext, useState } from "react"

interface AlertContextType{
    alertStringContext : string | null,
    setAlertContext : React.Dispatch<React.SetStateAction<string | null>>    
} 

interface SelectedAlertProps{
    children : ReactNode
}
const AlertContexts = createContext<AlertContextType | undefined>(undefined)

type NewType = SelectedAlertProps

export function AlertContextProvider({children} : NewType ){
    const [alertStringContext,setAlertContext] = useState<string | null>(null)
    return (
        <>
        <AlertContexts.Provider value={{alertStringContext,setAlertContext}}>
            {children}
        </AlertContexts.Provider>
        </>
    )
}

export function UseAlertContext(){
    const context = useContext(AlertContexts)
    if(!context){
        throw Error("Context is needed!")
    }
    return context
}