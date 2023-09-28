import React, {useState} from 'react';
import { action} from '@storybook/addon-actions';
import {UncontrolledOnOff} from './UncontrolledOnOff';

export default {
    component: UncontrolledOnOff,
}

const callBack = action('button ON or OFF clicked')
export const OnMode = () => <UncontrolledOnOff onChange={callBack} defaultOn={true}/>
export const OffMode = () => <UncontrolledOnOff onChange={callBack} defaultOn={false}/>

export const BugMode = () => <div>Unsynk, when change defaultValue when already rendered</div>