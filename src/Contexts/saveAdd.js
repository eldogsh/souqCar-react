
import React, { createContext, useEffect, useState } from 'react';

export const saveAddContext=createContext();
const SaveAddContextProvider = ({children}) => {
    const [saveAdd,setSaveAdd]=useState([])
    useEffect(()=>{
        var localSaveAdd = localStorage.getItem("saveAdd")
        console.log(localStorage);
        setSaveAdd(localSaveAdd?JSON.parse(localSaveAdd):[])
        
    },[])
    
    return (
       <saveAddContext.Provider value={{saveAdd,setSaveAdd}} >
            {children}
        </saveAddContext.Provider>
    );
}



export default SaveAddContextProvider;
