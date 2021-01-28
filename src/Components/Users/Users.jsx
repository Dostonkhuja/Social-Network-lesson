import React from 'react'
import s from './users.module.css'
import * as axios from "axios";
import userPhoto from '../../assets/images/New_user.png'

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                response.data.totalCount = 100;     // HOZIRCHA TURIBTI, KEYIN O'CHIRIB TASHLANSIN
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }
    // response.data.totalCount=100  //vaqtinchalik users bo'limida raqam ko'payoib ketmasligi uchun, so'ng buni o'chirib tashlang
    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return <div>

            {pages.map(p => {
                return <span className={this.props.currentPage === p && s.selectedPage}
                             onClick={(event)=>{this.onPageChanged(p)}}> {p} </span>
            })}

            {
                this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div> <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto}/> </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    this.props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    this.props.follow(u.id)
                                }}>Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <div>{u.name}</div>
                    </span>
                    <span>
                        <div>{u.status}</div>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </div>)
            }
        </div>
    }
}

export default Users;