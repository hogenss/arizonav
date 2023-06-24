import React, {useState} from 'react';
import cl from './index.module.css'
import Select from "../../components/UI/Select/Select";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import img from '../../assets/bp.png'
import FormService from "../../service/FormService";
import {useDispatch, useSelector} from "react-redux";
import useInput from "../../hooks/useInput";
import {fetchForms} from "../../asyncActions/forms";
import Loader from "../../components/UI/Loader/Loader";
import {toast, Toaster} from "react-hot-toast";

export const Home = () => {
    const dispatch = useDispatch();
    const [task, setTask] = useState({value: null, name: null})
    const [selected, setSelected] = useState({value: null, name: null})
    const progress = useInput('')
    const proofs = useInput('')
    const isLoading = useSelector(state => state.users.isLoading)
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
        if(task === null) return toast.error('Задание не выбрано!')
        if(progress.value === '') return toast.error('Прогресс не заполнен!')
        if(proofs.value === '') return toast.error('Доказательства не прикреплены!')
        const sendForm = await FormService.sendForm(user._id, user.discordId, user.discordTag, user.nickname, user.avatar, user.points, task, progress.value, proofs.value)
        dispatch(fetchForms())
        setSelected({value: null, name: null})
        progress.setValue('')
        proofs.setValue('')
        toast.success('Успешно отправлено!')
    }

    return (
        isLoading ? <Loader/> : (
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
                                    selected={selected}
                                    setSelected={setSelected}
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
                <Toaster
                    position="bottom-left"
                    reverseOrder={false}
                    toastOptions={{
                        duration: 3000,
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
        )
    );
};