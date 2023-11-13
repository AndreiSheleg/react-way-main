import React, {useRef, useState} from 'react';
import {action} from '@storybook/addon-actions';
import {UncontrolledRating} from "../components/UncontrolledRating/UncontrolledRating";

export default {
    title: 'input'
    //component: UncontrolledRating,
}

export const UncontrolledInput = () => <input/>
export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')
    return <div><input onChange={(event) => {
        const actualValue = event.currentTarget.value
        setValue(actualValue)
    }}/> смотри значение callback из input --- {value}</div>
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    const onClickSave = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value);
    }

    return <div><input ref={inputRef} id={'inputId'}/>
        <button onClick={onClickSave}> save </button>
        - actual value по нажатию на кнопку save: {value} </div>
}
export const ControlledInputWithFixedValue = () => <input value={'знач.ValueНельзяИзменить'}/>