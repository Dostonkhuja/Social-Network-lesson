import React from 'react'
import s from './dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}> Doston </div>
                <div className={s.dialog}> Alisher </div>
                <div className={s.dialog}> Sveta </div>
                <div className={s.dialog}> Bahtiyor </div>
                <div className={s.dialog}> Davron </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How are you</div>
                <div className={s.message}>Yo</div>
            </div>
        </div>
    )
}
export default Dialogs;