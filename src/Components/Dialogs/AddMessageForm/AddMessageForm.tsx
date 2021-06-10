import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {NewMesageFormValuesType} from "../Dialogs";
import React from "react";
import {LoginFormsValuesType} from "../../Login/Login";

const maxLength50 =  maxLengthCreator(50)

type NewMesageFormValuesKeysType =Extract<keyof NewMesageFormValuesType,string>

type PropsType = {}

const AddNewMessage:React.FC<InjectedFormProps<NewMesageFormValuesType , PropsType> & PropsType>
    = (props)=> {
    return(
        <form onSubmit={props.handleSubmit} >
            <div>
                {createField<NewMesageFormValuesKeysType>("new message", 'onAddMessage', [required,maxLength50], Textarea)}
            </div>
            <div>
                <button>send</button>
            </div>
        </form>
    )
}

export const AddNewMessageForm = reduxForm<NewMesageFormValuesType>({form:'MessagesAddNewMessageReduxForm'})(AddNewMessage)