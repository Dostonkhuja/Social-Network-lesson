import React, {useState} from 'react';

const ProfileStatusWithHook = (props) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    }
    const onStatusChanged = (e) => {
        setStatus(e.currentTarget.value)
    }

    // componentDidUpdate(prevProps, prevState) {
    //     if (prevProps.status !== this.props.status){
    //         this.setState({
    //             status:this.props.status
    //         })
    //     }
    // }

    return (
        <div>
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>{props.status || '----------'}</span>
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