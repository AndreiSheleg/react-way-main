import React from 'react';
import logo from './logo.svg';
import './App.css';
import {OnOff} from './components/OnOff/OnOff';
import {Rating} from './components/Rating/Rating';
import {Accordion} from './components/Accordion/Accordion';
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';

function App(props: any) {
    console.log('APP component is RENDERING.......')
    return (
        <div className={'App'}>
            <OnOff/>
            <OnOff/>
            <OnOff/>
            <UncontrolledAccordion titleValue={'Menu'} />
            <UncontrolledAccordion titleValue={'Users'} />

            <UncontrolledRating />
            {/*<Rating value={3}/>*/}

{/*            <PageTitle title={'This is APP component!'}/>
            <PageTitle title={'My friends!'}/>
            Article 1

            Article 2
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>*/}

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
