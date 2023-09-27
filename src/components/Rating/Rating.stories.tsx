import React from 'react';
import { action} from '@storybook/addon-actions';
import {Rating} from './Rating';

export default {
    component: Rating,
}

//СОЗДАЁМ ФУНКЦИЮ-КОЛЛБЭК НА ОСНОВЕ FUNCTION-ACTION
const onClickHandler = action('clicked on star')

export const EmptyRating = () => <Rating value={0} onClick={onClickHandler} />
export const Rating1 = () => <Rating value={1} onClick={onClickHandler} />
export const Rating2 = () => <Rating value={2} onClick={onClickHandler} />
export const Rating3 = () => <Rating value={3} onClick={onClickHandler} />
export const Rating4 = () => <Rating value={4} onClick={onClickHandler} />
export const Rating5 = () => <Rating value={5} onClick={onClickHandler} />