import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Accordion} from "../Accordion/Accordion";
import {Clock} from "./Clock";

export default {
    component: Clock,
};

export const BaseExample = () => {

    return <Clock/>
}