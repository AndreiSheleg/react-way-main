// Button.stories.ts|tsx

import type {Meta, StoryObj} from '@storybook/react';

import {Accordion} from './Accordion';
import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';

/*НИЖЕ ВАЖНАЯ ТИПИЗАЦИЯ ОБЪЕКТА ИСТОРИЙ - старый синтаксис, который ближе к реакту*/
export default {
    component: Accordion,
};


/*НИЖЕ ВАЖНАЯ ТИПИЗАЦИЯ ОБЪЕКТА ИСТОРИЙ - новый синтаксис*/
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
const onClickCallback = action('some ITEM was clicked')
export const CollapsedAccordion = () => {
    return <Accordion titleValue={'История Collapsed Accordion'}
                      collapsed={true}
                      onChange={onChangeHandler}
                      items={[]}
                      onClick={onClickCallback}
    />

}

export const OpenedAccordion = () => {
    return <Accordion titleValue={'История Opened Accordion'}
                      collapsed={false}
                      onChange={onChangeHandler}
                      items={[{title: 'Dima', value: 1}, {title: 'Valera', value: 2}, {
                          title: 'Victor',
                          value: 3
                      }, {title: 'Sveta', value: 4}]}
                      onClick={onClickCallback}
    />
}

export const AccordionDemo = () => {
    let [collapsed, setCollapsed] = useState(false)
    return <Accordion titleValue={'История Accordion Demo'}
                      collapsed={collapsed}
                      onChange={() => {
                          setCollapsed(!collapsed)
                      }}
                      items={[{title: 'Dima', value: 1}, {title: 'Valera', value: 2}, {
                          title: 'Victor',
                          value: 3
                      }, {title: 'Sveta', value: 4}]}
                      onClick={(value) => {alert(`user with ID: ${value} should be happy`) }}
    />
}