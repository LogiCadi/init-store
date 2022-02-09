"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayerBeta = exports.LayerAlpha = exports.Provider = exports.Context = void 0;
var react_1 = __importDefault(require("react"));
var index_1 = __importDefault(require("./index"));
exports.Context = (_a = (0, index_1.default)(), _a.Context), exports.Provider = _a.Provider;
function LayerAlpha() {
    var _a = react_1.default.useContext(exports.Context), store = _a.store, setStore = _a.setStore;
    console.log("LayerAlpha");
    return <div>LayerAlpha {store.count}</div>;
}
exports.LayerAlpha = LayerAlpha;
function LayerBeta() {
    var _a = react_1.default.useContext(exports.Context), store = _a.store, setStore = _a.setStore;
    return (<div>
      <button onClick={function () { return setStore({ count: ++store.count }); }}>
        LayerBeta
      </button>
    </div>);
}
exports.LayerBeta = LayerBeta;
function App() {
    var _a = react_1.default.useState({
        count: 1,
    }), store = _a[0], setStore = _a[1];
    return (<exports.Provider value={{ store: store, setStore: setStore }}>
      <div className="App">
        Title
        <LayerAlpha />
        <LayerBeta />
      </div>
    </exports.Provider>);
}
exports.default = App;
