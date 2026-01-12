import React from "react";
import { useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

export default function App() {
  const [page, setPage] = useState("login");
  const [token, setToken] = useState(localStorage.getItem("token"));

  if (token)
    return <Dashboard token={token} logout={() => { localStorage.clear(); setToken(null); }} />;

  return page === "login" ? (
    <Login onLoggedIn={setToken} goRegister={() => setPage("register")} />
  ) : (
    <Register goLogin={() => setPage("login")} />
  );
}
