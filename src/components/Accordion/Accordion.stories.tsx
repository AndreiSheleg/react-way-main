// Button.stories.ts|tsx

import type {Meta, StoryObj} from '@storybook/react';

import {Accordion} from './Accordion';
import React, {useState} from 'react';

const meta: Meta<typeof Accordion> = {
    component: Accordion,
};

export default meta;
/*НИЖЕ ВАЖНАЯ ТИПИЗАЦИЯ ОБЪЕКТА ИСТОРИЙ*/
type Story = StoryObj<typeof Accordion>;

export const FirstStory: Story = {
    args: {
        titleValue: 'hello',
        collapsed: true,
        onChange: () => {}
    },
};

export const CollapsedAccordion = () => {
    return <Accordion titleValue={'История Collapsed Accordion'}
                      collapsed={true}
                      onChange={() => {} }/>
}

export const OpenedAccordion = () => {
    return <Accordion titleValue={'История Opened Accordion'}
                      collapsed={false}
                      onChange={() => {} }/>
}

export const AccordionDemo = () => {
    let [collapsed, setCollapsed] = useState(false)
    return <Accordion titleValue={'История Accordion Demo'}
                      collapsed={collapsed}
                      onChange={() => {setCollapsed(!collapsed)} }/>
}