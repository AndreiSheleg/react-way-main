import React, {useState, KeyboardEvent, useEffect} from "react";
import styles from './Select.module.css'

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
    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])

    const toggleItems = () => setActive(!active)
    const onItemClick = (value: any) => {
        props.onChange(value)
        toggleItems()
    }

    const selectedItem = props.items.find(el => el.value === props.value)
    const hoveredItem = props.items.find(el => el.value === hoveredElementValue)

    const onKeyUpHandler = (event: KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendentElement = event.key === 'ArrowDown' ? props.items[i + 1] : props.items[i - 1]
                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                        return
                    }
                }
            }
            if(!selectedItem){
                props.onChange(props.items[0].value)
            }

        }

        if(event.key === 'Escape' || event.key === 'Enter')
            setActive(false)
    }

    return (
        <>
            <div className={styles.select} onKeyUp={onKeyUpHandler} tabIndex={0}>
                <span className={styles.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
                {active &&
                    <div className={styles.items}>
                        {props.items.map(item => <div
                            onMouseEnter={() => {
                                setHoveredElementValue(item.value)
                            }}
                            className={styles.odinItem + ' ' + (hoveredItem === item ? styles.selected : '')}
                            key={item.value}
                            onClick={() => {
                                onItemClick(item.value)
                            }}>{item.title}</div>)}
                    </div>
                }
            </div>
        </>

    )
};