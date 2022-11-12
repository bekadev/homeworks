import React from 'react'
import {AffairType} from "./HW2";
import style from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div>
            <div className={style.item}>
                <span >{props.affair.name} </span>
                <span>{props.affair.priority} </span>
                <button className={style.btn_delete} onClick={deleteCallback}>X</button>
            </div>
        </div>
    )
}

export default Affair
