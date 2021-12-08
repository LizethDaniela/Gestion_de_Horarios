import React from 'react'
import { MdCancel, MdLockOpen } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { authLogoutAsync } from '../../../actions/auth';
import "./DashSty.css"


export const DashBoardComponent = ({ children, ...rest }) => {
    const history = useNavigate();
    const {auth} = useSelector(state => state);
    const {user} = auth;
    const dispatch = useDispatch();
    const handlerLogout = () => {
        dispatch(authLogoutAsync());
    };
    return (
        user == null? (<>{ history("/")}</>): (<>
            
            <div className="sidebar">
                <header> Administrador</header>
                <ul>
                    <li><Link to="/admin/registerdocentes">Docentes</Link></li>
                    <li><Link to="/admin/registerestudents">Estudiantes</Link></li>
                    <li><Link to="/admin/materias">Materias</Link></li>
                    <li><Link to="/admin/asignarmaterias">Asignar Materias</Link></li>
                    <li><Link to="/admin/ambientes">Ambientes</Link></li>
                    <li><Link to="/admin/horarios">Horarios</Link></li>
                  
                    <li onClick={handlerLogout}><a href="#"> <MdLockOpen /> Logout</a></li>
                </ul>
            </div>
            
        </>)
    );
};