import React, {useContext} from 'react';
import cl from './index.module.css'
import {NavLink} from "react-router-dom";
//import {linksInfo, adminLinksInfo} from "../../utils/BarLinks";
import logo from '../../assets/logo.png'
import avatar from '../../assets/img.png'
//import {Context} from "../../index";

const NavBar = () => {

    //const {store} = useContext(Context)

    const setActiveLink = ({isActive}) => isActive ? `${cl.link} ${cl.active}` : cl.link
    const isAdmin = true;

    return (
        <div className={cl.bar}>
            <img alt={''} src={logo} className={cl.brandLogo}/>
            <div className={cl.links}>
                <NavLink to={'/home'} className={setActiveLink} end>
                    <span>Главная</span>
                </NavLink>
                <NavLink to={'/rating'} className={setActiveLink} end>
                    <span>Таблица</span>
                </NavLink>
                {
                    isAdmin && (
                        <NavLink to={'/proofs'} className={setActiveLink} end>
                            <span>Проверка доказательств</span>
                        </NavLink>
                    )
                }
            </div>
            <div className={cl.profile}>
                <img src={avatar} className={cl.profileAvatar}/>
                <span className={cl.profileName}>Roman Stark</span>
            </div>
        </div>
    );
};

export default NavBar;