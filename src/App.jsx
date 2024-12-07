import { Routes as R, Route as RoutePath } from "react-router-dom";
import L from "./components/Login";
import Rg from "./components/Register";
import D from "./components/Dashboard";

function App() {
  return (
    <R>
      <RoutePath path="/" element={<L />} />
      <RoutePath path="/register" element={<Rg />} />
      <RoutePath path="/dashboard" element={<D />} />
    </R>
  );
}

export default App;
