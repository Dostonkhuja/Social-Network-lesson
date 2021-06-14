import React, {useEffect} from 'react'
import User from "./User";
import {Pagination} from 'antd';
import style from './users.module.css'
import {UsersSearchForm} from "./UserSearchForm";
import {FilterType, follow, requestUsers, unfollow} from "../../redux/users-reducer";
import {useDispatch, useSelector} from "react-redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getPageSize,
    getTotalUsersCount,
    getUsers,
    getUsersFilter
} from "../../redux/users-selectors";
import {useHistory} from 'react-router-dom';
import * as queryString from "querystring";

type PropsType = {}

type QueryParamsType = { term?: string; page?: string; friend?: string }

export const Users: React.FC<PropsType> = (props) => {

    const followingInProgress = useSelector(getFollowingInProgress)
    const totalUsersCount = useSelector(getTotalUsersCount)
    const currentPage = useSelector(getCurrentPage)
    const pageSize = useSelector(getPageSize)
    const filter = useSelector(getUsersFilter)
    const users = useSelector(getUsers)

    const dispatch = useDispatch()
    const history = useHistory()


    useEffect(() => {
        const parsed = queryString.parse(history.location.search.substr(1)) as QueryParamsType

        let actualPage = currentPage
        let actualFilter = filter

        if (!!parsed.page) actualPage = Number(parsed.page)

        if (!!parsed.term) actualFilter = {...actualFilter, term: parsed.term as string}

        switch(parsed.friend) {
            case "null":
                actualFilter = {...actualFilter, friend: null}
                break;
            case "true":
                actualFilter = {...actualFilter, friend: true}
                break;
            case "false":
                actualFilter = {...actualFilter, friend: false}
                break;
        }

        dispatch(requestUsers(actualPage, pageSize, actualFilter))
    }, [])


    useEffect(() => {
        const query: QueryParamsType = {}

        if (!!filter.term) query.term = filter.term
        if (filter.friend !== null) query.friend = String(filter.friend)
        if (currentPage !== 1) query.page = String(currentPage)

        history.push({
            pathname: '/users',
            search: queryString.stringify(query)
        })
    }, [filter, currentPage])

    const onPageChanged = (pageNumber: number) => {
        dispatch(requestUsers(pageNumber, pageSize, filter))
    }
    const onFilterChagned = (filter: FilterType) => {
        dispatch(requestUsers(1, pageSize, filter))
    }

    const changeFollow = (userId: number) => {
        dispatch(follow(userId))
    }

    const CHangeUnfollow = (userId: number) => {
        dispatch(unfollow(userId))
    }

    return <div>

        <UsersSearchForm onFilterChagned={onFilterChagned}/>

        <div className={style.pagination}>
            <Pagination showQuickJumper defaultCurrent={currentPage} total={totalUsersCount} onChange={onPageChanged}/>
        </div>

        <div>
            {users.map(u => <User user={u} key={u.id}
                                  followingInProgress={followingInProgress}
                                  unfollow={CHangeUnfollow}
                                  follow={changeFollow}
            />)}
        </div>
    </div>
}





