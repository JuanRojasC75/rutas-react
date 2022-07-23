import { Navigate, Route, Routes } from "react-router-dom"
import { Pagina1 } from './../Componentes/Pagina1';
import { Pagina2 } from './../Componentes/Pagina2';
import { LoginPage } from './../Login/LoginPage';
import {Navbar} from './../ui/Navbar'
import { Pagina3 } from './../Componentes/Pagina3';

export const AppRouter = () => {
  return (
    <>
    <Navbar/>
        <Routes>
            <Route path="pagina1" element={<Pagina1/>}></Route>
            <Route path="pagina2" element={<Pagina2/>}></Route>
            <Route path="pagina3" element={<Pagina3/>}></Route>
            <Route path="login" element={<LoginPage/>}></Route>
            <Route path="/" element={<Navigate to="/login"/>}></Route>
        </Routes>
    
    </>
  )
}
