interface User {
    id:number,
    name:string
}

interface ProjectProp {
    id:number,
    name:string,
    personId:number,
    organization:string,
    created:number
}

interface ListProp {
    list:ProjectProp[],
    users:User[]
}

export const List = ({list,users}: ListProp) => {
    return <table>
        <thead>
            <tr>
                <th>名称</th>
                <th>负责人</th>
            </tr>
        </thead>
        <tbody>
            {
                list.map(item => <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{users.find(user => user.id == item.personId)?.name || '未知'}</td>
                </tr>)
            }
        </tbody>
    </table>
}