import React from "react";
export default function initStore<T>(): {
    Provider: React.Provider<{
        store: T;
        setStore: React.Dispatch<React.SetStateAction<T>>;
    }>;
    Consumer: React.Consumer<{
        store: T;
        setStore: React.Dispatch<React.SetStateAction<T>>;
    }>;
    displayName?: string | undefined;
    Context: React.Context<{
        store: T;
        setStore: React.Dispatch<React.SetStateAction<T>>;
    }>;
};
