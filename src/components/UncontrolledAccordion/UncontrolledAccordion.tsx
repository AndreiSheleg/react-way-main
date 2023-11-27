import React, {useReducer, useState} from 'react';
import {reducer} from "./reducer";

type AccordionPropsType = {
    titleValue: string
    //collapsed: boolean
}

export const UncontrolledAccordion = (props: AccordionPropsType) => {
    console.log('Accordion Component is rendering...')

    let [state, dispatch] = useReducer(reducer, {collapsed: false})

    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={() => {
                dispatch({type: 'TOGGLE-COLLAPSED'})
            }}/>
            {!state.collapsed && <AccordionBody/>}
        </div>
    );
};

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
    console.log('AccordionTitle Component is rendering...')
    return <h3 onClick={() => {
        props.onClick()
    }}>--- {props.title} ---</h3>
}

const AccordionBody = () => {
    console.log('AccordionBody Component is rendering...')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}