import React, {useState} from 'react';
import {RatingValueType} from "../Rating/Rating";

type RatingPropsType = {
    //value: 0 | 1 | 2 | 3 | 4 | 5
    defaultValue?: RatingValueType
    onChange: (value: RatingValueType) => void
}

export const UncontrolledRating = (props: RatingPropsType) => {
    console.log('Rating Component is rendering...')

    let [value, setValue] = useState<RatingValueType>(props.defaultValue ? props.defaultValue : 0)
    return (
        <div>
            <Star selected={value > 0} setValue={ () => {setValue(1); props.onChange(1); } } />
            <Star selected={value > 1} setValue={ () => {setValue(2); props.onChange(2); } } />
            <Star selected={value > 2} setValue={ () => {setValue(3); props.onChange(3); } } />
            <Star selected={value > 3} setValue={ () => {setValue(4); props.onChange(4); } } />
            <Star selected={value > 4} setValue={ () => {setValue(5); props.onChange(5); } } />
        </div>
    )
};

type StarPropsType = {
    selected: boolean
     setValue: () => void
}

const Star = (props: StarPropsType) => {
    console.log('Star Component is rendering...')
    return <span onClick={ () => {props.setValue() } }>
        {props.selected ? <b>star </b> : 'star '}
            </span>
        }

// return props.selected ? <span><b>star/\ </b></span> : <span>star/\ </span>

// if (props.selected) {
//     return <span><b>star/\ </b></span>
// } else {
//     return <span>star/\ </span>
// }