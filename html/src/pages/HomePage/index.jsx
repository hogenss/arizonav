import React, {useState} from 'react';
import cl from './index.module.css'
import NavBar from "../../components/NavBar"
import Select from "../../components/UI/Select/Select";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import img from '../../assets/bp.png'
import RatingService from "../../service/RatingService";
import {fetchUsers} from "../../asyncActions/users";
import FormService from "../../service/FormService";
import {useDispatch, useSelector} from "react-redux";
import useInput from "../../hooks/useInput";
import {fetchForms} from "../../asyncActions/forms";

export const Home = () => {
    const dispatch = useDispatch();

    const [task, setTask] = useState('')
    const progress = useInput('')
    const proofs = useInput('')

    const options = [
        {value: 'Online', name: 'Online'},
        {value: 'Forum', name: 'Forum'},
        {value: 'Report', name: 'Report'},
        {value: 'Event', name: 'Event'},
        {value: 'Bizwar/Capture', name: 'Bizwar/Capture'},
        {value: 'PUBG/AirDrop/ВЗР', name: 'PUBG/AirDrop/ВЗР'},
        {value: 'Случайные события', name: 'Случайные события'},
        {value: 'Мероприятия внутри фракции', name: 'Мероприятия внутри фракции'},
        {value: 'Media Assistant', name: 'Media Assistant'},
    ]

    const user = useSelector(state => state.users.user)

    const sendForm = async (e) => {
        e.preventDefault()
        const sendForm = await FormService.sendForm(user._id, user.discordId, user.discordTag, user.nickname, user.avatar, task, progress.value, proofs.value)
        console.log(sendForm)
        dispatch(fetchForms())
    }

    return (
        <>
            <div className={cl.home}>
                <div className={cl.container}>
                    <div className={cl.form}>
                        <p className={cl.titel}>Заполнение формы</p>
                        <div className={cl.formControlers}>
                            <Select
                                className={cl.select}
                                options={options}
                                name={'Выполненное задание'}
                                defaultValue={{value: null, name: null}}
                                onChange={selected => setTask(selected)}
                            />
                            <Input {...progress} className={cl.input} placeholder='Прогресс выполнения' />
                            <Input {...proofs} className={cl.input} placeholder='Доказательства'/>
                        </div>
                        <Button onClick={sendForm} className={cl.btn} children={"Отправить"}/>
                    </div>
                    <div className={cl.info}>
                        <p className={cl.titel}>Информация</p>
                        <img src={img} className={cl.img} alt=""/>
                    </div>
                </div>
            </div>
        </>

    );
};