import React from "react";
export declare type StoreType = {
    count: number;
};
export declare const Context: React.Context<{
    store: StoreType;
    setStore: React.Dispatch<React.SetStateAction<StoreType>>;
}>, Provider: React.Provider<{
    store: StoreType;
    setStore: React.Dispatch<React.SetStateAction<StoreType>>;
}>;
export declare function LayerAlpha(): JSX.Element;
export declare function LayerBeta(): JSX.Element;
export default function App(): JSX.Element;
