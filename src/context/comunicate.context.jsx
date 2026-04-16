
import React, { createContext, useState } from 'react';

export const CommunicationContext = createContext();

const CommunicationProvider = ({children}) => {
    const [communication, setCommunication] = useState([]);
    const [allCommunication, setAllCommunication] = useState(communication);
    
    const data = {
        communication,
        setCommunication,
        allCommunication, 
        setAllCommunication
        
    }
console.log(communication);
console.log(allCommunication);
    return (
        <CommunicationContext.Provider value = {data}>
            {children}

        </CommunicationContext.Provider>
    );
};

export default CommunicationProvider;