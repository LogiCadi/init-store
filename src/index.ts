import React from "react";

export default function initStore<T>() {
  const Context = React.createContext<{
    store: T;
    setStore: React.Dispatch<React.SetStateAction<T>>;
  }>(null as never);

  return { Context, ...Context };
}
