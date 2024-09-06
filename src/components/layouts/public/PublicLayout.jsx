import { Outlet } from 'react-router-dom';
import { HeaderPub } from './HeaderPub';

export const PublicLayout = () => {
    return (
        <>
            {/*Navegacion Principal*/}
            <HeaderPub />

            {/*Contenido Principal*/}
            <section className='layout_content'>
                <Outlet />
            </section>
        </>
    )
}
