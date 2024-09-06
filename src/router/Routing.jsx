import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PublicLayout } from "../components/layouts/public/PublicLayout";
import { Login } from "../components/user/Login";
import { Register } from "../components/user/Register";

export const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/*Cargar los componenes de la ruta publica*/}
                <Route path='/' element={<PublicLayout/>}>
                    <Route index element={<Login />} />
                    <Route path='login' element={<Login />} />
                    <Route path='registro' element={<Register />} />
                </Route>

                {/*Cargar los componenes de la ruta privada*/}

            </Routes>
        </BrowserRouter>
    )
}
