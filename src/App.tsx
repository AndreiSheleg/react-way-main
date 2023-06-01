import React from 'react';
import logo from './logo.svg';
import './App.css';
import {OnOff} from './components/OnOff/OnOff';
import {Rating} from './components/Rating/Rating';
import {Accordion} from './components/Accordion/Accordion';

function App(props: any) {
    console.log('APP component is RENDERING.......')
    return (
        <div>
            <PageTitle title={'This is APP component!'}/>
            <PageTitle title={'My friends!'}/>
            Article 1
            <Accordion titleValue={'Menu'} collapsed={false}/>
            <Accordion titleValue={'Users'} collapsed={true}/>
            Article 2
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            {/*<OnOff/>*/}
            {/*      <OnOff  />
      <OnOff />*/}
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
