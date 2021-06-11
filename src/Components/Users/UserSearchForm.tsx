import React from "react";
import {Field, Form, Formik} from "formik";
import {FilterType} from "../../redux/users-reducer";

const userSearchFormValidate = (values: any) => {
    const errors = {};
    return errors;
}

type FormType = {
    term:string
    friend:"true" | "false" | "null"
}


type PropsType = {
    onFilterChagned:(filter:FilterType)=> void
}

export const UsersSearchForm:React.FC<PropsType> = React.memo((props) => {

    const submit = (values: FormType, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
        const filter:FilterType = {
            term:values.term,
            friend:  values.friend === "null"? null : values.friend === 'true' ? true: false
        }
        props.onFilterChagned(filter)
        setSubmitting(false)
    }

    return <div>
        <Formik
            initialValues={{term: '',friend:"null"}}
            validate={userSearchFormValidate}
            onSubmit={submit}
        >
            {({isSubmitting}) => (
                <Form>
                    <Field type="text" name="term"/>

                    <Field type="friend" as="select" name="friend">
                        <option value="null">All</option>
                        <option value="true">Only Followed</option>
                        <option value="false">Only Unfollowed</option>
                    </Field>
                    <button type="submit" disabled={isSubmitting}>Find</button>
                </Form>
            )}
        </Formik>
    </div>
})