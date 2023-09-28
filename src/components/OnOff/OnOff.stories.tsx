import React, {useState} from 'react';
import { action} from '@storybook/addon-actions';
import {OnOff} from './OnOff';

export default {
    component: OnOff,
}

//СОЗДАЁМ ФУНКЦИЮ-КОЛЛБЭК НА ОСНОВЕ FUNCTION-ACTION
const onChangeHandler = action('clicked on button')

export const OnMode = () => <OnOff on={true} onChange={onChangeHandler} />
export const OffMode = () => <OnOff on={false} onChange={onChangeHandler} />

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <OnOff on={value} onChange={setValue} />
}