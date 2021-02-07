import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";

const maxLength50 =  maxLengthCreator(50)

const AddNewMessage = (props)=> {
    return(
        <form onSubmit={props.handleSubmit} >
            <div>
                <Field name={'onAddMessage'} component={Textarea} validate={[required ,maxLength50]} placeholder='new message'></Field>
            </div>
            <div>
                <button>send</button>
            </div>
        </form>
    )
}

export const AddNewMessageForm = reduxForm({form:'MessagesAddNewMessageReduxForm'})(AddNewMessage)