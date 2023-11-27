import {Select} from './Select';
import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';

export default {
    component: Select,
};

export const WithValue = () => {
    const [value, setValue] = useState('2')
    return (
        <>
            <Select value={value} onChange={setValue}
                    items={[
                        {value: '1', title: 'Minsk'},
                        {value: '2', title: 'Vitebsk'},
                        {value: '3', title: 'Gomel'},
                    ]}/>
        </>
    )
}

export const WithoutValue = () => {
    const [value, setValue] = useState(null)
    return (
        <>
            <Select onChange={setValue}
                    value={value}
                    items={[
                        {value: '1', title: 'Minsk'},
                        {value: '2', title: 'Vitebsk'},
                        {value: '3', title: 'Gomel'},
                    ]}/>
        </>
    )
}

