import React, {useState} from 'react';

type AccordionPropsType = {
    titleValue: string
    //collapsed: boolean
}

export const UncontrolledAccordion = (props: AccordionPropsType) => {
    console.log('Accordion Component is rendering...')

    let [collapsed, setCollapsed] = useState<boolean>(true) //hook

        return (
            <div>
                <AccordionTitle title={props.titleValue}/>
                <button onClick={ () => { setCollapsed(!collapsed) } }>TOGLE</button>
                {!collapsed && <AccordionBody/>}
            </div>
        );


};

type AccordionTitlePropsType = {
    title: string
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
    console.log('AccordionTitle Component is rendering...')
    return <h3>--- {props.title} ---</h3>
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