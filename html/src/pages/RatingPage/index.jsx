import React, {useState} from 'react';
import cl from './index.module.css'
import {Link} from "react-router-dom";
import NavBar from "../../components/NavBar";
import ArrowSvg from "../../components/UI/svg/arrowSvg";
import EditSvg from "../../components/UI/svg/editSvg";
import {sortLevel, sortPoints} from "../../utils/sortUsers";
import Modal from "../../components/Modal/Modal";

export const Rating = () => {

    const users = [
        {nickname: "Roman Stark", discord: 'pinz.#0', points: 100, level: 1, avatar: "https://cdn.discordapp.com/avatars/466833746113462282/a_ef607baf06cfd94fdfb61ceee3a94b0f.gif?size=128"},
        {nickname: "Noah Light", discord: 'hogenss#0', points: 400, level: 5, avatar: "123"},
        {nickname: "Christopher Wane", discord: 'alone#0', points: 1000, level: 2, avatar: "123"}
    ]

    const [sortedUsers, setSortedUsers] = useState(users)

    const [activePoints, setActivePoint] = useState(false)
    const [activeLevel, setActiveLevel] = useState(false)

    const [visible, setVisible] = useState(false)

    const isAdmin = true;



    return (
        <>
            <NavBar />
            <div className={cl.Rating}>
                <table className={cl.table}>
                    <tr>
                        <td className={cl.td} style={{padding: '18px 14px'}}>
                            <div className={cl.head}>
                                <p>NickName</p>
                            </div>
                        </td>
                        <td className={cl.td} style={{padding: '18px 14px'}} onClick={() => {sortPoints(users, setSortedUsers, activePoints); setActivePoint(!activePoints); setActiveLevel(false);}}>
                            <div className={cl.head}>
                                <p>Milton Points</p>
                                <ArrowSvg className={activePoints ? cl.svg : ''} style={{marginLeft: '10px'}}/>
                            </div>
                        </td>
                        <td className={cl.td} style={{padding: '18px 14px'}} onClick={() => {sortLevel(users, setSortedUsers, activeLevel); setActiveLevel(!activeLevel); setActivePoint(false)}}>
                            <div className={cl.head}>
                                <p>BattlePass Level</p>
                                <ArrowSvg className={activeLevel ? cl.svg : ''} style={{marginLeft: '10px'}}/>
                            </div>
                        </td>
                        {
                            isAdmin && (
                                <td className={cl.td}></td>
                            )
                        }
                    </tr>
                    {
                        sortedUsers.map(e => (
                            <tr>
                                <td className={cl.td} style={{paddingRight: '50px'}}>
                                    <div className={cl.info}>
                                        <img className={cl.avatar} src={e.avatar} alt=""/>
                                        <div className={cl.profile}>
                                            <p>{e.nickname}</p>
                                            <p className={cl.tag}>{e.discord}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className={cl.td} style={{paddingRight: '30px'}}>{e.points}</td>
                                <td className={cl.td}>{e.level}</td>
                                {
                                    isAdmin && (
                                        <td className={cl.td}><EditSvg onClick={() => setVisible(true)}/></td>
                                    )
                                }
                            </tr>
                        ))
                    }
                </table>
            <Modal visible={visible} setVisible={setVisible}>
                1231
            </Modal>
            </div>
        </>
    );
};