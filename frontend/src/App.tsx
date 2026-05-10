
import { BrowserRouter, Routes , Route } from "react-router-dom";
import { ClienteDashboardPage } from "./components/ClienteDashboardPage";
import { SignupPage } from "./components/SignupPage";
import { LoginPage } from "./components/LoginPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<ClienteDashboardPage />} />
        <Route path="/SignupPage" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;