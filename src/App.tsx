import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {UncontrolledOnOff} from './components/UncontrolledOnOff/UncontrolledOnOff';
import {Rating, RatingValueType} from './components/Rating/Rating';
import {Accordion} from './components/Accordion/Accordion';
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';
import {OnOff} from './components/OnOff/OnOff';

function App(props: any) {
    console.log('APP component is RENDERING.......')
    let [ratingValue, setRatingValue] = useState<RatingValueType>(4)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [on, setOn] = useState<boolean>(false)

    return (
        <div className={'App'}>
            <OnOff valueOn={on} onClick={setOn} />

            {/*<UncontrolledAccordion titleValue={'Menu'} />*/}
            {/*<UncontrolledAccordion titleValue={'Users'} />*/}
            <Accordion titleValue={'***MENU***'} collapsed={accordionCollapsed} onClick={setAccordionCollapsed} />

{/*            <UncontrolledRating />
            <Rating value={ratingValue} onClick={setRatingValue} />*/}

        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

const PageTitle = (props: PageTitlePropsType) => {
    console.log('PageTitle component is RENDERING.......')
    return <h2>{props.title}</h2>
}


export default App;
