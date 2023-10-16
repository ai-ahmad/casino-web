import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import MainMenu from "./components/MainMenu/MainMenu";
import Game from "./components/Game/Game";
import Settings from "./components/Settings/Settings";
import SignUp from "./components/Sign-up/SignUp";
import SignIn from "./components/Sign-in/SignIn";
import Register from "./components/Register/Register";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Roulette from "./components/Game/Roulette";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));

    if (userData && userData.authenticated) {
      navigate("/main-menu");
    }
  }, []);
  const { authenticated } = useAuth();

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Register />} />
        <Route
          path="/main-menu"
          element={<PrivateRoute element={<MainMenu />} />}
        />
        <Route
          path="/settings"
          element={<PrivateRoute element={<Settings />} />}
        />
        <Route path="/game" element={<PrivateRoute element={<Game />} />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route
          path="*"
          element={
            <div className="h-screen bg-gradient-to-br from-slate-900 to-slate-700 flex items-center justify-center flex-col gap-6">
              <p className="text-6xl text-white animate-bounce">
                PAGE NOT FOUND
              </p>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

function PrivateRoute({ element }) {
  const { authenticated } = useAuth();
  return authenticated ? element : <SignIn />;
}

export function AppWrapper() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
