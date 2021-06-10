import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, GetStringKeys, Textarea} from "../../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../../utils/validators/validators";
import React from "react";

const maxLength10 = maxLengthCreator(10)

type PropsType = {

}

export type AddPostFormValuesType = { newPostText:string  }
type AddPosrtFormValuesTypeKeys = GetStringKeys<AddPostFormValuesType>

 const AddPostForm:React.FC<InjectedFormProps<AddPostFormValuesType , PropsType> & PropsType> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            {createField<AddPosrtFormValuesTypeKeys>("Your post" ,"newPostText",[required, maxLength10] ,Textarea)}
            {/*<Field name={'newPostText'} component={Textarea} validate={[required, maxLength10]}*/}
            {/*       placeholder={"PostMessage"}/>*/}
        </div>
        <div>
            <button>Add Post</button>
        </div>
    </form>;
}

export const AddPostReduxForm = reduxForm<AddPostFormValuesType,PropsType>({form:'ProfileAddPostReduxForm'})(AddPostForm)