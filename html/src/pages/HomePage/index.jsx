import React, {useState} from 'react';
import cl from './index.module.css'
import NavBar from "../../components/NavBar"
import Select from "../../components/UI/Select/Select";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import img from '../../assets/bp.png'

export const Home = () => {

    const [task, setTask] = useState('')

    const options = [
        {value: 0, name: 'Online'},
        {value: 1, name: 'Forum'},
        {value: 2, name: 'Report'},
        {value: 3, name: 'Event'},
        {value: 4, name: 'Bizwar/Capture'},
        {value: 5, name: 'PUBG/AirDrop/ВЗР'},
        {value: 6, name: 'Случайные события'},
        {value: 7, name: 'Мероприятия внутри фракции'},
        {value: 8, name: 'Media Assistant'},
    ]


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
                            <Input className={cl.input} placeholder='Прогресс выполнения' />
                            <Input className={cl.input} placeholder='Доказательства'/>
                        </div>
                        <Button className={cl.btn} children={"Отправить"}/>
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