import React from 'react';
import cl from './index.module.css'
import {Link} from "react-router-dom";
import NavBar from "../../components/NavBar"
import Select from "../../components/UI/Select/Select";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";

export const Home = () => {
    return (
        <>
            <NavBar />
            <div className={cl.home}>
                <div className={cl.container}>
                    <div className={cl.form}>
                        <p className={cl.formTitel}>Заполнение формы</p>
                        {/*<Select />*/}
                        <Input />
                        <Input/>
                        <Button/>
                    </div>
                    <div className={cl.info}></div>
                </div>
            </div>
        </>

    );
};