
import React, { createContext, useState } from 'react';

export const CommunicationContext = createContext();

const CommunicationProvider = ({children}) => {
    const [communication, setCommunication] = useState([]);
    
    const data = {
        communication,
        setCommunication
    }

    return (
        <CommunicationContext.Provider value = {data}>
            {children}

        </CommunicationContext.Provider>
    );
};

export default CommunicationProvider;