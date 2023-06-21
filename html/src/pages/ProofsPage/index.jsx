import React, {useState} from 'react';
import cl from './index.module.css'
import AcceptSvg from "../../components/UI/svg/acceptSvg";
import RejectSvg from "../../components/UI/svg/rejectSvg";
import CrossSvg from "../../components/UI/svg/crossSvg";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import Modal from "../../components/Modal/Modal";



export const Proofs = () => {

    const users = [
        {nickname: "Roman Stark", discord: 'pinz.#0', task: "Media", progress: 1, proofs: "imgur.com", avatar: "https://cdn.discordapp.com/avatars/466833746113462282/a_ef607baf06cfd94fdfb61ceee3a94b0f.gif?size=128"},
        {nickname: "Noah Light", discord: 'hogenss#0', task: "Report", progress: 1, proofs: "imgur.com",  avatar: "123"},
        {nickname: "Christopher Wane", discord: 'alone#0', task: "Forum", progress: 1, proofs: "imgur.com",  avatar: "123"}
    ]

    const [visible, setVisible] = useState(false)
    const [member, setMember] = useState({})

    return (
        <div className={cl.Proofs}>
            <table className={cl.table}>
                <tr>
                    <td className={cl.td} style={{padding: '18px 14px'}}>
                        <p>NickName</p>
                    </td>
                    <td className={cl.td} style={{padding: '18px 14px'}} >
                        <p>Задание</p>
                    </td>
                    <td className={cl.td} style={{padding: '18px 14px'}} >
                        <p>Прогресс</p>
                    </td>
                    <td className={cl.td}>
                        <p>Доказательства</p>
                    </td>
                    <td className={cl.td}>
                        <p></p>
                    </td>
                </tr>
                {
                    users.map(e => (
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
                            <td className={cl.td} style={{paddingRight: '30px'}}>{e.task}</td>
                            <td className={cl.td} style={{paddingRight: '30px'}}>{e.progress}</td>
                            <td className={cl.td} style={{paddingRight: '30px'}}><a className={cl.link} href={`https://${e.proofs}`} target="_blank">{e.proofs}</a></td>
                            <td className={cl.td} style={{paddingRight: '30px'}}>
                                <AcceptSvg className={cl.check} onClick={() => {setMember(e); setVisible(true)}}/>
                                <RejectSvg className={cl.check}/>
                            </td>
                        </tr>
                    ))
                }
            </table>
            <Modal visible={visible} setVisible={setVisible}>
                <div className={cl.topModal}>
                    <div className={cl.info}>
                        <img className={cl.avatar} src={member.avatar} alt=""/>
                        <div className={cl.profile}>
                            <p>{member.nickname}</p>
                            <p className={cl.tag}>{member.discord}</p>
                        </div>
                    </div>
                    <CrossSvg onClick={() => setVisible(false)} className={cl.modalCross}/>
                </div>
                <div className={cl.modalValue}>
                    <p className={cl.modalTitle}>Milton points</p>
                    <Input defaultValue={member.points}/>
                </div>
                <div className={cl.modalBtns} style={{justifyContent: 'center'}}>
                    <Button className={cl.modalBtn} children={'Сохранить'}/>
                </div>
            </Modal>
        </div>
    );
};