import {Outlet} from 'react-router-dom';
import NavBar from '../layout/NavBar';

export default function Root() {
    return <><NavBar>
    <Outlet />
    </NavBar>
    </>
}