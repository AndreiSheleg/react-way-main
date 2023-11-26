import {Select} from './Select';
import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';

export default {
    component: Select,
};

export const BaseSelectExampleWithValue = () => {
    return (
        <>
            <Select value={'3'} onChange={action('Value changed!')} items={[
                {value: '1', title: 'Minsk'},
                {value: '2', title: 'Vitebsk'},
                {value: '3', title: 'Gomel'},
            ]}/>
        </>
    )
}

export const WithoutValue = () => {
    return (
        <>
            <Select onChange={action('Value changed!')} items={[
                {value: '1', title: 'Minsk'},
                {value: '2', title: 'Vitebsk'},
                {value: '3', title: 'Gomel'},
            ]}/>
        </>
    )
}

