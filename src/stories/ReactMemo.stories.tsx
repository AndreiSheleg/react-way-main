import React, {useState} from "react";

export default {
    title: 'React.memo demo',
}

const NewMessagesCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}

const UsersSecret = (props: { users: string[] }) => {
    return <div>{
        props.users.map((el, index) => <div key={index}>{el}</div>)
    }</div>
}
const Users = React.memo(UsersSecret)

export const Example1 = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dim', 'Valera', 'Artem'])
    const addUser = () => {
        const newUser = 'Katya ' + new Date().getTime()
        setUsers([newUser, ...users])
    }
    return <>
        <button onClick={()=> {setCounter(counter+1)}}>+</button>
        <button onClick={addUser}>add user</button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </>
}