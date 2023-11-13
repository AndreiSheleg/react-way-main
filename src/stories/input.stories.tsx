import React, {ChangeEvent, ChangeEventHandler, useRef, useState} from 'react';
import {action} from '@storybook/addon-actions';
import {UncontrolledRating} from "../components/UncontrolledRating/UncontrolledRating";

export default {
    title: 'input'
    //component: UncontrolledRating,
}

export const UncontrolledInput = () => <input/>
export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const actualValue = event.currentTarget.value
        setValue(actualValue)
    }
    return <div><input onChange={onChangeHandler}/> смотри значение callback из input --- {value}</div>
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    const onClickSave = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value);
    }

    return <div><input ref={inputRef} id={'inputId'}/>
        <button onClick={onClickSave}> save</button>
        - actual value по нажатию на кнопку save: {value} </div>
}

export const ControlledInput = () => {
const [parentValue, setParentValue] = useState('')
    debugger

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    debugger
    setParentValue(event.currentTarget.value)
}

    return <input value={parentValue} onChange={ onChangeHandler  }/>
}

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true)
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setParentValue(event.currentTarget.checked)
    }

    return <input type={"checkbox"} checked={parentValue} onChange={ onChangeHandler  }/>
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>('2')
    const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(event.currentTarget.value)
    }

    return <select value={parentValue} onChange={onChangeHandler}>
        <option>none</option>
        <option value="1">Minsk</option>
        <option value="2">Moscow</option>
        <option value="3">Kiev</option>
    </select>
}
export const ControlledInputWithFixedValue = () => <input value={'знач.ValueНельзяИзменить'}/>