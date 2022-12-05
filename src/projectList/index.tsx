import React from 'react';
import qs from 'qs';
import { useState, useEffect} from "react";

import {List} from './list';
import {SearchPanel} from './searchPanel';
import {cleanObject,useMount,useDebounce} from '../util'

export const ProjectListScreen = () => {
    const [param,setParam] = useState({
        name:'',
        personId:''
    })
    const debouncedValue = useDebounce(param,200);
    const [users,setUsers] = useState([])
    const [list,setList] = useState([]);
    const apiUrl = process.env.REACT_APP_API_URL;
    
    useEffect(() => {
        fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debouncedValue))}`).then(async res => {
            if(res.ok){
                setList(await res.json())
            }
        })
    }, [debouncedValue])

    useMount(() => {
        fetch(`${apiUrl}/users`).then(async res => {
            if(res.ok){
                setUsers(await res.json())
            }
        })
    })


    return <div>
        <SearchPanel param={param} setParam={setParam} users={users}/>
        <List list={list} users={users}/>
    </div>
}