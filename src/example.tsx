import React from "react";
import initStore from "./index";

export type StoreType = {
  count: number;
};

export const { Context, Provider } = initStore<StoreType>();

export function LayerAlpha() {
  const { store, setStore } = React.useContext(Context);
  console.log("LayerAlpha");

  return <div>LayerAlpha {store.count}</div>;
}

export function LayerBeta() {
  const { store, setStore } = React.useContext(Context);

  return (
    <div>
      <button onClick={() => setStore({ count: ++store.count })}>
        LayerBeta
      </button>
    </div>
  );
}

export default function App() {
  const [store, setStore] = React.useState<StoreType>({
    count: 1,
  });

  return (
    <Provider value={{ store, setStore }}>
      <div className="App">
        Title
        <LayerAlpha />
        <LayerBeta />
      </div>
    </Provider>
  );
}
