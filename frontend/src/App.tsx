import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ClienteDashboardPage } from "./pages/ClienteDashboardPage";
import { SignupPage } from "./pages/SignupPage";
import { LoginPage } from "./pages/LoginPage";
import { RoleSelectorPage } from "./pages/RoleSelectorPage";
import { CompletarPerfilPage } from "./pages/CompletarPerfilPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<ClienteDashboardPage />} />
        <Route path="/SignupPage" element={<SignupPage />} />
        <Route path="/seleccionar-rol" element={<RoleSelectorPage />} />
        <Route path="/completar-perfil" element={<CompletarPerfilPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

