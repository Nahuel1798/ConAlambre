
import { BrowserRouter, Routes , Route } from "react-router-dom";
import { ClienteDashboardPage } from "./components/ClienteDashboardPage";
import { SignupPage } from "./components/SignupPage";
import { LoginPage } from "./components/LoginPage";
import { RoleSelectorPage } from "./components/RoleSelectorPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<ClienteDashboardPage />} />
        <Route path="/SignupPage" element={<SignupPage />} />
        <Route path="/seleccionar-rol" element={<RoleSelectorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;