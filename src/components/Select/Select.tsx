import React from "react";

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

export const Select = (props: SelectPropsType) => {
const selectedItem = props.items.find(el => el.value === props.value)
    return (
        <div>
            <h3>{selectedItem && selectedItem.title}</h3>
            {props.items.map(item => <div key={item.value}>{item.title}</div>)}
        </div>
    )
};