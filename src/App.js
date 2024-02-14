import NavBar from "./components/Navbar.jsx";
import { AuthContextProvider } from "./context/AuthContext.js";
import Home from "./pages/Home.jsx";

import { Route, Routes } from "react-router-dom";

import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import Account from "./pages/Account.jsx";
import ProtectRoute from "./components/ProtectRoute.jsx";

function App() {
  return (
    <>
      <AuthContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/account"
            element={
              <ProtectRoute>
                <Account />
              </ProtectRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
