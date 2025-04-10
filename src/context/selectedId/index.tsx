import React, { createContext, ReactNode, useContext, useState } from "react";

interface SelectedIdContextType{
    idSelected : number | null
    setIdSelected : React.Dispatch<React.SetStateAction<number|null>>
}

const SelectedIdContext = createContext<SelectedIdContextType | undefined >(undefined)
interface SelectedIdProvideProps{
    children : ReactNode
}

interface AlertContextType{
    alertStringContext : string | null,
    setAlertContext : React.Dispatch<React.SetStateAction<string | null>>    
} 

interface SelectedAlertProps{
    children : ReactNode
}
const AlertContexts = createContext<AlertContextType | undefined>(undefined)

export function AlertContextProvider({children} : SelectedAlertProps ){
    const [alertStringContext,setAlertContext] = useState<string | null>(null)
    return (
        <>
        <AlertContexts.Provider value={{alertStringContext,setAlertContext}}>
            {children}
        </AlertContexts.Provider>
        </>
    )
}

export function SelectedIdProvide({children} : SelectedIdProvideProps){
   const [idSelected,setIdSelected] = useState<number | null>(null)
    return(
    <>
    <SelectedIdContext.Provider value={{idSelected,setIdSelected}}>
        {children}
    </SelectedIdContext.Provider>
    </>)
}

export function UseSelectedId(){
    const context = useContext(SelectedIdContext)
    if(!context){
        throw new Error("useSelectedId must be used within a SelectedIdProvider")
    }
    return context
}