import React, {useState, useEffect, ChangeEvent} from 'react';

type PropsType = {
    updateStatus:(status:string)=> void
    status:string
}

const ProfileStatusWithHook:React.FC<PropsType> = (props) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(()=> {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    }
    const onStatusChanged = (e:ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
            <div>
              <b>Status : </b>  <span onDoubleClick={activateEditMode}>{props.status || '----------'}</span>
            </div>
            }
            {editMode &&
            <div>
                <input onChange={onStatusChanged} autoFocus={true} onBlur={deactivateEditMode} value={status}/>
            </div>
            }
        </div>
    );
}

export default ProfileStatusWithHook;