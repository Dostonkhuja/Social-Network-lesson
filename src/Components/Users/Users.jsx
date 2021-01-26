import React from 'react'
import s from './users.module.css'

const Users = (props) => {
    if (props.users.length===0){
        props.setUsers([
            {
                id: 1, photoUrl: 'https://tse2.mm.bing.net/th?id=OIP.SAd3VL5GGjymM7tAOL0JDwHaHa&pid=Api&P=0&w=300&h=300',
                followed: true, name: 'Kaxa', status: 'volk po jizni', location: {city: 'Sochi', country: 'Russia'}
            },
            {
                id: 2, photoUrl: 'https://tse1.mm.bing.net/th?id=OIP.5nRu5gYO0E6HOX5NCVI77QHaE8&pid=Api&P=0&w=279&h=187',
                followed: false, name: 'Sergo', status: 'ti kak menya nashol?', location: {city: 'Sochi', country: 'Russia'}
            },
            {
                id: 3, photoUrl: 'http://klizmatv.ru/assets/KlizmaTV/img/akteri/erevan.jpg',
                followed: true, name: 'Erevan', status: 'fashmaki oni', location: {city: 'Sochi', country: 'Russia'}
            }
        ])
    }

    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div> <img src={u.photoUrl} className={s.userPhoto}/> </div>
                        <div>
                            {u.followed
                                ? <button onClick={()=>{props.unfollow(u.id)}}>Unfollow</button>
                                : <button onClick={()=>{props.follow(u.id)}}>Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <div>{u.name}</div>
                    </span>
                    <span>
                        <div>{u.status}</div>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;