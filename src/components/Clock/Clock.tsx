// @flow 
import * as React from 'react';
import {useEffect, useState} from "react";

type Props = {};
export const Clock: React.FC<Props> = (props: Props) => {
    const [date, setDate] = useState(new Date())
    useEffect(() => {
        const intervalId = setInterval(()=>{
            setDate(new Date())
        }, 1000)
        return ()=> {
            clearInterval(intervalId)
        }
    }, []);

const get2digitsString = (number:number) => number < 10 ? '0' + number : number

    const secondsString = get2digitsString(date.getSeconds())
    const minutesString = get2digitsString(date.getMinutes())
    const hoursString = get2digitsString(date.getHours());

    return (
        <div>
            <span>{hoursString}</span>
             :
            <span>{minutesString}</span>
            :
            <span>{secondsString}</span>
        </div>
    );
};