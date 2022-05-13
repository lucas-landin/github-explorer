import { render } from "react-dom";
import "./styles/global.scss";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { RepositoryList } from "./components/RepositoryList";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/RepositoryList" element={<RepositoryList />} />
    </Routes>
  </BrowserRouter>
);
