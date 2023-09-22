import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./auth/pages/loginPage";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { ProjectsList } from "./components/ProjectsList";
import { PortfolioProvider } from "./context/PortfolioProvider";



function App() {
  return (
    <>
    <PortfolioProvider>
      <Navbar/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<LoginPage />}/>
    </Routes>
      
      
    </PortfolioProvider>
    </>
  );
}

export default App;
