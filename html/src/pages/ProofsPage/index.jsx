import React, {useState} from 'react';
import cl from './index.module.css'
import AcceptSvg from "../../components/UI/svg/acceptSvg";
import RejectSvg from "../../components/UI/svg/rejectSvg";
import CrossSvg from "../../components/UI/svg/crossSvg";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import Modal from "../../components/Modal/Modal";
import {useDispatch, useSelector} from "react-redux";
import {getNickname} from "../../utils/getNickname";
import RatingService from "../../service/RatingService";
import {fetchForms} from "../../asyncActions/forms";
import useInput from "../../hooks/useInput";
import FormService from "../../service/FormService";



export const Proofs = () => {
    const dispatch = useDispatch();
    //const users = useSelector(state => state.users.users)
    const forms = useSelector(state => state.forms.forms)
    const [visibleForms, setVisibleForms] = useState(forms)

    const [visible, setVisible] = useState(false)
    const [form, setForm] = useState(forms[0])
    const points = useInput('')

    const sendDelete = async (e) => {
        e.preventDefault()
        const sendForm = await FormService.deleteForm(form._id)
        console.log(sendForm)
        dispatch(fetchForms())
        return setVisibleForms(forms.filter(e => e._id !== form._id))
    }

    const sendAccept = async (e) => {
        e.preventDefault()
        const deleteForm = await FormService.deleteForm(form._id)
        console.log(deleteForm)
        const updateUser = await FormService.updateUser(form.discordId, parseInt(points.value))
        console.log(updateUser)
        dispatch(fetchForms())
        setVisible(false)
        return setVisibleForms(forms.filter(e => e._id !== form._id))
    }


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
                    forms.length !== 0 && visibleForms.map(e => (
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
                            <td className={cl.td} style={{paddingRight: '30px'}}>{e.task}</td>
                            <td className={cl.td} style={{paddingRight: '30px'}}>{e.progress}</td>
                            <td className={cl.td} style={{paddingRight: '30px'}}><a className={cl.link} href={`https://${e.proofs}`} target="_blank">{e.proofs}</a></td>
                            <td className={cl.td} style={{paddingRight: '30px'}} onClick={() => setForm(e)}>
                                <AcceptSvg className={cl.check} onClick={() => setVisible(true)}/>
                                <RejectSvg className={cl.check} onClick={sendDelete}/>
                            </td>
                        </tr>
                    ))
                }
            </table>
            {visible && (
                <Modal visible={visible} setVisible={setVisible}>
                    <div className={cl.topModal}>
                        <div className={cl.info}>
                            <img className={cl.avatar} src={`https://cdn.discordapp.com/avatars/${form.discordId}/${form.avatar}?size=640`} alt=""/>
                            <div className={cl.profile}>
                                <p>{getNickname(form.nickname)}</p>
                                <p className={cl.tag}>{form.discord}</p>
                            </div>
                        </div>
                        <CrossSvg onClick={() => setVisible(false)} className={cl.modalCross}/>
                    </div>
                    <div className={cl.modalValue}>
                        <p className={cl.modalTitle}>Milton points</p>
                        <Input {...points}/>
                    </div>
                    <div className={cl.modalBtns} style={{justifyContent: 'center'}}>
                        <Button className={cl.modalBtn} onClick={sendAccept} children={'Сохранить'}/>
                    </div>
                </Modal>
            )}
        </div>
    );
};