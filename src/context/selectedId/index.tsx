import React, { createContext, ReactNode, useContext, useState } from "react";

interface SelectedIdContextType{
    idSelected : number | null
    setIdSelected : React.Dispatch<React.SetStateAction<number|null>>
}

const SelectedIdContext = createContext<SelectedIdContextType | undefined >(undefined)
interface SelectedIdProvideProps{
    children : ReactNode
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
