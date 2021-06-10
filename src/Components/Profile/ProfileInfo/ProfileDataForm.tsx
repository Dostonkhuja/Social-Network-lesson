import React from "react";
import s from './profileInfo.module.css'
import {createField, GetStringKeys, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {InjectedFormProps, reduxForm} from "redux-form";
import style from "../../common/FormsControls/formsControls.module.css";
import {ProfileType} from "../../../types/types";

type PropsType = {
    profile:ProfileType
}

type ProfileTypeKeys = GetStringKeys<ProfileType>

const ProfileDataForm:React.FC<InjectedFormProps<ProfileType, PropsType> & PropsType> = ({handleSubmit,profile,error}) => {
    return <form onSubmit={handleSubmit}>
        <div> <button>save</button> </div>
        {error && <div className={style.formSummaryError}>{error}</div>}
        <div>
            <b> Full name </b>: {createField<ProfileTypeKeys>("Full name","fullName", [],Input)}
        </div>
        <div>
            <b> Looking for a job </b> : { createField<ProfileTypeKeys>("","lookingForAJob", [],Input, {type:"checkbox"}) }
        </div>

        <div>
            <b> My profiessional skills :</b>
            { createField<ProfileTypeKeys>("My profiessional skills","lookingForAJobDescription", [],Textarea, ) }
        </div>

        <div>
            <b> About me :</b>
            { createField<ProfileTypeKeys>("About me","aboutMe", [],Textarea, ) }
        </div>
        <div>
            <b> Contacts :</b> { Object.keys(profile.contacts).map(key => {
            return <div key={key} className={s.contact}>
                {/*todo: create some solution for enbedded objects*/}
                <b>{key} {createField(key,"contacts." + key, [],Input)} </b>
            </div>
        })}
        </div>
    </form>
}
const ProfileDataReduxForm = reduxForm<ProfileType, PropsType>({form: "edit-profile"})(ProfileDataForm)

export default ProfileDataReduxForm;
