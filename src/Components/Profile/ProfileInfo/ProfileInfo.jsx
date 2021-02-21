import React, {useState} from "react";
import s from './profileInfo.module.css'
import Preloader from "../../common/preloader/Preloader";
import ProfileStatusWithHook from "./ProfileStatusWithHook";
import userPhoto from '../../../assets/images/New_user.png'
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    const [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <Preloader />
    }

    const mainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit =  (formData) => {
        saveProfile(formData).then( () => {
            setEditMode(false)
        })
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large || userPhoto} className={s.mainPhoto}/>
                {isOwner && <input type={"file"} onChange={mainPhotoSelected}/>}

                {editMode
                    ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                    : <ProfileData goToEditMode={ ()=> {setEditMode(true)} } profile={profile} isOwner={isOwner}/>
                }

                <ProfileStatusWithHook status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    )
}

const ProfileData = ({profile,isOwner,goToEditMode}) => {
    return ( <div>
        {isOwner && <div><button onClick={goToEditMode}>Edit</button></div> }
        <div>
            <b> Full name :</b> {profile.fullName}
        </div>
        <div>
            <b> Looking for a job :</b> {profile.lookingForAJob ?
            <img src="http://www.animatedgif.net/sitemessages/search/w-search_ani_e0.gif" className={s.jobSearchIcon}/> : 'no'}
        </div>
        {profile.lookingForAJob &&
        <div>
            <b> My profiessional skills :</b> {profile.lookingForAJobDescription}
        </div>
        }
        <div>
            <b> About me :</b> {profile.aboutMe}
        </div>
        <div>
            <b> Contacts :</b> { Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
        })}
        </div>
    </div> )
}


const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contact}><b>{contactTitle}</b>: {contactValue} </div>
}

export default ProfileInfo;