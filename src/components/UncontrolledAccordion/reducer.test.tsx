import {reducer, StateType} from "./reducer";

test('collapsed should be true', () => {
const state: StateType = {
    collapsed: false
}

//action
    const newState = reducer(state, {type: 'TOGGLE-COLLAPSED'})
//expection
    expect(newState.collapsed).toBe(true)
})

test('collapsed should be false', () => {
    const state: StateType = {
        collapsed: true
    }

//action
    const newState = reducer(state, {type: 'TOGGLE-COLLAPSED'})
//expection
    expect(newState.collapsed).toBe(false)
})

test('send uncorrect type', () => {
    const state: StateType = {
        collapsed: true
    }
//expection
    expect(()=>{ reducer(state, {type: 'FAKE-TYPE'})}).toThrowError()
})