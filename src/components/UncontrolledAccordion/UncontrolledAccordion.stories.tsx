import type {Meta, StoryObj} from '@storybook/react';

import {UncontrolledAccordion} from './UncontrolledAccordion';
import React, {useState} from 'react';
import { action } from '@storybook/addon-actions';

export default {
    component: UncontrolledAccordion,
};

export const ModeChanging = () => {
    return <UncontrolledAccordion titleValue={'Пример названия меню'} />
}
