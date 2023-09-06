import "./App.css";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Track from "./components/Track";
import Search from "./components/Search";
import { Routes, Route } from "react-router";

export default function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <Sidebar />
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/search" element={<Search />} />
        </Routes>
        <Track />
      </div>
    </div>
  );
}
