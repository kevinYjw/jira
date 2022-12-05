import React from 'react';

interface User {
    id:number,
    name:string
}

interface SearchPanelProp {
    users:User[],
    param:{
        name:string,
        personId:string
    },
    setParam:(param: SearchPanelProp['param']) => void
}

export const SearchPanel = ({param,setParam,users}: SearchPanelProp) => {
    return <form action="">
        <div>
            <input type="text" value={param.name} onChange={event => setParam({
                ...param,
                name:event.target.value
            })}/>
            <select value={param.personId} onChange={event => setParam({
                ...param,
                personId:event.target.value
            })}>
                <option value={''}>负责人</option>
                {
                    users.map(user => <option key={user.id} value={user.id}>{user.name}</option>)
                }
            </select>
        </div>
    </form>
}