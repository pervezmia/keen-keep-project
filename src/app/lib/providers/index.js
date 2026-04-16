'use client'
import CommunicationProvider from '@/context/comunicate.context';
import React from 'react';

const Providers = ({children}) => {
    console.log("Raper");
    return (
        <CommunicationProvider>
            {children}
        </CommunicationProvider>
    );
};

export default Providers;