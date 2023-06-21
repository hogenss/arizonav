import React, {useState} from 'react';
import cl from './index.module.css'
import {Link} from "react-router-dom";
import NavBar from "../../components/NavBar";
import ArrowSvg from "../../components/UI/svg/arrowSvg";

export const Rating = () => {

    const users = [
        {nickname: "Roman Stark", discord: 'pinz.#0', points: 100, level: 1},
        {nickname: "Noah Light", discord: 'hogenss#0', points: 400, level: 5},
        {nickname: "Christopher Wane", discord: 'alone#0', points: 1000, level: 2}
    ]

    const [sortedUsers, setSortedUsers] = useState(users)




    return (
        <>
            <NavBar />
            <div className={cl.Rating}>
                <table className={cl.table}>
                    <tr className={cl.tr}>
                        <td className={cl.td} style={{paddingRight: '50px'}}>NickName <ArrowSvg/></td>
                        <td className={cl.td} style={{paddingRight: '30px'}}>Milton Points <ArrowSvg/></td>
                        <td className={cl.td}>BattlePass Level <ArrowSvg/></td>
                        <td className={cl.td}></td>
                    </tr>
                    {
                        sortedUsers.map(e => (
                            <tr>
                                <td className={cl.td} style={{paddingRight: '50px'}}>{e.nickname}</td>
                                <td className={cl.td} style={{paddingRight: '30px'}}>{e.points}</td>
                                <td className={cl.td}>{e.level}</td>
                                <td className={cl.td}>99</td>
                            </tr>
                        ))
                    }
                </table>
            </div>
        </>
    );
};