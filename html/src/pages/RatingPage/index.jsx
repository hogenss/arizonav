import React, {useState} from 'react';
import cl from './index.module.css'
import ArrowSvg from "../../components/UI/svg/arrowSvg";
import EditSvg from "../../components/UI/svg/editSvg";
import {sortLevel, sortPoints} from "../../utils/sortUsers";
import Modal from "../../components/Modal/Modal";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import CrossSvg from "../../components/UI/svg/crossSvg";
import {fetchUsers} from "../../asyncActions/users";
import {useDispatch, useSelector} from "react-redux";
import {getNickname} from "../../utils/getNickname";
import useInput from "../../hooks/useInput";
import RatingService from "../../service/RatingService";
import {toast, Toaster} from "react-hot-toast";

export const Rating = () => {
    const dispatch = useDispatch();

    const [activePoints, setActivePoint] = useState(false)
    const [activeLevel, setActiveLevel] = useState(false)

    const [visible, setVisible] = useState(false)
    const [visibleDel, setVisibleDel] = useState(false)


    const user = useSelector(state => state.users.user)
    const users = useSelector(state => state.users.users)

    const [member, setMember] = useState(users[0])

    const [sortedUsers, setSortedUsers] = useState(users)

    const point = useInput(member.points)
    const level = useInput(member.level)

    const sendUpdate = async (e) => {
        e.preventDefault()
        const sendForm = await RatingService.updateUser(member.discordId, parseInt(level.value), parseInt(point.value))
        console.log(sendForm)
        dispatch(fetchUsers())
        setSortedUsers(
            users.map((e) => {
                if(e.discordId === member.discordId)
                    return {
                        _id: member._id,
                        discordId: member.discordId,
                        discordTag: member.discordTag,
                        nickname: member.nickname,
                        avatar: member.avatar,
                        points: parseInt(point.value),
                        level: parseInt(level.value),
                        isAdmin: member.isAdmin,
                        __v: 0
                    }
                else
                    return e
            })
        )
        toast.success('Успешно изменено!')
        return setVisible(false)
    }

    const sendDelete = async (e) => {
        e.preventDefault()
        if(member.discordId === user.discordId) return
        const sendForm = await RatingService.deleteUser(member.discordId)
        console.log(sendForm)
        dispatch(fetchUsers())
        setSortedUsers(users.filter(e => e.discordId !== member.discordId))
        setVisibleDel(false)
        toast.success('Успешно удалён!')
        return setVisible(false)
    }

    return (
        <>

            <div className={cl.Rating}>
                <table className={cl.table}>
                    <tr>
                        <td className={cl.td} style={{padding: '18px 14px'}}>
                            <div className={cl.head}>
                                <p>NickName</p>
                            </div>
                        </td>
                        <td className={cl.td} style={{padding: '18px 14px'}} onClick={() => {sortPoints(sortedUsers, setSortedUsers, activePoints); setActivePoint(!activePoints); setActiveLevel(false);}}>
                            <div className={cl.head}>
                                <p>Milton Points</p>
                                <ArrowSvg className={activePoints ? cl.svg : ''} style={{marginLeft: '10px'}}/>
                            </div>
                        </td>
                        <td className={cl.td} style={{padding: '18px 14px'}} onClick={() => {sortLevel(sortedUsers, setSortedUsers, activeLevel); setActiveLevel(!activeLevel); setActivePoint(false)}}>
                            <div className={cl.head}>
                                <p>BattlePass Level</p>
                                <ArrowSvg className={activeLevel ? cl.svg : ''} style={{marginLeft: '10px'}}/>
                            </div>
                        </td>
                        {
                            user.isAdmin && (
                                <td className={cl.td}></td>
                            )
                        }
                    </tr>
                    {
                        sortedUsers.map(e => (
                            <tr>
                                <td className={cl.td} style={{paddingRight: '50px'}}>
                                    <div className={cl.info}>
                                        <img className={cl.avatar} src={`https://cdn.discordapp.com/avatars/${e.discordId}/${e.avatar}?size=640`} alt=""/>
                                        <div className={cl.profile}>
                                            <p>{getNickname(e.nickname)}</p>
                                            <p className={cl.tag}>{e.discordTag}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className={cl.td} style={{paddingRight: '30px'}}>{e.points}</td>
                                <td className={cl.td}>{e.level}</td>
                                {
                                    user.isAdmin && (
                                        <td className={cl.td}><EditSvg onClick={() => {setVisible(true); setMember(e)}}/></td>
                                    )
                                }
                            </tr>
                        ))
                    }
                </table>
            </div>
            <Modal visible={visible} setVisible={setVisible}>
                <div className={cl.topModal}>
                    <div className={cl.info}>
                        <img className={cl.avatar} src={`https://cdn.discordapp.com/avatars/${member.discordId}/${member.avatar}?size=640`} alt=""/>
                        <div className={cl.profile}>
                            <p>{getNickname(member.nickname)}</p>
                            <p className={cl.tag}>{member.discord}</p>
                        </div>
                    </div>
                    <CrossSvg onClick={() => setVisible(false)} className={cl.modalCross}/>
                </div>
                <div className={cl.modalValue}>
                    <p className={cl.modalTitle}>Milton points</p>
                    <Input {...point}/>
                </div>
                <div className={cl.modalValue}>
                    <p className={cl.modalTitle}>BattlePass level</p>
                    <Input {...level}/>
                </div>
                <div className={cl.modalBtns}>
                    <Button className={cl.modalBtn} onClick={sendUpdate} children={'Сохранить'}/>
                    <Button className={cl.modalBtn} children={'Удалить аккаунт'} onClick={() => setVisibleDel(true)}/>
                </div>
            </Modal>
            <Modal visible={visibleDel} setVisible={setVisibleDel}>
                <div className={cl.topModal}>
                    <div className={cl.info}>
                        <img className={cl.avatar} src={`https://cdn.discordapp.com/avatars/${member.discordId}/${member.avatar}?size=640`} alt=""/>
                        <div className={cl.profile}>
                            <p>{getNickname(member.nickname)}</p>
                            <p className={cl.tag}>{member.discord}</p>
                        </div>
                    </div>
                    <CrossSvg onClick={() => setVisibleDel(false)} className={cl.modalCross}/>
                </div>
                <p className={cl.modalText}>Вы уверены что хотите удалить все данные пользователя?</p>
                <div className={cl.modalBtns} style={{justifyContent: 'center'}}>
                    <Button className={cl.modalBtn} onClick={sendDelete} children={'Удалить аккаунт'}/>
                </div>
            </Modal>
            <Toaster
                position="bottom-left"
                reverseOrder={false}
                toastOptions={{
                    duration: 1500,
                    style: {
                        background: '#202A37',
                        color: '#fff',
                    },

                    success: {
                        duration: 1500,
                        theme: {
                            primary: 'green',
                            secondary: 'black',
                        },
                    },
                }}
            />
        </>
    );
};