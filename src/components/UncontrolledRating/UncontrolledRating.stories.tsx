import React, {useState} from 'react';
import { action} from '@storybook/addon-actions';
import {UncontrolledRating} from './UncontrolledRating';

export default {
    component: UncontrolledRating,
}

const onChangeHandler = action('Rating changed inside component')
export const EmptyRating = () => <UncontrolledRating defaultValue={0} onChange={onChangeHandler}/>
export const Rating1 = () => <UncontrolledRating defaultValue={1} onChange={onChangeHandler} />
export const Rating2 = () => <UncontrolledRating defaultValue={2} onChange={onChangeHandler} />
export const Rating3 = () => <UncontrolledRating defaultValue={3} onChange={onChangeHandler} />
export const Rating4 = () => <UncontrolledRating defaultValue={4} onChange={onChangeHandler} />
export const Rating5 = () => <UncontrolledRating defaultValue={5} onChange={onChangeHandler} />