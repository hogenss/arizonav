import React, {useContext} from 'react';
import cl from './index.module.css'
import {NavLink, useNavigate} from "react-router-dom";
//import {linksInfo, adminLinksInfo} from "../../utils/BarLinks";
import avatar from '../../assets/img.png'
import {useSelector} from "react-redux";
import {getNickname} from "../../utils/getNickname";

const NavBar = () => {
    const history = useNavigate()
    const setActiveLink = ({isActive}) => isActive ? `${cl.link} ${cl.active}` : cl.link
    const user = useSelector(state => state.users.user)

    return (
        <div className={cl.bar}>
            <img alt={''} onClick={() => history("/home")} src="https://i.imgur.com/UW6E4Rn.png" className={cl.brandLogo}/>
            <div className={cl.links}>
                <NavLink to={'/home'} className={setActiveLink} end>
                    <span>Главная</span>
                </NavLink>
                <NavLink to={'/rating'} className={setActiveLink} end>
                    <span>Рейтинг</span>
                </NavLink>
                {
                    user.isAdmin && (
                        <NavLink to={'/proofs'} className={setActiveLink} end>
                            <span>Проверка доказательств</span>
                        </NavLink>
                    )
                }
            </div>
            <div className={cl.profile}>
                <img src={`https://cdn.discordapp.com/avatars/${user.discordId}/${user.avatar}?size=640`} className={cl.profileAvatar}/>
                <span className={cl.profileName}>{getNickname(user.nickname)}</span>
            </div>
        </div>
    );
};

export default NavBar;