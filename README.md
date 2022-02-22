# init-store

use context with easy library in React function component

## usage

1. initialize store in base

```tsx
import initStore from "init-store";

export const { Context, Provider } = initStore();
```

2. use in function component

```tsx
export default function App() {
  // store controller with store & setStore
  const [store, setStore] = React.useState({ count: 1 });

  return (
    // provider
    <Provider value={{ store, setStore }}>
      <div className="App">
        Title
        <LayerAlpha />
        <LayerBeta />
      </div>
    </Provider>
  );
}
```

3. use in son component

```tsx
export function LayerAlpha() {
  const { store, setStore } = React.useContext(Context);

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
```

- overview

```tsx
import React from "react";

export type StoreType = {
  count: number;
};

export const { Context, Provider } = initStore<StoreType>();

export function LayerAlpha() {
  const { store, setStore } = React.useContext(Context);

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
```

- avoid global rendering

```jsx
export function LayerBeta() {
  const { store, setStore } = React.useContext(Context);

  return useMemo(
    () => (
      <div>
        LayerBeta {store.beta}
        {(() => console.log("LayerBeta Render"))()}
      </div>
    ),
    [store.beta]
  );
}
```
