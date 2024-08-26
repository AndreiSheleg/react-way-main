import React, {useCallback, useMemo, useState} from "react";

export default {
    title: 'useMemo',
}

export const DifficultCountingExample = () => {
    const [x, setX] = useState<number>(5)
    const [y, setY] = useState<number>(5)

    let resultX = 1
    let resultY = 1

    resultX = useMemo(() => {
        let tempResultX = 1
        for (let i = 1; i <= x; i++) {
            let fake = 0
            while (fake < 100000) {
                fake++
                const fakeRandom = Math.random()
            }
            tempResultX = tempResultX * i
        }
        return tempResultX
    }, [x]);


    for (let i = 1; i <= y; i++) {
        resultY = resultY * i
    }

    return <>
        <input value={x} onChange={(event) => setX(parseInt(event.currentTarget.value, 10))}/>
        <input value={y} onChange={(event) => setY(parseInt(event.currentTarget.value, 10))}/>
        <hr/>
        <div>
            Result for x: {resultX}
        </div>
        <div>
            Result for y: {resultY}
        </div>
    </>
}


const UsersSecret = (props: { users: string[] }) => {
    console.log('вызов компоненты UsersSecret: ')
    return <div>{
        props.users.map((el, index) => <div key={index}>{el}</div>)
    }</div>
}
const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {

    console.log('вызов компоненты HelpsToReactMemo: ')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dim', 'Valera', 'Artem'])

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [users])

    const addUser = () => {
        const newUser = 'Katya ' + new Date().getTime()
        setUsers([newUser, ...users])
    }

    return <>
        <button onClick={() => {
            setCounter(counter + 1)
        }}>+
        </button>
        <button onClick={() => addUser()}>addUser</button>
        {counter}
        <Users users={newArray}/>
    </>
}

export const LikeUseCallback = () => {

    console.log('вызов компоненты LikeUseCallback: ')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'JS', 'CSS', 'HTML'])


    const memoizedAddBook = useMemo(() => {
        return () => {
            const newUser = 'Angular ' + new Date().getTime()
            setBooks([newUser, ...books])
        }
    }, [books])

    const memoizedAddBook2 = useCallback(() => {
            const newUser = 'Angular ' + new Date().getTime()
            setBooks([newUser, ...books])
        }, [books])

    return <>
        <button onClick={() => {
            setCounter(counter + 1)
        }}>+
        </button>

        {counter}
        <Book addBook={memoizedAddBook2}/>
    </>
}

type BooksSecretPropsType = { addBook: () => void }
const BooksSecret = (props: BooksSecretPropsType) => {
    console.log('вызов компоненты BooksSecret: ')
    return <div>
        <button onClick={() => props.addBook()}>add book</button>
    </div>
}
const Book = React.memo(BooksSecret)