import React, {useState} from 'react';

export type OnOffPropsType = {
   valueOn: boolean
    onClick: (on: boolean) => void
}

export const OnOff = (props: OnOffPropsType) => {
    console.log('OnOFF RENDERING')

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor:props.valueOn ? 'green' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor: props.valueOn ?'white': 'red'

    }
    const indikatorStyle = {
        // значения пишутся через ЗАПЯТУЮ, бордер радиус через кэмелкейс
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '10px',
        backgroundColor: props.valueOn ?'green': 'red'
    }


    return (
        <div>
            <div style={onStyle} onClick={ () => { props.onClick(!props.valueOn) } }>On</div>
            <div style={offStyle} onClick={ ()=> { props.onClick(!props.valueOn) } }>Off</div>
            <div style={indikatorStyle}></div>
        </div>
    );
};