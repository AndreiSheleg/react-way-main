import React, {useEffect, useMemo, useState} from "react";

export default {
    title: 'useEffect demo',
}
export const SimpleExample = () => {
    const [fake, setFake] = useState(10000)
    const [counter, setCounter] = useState(100)
    console.log('SimpleExample')

// useEffect срабатывает только после отображения разметки на странице
    useEffect(() => {
        console.log('useEffect every render')
        document.title = counter.toString()
    })

    useEffect(() => {
        console.log('useEffect only first render (аналог componentDidMount')
        document.title = counter.toString()
    }, [])

    useEffect(() => {
        console.log('useEffect only first render and every counter change')
        document.title = counter.toString()
    }, [counter])

    return <>
        Hello, {counter} {fake}!
        <button onClick={()=> setFake(fake + 10)}>fake+</button>
        <button onClick={()=> setCounter(fake + 10)}>counter+</button>
    </>
}