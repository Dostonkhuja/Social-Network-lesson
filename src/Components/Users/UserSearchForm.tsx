import React from "react";
import {Field, Form, Formik} from "formik";
import {FilterType} from "../../redux/users-reducer";
import {useSelector} from "react-redux";
import {getUsersFilter} from "../../redux/users-selectors";

const userSearchFormValidate = (values: any) => {
    const errors = {};
    return errors;
}

type FriendFormTytpe = "true" | "false" | "null";
type FormType = {
    term:string
    friend:FriendFormTytpe
}


type PropsType = {
    onFilterChagned:(filter:FilterType)=> void
}

export const UsersSearchForm:React.FC<PropsType> = React.memo((props) => {

    const filter = useSelector(getUsersFilter)

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
            enableReinitialize
            initialValues={{term: filter.term,friend:String(filter.friend) as FriendFormTytpe }}
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