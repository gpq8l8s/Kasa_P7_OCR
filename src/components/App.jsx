import { Route, Routes, Navigate } from "react-router-dom";
import { Header } from "../pages/Header"
import { Accueil } from "../pages/Accueil"
import { Logements } from "../pages/Logements"
import { Apropos } from "../pages/Apropos"
import { Footer } from "../pages/Footer"
import { NotFound } from "./NotFound/index"
import "../assets/css/main.css"
import "../assets/css/normalize.css"

function App() {
  return (
    <>
      <Header/>
      <Routes>
          <Route path="" element={<Accueil/>}/>
          <Route path="logements/:id" element={<Logements/>}/>
          <Route path="error" element={<NotFound/>}/>
          <Route path="*" element={<Navigate to="/error"/>}/>
          <Route path="a-propos" element={<Apropos/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
