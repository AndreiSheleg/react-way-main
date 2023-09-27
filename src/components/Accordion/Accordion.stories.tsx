// Button.stories.ts|tsx

import type {Meta, StoryObj} from '@storybook/react';

import {Accordion} from './Accordion';
import React, {useState} from 'react';
import { action } from '@storybook/addon-actions';

export default {
    component: Accordion,
};


/*НИЖЕ ВАЖНАЯ ТИПИЗАЦИЯ ОБЪЕКТА ИСТОРИЙ*/
// type Story = StoryObj<typeof Accordion>;
//
// export const FirstStory: Story = {
//     args: {
//         titleValue: 'hello',
//         collapsed: true,
//         onChange: () => {}
//     },
// };

//СОЗДАЁМ ФУНКЦИЮ-КОЛЛБЭК НА ОСНОВЕ FUNCTION-ACTION
const onChangeHandler = action('нажатие на заголовок')

export const CollapsedAccordion = () => {
    return <Accordion titleValue={'История Collapsed Accordion'}
                      collapsed={true}
                      onChange={onChangeHandler}/>
}

export const OpenedAccordion = () => {
    return <Accordion titleValue={'История Opened Accordion'}
                      collapsed={false}
                      onChange={onChangeHandler}/>
}

export const AccordionDemo = () => {
    let [collapsed, setCollapsed] = useState(false)
    return <Accordion titleValue={'История Accordion Demo'}
                      collapsed={collapsed}
                      onChange={() => {setCollapsed(!collapsed)} }/>
}